import React, { createContext, useReducer,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Create the context
const MyContext = createContext();

// Create a provider component
const MyProvider = ({ children }) => {

    


  const initialState = {
    // Define your initial state here
    // For example:
    weight:null,
    heightInMeter:null,
    heightInFeet:null,
    heightInInch:null,
  };
  const saveData = async (state) => {
    try {
      await AsyncStorage.setItem('myData', JSON.stringify(state));
      const storedData = await AsyncStorage.getItem('myData');
    //   console.log("here is the stored data: ", storedData)
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error);
    }
  };
  // Create a reducer function
  const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_WEIGHT':
            return { ...state, weight: action.payload };
        case 'SET_HEIGHT_METER':
            return { ...state, heightInMeter: action.payload };
        case 'SET_HEIGHT_FEET':
            return { ...state, heightInFeet: action.payload };
        case 'SET_HEIGHT_INCH':
            return { ...state, heightInInch: action.payload };
        case 'SET_VALUES':
            console.log(action,"all actions")
            return{...state, weight: action.payload.weight,heightInMeter: action.payload.heightInMeter, heightInFeet: action.payload.heightInFeet, heightInInch: action.payload.heightInInch }
        case 'SAVE_DATA':
            saveData(state);
            return state;
        //     break;
        default:
            return state;
        }
  };

  // Use the useReducer hook to manage state
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    const loadData = async () => {
        try {
          const storedData = await AsyncStorage.getItem('myData');
          if (storedData) {
            const parsedData = JSON.parse(storedData);
            console.log(parsedData)
            dispatch({ type: 'SET_VALUES', payload: parsedData });
          }
        } catch (error) {
          console.error('Error loading data from AsyncStorage:', error);
        }
      };
  
      loadData();
},[])
// useEffect(() => {
   
    
    

    // console.log("im changing",state)
//   }, [state])



  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };
