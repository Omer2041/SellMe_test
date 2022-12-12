import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Image} from 'react-native';

import {Text} from '@react-native-material/core';
import OutfitTable from '../content/OutfitTable';
import OutfitList from '../content/OutfitList';
import successImagesConfig from '../config/SuccessImages';
import {Button} from 'react-native-paper';

const Success = ({navigation, outfits}) => {
  const rnd = Math.floor(Math.random() * successImagesConfig.length);
  console.log(outfits);
  return (
    <ScrollView>
      <Text style={styles.textHeader} onPress={() => console.log(outfits)}>
        Congratulations! {'\n'} you just owned a new outfit
      </Text>
      <View style={styles.headerBox}>
        <Image
          style={{width: '100%', height: '100%', borderRadius: 30}}
          source={{
            uri: successImagesConfig[rnd],
          }}
        />
      </View>
      <OutfitList data={outfits} />
      <Button
        style={{
          width: '60%',
          alignSelf: 'center',
          marginVertical: 50,
          // backgroundColor: 'dodgerblue',
        }}
        mode="contained"
        onPress={() => navigation.navigate('Home')}>
        Choose Another Outfit
      </Button>
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
    fontSize: 20,
    color: 'green',
    marginVertical: 30,
  },
});
export default Success;
