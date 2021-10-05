import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';

const BarInfo = props => {
    return(
            <TouchableOpacity onPress={props.onSelect} style={{...styles.bar, ...props.style}}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/No_image_available.png')} style={styles.image} />
                </View>
                <View style={styles.information}>
                    <View >
                        <Text style={styles.title}>{props.title}</Text>
                    </View>
                    <View >
                        <Text style={styles.barCode}>{props.barCode}</Text>
                    </View>
                </View>
                <View style={styles.qty}>
                    <Text style={styles.qtyText} >{props.qty}</Text>
                </View>
            </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    bar : {
        flexDirection : 'row',
        width : '100%',
        height : 70,
        alignItems : 'center',
        padding :10,
    },
    imageContainer : {
        width: '20%',
    },
    information : {
        width: '60%',
    },
    qty : {
        width : '20%',
        alignItems: 'center'
    },
    image : {
        width : '80%',
        height : '100%',
    },
    title : {
        fontSize : 15,
        fontFamily : 'Sans-serif'
    },
    barCode : {
        fontSize : 12,
        fontFamily : 'open-sans',
        color : 'black'
    },
    qtyText: {
        fontSize : 20,
        fontFamily : 'Sans-serif',
        color : 'black'
    },
})

export default BarInfo;