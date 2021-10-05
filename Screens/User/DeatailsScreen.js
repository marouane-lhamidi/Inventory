import React,{useCallback,useEffect,useState} from 'react';
import {View,Text,StyleSheet,Image,ScrollView,Platform} from 'react-native';
import {useDispatch} from "react-redux";
import {changeFunc} from "../../Store/Actions/Action";
import HeaderNewButton from "../../Components/UI/HeaderButton";
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import NumericInput from "react-native-numeric-input";




const DetailsScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const table = props.navigation.getParam('table');
    const selectedProduct = table.find(meal => meal.barCode === mealId);
    const [newValue, setValue] = useState(parseInt(selectedProduct.qty));


    const dispatch = useDispatch();


    const handlerSubmitting =useCallback( () =>{
        dispatch(changeFunc(mealId, newValue.toString(), 'User'));
        props.navigation.goBack();
    }, [mealId, newValue]);

    useEffect(()=>{
        props.navigation.setParams({handlerSubmitting})
    }, [handlerSubmitting])

    return(
        <ScrollView contentContainerStyle={styles.screen}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/No_image_available.png')} style={styles.image} />
                </View>
                <View style={styles.details}>
                    <Text>{selectedProduct.barCode}</Text>
                    <Text>{selectedProduct.title}</Text>
                    <NumericInput
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
                    />
                </View>
                <View style={styles.detail}>
                    <Text style={styles.title}>Details</Text>
                    <Text style={styles.info}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque aut autem deserunt dolore, dolorem, doloremque excepturi explicabo fugiat hic ipsum molestias nostrum provident quidem recusandae tempora, ut veniam voluptatibus.</Text>
                </View>
        </ScrollView>
    )
};

DetailsScreen.navigationOptions = navData=>{
    const handler = navData.navigation.getParam('handlerSubmitting')
    return {
        headerTitle:'Product',
        headerRight:() =>
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
    screen : {
        flex : 1,
        width : '100%',
        height: '100%'
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
        height : '10%',
        alignItems : 'center'
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
    }

})

export default DetailsScreen;