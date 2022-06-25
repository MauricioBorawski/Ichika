export interface Note {
  note: string;
  userId: string;
}

export interface User {
  id: number;
  userName: string;
  discordId: string;
  password: string;
  enabled: boolean;
}

export interface UserData {
  username: string;
  password: string;
  discordId: string;
}

export interface UserDataGetter {
  id: number;
  userName: string;
  discordId: string;
}

export interface DataBase {
  notes: Note[];
  users: User[];
}

export interface CommandResponseSuccess {
  content: string;
  ephemeral: boolean;
}

export interface CommandResposeFailure {
  content: string;
  ephemeral: boolean;
}

export type CommandResponse = CommandResponseSuccess | CommandResposeFailure;

export type CollectionName = "users" | "notes";