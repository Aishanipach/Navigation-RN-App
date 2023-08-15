import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const Details = ({route, navigation}) => {
  const {productId} = route.params.deets;
  const [slideAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    const handleSlide = () => {
      Animated.timing(slideAnim, {
        toValue: -100, // Slide up by 100 units
        duration: 500,
        useNativeDriver: true,
      }).start();
    };

    return () => {
      handleSlide();
    };
  }, []);

  return (
    <SafeAreaView>
      <Animated.View
        style={{marginTop: 10, transform: [{translateY: slideAnim}]}}>
        <Text title={'Details'}>Details for {productId}</Text>
        <Button
          title="History"
          onPress={() => navigation.navigate('History')}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({});
