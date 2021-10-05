import React,{useCallback} from 'react';
import {View,StyleSheet,Button} from 'react-native';

import Elements from "../../Components/ourComponets/Elements";
import {useDispatch,useSelector} from "react-redux";
import {camperFunc} from "../../Store/Actions/CampareAction";



const AdminInventoryScreen = props => {
    const availableInventoryElements = useSelector(state => state.elementsReducer.inventoryElements);
    const availableStockElements = useSelector(state => state.elementsReducer.stockElements);

    const dispatch = useDispatch();

    const handlerChange= useCallback( ()=> {
        dispatch(camperFunc(availableStockElements, availableInventoryElements));
        props.navigation.navigate({
            routeName : 'AdminResultScreen',
        })
    },[dispatch])

    return(
        <View style={styles.allScreen}>
            <View style={styles.screen}>
                <View style={styles.table}>
                    <Elements
                        displayedElements={availableInventoryElements}
                        navigation={props.navigation}
                        destination='AdminDetailsScreen'
                    />
                </View>
            </View>
            <View style={styles.button}>
                <Button title="compare" color='black' onPress={handlerChange}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    allScreen : {
        flex : 1,
        width : '100%',
    },
    screen : {
        flex : 1,
        alignItems : 'center',
        height : '90%'

    },
    button : {
        paddingBottom : 30,
        height : '10%',
        alignItems: 'center',
    }

})

export default AdminInventoryScreen;