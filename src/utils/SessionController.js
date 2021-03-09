import axios from "axios";
import { setData, getData } from "../utils/DataStorage";

export function signIn({ email, name }) {
  axios
    .post("https://fieldfind-backend.herokuapp.com/auth/local/register", {
      username: name,
      email: email,
      password: email,
      name: name,
    })
    .then(async (response) => {
      console.log("User registered");
      await setData(response.data);
    })
    .catch((error) => {
      // Handle error.
      console.log("An error occurred:", error);
    });
}

export function logIn(userData) {
  const { email } = userData;
  axios
    .post("https://fieldfind-backend.herokuapp.com/auth/local/", {
      identifier: email,
      password: email,
    })
    .then(async (response) => {
      console.log("User logged in");
      await setData(response.data);
    })
    .catch((error) => {
      // Handle error.
      signIn(userData);
      console.log("An error occurred:", error);
    });
}

export async function isLoggedIn() {
  const data = await getData();
  if (data) {
    return true;
  }
  return false;
}

export default { signIn, logIn };
