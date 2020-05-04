import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Home from "../Components/Home";

const MealNavigation =  createStackNavigator({
    Categories: Home
})

export default createAppContainer(MealNavigation);
