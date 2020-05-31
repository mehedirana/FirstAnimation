import React from 'react';
import { StyleSheet, Text, View, Animated} from 'react-native';

class App extends React.Component{
  constructor(props){
    super(this.props)
  }
  render(){
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
