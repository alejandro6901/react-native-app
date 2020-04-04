import {createStackNavigator} from '@react-navigation/stack';
import RestaurantsScreen from '../screens/Restaurants'

const RestaurantsScreenStacks = createStackNavigator({
    Restaurants: {
        screens: RestaurantsScreen,
        navigationOptions: () => ({
            title: "Restaurantes"
        })
    }
});

export default RestaurantsScreenStacks;