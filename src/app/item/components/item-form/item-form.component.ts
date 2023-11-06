import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../item.service";
import { ActivatedRoute, Router } from "@angular/router";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { NbSpinnerService, NbToastrService } from "@nebular/theme";

@Component({
  selector: "ngx-item-form",
  templateUrl: "./item-form.component.html",
  styleUrls: ["./item-form.component.scss"],
})
export class ItemFormComponent implements OnInit {
  categories: any;
  types: any;
  owners: any;
  locations: any;
  equipments: any;
  services: any;
  itemForm!: FormGroup;
  selectedFiles: FileList | null;
  loading: boolean = false;

  constructor(
    private itemService: ItemService,
    private formBuilder: FormBuilder,
    private router: Router,
    private sanitizer: DomSanitizer,
    private toastrService: NbToastrService
  ) {
    this.itemService
      .getCategories()
      .subscribe((res) => (this.categories = res));
    this.itemService.getTypes().subscribe((res) => (this.types = res));
    this.itemService.getOwners().subscribe((res) => (this.owners = res));
    this.itemService.getLocations().subscribe((res) => (this.locations = res));
    this.itemService
      .getEquipments()
      .subscribe((res) => (this.equipments = res));
    this.itemService.getServices().subscribe((res) => (this.services = res));
  }

  ngOnInit(): void {
    this.itemForm = this.formBuilder.group({
      selectedCategory: ["", [Validators.required]],
      selectedType: ["", [Validators.required]],
      selectedOwner: ["", [Validators.required]],
      selectedLocation: ["", [Validators.required]],
      selectedEquipments: [[], [Validators.required]],
      selectedServices: [[], [Validators.required]],
      name: ["", [Validators.required, Validators.pattern(/^[A-Za-z0-9]+$/)]],
      description: ["", [Validators.required]],
      manufacturer: ["", [Validators.required]],
      model: ["", [Validators.required]],
      year: ["", [Validators.required]],
      capacity: ["", [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      length: ["", [Validators.required]],
      enginePower: ["", [Validators.required]],
      draft: [""],
      cabins: ["", [Validators.pattern(/^[0-9]+$/)]],
      berths: ["", [Validators.pattern(/^[0-9]+$/)]],
      bathrooms: ["", [Validators.pattern(/^[0-9]+$/)]],
      perDayCost: ["", [Validators.pattern(/^[0-9]+$/)]],
    });
  }

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;

    for (const file of event.target.files) {
      const url = URL.createObjectURL(file);
      file["url"] = this.sanitizer.bypassSecurityTrustUrl(url);
    }
  }

  uploadFiles() {
    if (!this.selectedFiles || this.selectedFiles.length === 0) {
      console.log("No files selected");
      return;
    }
  }

  showToast() {
    this.toastrService.success("Item created successfully", "Success", {
      duration: 3000,
    });
  }

  markAllControlsAsTouched() {
    Object.keys(this.itemForm.controls).forEach((controlName) => {
      this.itemForm.controls[controlName].markAsTouched();
    });
  }

  async submit() {
    if (this.itemForm.valid) {
      this.loading = true;
      //console.log(this.itemForm.value);
      const formData = new FormData();
      formData.append(
        "categoryid",
        this.itemForm.get("selectedCategory").value
      );
      formData.append("typeId", this.itemForm.get("selectedType").value);
      formData.append("name", this.itemForm.get("name").value);
      formData.append("owner", this.itemForm.get("selectedOwner").value);
      formData.append("location", this.itemForm.get("selectedLocation").value);
      formData.append("description", this.itemForm.get("description").value);
      formData.append("manufacturer", this.itemForm.get("manufacturer").value);
      formData.append("model", this.itemForm.get("model").value);
      formData.append("year", this.itemForm.get("year").value);
      formData.append("capacity", this.itemForm.get("capacity").value);
      formData.append("length", this.itemForm.get("length").value);
      formData.append("enginePower", this.itemForm.get("enginePower").value);
      formData.append("draft", this.itemForm.get("draft").value);
      formData.append("cabins", this.itemForm.get("cabins").value);
      formData.append("berths", this.itemForm.get("berths").value);
      formData.append("bathrooms", this.itemForm.get("bathrooms").value);
      formData.append("perDayCost", this.itemForm.get("perDayCost").value);
      formData.append(
        "equipments",
        JSON.stringify(this.itemForm.get("selectedEquipments").value)
      );
      formData.append(
        "services",
        JSON.stringify(this.itemForm.get("selectedServices").value)
      );
      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append("images", this.selectedFiles[i]);
      }

      //console.log(this.itemForm.get('selectedLocation').value);
      //console.log(formData.get('categoryid'));
      await this.itemService.createItem(formData).subscribe((res) => {
        console.log(res);
        this.showToast();
        setTimeout(() => {
          this.loading = false;
          this.router
            .navigateByUrl("/pages/tables/item-table")
            .then(() => location.reload());
        }, 3000);
      });
    }

    this.markAllControlsAsTouched();
  }
}
