import { Component } from '@angular/core';

import { ChatService } from './chat.service';
import { SocketService } from './socket.service';

@Component({
  selector: 'ngx-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.scss'],
  providers: [ ChatService ],
})
export class ChatComponent {

  messages: any[];
  chatMessages: any[]
  userName = JSON.parse(localStorage.getItem('username'))

  constructor(protected chatService: ChatService, private socketService: SocketService) {
    this.messages = this.chatService.loadMessages();
    this.socketService.findAllMessages().subscribe(resp => {
      this.chatMessages = [...resp]
    })

    this.socketService.join(this.userName)

    this.socketService.getMessage().subscribe(msg => {
      if (msg.sender.username === this.userName) {
        this.chatMessages.push({...msg, reply: true})
      } else {
        this.chatMessages.push({...msg, reply: false})

      }
    })

  }



  sendMessage(event: any) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'nb-compose',
      };
    });

    // this.chatMessages.push({
    //   text: event.message,
    //   // date: new Date(),
    //   reply: true,
    //   // type: 'text',
    //   // files: files,
    //   // user: {
    //   //   name: this.userName,
    //   //   avatar: '',
    //   // },
    //   name: this.userName
    // });
    // this.messages.push({
    //   text: event.message,
    //   date: new Date(),
    //   reply: true,
    //   type: files.length ? 'file' : 'text',
    //   files: files,
    //   user: {
    //     name: 'Jonh Doe',
    //     avatar: 'https://i.gifer.com/no.gif',
    //   },
    // });
    // const botReply = this.chatService.reply(event.message);
    // if (botReply) {
    //   setTimeout(() => { this.messages.push(botReply); }, 500);
    // }

    this.socketService.sendMessage(event.message)
  }
}
