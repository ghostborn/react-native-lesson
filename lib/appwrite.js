import { Platform } from "react-native";

// import { Client, Account, Avatars } from "react-native-appwrite";

// export const client = new Client();

// client.setProject("6970db9b00364d204e25").setPlatform("dev.galaxy.sheflie");

// export const account = new Account(client);
// export const avatars = new Avatars(client);

import { Client, Databases, Account, Avatars } from "react-native-appwrite";

export const client = new Client();
client
  .setEndpoint("https://sfo.cloud.appwrite.io/v1")
  .setProject("6970db9b00364d204e25") // Replace with your project ID
  .setPlatform(
    Platform.OS === "ios"
      ? "dev.galaxy.com" // iOS Bundle ID（如 com.example.myapp）
      : "dev.galaxy.com", // Android 包名（如 com.example.myapp）
  );

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);

// export const tablesDB = new TablesDB(client);

// import { Client, Account, Databases } from 'appwrite';
// import { Platform } from 'react-native';
// import 'react-native-url-polyfill/auto'; // 必须导入，解决URL兼容问题

// // 初始化 Appwrite 客户端
// const client = new Client();

// // 配置你的 Appwrite 服务信息
// client
//   .setEndpoint('http://你的Appwrite地址/v1') // 本地部署填 http://localhost/v1（注意端口，默认80），云端填 Appwrite 提供的域名
//   .setProject('你的项目ID') // Appwrite 控制台中新建项目的ID
//   .setPlatform(
//     Platform.OS === 'ios'
//       ? 'com.你的项目包名' // iOS Bundle ID（如 com.example.myapp）
//       : 'com.你的项目包名' // Android 包名（如 com.example.myapp）
//   );

// // 初始化常用服务（Account：用户账户，Databases：数据库）
// export const account = new Account(client);
// export const databases = new Databases(client);

// // 导出客户端（备用）
// export default client;
