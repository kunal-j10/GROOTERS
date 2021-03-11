import React, { useState } from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';


const cart =({navigation})=>{

    //PRESS HANDLER FOR NAVIGATING TO Review Details SCREEN

    const pressHandler2=()=>{
        navigation.navigate('reviewDetails')
    };

    //const plant =navigation.getParam('plant');

    return(
        <View>
            {/* Displaying contents */}
            <Text> Cart is Empty </Text>
            {/* <Text>{cartItems.length==0?"Cart is Empty":"Cart Items"}</Text> */}

            <Button title={'REVIEW ORDER'} onPress={pressHandler2}/>
            <Text>cartItemID is {navigation.getParam('cartItemId')} </Text>

        </View>
  );
}
export default cart;