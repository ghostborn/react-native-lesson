import { StyleSheet, Alert } from "react-native";
import { Link } from "expo-router";

import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";

const Home = () => {
  const handlePress = () => {
    Alert.alert("mfk!");
  };
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer />
      <ThemedText style={styles.title} title={true}>
        The Number 1
      </ThemedText>
      <ThemedText style={{ marginTop: 10, marginBottom: 30 }}>
        Reading List App
      </ThemedText>
      <Link href="/about" style={styles.link}>
        <ThemedText>About Page</ThemedText>
      </Link>
      <Link href="/contact" style={styles.link}>
        <ThemedText>Contact Page</ThemedText>
      </Link>
    </ThemedView>

    // <View style={styles.container}>
    //   <Image source={Logo} style={styles.img} />
    //   <Text style={styles.title}>The Number 12345</Text>
    //   <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>
    //   <View style={styles.card}>
    //     <Text onPress={handlePress}>Hello, this is a card</Text>
    //   </View>
    //   <Link href="/about">About Page</Link>
    //   <Link href="/contact">Contact Page</Link>
    // </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
