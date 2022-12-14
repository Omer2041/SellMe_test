import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import {List} from 'react-native-paper';

const OutfitTable = ({data}) => {
  const tableHead = ['id', 'type', 'name', 'color', 'size', 'brand'];

  const Outfit = ({outfit, index}) => {
    return (
      <List.Accordion
        key={index}
        title={`Outfit ${index + 1}`}
        style={styles.listItem}>
        <Table borderStyle={styles.table}>
          <Row
            data={tableHead}
            style={styles.head}
            textStyle={styles.headText}
          />
          <Rows
            data={outfit.map(item => {
              return Object.values(item);
            })}
            textStyle={styles.dataText}
          />
        </Table>
      </List.Accordion>
    );
  };

  return (
    <ScrollView>
      <List.Section title="Your Outfits">
        {data.length > 0 &&
          data.map((item, index) => {
            return <Outfit key={index} outfit={item} index={index} />;
          })}
      </List.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  head: {backgroundColor: 'black'},
  headText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  dataText: {
    margin: 1,
    fontSize: 15,
    textAlign: 'center',
    color: 'black',
  },
  table: {
    borderWidth: 1.5,
    borderColor: 'silver',
    borderRadius: 30,
  },
  listItem: {backgroundColor: 'silver'},
});

export default OutfitTable;
