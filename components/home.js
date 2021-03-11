import React,{ useState } from "react";
import {Text,View,Image,TextInput,Button,LogBox,FlatList,ScrollView,StyleSheet,TouchableOpacity} from 'react-native';
import { SafeAreaView } from "react-navigation";
import Card from "./card";
import Icon from 'react-native-vector-icons/MaterialIcons';

LogBox.ignoreAllLogs();


const home=({ navigation })=>{


    //PRESS HANDLER FOR NAVIGATING TO INSIDE SHOP SCREEN
    //
    //
    const pressHandler=()=>{
        navigation.navigate('insideShop')
    }
    
    // const [Like,setLike]=useState(false);
    // const wishlist=()=>{
    //   if(Like)
    //   {
    //     setLike(false);
        
    //   }
    //   else
    //   {
    //     setLike(true);
    //   }
    // }
    
    //DATA to be used everywhere in frontend
    //
    //
    const [data,setData]=useState([
      {key:'1',sl_no:1,shop_name:"Kunal's nursery",shop_special:"Roses,Sunflower",rating:1,price:40,img:require('../dataBase/shop1.jpg')},
      {key:'2',sl_no:2,shop_name:"Tiwari's nursery",shop_special:"Roses,Sunflower",rating:2,price:60,img:require('../dataBase/shop2.jpg')},
      {key:'3',sl_no:3,shop_name:"Ankit's nursery",shop_special:"Roses,Sunflower",rating:3,price:80,img:require('../dataBase/shop3.jpg')},
      {key:'4',sl_no:4,shop_name:"Amit's nursery",shop_special:"Roses,Sunflower",rating:4,price:100,img:require('../dataBase/shop4.jpg')}
      ]);

    

    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#fff',paddingHorizontal:18}}>
        <View><ScrollView showsVerticalScrollIndicator={false}>

              <View style={{marginTop: 10, flexDirection: 'row',marginBottom:10}}>

                   <View style={styles.searchContainer}>
                   <Icon name="search" size={25} style={{marginLeft: 15}} />
                   <TextInput placeholder="Search" style={styles.input} />
                   </View>

                   <View style={styles.sortBtn}>
                   <Icon name="sort" size={25} color={'#fff'} />
                   </View>

               </View>

            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({item})=>
                      (   <View style={styles.card_container}>
                          <TouchableOpacity onPress={()=>navigation.navigate('insideShop',item)}>
                          {/* <Card> */}
                             <View style={{backgroundColor:'#fff',borderTopLeftRadius:25,borderTopRightRadius:25,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>

                             <View style={{alignItems: 'flex-end',backgroundColor:'#fff',borderTopLeftRadius:25,borderTopRightRadius:25}}>
                              <TouchableOpacity >
                              <View style={styles.wishlistContainer}>
                              <Icon name="favorite" size={25}  />  
                              </View>
                              </TouchableOpacity>
                             </View>

                             <View style={{alignItems:'center',height:200,backgroundColor:'#fff',borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
                             <Image source={item.img} style={styles.shop_image}/>
                             </View>
                             
                             </View>

                            <Text style={styles.shopName}> {item.shop_name} </Text>
                            <View style={{flexDirection:'row'}}>
                            <Text style={styles.shopDetail}> {item.shop_special} </Text>
                            <Text style={styles.shopPrice}>Rs {item.price}</Text>
                            </View>
                          {/* </Card> */}
                          </TouchableOpacity>
                          </View>
                      )
                      }
            />
          
          {/* <Button title="go inside shop" onPress={pressHandler}/> */}
          
        </ScrollView>    
        </View>
        </SafeAreaView>
    );
}
export default home;

const styles = StyleSheet.create({
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
             marginBottom:10,
             //height:300,
             marginRight:1
             },

  shop_image:{
                flex: 1, 
                resizeMode: 'contain',
                borderColor:'#fff'
                
                
                // width: 350,
                // height: 200,
                // alignItems:'center'
              },
  searchContainer:{
    height: 42,
    backgroundColor:'#F1F1F1',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
              },
  input:{fontSize: 18,
    padding:5,
    fontWeight: 'bold',
    flex: 1,
    color:'#000'
         },

  sortBtn:{
    marginLeft: 10,
    height: 42,
    width: 42,
    borderRadius: 10,
    backgroundColor:'#00B761',
    justifyContent: 'center',
    alignItems: 'center',
    // position:'absolute',
    // right:1

              },
  shopName:{
    fontWeight: 'bold',
    color:'#fff',
    marginLeft:42,
    fontSize:18
  },
  shopDetail:{
    //fontWeight: 'bold',
    color:'#fff',
    marginLeft:42,
    fontSize:16
  },
  shopPrice:{
    
    fontWeight: 'bold',
    color:'#fff',
    position:"absolute",
    marginRight:42,
    right:5,
    // justifyContent:"center",
    // alignItems:"center",
    
    fontSize:16

  },
  wishlistContainer:{
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight:15,
    marginTop:10,
    justifyContent: 'center',
    alignItems: 'center',
   
  }          

});