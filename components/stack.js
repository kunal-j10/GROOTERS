import React from "react";
import {Text,View} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import  {createAppContainer } from 'react-navigation';

import home from "./home";
import insideShop from "./insideShop";
import cart from "./cart";
import reviewDetails from "./reviewDetails";
import success from "./success";
import Header from "./header";
import header from "./header";


const screens={
    Home: {
        screen: home,
        navigationOptions:{headerTitle:()=><Header/>}
    },
    insideShop: {
        screen: insideShop
    },
    Cart: {
        screen: cart
    },
    reviewDetails: {
        screen: reviewDetails
    },
    Order_Placed_Successful: {
        screen: success
    }
    
}
const homeStack=createStackNavigator(screens);
export default createAppContainer(homeStack);