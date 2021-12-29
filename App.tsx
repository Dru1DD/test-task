import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainPage } from './screens/MainPage';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <MainPage />
    </SafeAreaProvider>
  );
}
