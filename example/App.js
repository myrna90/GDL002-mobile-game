import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,  } from 'react-native';
import {MaterialCommunityIcons as Icon} from "react-native-vector-icons";

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPlayer: 1, 
    }
  }

  componentDidMount(){
    this.initializeGame();
  }

  initializeGame = () => {
    this.setState({gameState:
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    });
  }

  onTilePress = (row, col) =>{
    const currentPlayer = this.state.currentPlayer;

    //Set the correct tile...
    const arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.setState({gameState: arr});

    //Switch to other player...
    const nextPlayer = (currentPlayer == 1) ?-1: 1;
    this.setState({currentPlayer: nextPlayer});
  }

  renderIcon = (row, col) => {
    let value = this.state.gameState[row][col];
    switch(value){
      case 1: return <Icon name="star" style={styles.tileX}/>;
      case -1: return <Icon name="heart" style={styles.tileO}/>;
      default: return <View/>;
    }
  }
  render(){
    return (
      //Is the container of all views
      <View style={styles.container}>

          {/*Are the views of every line of cat pictures*/}
        <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={() => this.onTilePress(0,0)} style={[styles.tile, {borderLeftWidth: 0, borderTopWidth: 0}]}>
         {this.renderIcon(0, 0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onTilePress(0,1)} style={[styles.tile, {borderTopWidth: 0,}]}>
          {this.renderIcon(0, 1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onTilePress(0,2)} style={[styles.tile, {borderTopWidth: 0, borderRightWidth: 0}]}> 
          {this.renderIcon(0, 2)}
        </TouchableOpacity>
        </View>
  
          {/*Are the views of every line of cat pictures*/}
        <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={() => this.onTilePress(1,0)} style={[styles.tile, {borderLeftWidth: 0,}]}>
          {this.renderIcon(1, 0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onTilePress(1,1)} style={[styles.tile, {}]}>
          {this.renderIcon(1, 1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onTilePress(1,2)} style={[styles.tile, {borderRightWidth: 0,}]}>
          {this.renderIcon(1, 2)}
        </TouchableOpacity>
        </View>
  
           {/*Are the views of every line of cat pictures*/}
        <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={() => this.onTilePress(2,0)} style={[styles.tile, {borderBottomWidth: 0, borderLeftWidth: 0}]}>
          {this.renderIcon(2, 0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onTilePress(2,1)} style={[styles.tile, {borderBottomWidth: 0,}]}>
          {this.renderIcon(2, 1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onTilePress(2,2)} style={[styles.tile, {borderBottomWidth: 0, borderRightWidth: 0}]}>
          {this.renderIcon(2, 2)}
        </TouchableOpacity>
        </View>
      </View>
    );
  } 
}

//Are the styles of the game
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tile:{
    borderWidth: 10,
    width: 100,
    height: 100,
  },

  tileX:{
    color: "yellow",
    fontSize: 60,
  },

  tileO:{
    color:"red",
    fontSize: 60,
  }
});
