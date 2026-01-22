import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { Link } from "expo-router";

import Logo from "../assets/img/logo_light.png";

const Home = () => {
  const handlePress = () => {
    Alert.alert("mfk!");
  };
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title}>The Number 123</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>
      <View style={styles.card}>
        <Text onPress={handlePress}>Hello, this is a card</Text>
      </View>
      <Link href="/about">About Page</Link>
      <Link href="/contact">Contact Page</Link>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0dfe8",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    marginVertical: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0,0,0,0.1)",
  },
});
