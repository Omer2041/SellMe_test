import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
} from 'react-native';
import {
  // Button,
  Text,
  Provider,
  // Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Badge,
  Chip,
} from '@react-native-material/core';
import {Dialog, Divider, Button} from 'react-native-paper';
// import { Modal } from 'react-native-paper';
const ItemCards = ({data, chooseItem}) => {
  const [chosenItemId, setChosenItemId] = useState(null);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [showSizes, setShowSizes] = useState(false);
  const [dialog, setDialog] = useState(false);

  const handleChooseColor = (item, chosenColor) => {
    setColor(chosenColor);
    // console.log(chosenColor);
    setShowSizes(true);
    setChosenItemId(item.id);
  };
  const handleChooseSize = chosenSize => {
    setSize(chosenSize);
    setDialog(true);
  };

  const onApprove = () => {
    const item = data.filter(item => item.id == chosenItemId)[0];
    setDialog(false);
    const newItem = {
      id: item.id,
      type: item.type,
      name: item.name,
      color: color,
      size: size,
      brand: item.brand,
    };
    chooseItem(newItem);
  };

  return (
    <Provider>
      <ScrollView>
        <Text style={{margin: 10}}>Found {data.length} items:</Text>
        <View
          style={{
            width: '100%',
            height: '85%',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {data.map(item => {
            return (
              <View key={item.id} style={styles.box}>
                <Text style={styles.text}>{item.name}</Text>
                <Divider style={{margin: 10, color: 'black'}} />
                <Text style={styles.text}>{item.brand}</Text>
                <View style={styles.colorsBox}>
                  {item.colors.map((col, index) => {
                    return (
                      <Chip
                        key={index}
                        style={{
                          backgroundColor: col,
                          // borderRadius: 10,
                          height: 30,
                          width: 30,
                          // padding: 5,
                          margin: 4,
                          marginTop: 15,
                          borderColor:
                            color == col && item.id == chosenItemId
                              ? 'black'
                              : 'silver',
                          borderWidth: 3,
                        }}
                        onPress={() => handleChooseColor(item, col)}
                      />
                    );
                  })}
                </View>
                <View style={styles.colorsBox}>
                  {showSizes &&
                    item.id == chosenItemId &&
                    item.sizes.map((size, index) => {
                      return (
                        <TouchableOpacity
                          key={index}
                          onPress={() => handleChooseSize(size)}
                          style={{
                            padding: 5,
                            margin: 3,
                            marginTop: 15,
                            backgroundColor: 'whitesmoke',
                            borderRadius: 10,
                            elevation: 2,
                          }}>
                          <Text>{size}</Text>
                        </TouchableOpacity>
                      );
                    })}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <Dialog visible={dialog} onDismiss={() => setDialog(false)}>
        <Dialog.Title> Select Item </Dialog.Title>
        <Dialog.Content>
          <Text>Are u sure you want to select this item?</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button compact mode="text" onPress={() => setDialog(false)}>
            Cancel
          </Button>
          <Button compact mode="contained-tonal" onPress={() => onApprove()}>
            OK
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Provider>
  );
};

const styles = StyleSheet.create({
  // centeredView: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: 22,
  // },
  // modalView: {
  //   margin: 20,
  //   backgroundColor: 'white',
  //   borderRadius: 20,
  //   padding: 35,
  //   alignItems: 'center',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5,
  // },
  // button: {
  //   borderRadius: 20,
  //   padding: 10,
  //   elevation: 2,
  // },
  // buttonOpen: {
  //   backgroundColor: '#F194FF',
  // },
  // buttonClose: {
  //   backgroundColor: '#2196F3',
  // },
  // textStyle: {
  //   color: 'white',
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  // modalText: {
  //   marginBottom: 15,
  //   textAlign: 'center',
  // },
  box: {
    display: 'flex',
    margin: 7,
    padding: 5,
    backgroundColor: 'white',
    // 'linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)', // borderColor: 'black',
    width: '46%',
    borderRadius: 2,
    elevation: 10,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    // color: 'white',
  },
  colorsBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});
export default ItemCards;
