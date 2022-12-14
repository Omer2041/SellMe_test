import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {Text, Chip} from '@react-native-material/core';
import {Dialog, Divider, Button, Card} from 'react-native-paper';

const ItemCards = ({data, chooseItem, icon}) => {
  const [chosenItemId, setChosenItemId] = useState(null);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [showSizes, setShowSizes] = useState(false);
  const [dialog, setDialog] = useState(false);

  const MyDialog = () => {
    return (
      <Dialog
        visible={dialog}
        onDismiss={() => setDialog(false)}
        style={styles.dialog}>
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
    );
  };

  const handleChooseColor = (item, chosenColor) => {
    setColor(chosenColor);
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
    <>
      <ScrollView>
        <Text style={{margin: 10}}>Found {data.length} items:</Text>
        <View style={styles.container}>
          {data.map(item => {
            return (
              <Card key={item.id} style={styles.box}>
                <Card.Title
                  title={item.name}
                  subtitle={item.brand}
                  titleStyle={{fontWeight: 'bold'}}
                  right={() => {
                    return <Image style={styles.tinyLogo} source={icon} />;
                  }}
                />
                <Divider style={styles.divider} />
                <View style={styles.colorsBox}>
                  {item.colors.map((col, index) => {
                    return (
                      <Chip
                        key={index}
                        style={{
                          backgroundColor: col,
                          height: 30,
                          width: 30,
                          margin: 4,
                          marginTop: 15,
                          borderColor:
                            color == col && item.id == chosenItemId
                              ? 'black'
                              : 'whitesmoke',
                          borderWidth: 2,
                          elevation: 10,
                          shadowColor: 'black',
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
                          style={styles.sizesButton}>
                          <Text>{size}</Text>
                        </TouchableOpacity>
                      );
                    })}
                </View>
              </Card>
            );
          })}
        </View>
      </ScrollView>
      <MyDialog />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '85%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    margin: 7,
    padding: 5,
    backgroundColor: 'white',
    width: '46%',
    borderRadius: 2,
    elevation: 10,
  },

  colorsBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  divider: {margin: 7, marginHorizontal: 15, color: 'black'},
  tinyLogo: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  sizesButton: {
    padding: 5,
    margin: 3,
    marginTop: 15,
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    elevation: 2,
  },
  dialog: {backgroundColor: 'white'},
});
export default ItemCards;
