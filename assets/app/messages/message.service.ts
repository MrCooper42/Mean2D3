import { Message } from "./message.model"


export class MessageService {
  private messages: Message[] = [];

  addMessage(message: Message){
    this.messages.push(message)
    console.log("your messages after new input", this.messages)
  }

  getMessages(){
    return this.messages;
  }

  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }
}
