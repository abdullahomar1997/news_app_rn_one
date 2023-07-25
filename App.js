import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './Components/Navigator.js'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
    <React.Fragment>
      <Navigator/>
    </React.Fragment>
    </SafeAreaProvider>

  );
}