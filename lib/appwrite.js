import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client();

client.setProject("6970db9b00364d204e25").setPlatform("dev.galaxy.sheflie");

export const account = new Account(client);
export const avatars = new Avatars(client);
