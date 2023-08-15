import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Details from '../Details/Details';
import History from '../History/History';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
const Home = () => {
  const deets = {
    productId: '96',
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Button
        title="Details"
        onPress={() => {
          navigation.navigate('Details', {deets});
        }}></Button>

      <Button
        title="History"
        onPress={() => {
          navigation.navigate('History');
        }}></Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallText: {
    color: 'pink',
  },
});
