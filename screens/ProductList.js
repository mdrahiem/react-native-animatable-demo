import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Dimensions, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProductTitle from './ProductView';
import * as Animatable from 'react-native-animatable';

const { height } = Dimensions.get("window");

export class ProductList extends Component {
  state = {
    showProductView: false,
    showProductTitle: false
  }

  handleViewRef = ref => this.view = ref;

  doShowProductView = () => {
    this.refs.productSmallImg.animate({
      0: { scale: 1, borderRadius: 10, translateY: 0 },
      1: { scale: 1.9, borderRadius: 0, translateY: -66 },
    }, 1600);
    this.refs.productView.transitionTo({ zIndex: 0, opacity: 1 }, 10, "ease-in-out");
    this.refs.likeButton.animate({
      0: { opacity: 0, translateY: 180 },
      1: { opacity: 1, translateY: 0 }
    }, 500, 1600, "ease-out-quint");
    this.refs.cartButton.animate({
      0: { opacity: 0, translateY: 180 },
      1: { opacity: 1, translateY: 0 }
    }, 500, 1900, "ease-out-quint");
    this.refs.productTitle.animate({
      0: { translateX: -300 },
      0.4: { translateX: -40 },
      1: { translateX: 0 }
    }, 800, 1600, "ease-out-quint");
    this.refs.productCaption.animate({
      0: { translateX: -300 },
      0.4: { translateX: -40 },
      1: { translateX: 0 }
    }, 800, 2100, "ease-out-quint");
    this.refs.productOption1.animate({
      0: { opacity: 0, scale: 0, translateY: -10 },
      1: { opacity: 1, scale: 1, translateY: 0 }
    }, 500, 1600, "ease-out-quint");
    this.refs.productOption2.animate({
      0: { opacity: 0, scale: 0, translateY: -10 },
      1: { opacity: 1, scale: 1, translateY: 0 }
    }, 500, 1900, "ease-out-quint");
    this.refs.productOption3.animate({
      0: { opacity: 0, scale: 0, translateY: -10 },
      1: { opacity: 1, scale: 1, translateY: 0 }
    }, 500, 2200, "ease-out-quint");
    this.refs.orangeBtn.flipInX(500, 2800, "ease-out-quint");
    this.refs.separator.animate({
      0: { opacity: 0, scaleX: 0 },
      1: { opacity: 1, scaleX: 1 }
    }, 500, 2800, "ease-out-quint");
    this.refs.productDescription.animate({
      0: { opacity: 0, translateY: 120 },
      1: { opacity: 1, translateY: 0 }
    }, 500, 3200, "ease-out-quint");
  }

  doShowProductTitle = () => {
    this.setState({
      showProductTitle: true
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.doShowProductView}>
          <Animatable.Image
            style={styles.logoImg}
            source={require("../assets/product.jpg")}
            ref="productSmallImg"
          />
        </TouchableWithoutFeedback>
        {/* {this.state.showProductTitle && <ProductTitle />} */}
        <Animatable.View
          style={{
            ...StyleSheet.absoluteFill,
            zIndex: -1,
            opacity: 0
          }}
          ref="productView"
        >
          <View style={styles.productView}>
            <View style={{ ...styles.productImgHolder, height: height / 2 }}>
              <View style={{ height: height / 1.4 }}></View>
              <View
                style={{
                  ...styles.optionsHolder,
                  ...StyleSheet.absoluteFillObject
                }}
              >
                <Animatable.View
                  ref="productOption1"
                  easing="linear"
                  useNativeDriver
                  style={styles.optionSingle}
                >
                  <Text style={styles.optionLabel}>COLOR</Text>
                  <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                  >
                    <View style={styles.whiteColorCircle}></View>
                  </View>
                </Animatable.View>
                <Animatable.View
                  ref="productOption2"
                  easing="linear"
                  useNativeDriver
                  style={styles.optionSingle}
                >
                  <Text style={styles.optionLabel}>PRICE</Text>
                  <Text style={styles.optionText}>£59</Text>
                </Animatable.View>
                <Animatable.View
                  ref="productOption3"
                  easing="linear"
                  useNativeDriver
                  style={styles.optionSingle}
                >
                  <Text style={styles.optionLabel}>SIZE</Text>
                  <Text style={styles.optionText}>M</Text>
                </Animatable.View>
              </View>
              <Animatable.View ref="productTitle" useNativeDriver>
                <Text style={styles.productTitle}>Relaxed</Text>
              </Animatable.View>
              <Animatable.View ref="productCaption" useNativeDriver>
                <Text style={styles.productCaption}>Grandad Shirt</Text>
              </Animatable.View>
              <Animatable.View ref="orangeBtn" useNativeDriver>
                <Text style={styles.orangeBtn}>BUY NOW</Text>
                </Animatable.View>
              <Animatable.View ref="separator" style={styles.separator}></Animatable.View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Animatable.View ref="productDescription">
                  <Text style={styles.productDescription}>
                    A casual style, this grandad collar shirt is made from pure
                    cotton and silk.
                  </Text>
                </Animatable.View>
                <View style={styles.cartButtonsHolder}>
                  <Animatable.View ref="likeButton" style={styles.wishListButton}>
                    <Ionicons
                      name="md-checkmark-circle"
                      size={32}
                      color="white"
                      style={{ textAlign: "center" }}
                    />
                  </Animatable.View>
                  <Animatable.View
                    ref="cartButton"
                    style={{
                      ...styles.wishListButton,
                      backgroundColor: "#3a3a3a",
                      borderTopLeftRadius: 0
                    }}
                  >
                    <Ionicons
                      name="md-cart"
                      size={32}
                      color="white"
                      style={{ textAlign: "center" }}
                    />
                  </Animatable.View>
                </View>
              </View>
            </View>
          </View>
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  logoImg: {
    width: 210,
    height: 290,
    borderRadius: 10
  },
  productImgHolder: {
    alignContent: "flex-end",
    backgroundColor: "transparent"
  },
  productLargeImg: {
    width: "50%"
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
    marginTop: 20
  },
  separator: {
    height: 1,
    backgroundColor: "#3a3a3a",
    width: 80,
    marginTop: 28,
    marginBottom: 28,
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

export default ProductList;
