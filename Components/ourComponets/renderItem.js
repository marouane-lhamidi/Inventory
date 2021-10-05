import {StyleSheet,Text,View} from "react-native";
import React from "react";

const renderMealItem = (itemData) =>{

    if (parseInt(itemData.item.value) > 0)
    {

        return (
            <View style={styles.item}>
                <Text style={styles.phrase}>you have <Text style={styles.number}>{itemData.item.value}</Text> of <Text style={styles.text}>{itemData.item.name}</Text>messing</Text>
            </View>
        )

    }else {
        let number = itemData.item.value * -1;
        return (
            <View style={styles.item}>
                <Text style={styles.phrase}>you have <Text style={styles.numberTrue}>{number}</Text> extra of <Text style={styles.text}>{itemData.item.name}</Text></Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item : {
        marginVertical : 5,
    },
    phrase : {
        fontSize : 14,
        fontFamily : 'open-sans'
    },
    numberTrue : {
        fontSize : 15,
        fontFamily : 'Sans-serif',
        color : 'green'
    },
    number : {
        fontSize : 15,
        fontFamily : 'Sans-serif',
        color : 'red'
    },
    text : {
        fontSize : 15,
        fontFamily : 'Sans-serif',
    }

})
export default renderMealItem;