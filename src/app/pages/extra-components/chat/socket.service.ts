import { Injectable } from "@angular/core";
import io from "socket.io-client";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SocketService {
  username = JSON.parse(localStorage.getItem("username"));
  userId = JSON.parse(localStorage.getItem("userId"));
  private socket: any;

  constructor() {
    this.socket = io("http://localhost:3002");
  }

  public sendMessage(message: string): void {
    this.socket.emit("createMessage", { 
      content: message,
      senderId: this.userId,
      receiverId: 3
     });
  }

  public join(name: string) {
    this.socket.emit("join", { name });
  }

  public findAllMessages(): Observable<any> {
    return new Observable((observer) => {
      this.socket.emit("findAllMessages", { senderId: this.userId, receiverId: "3"}, (response: any) => {
        let resp = response.map((item) => {
          if (item.sender.username === this.username) {
            return {
              ...item,
              reply: true,
            };
          }
          return {
            ...item,
            reply: false,
          };
        });
        observer.next(resp);
      });
    });
  }
  public getMessage(): Observable<any> {
    console.log("called");

    return new Observable((observer) => {
      this.socket.on('message', (data: string) => {
        observer.next(data);
      });
    });
  }
}
