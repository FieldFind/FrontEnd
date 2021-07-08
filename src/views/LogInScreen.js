import React, { Component } from "react";
import {
  Image,
  StatusBar,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { logIn, isLoggedIn } from "../utils/SessionController";

const fieldFindLogo = require("../../assets/LogoFieldFind.png");
const googleLogo = require("../../assets/GoogleLogin1.png");

import * as Google from "expo-google-app-auth";

const IOS_CLIENT_ID =
  "951963137071-kt6dadc0tnj01q2i1ov686l2n32tljhf.apps.googleusercontent.com";
const ANDROID_CLIENT_ID =
  "951963137071-kq9dgdcnje3not2tmiiijc4benocgmos.apps.googleusercontent.com";

export default class LoginScreen extends Component {
  componentDidMount() {
    isLoggedIn().then((res) =>
      res ? this.props.navigation.navigate("Menu") : null
    );
  }
  storeSession = async (userData) => {
    logIn(userData);
    this.props.navigation.navigate("Menu");
  };

  signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        androidClientId:
          "951963137071-kq9dgdcnje3not2tmiiijc4benocgmos.apps.googleusercontent.com",
        androidStandaloneAppClientId:
          "951963137071-kq9dgdcnje3not2tmiiijc4benocgmos.apps.googleusercontent.com",
        behavior: "web",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        console.log("LoginScreen.js 21 | ", result.user.givenName);
        console.log(result);
        const userData = {
          email: result.user.email,
          name: result.user.name,
        };
        this.storeSession(userData);
        this.props.navigation.navigate("Main", {
          username: result.user.givenName,
        });

        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log("LoginScreen.js 30 | Error with login", e);
      return { error: true };
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.tinyLogo} source={fieldFindLogo} />
        <TouchableOpacity onPress={this.signInWithGoogle}>
          <Image style={styles.googleLogo} source={googleLogo} />
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3a4750",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    bottom: 80,
    width: 244,
    height: 398,
  },
  googleLogo: {
    width: 295,
    height: 120,
  },
});
