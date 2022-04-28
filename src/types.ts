export interface Note {
  id: number;
  note: string;
}

export interface User {
  id: number;
  userName: string;
  discordId: string;
  password: string;
}

export interface UserData {
  username: string;
  password: string;
  discordId: string;
}

export const dbPath = __dirname + "/../db.json";
