import { makeObservable, observable, action } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

class MyMobX {
  weight = null;
  heightInMeter = null;
  heightInFeet = null;
  heightInInch = null;

  constructor() {
    makeObservable(this, {
      weight: observable,
      heightInMeter: observable,
      heightInFeet: observable,
      heightInInch: observable,
      setWeight: action,
      setHeightInMeter: action,
      setHeightInFeet: action,
      setHeightInInch: action,
      saveData: action,
      loadData: action
    });
  }

  setWeight(value) {
    this.weight = value;
    console.log("this is mobX", this.weight);
  }

  setHeightInMeter(value) {
    this.heightInMeter = value;
  }

  setHeightInFeet(value) {
    this.heightInFeet = value;
  }

  setHeightInInch(value) {
    this.heightInInch = value;
  }

  async saveData() {
    try {
      const data = {
        weight: this.weight,
        heightInMeter: this.heightInMeter,
        heightInFeet: this.heightInFeet,
        heightInInch: this.heightInInch
      };
      await AsyncStorage.setItem("myStoreData", JSON.stringify(data));
    } catch (error) {
      console.error("Error saving data to AsyncStorage:", error);
    }
  }

  async loadData() {
    try {
      const storedData = await AsyncStorage.getItem("myStoreData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        console.log("this is mobX", parsedData);

        // Set the loaded data to MobX store
        this.setWeight(parsedData.weight);
        this.setHeightInMeter(parsedData.heightInMeter);
        this.setHeightInFeet(parsedData.heightInFeet);  
        this.setHeightInInch(parsedData.heightInInch);
      }
    } catch (error) {
      console.error("Error loading data from AsyncStorage:", error);
    }
  }
}

const myMobxStore = new MyMobX();
myMobxStore.loadData();
export default myMobxStore;
