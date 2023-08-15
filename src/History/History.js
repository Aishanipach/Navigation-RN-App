import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const History = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{color: 'black'}}>History</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({});
