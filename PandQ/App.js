import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <Text> Hello!!!!</Text>
      <StatusBar style={"a"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//const num = 5 ; 
//var num = 7
var num = (8+10)


console.log ('переменная:' + num  +  ".")


