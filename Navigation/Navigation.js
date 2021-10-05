import React from 'react';
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from "react-navigation-drawer";


import HomeScreen from "../Screens/User/HomeScreen";
import InventoryScreen from "../Screens/User/InventoryScreen";
import DetailsScreen from "../Screens/User/DeatailsScreen";
import Adding from "../Screens/Admin/Adding";
import AdminHomeScreen from "../Screens/Admin/AdminHomeScreen";
import AdminStockScreen from "../Screens/Admin/AdminStockScreen";
import AdminInventoryScreen from "../Screens/Admin/AdminInventoryScreen";
import AdminDetailsScreen from "../Screens/Admin/AdminDeatailsScreen";
import AdminResultScreen from "../Screens/Admin/AdminResultScreen";
import Colors from "../constant/Colors";




const userScreen = createStackNavigator({
    HomeScreen : HomeScreen,
    InventoryScreen : InventoryScreen,
    DetailsScreen : DetailsScreen
})

const adminScreen = createStackNavigator({
    AdminHomeScreen : AdminHomeScreen,
    AdminStockScreen : AdminStockScreen,
    AdminInventoryScreen : AdminInventoryScreen,
    AdminDetailsScreen : AdminDetailsScreen,
    AdminResultScreen : AdminResultScreen,
    Adding : Adding
})

const NavigationApp = createDrawerNavigator(
    {
        Admin : adminScreen,
        User : userScreen,
    }, {
        contentOptions : {
            activeTintColor : Colors.primary,
            itemsContainerStyle : {
                marginTop: 20
            }
        }
})


export default createAppContainer(NavigationApp);