import AsyncStorage from "@react-native-community/async-storage";

export const setData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("userData", jsonValue);
    //console.log(jsonValue)
    console.log("Session data stored successfuly");
  } catch (e) {
    console.log(e);
  }
};

export const deleteData = async () => {
  try {
    await AsyncStorage.removeItem("userData");
    console.log("Session data deleted successfuly");
  } catch (e) {
    console.log(e);
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("userData");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

export default { setData, getData, deleteData };
