/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Homescreen/Home';
import Details from './Details/Details';
import History from './History/History';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  const deets = {
    productId: '96',
  };

  const TabNav = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={StackNav} />
        <Tab.Screen
          name="Details"
          component={Details}
          initialParams={{deets}}
        />
        <Tab.Screen
          name="History"
          component={History}
          // initialParams={deets}
        />
      </Tab.Navigator>
    );
  };

  const StackNav = () => {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          // initialParams={deets}
          options={{title: 'Homescreen'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          // initialParams={deets}
          options={{title: 'Details'}}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{title: 'History'}}
        />
      </Stack.Navigator>
    );
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabNav></TabNav>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
