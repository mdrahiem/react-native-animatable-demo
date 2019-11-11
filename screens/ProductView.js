import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import Animated, { Easing } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get("window");

export class ProductTitle extends Component {
  componentDidMount() {
    this.refs.productTitle.animate({ 0: { opacity: 0 }, 1: { opacity: 1 } }, 1600);
  }

  render() {
    return (
      <Animatable.View>
          <Animatable.Text ref="productTitle">Product Title</Animatable.Text>
        </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  productImgHolder: {
    alignContent: "flex-end",
    backgroundColor: "transparent"
  },
  productLargeImg: {
    width: "100%"
  },
  optionsHolder: {
    top: "50%",
    height: 120,
    marginTop: 380,
    justifyContent: "space-around",
    flexDirection: "row"
  },
  optionSingle: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, .6)",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    color: "#ffffff"
  },
  optionLabel: {
    fontSize: 13,
    color: "#999999",
    textAlign: "center",
    height: 20
  },
  optionText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff"
  },
  whiteColorCircle: {
    width: 18,
    height: 18,
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 5
  },
  productTitle: {
    fontSize: 42,
    color: "#3a3a3a",
    paddingLeft: 30,
    paddingTop: 15,
    fontWeight: "bold",
    letterSpacing: 1
  },
  productCaption: {
    paddingLeft: 30,
    paddingTop: 2,
    fontSize: 20,
    fontWeight: "bold",
    color: "#3a3a3a",
    letterSpacing: 1
  },
  orangeBtn: {
    color: "orange",
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 30,
    marginTop: 15
  },
  separator: {
    height: 1,
    backgroundColor: "#3a3a3a",
    width: 80,
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 30
  },
  productDescription: {
    color: "#919191",
    paddingLeft: 30,
    width: 220
  },
  cartButtonsHolder: {
    flexDirection: 'row'
  },
  wishListButton: {
    backgroundColor: "#e64c00",
    color: "#fff",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    borderTopLeftRadius: 18
  }
});

export default ProductTitle;
