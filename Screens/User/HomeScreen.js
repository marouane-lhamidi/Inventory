import React from 'react';
import {View,StyleSheet,Platform} from 'react-native';
import Category from "../../Components/ourComponets/Category";
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import HeaderNewButton from "../../Components/UI/HeaderButton";



const HomeScreen = props => {
    return(
        <View style={styles.screen}>
            <View style={styles.categories}>
                <Category
                    title='Inventory'
                    onSelect={() => {
                        props.navigation.navigate({
                            routeName : 'InventoryScreen'
                        })}}
                />
            </View>

        </View>
    )
};
HomeScreen.navigationOptions = navData =>{
    return {
        headerTitle : 'User Screen',
        headerLeft : () =>
            <HeaderButtons HeaderButtonComponent={HeaderNewButton}>
                <Item
                    title="Cart"
                    iconName={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu' }
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons> ,
    }
}
const styles = StyleSheet.create({
    screen : {
        height : '80%',
        justifyContent : 'center',


    },
    categories : {
        height: '100%',
        width : '100%',
        alignItems : 'center',
        justifyContent: 'center'
    }
})

export default HomeScreen;