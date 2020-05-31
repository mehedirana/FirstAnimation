import React from 'react';
import { StyleSheet, Text, View, Animated} from 'react-native';

class App extends React.Component{
  constructor(props){
    super(props)
    this.position = new Animated.ValueXY(0,0);
    Animated.spring(this.position,{
      toValue:{x:200,y:300},
      stiffness:500
    }).start()
    
  }
  render(){
  return (
    <Animated.View style={this.position.getLayout()}>
      <View style={styles.ball}/>
    </Animated.View>
  );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ball:{
    height:50,
    width:50,
    borderRadius: 40,
    backgroundColor:'blue'
  }
});
