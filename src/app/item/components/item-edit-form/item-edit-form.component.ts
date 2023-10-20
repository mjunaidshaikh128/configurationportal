import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ItemService } from "../../item.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "ngx-item-edit-form",
  templateUrl: "./item-edit-form.component.html",
  styleUrls: ["./item-edit-form.component.scss"],
})
export class ItemEditFormComponent implements OnInit {
  itemId: string;
  item: any;
  categories: any;
  types: any;
  owners: any;
  locations: any;
  equipments: any;
  services: any;
  itemForm!: FormGroup;
  selectedFiles: FileList | null;
  images: any

  constructor(
    private itemService: ItemService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.itemId = params["id"];
    });
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
    this.createForm();
    this.patchForm();
  }

  createForm() {
    this.itemForm = this.formBuilder.group({
      selectedCategory: ["", [Validators.required]],
      selectedType: ["", [Validators.required]],
      selectedOwner: ["", [Validators.required]],
      selectedLocation: ["", [Validators.required]],
      selectedEquipments: [[], [Validators.required]],
      selectedServices: [[], [Validators.required]],
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      manufacturer: ["", [Validators.required]],
      model: ["", [Validators.required]],
      year: ["", [Validators.required]],
      capacity: ["", [Validators.required]],
      length: ["", [Validators.required]],
      enginePower: ["", [Validators.required]],
      draft: ["", [Validators.required]],
      cabins: ["", [Validators.required]],
      berths: ["", [Validators.required]],
      bathrooms: ["", [Validators.required]],
    });
  }

  patchForm() {
    // this.itemForm.controls["name"].setValue("Hello");
    this.itemService.getItem(this.itemId).subscribe((res) => {
      this.item = res;
      this.patch();
    });
  }
  patch() {
    console.log(this.item.equipments);
    this.images = this.item.images
    const equipArray = this.item.equipments.map(equipment => equipment.id)
    const servArray = this.item.services.map(service => service.id)
    this.itemForm.patchValue({
      ...this.item,
      selectedCategory: this.item.categoryid,
      selectedType: this.item.typeId,
      selectedOwner: this.item.ownerId,
      selectedLocation: this.item.locationId,
      selectedEquipments: equipArray,
      selectedServices: servArray
    

    });
    // this.itemForm.controls["selectedCategory"].setValue(this.item.categoryid);

  }
  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
  }

  uploadFiles() {
    if (!this.selectedFiles || this.selectedFiles.length === 0) {
      console.log("No files selected");
      return;
    }
  }

  submit() {
    //console.log(this.itemForm.value);
    const formData = new FormData();
    formData.append("categoryid", this.itemForm.get("selectedCategory").value);
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
    formData.append(
      "equipments",
      JSON.stringify(this.itemForm.get("selectedEquipments").value)
    );
    formData.append(
      "services",
      JSON.stringify(this.itemForm.get("selectedServices").value)
    );
    if(this.selectedFiles)
    for (let i = 0; i < this.selectedFiles.length; i++) {
      formData.append("images", this.selectedFiles[i]);
    }

    //console.log(this.itemForm.get('selectedLocation').value);
    //console.log(formData.get('categoryid'));
    this.itemService.updateItem(formData, this.item.id).subscribe((res) => console.log(res));
    this.router.navigateByUrl("/pages/tables/item-table")
    
  }
}
