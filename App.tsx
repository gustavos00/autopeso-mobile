import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Header />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
