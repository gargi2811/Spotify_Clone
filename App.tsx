import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import PlayerWidget from "./components/PlayerWidget";
import Login from "./screens/Login/Login";

// import { Amplify } from "aws-amplify";
// import awsExports from "./aws-exports";
// Amplify.configure(awsExports);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    <Login />;
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        <PlayerWidget />
      </SafeAreaProvider>
    );
  }
}
