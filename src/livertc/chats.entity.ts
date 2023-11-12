export interface Chats {
  to: string;
  owner: string;
  admin: string;
  name: string;
  body: [{
    id: number;
    chat: string;
  }];
}