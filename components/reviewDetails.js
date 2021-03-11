import React,{useState} from 'react';
import {Text,View,Image,StyleSheet,ScrollView,TouchableOpacity,Button} from 'react-native';
import {SafeAreaView} from 'react-navigation';




const reviewDetails =({ navigation })=>{

    //PRESS HANDLER FOR NAVIGATING TO transaction successful SCREEN
    //
    //
    const [Pay,setPay]= useState(false)
    const pressHandler3=()=>{
        if(Pay)
        navigation.navigate('Order_Placed_Successful');
        else
        navigation.navigate('reviewDetails');
    };
    const payHandler=()=>{
        if(Pay)
        setPay(false);
        else
        setPay(true);    
    }
    const PRICE = navigation.getParam('price');
    const [Amount,setAmount]=useState(PRICE);
    


    const [Qty,setQty] = useState(1);
    const x= Qty+1;
    const y =Qty-1;
    const add=()=>{
          setQty(x);
          const netPrice=PRICE*x;
          setAmount(netPrice);
        };
    const sub=()=>{
          setQty(y);
          const netPrice=PRICE*y;
          setAmount(netPrice);
        };


    

    

    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#fff',paddingHorizontal:18}}>
            <ScrollView showsVerticalScrollIndicator={false}>
        <View >
            {/* Displaying contents */}
            
            
            <View style={{height:400,alignItems:'center'}}>
               <Image source={navigation.getParam('img')} style={{resizeMode:'contain',flex:1}}/>
            </View>
            <View style={{backgroundColor:'#F1F1F1',paddingLeft:10,borderRadius:10}}>

                        <Text style={{fontWeight:'bold',fontSize:18,marginTop:10,marginBottom:15}}>SHOP NAME</Text>
                        <View  style={{flexDirection:'row',alignItems:'flex-end',}}>
                            <Text style={{fontWeight:'bold',fontSize:28,marginLeft:15,marginRight:10}}>{navigation.getParam('name')}</Text>
                        <View style={{backgroundColor:'#00B761',padding:5,paddingLeft:10,position:'absolute',right:0.1,borderTopLeftRadius:5,borderBottomLeftRadius:5}}>
                        <Text style={{fontWeight:'bold',fontSize:24,color:'#fff'}}>RS: {navigation.getParam('price')}/-</Text>
                        </View>
                        </View>
                        <Text style={{fontWeight:'bold',fontSize:14,marginTop:15,marginBottom:5}}>ABOUT</Text>
              
                 <View><Text style={{fontSize:14,paddingRight:10,marginBottom:15}}>
                  Demo Text Demo Text Demo Text Demo Text Demo Text
                  Demo Text Demo Text Demo Text Demo Text Demo Text
                  Demo Text Demo Text Demo Text Demo Text Demo Text 
                  Demo Text Demo Text Demo Text Demo Text Demo Text  
                  Demo Demo Text Demo Text</Text></View>

            </View> 

                  <View style={{flexDirection:'row',marginTop:35,marginBottom:5}}>
                      <View style={{flexDirection:'row',alignSelf:'center',justifyContent:'center',marginTop:4}}>
                          <Text style={{fontWeight:'bold',fontSize:18,color:'#F52A2A'}}>Net Amount : </Text>
                          <Text style={{fontWeight:'bold',fontSize:18,color:'#F52A2A'}}>  ₹ {Amount}</Text>
                      </View>

                      <View style={{flexDirection:'row',position:'absolute',right:1}}>
                      <TouchableOpacity onPress={sub} disabled={y==0}>
                      <View style={{backgroundColor:'#00B761'}}>
                      <Text style={{fontWeight:'bold',fontSize:22,paddingRight:12,paddingLeft:12}}>
                          -
                      </Text>
                      </View>
                      </TouchableOpacity>
                      <View style={{backgroundColor:'#F1F1F1',paddingRight:18,paddingLeft:18,paddingTop:2}}><Text style={{fontWeight:'bold',fontSize:18}}>{Qty}</Text></View>
                      <TouchableOpacity onPress={add}>
                      <View style={{backgroundColor:'#00B761',paddingRight:10,paddingLeft:10}}>
                      <Text style={{fontWeight:'bold',fontSize:22}}>
                          +
                      </Text>
                      </View>
                      </TouchableOpacity>
                      </View>

                  </View>
            <Text style={{fontWeight:'bold',fontSize:18,marginTop:23,marginBottom:10}}>Select Payment Options</Text>

            <TouchableOpacity onPress={payHandler}>
            <View style={{flexDirection:'row',marginBottom:10}}>

            {/* CUSTOM RADIO BUTTON */}
            <View style={{borderWidth:1,flexDirection:'row',width:25,borderRadius:200,backgroundColor:Pay?'#00B761':'#fff'}}><Text></Text></View>

            <View><Text style={{fontWeight:'bold',fontSize:18,marginLeft:10}}>Cash On Delivery</Text></View>

            </View>
            </TouchableOpacity>

            <View style={{marginTop:20,marginBottom:30}}>
            
            <TouchableOpacity onPress={pressHandler3}>
            <View>
            <View style={{backgroundColor:'#00B761',alignItems:'center',paddingTop:5,paddingBottom:5}}>
            <Text style={{fontWeight:'bold',color:'#fff'}}>P L A C E   O R D E R</Text>
            </View>
            </View>
            </TouchableOpacity>

            {/* <Button title={'P l a c e    O r d e r'} onPress={pressHandler3}/> */}
            </View>
            
        </View>
        </ScrollView>
        </SafeAreaView>
  );
}
export default reviewDetails;