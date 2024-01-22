import { createContext, useState, useContext } from "react";
import { ActivityIndicator,View } from "react-native";
import { themeColors } from "../theme";

export const LoaderContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    return (
        <LoaderContext.Provider value={{ loading, setLoading }}>
        {loading && (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 5,
            }}
          >
            {/* <ActivityIndicator size="large" color={themeColors.bgBold}/> */}
            <ActivityIndicator size="large" color={themeColors.bgBold}/>
          </View>
        )}
        {children}
      </LoaderContext.Provider>
    )
}

export const LoaderContext = createContext();

export const useLoader = () => {
    return useContext(LoaderContext);
};