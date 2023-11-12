export interface Chats {
  id: string;
  to: string;
  owner: string;
  admin: string;
  name: string;
  body: [{
    id: string;
    chat: string;
  }];
}