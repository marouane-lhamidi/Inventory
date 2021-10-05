import React,{useCallback,useEffect,useState} from 'react';
import {View,Text,StyleSheet,Image,ScrollView,Platform,Button,Alert} from 'react-native';
import {useDispatch} from "react-redux";
import {changeFunc} from "../../Store/Actions/Action";
import HeaderNewButton from "../../Components/UI/HeaderButton";
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import * as ProductAction from "../../Store/Actions/Action"
import NumericInput from "react-native-numeric-input";



const AdminDetailsScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const table = props.navigation.getParam('table');
    const testing = props.navigation.getParam('test');
    const selectedProduct = table.find(meal => meal.barCode === mealId);
    const [newValue, setValue] = useState(parseInt(selectedProduct.qty));
    const dispatch = useDispatch();

    const deleteFun = id =>{
        Alert.alert(
            "Deleting Alert",
            "You are sur that you want to delete this item",
            [
                {
                    text: "NO",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "default"
                },
                { text:
                        "YES",
                    onPress: () => {
                    dispatch(ProductAction.deleteProduct(id));
                    props.navigation.goBack();

                    },
                    style : "destructive"
                }
            ]
        );
    }


    const handlerSubmitting =useCallback( () =>{
        dispatch(changeFunc(mealId, newValue.toString(), 'Admin'));
        props.navigation.goBack();
    }, [mealId, newValue]);

    useEffect(()=>{
        props.navigation.setParams({handlerSubmitting})
        props.navigation.setParams({testing})
    }, [handlerSubmitting])

    return(
        <View style={styles.all}>
            <ScrollView contentContainerStyle={styles.screen}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/No_image_available.png')} style={styles.image} />
                </View>
                <View style={styles.details}>
                    <Text>{selectedProduct.barCode}</Text>
                    <Text>{selectedProduct.title}</Text>
                    {(!!testing)?<NumericInput
                            value={newValue}
                            onChange={e=>setValue(e)}
                            blurOnSubmit
                            minValue={0}
                            totalHeight={35}
                            totalWidth={100}
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="number-pad"
                            maxLength={5}
                        />:
                        <Text>{newValue}</Text>
                    }
                </View>
                <View style={styles.detail}>
                    <Text style={styles.title}>Details</Text>
                    <Text style={styles.info}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque aut autem deserunt dolore, dolorem, doloremque excepturi explicabo fugiat hic ipsum molestias nostrum provident quidem recusandae tempora, ut veniam voluptatibus.</Text>
                </View>
            </ScrollView>

            {testing &&
            <View style={styles.button}>
                <Button
                    color='#FF0000'
                    title="Delete"
                    onPress={deleteFun.bind(this,selectedProduct.barCode)}
                />
            </View>}
        </View>
    )
};

AdminDetailsScreen.navigationOptions = navData=>{
    const handler = navData.navigation.getParam('handlerSubmitting')
    const testing = navData.navigation.getParam('testing')
    return {
        headerTitle:'Product',
        headerRight:() => !testing ? null :
            <HeaderButtons HeaderButtonComponent={HeaderNewButton}>
                <Item
                    title="Save"
                    iconName={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'}
                    onPress={handler}
                />
            </HeaderButtons>

    }
}


const styles = StyleSheet.create({
    all : {
        width: '100%',
        height: '100%',
    },
    screen : {
        height: '90%',
    },
    imageContainer : {
        width : '100%',
        height: '35%'
    },
    image : {
        width : '100%',
        height : '100%'
    },
    details : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        padding : 10,
        height : '15%',
        alignItems : 'center',

    },
    title : {
        fontSize : 20,
        marginBottom : 10
    },
    detail : {
        paddingHorizontal:  30,
        paddingVertical : 10,
        height : '50%',

    },
    info : {
        fontSize: 15,
    },
    button : {
        height : '10%',
        alignItems: 'center',

    }

})

export default AdminDetailsScreen;