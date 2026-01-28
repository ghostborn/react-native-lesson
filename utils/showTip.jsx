import { Platform, ToastAndroid, Alert } from "react-native";

const showTip = (msg) => {
  if (Platform.OS === "android") {
    ToastAndroid.showWithGravity(msg, ToastAndroid.LONG, ToastAndroid.CENTER);
  } else {
    Alert.alert("提示", msg);
  }
};

export default showTip;
