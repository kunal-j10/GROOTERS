import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CartIcon from 'react-native-vector-icons/MaterialIcons';

const header=()=> {

    return(
        <View style={styles.Header}>
            <TouchableOpacity style={{position:'absolute',left:1}}>
            <MaterialIcon name='menu' style={styles.icon_menu} size={33} />
            </TouchableOpacity>
            <Text style={styles.headerText}>G R O O T E R S</Text>
            
            <TouchableOpacity style={{position:'absolute',right:1}} > 
            {/* onPress={()=>navigation.navigate('Cart')} */}
            <CartIcon name='shopping-cart' style={styles.icon_cart} size={33}/>
            </TouchableOpacity>

        </View>
    );
}
export default header;

const styles=StyleSheet.create({
    Header:{
        height:'100%',
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        shadowRadius: 0,
        shadowOffset: {height: 0,},
        //backgroundColor:''
        
    },
    headerText:{
        color:'#00B761',
        fontWeight:'bold',
        fontSize:20
    },
    icon_menu:{
      //position:'absolute',
      //left:1,
      color:'#00B761'
    },
    icon_cart:{
       // position:'absolute',
        //right:1,
        color:'#00B761'
      }
 
 });