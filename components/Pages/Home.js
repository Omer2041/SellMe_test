import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {Text} from '@react-native-material/core';
import {Button} from 'react-native-paper';

const Home = ({
  navigation,
  chosenItems,
  setChosenItems,
  selectedShirt,
  setSelectedShirt,
  selectedPants,
  setSelectedPants,
  selectedShoes,
  setSelectedShoes,
  setOutfits,
  outfitsNum,
}) => {
  const onSuccess = () => {
    navigation.navigate('success');
    const newOutfit = [selectedShirt, selectedPants, selectedShoes];
    console.log(newOutfit);
    setOutfits(prev => [...prev, newOutfit]);
    setChosenItems(0);
    setSelectedShirt(0);
    setSelectedPants(0);
    setSelectedShoes(0);
  };

  return (
    <ScrollView>
      <Text style={styles.textHeader}>Home</Text>
      <Text style={styles.baseText}>You Own {outfitsNum} Outfits</Text>
      <Button
        style={{marginHorizontal: 40, marginVertical: 8}}
        mode="elevated"
        onPress={() => navigation.navigate('shirt')}>
        Choose Shirt
      </Button>
      <Button
        style={{marginHorizontal: 40, marginVertical: 8}}
        mode="contained-tonal"
        onPress={() => navigation.navigate('pants')}>
        Choose Pants
      </Button>
      <Button
        style={{marginHorizontal: 40, marginVertical: 8}}
        mode="outlined"
        onPress={() => navigation.navigate('shoes')}>
        Choose Shoes
      </Button>
      {chosenItems === 3 ? (
        <>
          <View style={styles.headerBox}>
            <Text style={styles.completed}>
              All Clear!{'\n\n'}3/3{'\n\n'}Press Done to own this outfit
            </Text>
          </View>
          <Button
            mode="contained"
            color="darkgreen"
            style={{margin: 40, alignSelf: 'flex-end'}}
            onPress={onSuccess}>
            Done
          </Button>
        </>
      ) : (
        <Text style={styles.baseText}>
          You Selected {chosenItems}/3 items {'\n'} only {3 - chosenItems} left!
        </Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerBox: {
    justifyContent: 'center',
    elevation: 20,
    height: 180,
    borderRadius: 30,
    backgroundColor: '#fff',
    margin: 20,
    // marginVertical: 30,
  },
  textHeader: {
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 20,
  },
  baseText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    margin: 5,
    marginVertical: 20,
    color: '#48494B',
  },
  completed: {textAlign: 'center', fontSize: 20},
});

export default Home;
