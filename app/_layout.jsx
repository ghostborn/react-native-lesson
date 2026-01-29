import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import { UserProvider } from "../contexts/UserContext";
import { BooksProvider } from "../contexts/BooksContext";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <UserProvider>
      <BooksProvider>
        <StatusBar value="auto" />
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title,
          }}
        >
          {/* Groups*/}
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
          {/* Individual Screens */}
          <Stack.Screen name="index" options={{ title: "Home" }} />
          {/* <Stack.Screen name="about" options={{ title: "About" }} />
          <Stack.Screen
            name="contact"
            options={{ title: "Contact", headerShown: false }}
          />*/}
        </Stack>
      </BooksProvider>
    </UserProvider>
  );
}
