import AsyncStorage from '@react-native-async-storage/async-storage';

export const keys = {
  uuid: 'uuid',
};

// Setting an item in AsyncStorage along with its key
export const setAsyncStorage = async (key, item) => {
  try {
    await AsyncStorage.setItem(key, item);
  } catch (error) {
    console.log(error);
  }
};

// Getting an item in AsyncStorage
export const getAsyncStorage = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Clearing the AsyncStorage
export const clearAsyncStorage = async () => {
  try {
    AsyncStorage.clear();
  } catch (error) {
    console.log(error);
    return null;
  }
};
