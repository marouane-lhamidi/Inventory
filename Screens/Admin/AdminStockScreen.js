import React from 'react';
import {View,StyleSheet,Platform} from 'react-native';

import Elements from "../../Components/ourComponets/Elements";

import {useSelector} from "react-redux";
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import HeaderNewButton from "../../Components/UI/HeaderButton";

const AdminStockScreen = props => {
    const availableInventoryElements = useSelector(state => state.elementsReducer.stockElements);
    return(
        <View style={styles.screen}>
            <Elements
                displayedElements={availableInventoryElements}
                navigation={props.navigation}
                destination='AdminDetailsScreen'
                test
            />

        </View>
    )
};


AdminStockScreen.navigationOptions = navData =>{
    return {
        headerTitle : 'Our Stock',
         headerRight : () =>
            <HeaderButtons HeaderButtonComponent={HeaderNewButton}>
                <Item
                    title="Edit"
                    iconName={Platform.OS === 'ios' ? 'ios-create' : 'md-create' }
                    onPress={() => {
                        navData.navigation.navigate('Adding');
                    }}
                />
            </HeaderButtons> ,
    }
}
const styles = StyleSheet.create({
    screen : {
        flex : 1,
        width : '100%',
    }
})

export default AdminStockScreen;