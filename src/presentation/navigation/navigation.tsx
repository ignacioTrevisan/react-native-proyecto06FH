import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screen/home/homeScreen';
import { DetailsScreen } from '../screen/details/detailsScreen';

const Stack = createStackNavigator();

export type RootStackParams = {
    Home: undefined;
    Details: { movieId: number }
}

export const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}