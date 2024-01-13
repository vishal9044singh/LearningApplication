import AppNavigation from './navigation/appNavigation';
import { UserContextProvider } from './context/userContext';
import { StatusBar } from 'expo-status-bar';
import { SignUpContextProvider } from './context/signupContext';

export default function App() {
  return (
    <UserContextProvider>
      <SignUpContextProvider>
        <AppNavigation />
        <StatusBar style="light" />
      </SignUpContextProvider>
    </UserContextProvider>
  );
}