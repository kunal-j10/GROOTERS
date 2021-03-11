import React, { useState } from "react";
import {Text,View,Image,Button,FlatList,ScrollView,StyleSheet,TouchableOpacity} from 'react-native';
import {SafeAreaView} from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Plants_A from '../dataBase/Shop_Data/plants_shop1';
import Plants_B from '../dataBase/Shop_Data/plants_shop2';
import Plants_C from '../dataBase/Shop_Data/plants_shop3';
import Plants_D from '../dataBase/Shop_Data/plants_shop4';



const insideShop=({ navigation})=>{

    //PRESS HANDLER FOR NAVIGATING TO CART SCREEN
    const [cartItem,setcartItem]=useState([
        
        
    ]);

    const pressHandler=(item)=>{
        navigation.navigate('insideShop');
        setcartItem((prevcartItem)=>{
            return[
                ...prevcartItem,
                {key:Math.random().toString ,cartItemId:item.Id}
            ]
        });
    };
    const pressHandler2=(item)=>{
        navigation.navigate('Cart',item);

    };
    
    const Index =navigation.getParam('sl_no')-1;
    const shop_data=[Plants_A,Plants_B,Plants_C,Plants_D];

    const Card =({ plant }) => {
        const [cartController,setcartController]=useState(false);
        const [cartText,setcartText]=useState('ADD TO CART');
        const cartHandler=()=>{
         if(cartController)
         {
             setcartText('REMOVE');
             setcartController(false);
         }
         else
         {
             setcartController(true);
             setcartText('ADD TO CART');
         }
        };
        
        
        return(
            <View style={{width:180,marginTop:10}}>

{/* ................................................. */}
                <View style={styles.card_container}>
                          <TouchableOpacity onPress={()=>navigation.navigate('reviewDetails',plant)}>

                        <View style={{backgroundColor:'#fff',borderTopLeftRadius:25,borderTopRightRadius:25,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>

                             <View style={{alignItems: 'flex-end',backgroundColor:'#fff',borderTopLeftRadius:25,borderTopRightRadius:25}}>
                              <TouchableOpacity >
                              <View style={styles.wishlistContainer}>
                              <Icon name="favorite" size={25}  />  
                              </View>
                              </TouchableOpacity>
                             </View>

                             <View style={{alignItems:'center',height:180,backgroundColor:'#fff',borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
                             <Image source={plant.img} style={styles.plant_image}/>
                             </View>
                             
                        </View>
                        {/* <Text > {plant.name} </Text> */}
                            <View style={{flexDirection:'row'}}>
                            <View style={{position:'relative',left:10,width:100}}>
                            <Text style={{fontWeight:'bold',fontSize:16,color:'#fff',}}> {plant.name} </Text>
                            </View>
                            <Text style={{fontWeight:'bold',fontSize:16,color:'#fff',position:'absolute',right:4}} >Rs {plant.price}</Text>
                            </View>
                            </TouchableOpacity>
                            <View style={{alignItems:'center',backgroundColor:'#00B761',borderRadius:10}}>

                            <TouchableOpacity onPress={()=>navigation.navigate('reviewDetails',plant)}>
                            <View style={{backgroundColor:'#fff',paddingLeft:15,paddingRight:15,margin:10}}>
                            <Text style={{fontWeight:'bold',fontSize:16,color:'#00B761'}}>BUY NOW</Text>
                            </View>
                            </TouchableOpacity>
                            

                            <TouchableOpacity onPress={cartHandler}>
                            <View style={{backgroundColor:'#fff',paddingLeft:15,paddingRight:15,marginBottom:5}}>
                            <Text style={{fontWeight:'bold',fontSize:16,color:'#00B761'}}>{cartText}</Text>
                            </View>
                            </TouchableOpacity>

                            </View>
                            
                 </View>
{/* ................................................ */}




            
            </View>
        );

    }

    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#fff',paddingHorizontal:18}}>
        <View><ScrollView showsVerticalScrollIndicator={false}>

            <View style={{backgroundColor:'#00B761',padding:10,marginTop:10,borderRadius:20}}>
            <View style={{backgroundColor:'#fff',borderRadius:20}}>
                <Text style={styles.HeaderText}>Welcome to</Text>
                 <View style={{flexDirection:'row',height:100}}>
                    <Text style={styles.HeaderText_B}>{navigation.getParam('shop_name')}</Text>
                    <View style={{position:"absolute",right:20,width:100,backgroundColor:'#fff'}}>
                      <Image source={navigation.getParam('img')} style={styles.shop_image}/>
                    </View>
                 </View>
            </View>
            </View>
            
            
            <View style={{paddingTop:10}}>
            <FlatList
            columnWrapperStyle={{justifyContent: 'space-between'}}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={{
                marginTop: 10,
                paddingBottom: 50,
                
              }}
           data={shop_data[Index]}
           renderItem={({item})=>{
            return <Card plant={item} />;
           }
           }
           />
           </View>

           {/* <FlatList
           columnWrapperStyle={{justifyContent: 'space-between'}}
           showsVerticalScrollIndicator={false}
           numColumns={2}
           data={cartItem}
           renderItem={({item})=>{
            return (
                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('Cart',item)}>
                    <Text>GO To cart</Text>
                    </TouchableOpacity>
                </View>
            );
           }
           }
           /> */}
        </ScrollView>
        </View>
        </SafeAreaView>
    );
}
export default insideShop;

const styles=StyleSheet.create({
    
    shop_image:{
        resizeMode: 'contain',
        height:100,
        width:100,
    },
    HeaderText:{
        marginTop:15,
        fontSize:30,
        marginLeft:30,
        justifyContent:'center',
        fontWeight:'bold'
    },
    HeaderText_B:{
        marginTop:20,
        marginLeft:10,
        fontSize:25,
        fontWeight:'bold',
        color:'#00B761'
    },
    

    wishlistContainer:{
        width: 30,
        height: 30,
        borderRadius: 20,
        marginRight:15,
        marginTop:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    plant_image:{
        flex: 1, 
        resizeMode: 'contain',
        borderColor:'#fff'

    },
    card_container:{
        //padding:5,
        backgroundColor:'#00B761',
        borderWidth:2,
        
        borderColor:'#00B761',
        //borderStyle: ,
        borderRadius:15,
        //borderBottomEndRadius:50,
        //borderBottomRightRadius:50,
        //borderBottomLeftRadius:50,
        //marginBottom:10,
        //height:300,
        //marginRight:1
        },


});