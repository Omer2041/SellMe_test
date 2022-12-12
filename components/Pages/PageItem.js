import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from '@react-native-material/core';

import ItemCards from '../content/ItemCards';

const PageItem = ({
  navigation,
  item,
  data,
  selectedShirt,
  selectedPants,
  selectedShoes,
  setSelectedShirt,
  setSelectedPants,
  setSelectedShoes,
  setChosenItems,
}) => {
  const chooseItem = item => {
    console.log(item);
    let shirt = selectedShirt == 0 ? 0 : 1;
    let pants = selectedPants == 0 ? 0 : 1;
    let shoes = selectedShoes == 0 ? 0 : 1;
    switch (item.type) {
      case 'shirt':
        setSelectedShirt(item);
        shirt == 0 && shirt++;
        break;
      case 'pants':
        setSelectedPants(item);
        pants == 0 && pants++;
        break;
      case 'shoes':
        setSelectedShoes(item);
        shoes == 0 && shoes++;
        break;
      default:
        break;
    }
    navigation.navigate('Home');
    setChosenItems(shirt + pants + shoes);
  };
  return (
    <ScrollView>
        <Text style={styles.textHeader}>Please choose {item.name}</Text>
        <ItemCards data={data} chooseItem={chooseItem} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 30,
    margin: 10,
  },
  baseText: {
    flex: 1,
    // textAlign: 'center',
    fontSize: 20,
    margin: 10,
  },
});

export default PageItem;
