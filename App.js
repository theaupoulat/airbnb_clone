import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import AuthLoadingScreen from "./src/containers/AuthLoadingScreen";
import SignInScreen from "./src/containers/SignInScreen";
import HomeScreen from "./src/containers/HomeScreen";
import RoomScreen from "./src/containers/RoomScreen";
import TabNavigator from "./src/containers/TabNavigator";
import Inscription from "./src/containers/Inscription";

/* headerStyle: {
        backgroundColor: "#EE555D",
        borderBottomWidth: 0
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 28
      }, */

const AppStack = createStackNavigator({
  Tab: TabNavigator,
  Home: HomeScreen,
  RoomView: RoomScreen
});
const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
  NewAccount: Inscription
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
