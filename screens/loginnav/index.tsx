import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Seller from '../../routes/sellerNavigator';
// import Buyer from '../../routes/buyerNavigator';
// import Admin from '../admin';
const { Navigator, Screen } = createNativeStackNavigator();

function Example() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Tab Navigations */}
        {/* <Screen name="Seller" component={Seller} /> */}
        {/* <Screen name="Buyer" component={Buyer} /> */}
        {/* <Screen name="ICCE Organisation" component={Admin} /> */}
      </Navigator>
    </NavigationContainer>
  );
}
export default Example;
