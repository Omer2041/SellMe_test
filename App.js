import React, {useEffect, useState} from 'react';
import type {Node} from 'react';

import PageItem from './components/Pages/PageItem';
import Home from './components/Pages/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import pageConfig from './components/config/PageConfig';
import Success from './components/Pages/Success';
import {ActivityIndicator} from '@react-native-material/core';
const Stack = createNativeStackNavigator();
import {useDispatch, useSelector} from 'react-redux';
import {getData} from './redux/ducks/data';

const App: () => Node = () => {
  // const [data, setData] = useState(0);
  const [outfits, setOutfits] = useState([]);
  const [selectedShirt, setSelectedShirt] = useState(0);
  const [selectedPants, setSelectedPants] = useState(0);
  const [selectedShoes, setSelectedShoes] = useState(0);
  const [chosenItems, setChosenItems] = useState(0);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const data = useSelector(state => state.data.data);
  console.log(data);

  return (
    <NavigationContainer>
      {!loading ? (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={{title: 'Application'}}>
            {props => (
              <Home
                {...props}
                chosenItems={chosenItems}
                setChosenItems={setChosenItems}
                selectedShirt={selectedShirt}
                selectedPants={selectedPants}
                selectedShoes={selectedShoes}
                setSelectedShirt={setSelectedShirt}
                setSelectedPants={setSelectedPants}
                setSelectedShoes={setSelectedShoes}
                setOutfits={setOutfits}
                outfitsNum={outfits.length}
              />
            )}
          </Stack.Screen>
          {pageConfig.map(item => {
            return (
              <Stack.Screen key={item.name} name={item.name}>
                {props => (
                  <PageItem
                    {...props}
                    item={item}
                    setChosenItems={setChosenItems}
                    selectedShirt={selectedShirt}
                    selectedPants={selectedPants}
                    selectedShoes={selectedShoes}
                    setSelectedShirt={setSelectedShirt}
                    setSelectedPants={setSelectedPants}
                    setSelectedShoes={setSelectedShoes}
                    data={
                      data != 0
                        ? data.results.filter(it => it.type == item.name)
                        : []
                    }
                  />
                )}
              </Stack.Screen>
            );
          })}
          <Stack.Screen name={'success'}>
            {props => <Success {...props} outfits={outfits} />}
          </Stack.Screen>
        </Stack.Navigator>
      ) : (
        <ActivityIndicator
          style={{height: 600, fontWeight: 'bold'}}
          animating={loading}
          size="large"
          color="dodgerblue"
        />
      )}
    </NavigationContainer>
  );
};

export default App;
