import AppNavigation from './navigation/appNavigation';
import { UserContextProvider } from './context/userContext';
import { StatusBar } from 'expo-status-bar';
import { SignUpContextProvider } from './context/signupContext';
import { LoaderContextProvider } from './context/loaderContext';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <LoaderContextProvider>
      <UserContextProvider>
        <SignUpContextProvider>
          <AppNavigation />
          <StatusBar style="light" />
        </SignUpContextProvider>
      </UserContextProvider>
    </LoaderContextProvider>
  );
}