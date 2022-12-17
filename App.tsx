import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';

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
