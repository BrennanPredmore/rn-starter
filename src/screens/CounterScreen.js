import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(6);

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
          // DONT DO THIS
          // counter++;
          setCounter(counter + 1);
        }}
      />
      <Button
        title='Decrease'
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter} </Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default CounterScreen;
