import React from 'react';
import {ScrollView, StyleSheet, View, Image, Text} from 'react-native';
import OutfitList from '../content/OutfitList';
import successImagesConfig from '../config/SuccessImages';
import {Button} from 'react-native-paper';

const Success = ({navigation, outfits}) => {
  const rnd = Math.floor(Math.random() * successImagesConfig.length);
  // console.log(outfits);

  return (
    <ScrollView>
      <Text style={styles.textHeader} onPress={() => console.log(outfits)}>
        Congratulations! {'\n'} you just owned a new outfit
      </Text>
      <View style={styles.headerBox}>
        <Image
          style={styles.successLogo}
          source={{
            uri: successImagesConfig[rnd],
          }}
        />
      </View>
      <OutfitList data={outfits} />
      <Button
        style={styles.button}
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
    height: 180,
    borderRadius: 30,
    backgroundColor: '#fff',
    margin: 2,
  },
  textHeader: {
    textAlign: 'center',
    fontSize: 20,
    color: 'rgb(158, 42, 155)',
    marginVertical: 30,
    fontWeight: 'bold',
  },
  successLogo: {width: '100%', height: '100%', borderRadius: 30},
  button: {
    width: '60%',
    alignSelf: 'center',
    marginVertical: 50,
  },
});
export default Success;
