import AppNavigation from './navigation/appNavigation';
import { UserContextProvider } from './context/userContext';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <UserContextProvider>
      <AppNavigation />
      <StatusBar style="light" />
    </UserContextProvider>
  );
}``