import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

class Pengeluaran extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Pengeluaran!</Text>
      </View>
    );
  }
}

class Pemasukan extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Pemasukan!</Text>
      </View>
    );
  }
}

class History extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>History!</Text>
      </View>
    );
  }
}

export default TabNavigator({
  Pengeluaran: { screen: Pengeluaran },
  Pemasukan: { screen: Pemasukan },
  History: { screen: History },
});
