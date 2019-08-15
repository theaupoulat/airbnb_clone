import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

class RoomCard extends React.Component {
  render = () => {
    const { data, openRoomInfo, index } = this.props;
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => openRoomInfo(index)}
      >
        <View style={{ position: "relative" }}>
          <Image
            source={{
              uri: data.photos[0]
            }}
            style={{ height: 200 }}
            resizeMode="cover"
          />
          <View style={styles.priceTag}>
            <Text style={styles.price}>{data.price} €</Text>
          </View>
        </View>
        <View style={styles.infoCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title} numberOfLines={1}>
              {data.title}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <View style={{ flexDirection: "row", marginRight: 5 }}>
                <Ionicons
                  name="ios-star"
                  size={15}
                  color={parseInt(data.ratingValue) >= 1 ? "gold" : "grey"}
                />
                <Ionicons
                  name="ios-star"
                  size={15}
                  color={parseInt(data.ratingValue) >= 2 ? "gold" : "grey"}
                />
                <Ionicons
                  name="ios-star"
                  size={15}
                  color={parseInt(data.ratingValue) >= 3 ? "gold" : "grey"}
                />
                <Ionicons
                  name="ios-star"
                  size={15}
                  color={parseInt(data.ratingValue) >= 4 ? "gold" : "grey"}
                />
                <Ionicons
                  name="ios-star"
                  size={15}
                  color={parseInt(data.ratingValue) >= 5 ? "gold" : "grey"}
                />
              </View>

              <Text style={styles.reviews}>{data.reviews} reviews</Text>
            </View>
          </View>

          <Image
            source={{
              uri: data.user.account.photos[0]
            }}
            style={styles.portrait}
            resizeMode="contain"
          />
        </View>
        <View style={styles.separator} />
      </TouchableOpacity>
    );
  };
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    marginTop: 25
  },
  title: {
    fontSize: 19
  },
  priceTag: {
    backgroundColor: "black",
    width: 90,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 8,
    left: 8
  },
  price: {
    color: "white",
    fontWeight: "600",
    fontSize: 24
  },
  infoCard: {
    flexDirection: "row",

    flex: 1,
    marginTop: 10,
    alignItems: "center"
    /* backgroundColor: "yellow" */
  },
  reviews: {
    color: "grey"
  },
  portrait: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginLeft: 15
    /* backgroundColor: "yellow" */
  },
  separator: {
    height: 1,
    backgroundColor: "#f0f0f0",
    marginTop: 10
  }
});

export default RoomCard;
