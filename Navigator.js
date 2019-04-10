import { createAppContainer, createStackNavigator } from 'react-navigation';
import Login from './screens/login'



const AppNavigator = createStackNavigator({
  
  Login: { screen: Login },
 
});

export default createAppContainer(AppNavigator);