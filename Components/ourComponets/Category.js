import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Card from "../UI/Card";
const Category = props => {
    return(
        // <View style={styles.category} >
            <Card style={styles.category}>
                <TouchableOpacity onPress={props.onSelect}>
                    <View style={styles.categories}>
                        <View style={styles.inside}>
                            <Text style={styles.text}>{props.title.toUpperCase()}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Card>
         // </View>

    )
};

const styles = StyleSheet.create({
    category : {
        margin : 15,
        height: 150,
        width: '70%',

    },
    categories : {
        paddingVertical : 10,
        paddingHorizontal : 25,
    },
    inside : {
        width : '100%',
        height : '100%',
        justifyContent : 'flex-end',
    },
    text : {
        fontSize : 19,
        fontFamily : 'Sans-serif',
        textAlign : 'right',
        color : 'black'

    },




})

export default Category;

