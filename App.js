import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useEffect, useState} from "react";
import Animated, {Layout} from "react-native-reanimated";

export default function App() {
  const [y,setY] = useState(5)
  useEffect(()=>{
    const interval = setInterval(()=>{
      setY(y=>y+15);
    }, 100);
    return ()=>{
      clearInterval(interval)
    }
  })
  return (
    <View  style={styles.container}>
      <Animated.View layout={Layout} style={{position:'absolute', top: 10+y}}>
        <Text >Open up App.js to start working on your app!</Text>
      </Animated.View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
