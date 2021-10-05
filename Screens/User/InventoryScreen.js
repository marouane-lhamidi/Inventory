import React from 'react';
import {View,StyleSheet} from 'react-native';

import Elements from "../../Components/ourComponets/Elements";
import {useSelector} from "react-redux";



const InventoryScreen = props => {
    const availableInventoryElements = useSelector(state => state.elementsReducer.inventoryElements);


    return(
            <View style={styles.screen}>
                <View style={styles.table}>
                    <Elements
                        displayedElements={availableInventoryElements}
                        navigation={props.navigation}
                        destination='DetailsScreen'
                    />
                </View>
            </View>
    )
};

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        width : '100%',
    }

})

export default InventoryScreen;