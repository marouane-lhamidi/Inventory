import React from 'react';
import AppLoading from "expo-app-loading";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";

import NavigationApp from "./Navigation/Navigation";
import elementsReducer from "./Store/Reducer/Reducer";
import CamperReducer from "./Store/Reducer/CampareReducer";
import {useFonts} from "expo-font";


const reducers = combineReducers({
  elementsReducer,
  CamperReducer
});

const store = createStore(reducers)

// const fetchFonts = () =>{
//   return Font.loadAsync({
//     'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
//   })
// }

export default function App() {
  let [fontsLoaded] = useFonts({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'Sans-serif' : require('./assets/fonts/OpenSans-Bold.ttf')
  });


  if (!fontsLoaded){
    return (
        <AppLoading />
    )
  }
  return (
      <Provider store={store}>
        <NavigationApp />
      </Provider>
  );
}

