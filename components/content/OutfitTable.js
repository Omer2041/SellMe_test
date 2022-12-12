import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from '@react-native-material/core';
import {Table, Row, Rows} from 'react-native-table-component';

const OutfitTable = ({data}) => {
  const tableData = {
    tableHead: ['id', 'type', 'name', 'color', 'size', 'brand'],
    tableData: data
      .reduce((prev, next) => {
        return prev.concat(next);
      })
      .map(item => {
        return Object.values(item);
      }),
  };

  // console.log('data: ', data);
  // console.log('tableData: ', tableData);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Table
          borderStyle={{
            borderWidth: 1.5,
            borderColor: 'silver',
            borderRadius: 30,
            
          }}>
          <Row
            data={tableData.tableHead}
            style={styles.head}
            textStyle={styles.headText}
          />
          <Rows data={tableData.tableData} textStyle={styles.text} />
        </Table>
      </View>
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
  head: {backgroundColor: 'darkgreen'},
  headText: {
    // fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  text: {margin: 2, fontSize: 15, textAlign: 'center', color: 'black'},
});
export default OutfitTable;
