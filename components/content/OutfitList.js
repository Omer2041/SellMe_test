import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from '@react-native-material/core';
import {Table, Row, Rows} from 'react-native-table-component';
import {List} from 'react-native-paper';

const OutfitTable = ({data}) => {
  const tableHead = ['id', 'type', 'name', 'color', 'size', 'brand'];

  const Outfit = ({outfit, index}) => {
    return (
      <List.Accordion key={index} title={`Outfit ${index + 1}`}>
        <View style={{backgroundColor: 'white'}}>
          <Table
            borderStyle={{
              borderWidth: 1.5,
              borderColor: 'silver',
              borderRadius: 30,
            }}>
            <Row
              data={tableHead}
              style={styles.head}
              textStyle={styles.headText}
            />
            <Rows
              data={outfit.map(item => {
                return Object.values(item);
              })}
              textStyle={styles.text}
            />
          </Table>
        </View>
      </List.Accordion>
    );
  };

  return (
    <ScrollView>
      <List.Section title="Your Outfits">
        {data.length > 0 ? (
          data.map((item, index) => {
            return <Outfit key={index} outfit={item} index={index} />;
          })
        ) : (
          <Text style={{textAlign: 'center', marginVertical: 15}}>
            You dont have outfits yet!
          </Text>
        )}
      </List.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 6,
    borderRadius: 30,
    // overflow: 'auto'
  },
  head: {backgroundColor: 'black'},
  headText: {
    // fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  text: {
    margin: 2,
    fontSize: 15,
    textAlign: 'center',
    color: 'black',
  },
});

export default OutfitTable;

// <List.Accordion title="Accordion 1" id="1">
// <List.Item title="Item 1" />
// </List.Accordion>
// <List.Accordion title="Accordion 2" id="2">
// <List.Item title="Item 2" />
// </List.Accordion>
// <View>
// {/* <Text>
//   List.Accordion can be wrapped because implementation uses
//   React.Context.
// </Text> */}
// <List.Accordion title="Accordion 3" id="3">
//   <List.Item title="Item 3" />
// </List.Accordion>
// </View>
