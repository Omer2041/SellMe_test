import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import Home from './components/Pages/Home';
import PageItem from './components/Pages/PageItem';
import pageConfig from './components/config/PageConfig';
import Success from './components/Pages/Success';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from './redux/ducks/data';
import {ActivityIndicator} from '@react-native-material/core';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  const [outfits, setOutfits] = useState([]);
  const [selectedShirt, setSelectedShirt] = useState(0);
  const [selectedPants, setSelectedPants] = useState(0);
  const [selectedShoes, setSelectedShoes] = useState(0);
  const [chosenItems, setChosenItems] = useState(0);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector(state => {
    return state.data.data;
  });
  console.log(data);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch, loading]);

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
