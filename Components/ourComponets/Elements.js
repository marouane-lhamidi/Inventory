import React from 'react';
import {View,FlatList} from 'react-native';

import BarInfo from "./BarInfo";
import Colors from "../../constant/Colors";

const Elements = props => {

    const renderMealItem = itemData => {
        return (
            <BarInfo
                style={{ backgroundColor: itemData.index % 2 === 0 ? Colors.primary : "white" }}
                barCode= {itemData.item.barCode}
                title={itemData.item.title}
                qty={itemData.item.qty}
                onSelect ={()=>{
                    props.navigation.navigate({
                        routeName : props.destination,
                        params : {
                            mealId : itemData.item.barCode,
                            table : props.displayedElements,
                            test : props.test,
                        }
                    })
                }}
            />
        );
    };


    return(
        <View>
            <FlatList
                data={props.displayedElements}
                keyExtractor={(item) => item.barCode}
                renderItem={renderMealItem}
            />
        </View>
    )
};




export default Elements;