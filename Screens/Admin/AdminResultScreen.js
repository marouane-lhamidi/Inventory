import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import renderMealItem from "../../Components/ourComponets/renderItem";
import {useSelector} from "react-redux";

const AdminResultScreen = props => {
    const newCategory = useSelector(state => state.CamperReducer.elementResult);

        if (newCategory.length ===0) {
            return (
                <View style={styles.screen}>
                    <Text>The inventory is correct </Text>
                </View>
            )
        }else {

            return (

                <View >
                    <FlatList
                        data={newCategory}
                        renderItem={renderMealItem}
                        keyExtractor={(item, index) => item.barCode}
                        style={{ width: '100%', height : '80%'}}
                        // contentContainerStyle={{ alignItems : 'center', justifyContent : 'center'}}
                        contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems : 'center'}}
                    />
                </View>

            )
        }
};

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export default AdminResultScreen;