/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  BackHandler,
} from 'react-native';
import { Button, FloatingActionButton} from './src/components'
import ThemeContext, { MokoData } from './src/stores/ThemeContext'
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
    <ThemeContext.Provider value={MokoData}>
      <SafeAreaView style={{flex:1, margin:15, backgroundColor:'pink'}}>
        <View style={{flex:1, margin:15, backgroundColor:'yellow'}}>
          <View style={{ justifyContent:'space-around', alignItems:'center',  height:'50%', padding:10, backgroundColor:'silver'}}>
            <Button type='text' states='enabled' icon={'plus'} text='button'/>
            <Button type='contained' states='enabled' icon={'plus'} text='button'/>
            <Button type='outlined' states='enabled' icon={'plus'} text='button'/>
          </View>
          <View style={{ justifyContent:'space-around', alignItems:'center',  height:'50%', padding:10, backgroundColor:'#D32F2F'}}>
            <FloatingActionButton type='regular' icon={'plus'} states={'enabled'} text={'button'}/> 
            <FloatingActionButton type='mini' icon={'plus'} states={'enabled'} text={'button'}/>        
            <FloatingActionButton type='extended' icon={'plus'} states={'enabled'} text={'button'} onPress={() => {console.log('test')}}/>               
          </View>
        </View>
      </SafeAreaView>
      </ThemeContext.Provider>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
