import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Alert, Button } from "react-native";

export default function App() {
  const onPress = () => {
    Alert.alert("just do it!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nike</Text>
      <Text style={styles.bigBlue}>just do it!</Text>
      <Image
        source={{
          uri: "https://p3-flow-imagex-sign.byteimg.com/tos-cn-i-a9rns2rl98/rc_gen_image/0cd64693fa2a41fcb37c8e585e5880a9.jpeg~tplv-a9rns2rl98-downsize_watermark_1_5_b.png?lk3s=8e244e95&rcl=2026012114132556BE5D62C9FDD2386F80&rrcfp=ddbb2dc7&x-expires=2084336021&x-signature=nyjvad452njdw1hkKV9e7rvrArM%3D",
        }}
        style={{ width: 400, height: 400 }}
      />
      <Button onPress={onPress} title="Press Me" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bigBlue: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
});
