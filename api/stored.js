import { AsyncStorage } from "react-native";
import store from "../redux/store";
import { updateUser } from "../redux/action";
import { userDetails } from "./user";

export const getStoredToken = async () => {
  const token = await AsyncStorage.getItem("userToken");
  const type = await AsyncStorage.getItem("userTokenType");
  console.log(`[INFO] In getStoredToken()\nUserToken: ${token}\ntype:  ${type}`);
  return { token, type };
};

export const storeTokenInStore = async (tokenData) => {
  try {
    await AsyncStorage.setItem("userToken", tokenData.token);
    await AsyncStorage.setItem("userTokenType", tokenData.type);
    console.log(`[INFO] In storeTokenInStore()\ntoken : ${JSON.stringify(tokenData, null, 4)}`);
    return "success";
  } catch (err) {
    console.warn(err);
    throw err;
  }
};

export async function userUpdate() {
  const { token, type } = await getStoredToken();
  if (token) {
    console.log(`Token:${token}type: ${type}`);
    const results = await userDetails({ token, type });
    console.log(`[INFO] RESULTS: ${JSON.stringify(results, null, 4)}`);
    store.dispatch(updateUser({ id: results.id, name: results.name }));
    console.log(`[INFO] state: ${JSON.stringify(store.getState(), null, 4)}`);
  }
}
