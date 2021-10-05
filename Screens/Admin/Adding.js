import React,{useCallback,useEffect,useReducer} from 'react';
import {View,StyleSheet,ScrollView,Platform,Alert} from 'react-native';
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import {useDispatch} from "react-redux";

import HeaderNewButton from "../../Components/UI/HeaderButton.js";
import * as ProductAction from "../../Store/Actions/Action"
import Input from "../../Components/ourComponets/Input";
const UPDATED_INPUT_VALUE = 'UPDATED_INPUT_VALUE'


const formReducer = (state, action) =>{
    if (action.type === UPDATED_INPUT_VALUE){
        const updatedInputValues = {
            ...state.inputValues,
            [action.input] : action.value
        }
        const updatedInputValidation = {
            ...state.inputValidation,
            [action.input] : action.isTrue
        }
        let validation = true;
        for (const key in updatedInputValidation){
            validation = validation &&  updatedInputValidation[key]
        }
        return {
            formsIsValid : validation,
            inputValidation : updatedInputValidation,
            inputValues : updatedInputValues,
        }
    }
}

const Adding = props => {
    const dispatch = useDispatch();

    const [formReducerState, dispatchFormReducer] = useReducer(
        formReducer,
        {
            inputValues : {
                codeBare:  '',
                name:  '',
                imageUrl: '',
                Qty: '',
            },
            inputValidation : {
                codeBare:  false,
                name:  false,
                Qty: true,
                imageUrl:  false,
            },
            formsIsValid :  false
        },

    )
    const HandlerChange = useCallback((inputName ,text, isValid) => {
        dispatchFormReducer({
            type : UPDATED_INPUT_VALUE,
            value : text,
            isTrue : isValid,
            input : inputName
        })
    },[dispatchFormReducer])

    const handlerSubmitting =useCallback( () => {
        if (!formReducerState.formsIsValid){
            Alert.alert('wrong input','you should enter the right title',[{text : 'OKey'}])
            return;
        }
        dispatch(ProductAction.addProduct(formReducerState.inputValues.codeBare, formReducerState.inputValues.name, formReducerState.inputValues.Qty.toString(), formReducerState.inputValues.imageUrl));

        props.navigation.goBack();
    }, [ dispatch, formReducerState.inputValues.codeBare, formReducerState.inputValues.name, formReducerState.inputValues.Qty, formReducerState.inputValues.imageUrl]);

    useEffect(() => {
        props.navigation.setParams({handlerSubmitting})
    }, [handlerSubmitting])

    return(
        <ScrollView>
            <View style={styles.editingContainer}>
                <Input
                    id='codeBare'
                    label='CodeBare'
                    keyboardType='default'
                    autoCapitalize='sentences'
                    autoCorrect
                    returnKeyType='next'
                    HandlerChange={HandlerChange}
                    required
                    errorText="you should enter the codeBare"
                />
                <Input
                    id='name'
                    label='Name'
                    keyboardType='default'
                    autoCapitalize='sentences'
                    autoCorrect
                    returnKeyType='next'
                    HandlerChange={HandlerChange}
                    required
                    errorText="you should enter the name"
                />
                <Input
                    id='Qty'
                    label='Qty'
                    keyboardType='default'
                    autoCapitalize='sentences'
                    autoCorrect
                    returnKeyType='next'
                    HandlerChange={HandlerChange}
                    errorText="you should enter the Qty"
                    Qty
                />
                <Input
                    id='imageUrl'
                    label='ImageUrl'
                    keyboardType='default'
                    autoCapitalize='sentences'
                    autoCorrect
                    returnKeyType='next'
                    HandlerChange={HandlerChange}
                    required
                    errorText="you should enter the imageUrl"
                />
            </View>

        </ScrollView>

    )
};

Adding.navigationOptions = navData =>{
    const handler = navData.navigation.getParam('handlerSubmitting')
    return {
        headerTitle : navData.navigation.getParam('id') ? 'Edit Product' : 'Add Product',
        headerRight : () =>
            <HeaderButtons HeaderButtonComponent={HeaderNewButton}>
                <Item
                    title="Save"
                    iconName={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark' }
                    onPress={handler}
                />
            </HeaderButtons>
    }
}



const styles = StyleSheet.create({
    editingContainer : {
        margin : 5,
        paddingVertical : 5,
        width : '100%',
    },
    text : {
        width : '100%',
        fontSize : 14,
        paddingBottom : 5
    },
    inputText : {
        width : '100%',
        borderBottomColor : '#ccc',
        borderBottomWidth : 1,
        height : 30

    }
})

export default Adding;