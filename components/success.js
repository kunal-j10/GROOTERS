import React from 'react';
import {Text,View,Image,ScrollView,TouchableOpacity,StyleSheet,Button} from 'react-native';
import { SafeAreaView } from 'react-navigation';





const success =({ navigation })=>{

    //PRESS HANDLER FOR NAVIGATING TO HOME SHOP SCREEN to discover more and order more
    //
    //
    const pressHandler4=()=>{
        navigation.navigate('Home')
    };

    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#fff',paddingHorizontal:18}}>
        <View>
        <ScrollView>
        


            {/* Displaying contents */}

            
            <View style={{alignItems:'center',height:200,marginTop:20}}>
            <Image source={require('../dataBase/tick.jpg')} style={{resizeMode:'contain',flex:1}}/>
            </View>
            <View style={{marginTop:30,marginBottom:50,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontWeight:'bold',fontSize:18}}> ORDER   PLACED</Text>
            <Text style={{fontWeight:'bold',fontSize:18,marginTop:10}}> SUCCESSFULLY </Text>
            </View>


            <TouchableOpacity onPress={pressHandler4}>
            <View>
            <View style={{backgroundColor:'#00B761',alignItems:'center',paddingTop:5,paddingBottom:5}}>
            <Text style={{fontWeight:'bold',color:'#fff'}}>D I S C O V E R   M O R E</Text>
            </View>
            </View>
            </TouchableOpacity>

            {/* <Button title={'DISCOVER MORE'} onPress={pressHandler4}/> */}

        </ScrollView>    
        </View>
        </SafeAreaView>
    );
}
export default success;