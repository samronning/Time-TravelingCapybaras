import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import texts from './src/components/Texts/texts.tsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={texts.title}>Peasy</Text>
      <Text style={texts.h2}>Edit in app.tsx.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#556B2F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
