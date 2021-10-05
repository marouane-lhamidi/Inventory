import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from "../../constant/Colors";

const Card = props => {
    return(
        <View style={{...styles.card, ...props.style }}>
            {props.children}
        </View>
    )
};

const styles = StyleSheet.create({
    card : {
        shadowColor : 'black',
        shadowOpacity : 0.26,
        shadowOffset : {width : 0, height : 2},
        shadowRadius : 8,
        elevation : 10,
        borderRadius : 10,
        backgroundColor : Colors.primary,

    }
})

export default Card;