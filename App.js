import React from 'react';
import { StyleSheet, Text, View, Animated} from 'react-native';

class App extends React.Component{
  constructor(props){
    super(this.props)
    this.position = new Animated.ValueXY(0,0);
  }
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.ball}/>
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
  ball:{
    height:50,
    width:50,
    BorderRadius: 30,
    backgroundColor:'blue'
  }
});
