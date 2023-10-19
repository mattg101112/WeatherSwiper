import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';

const SwipeCard = ({ data }) => {
  return (
    <Card containerStyle={styles.cardContainer}>
      <Image style={styles.cardImage} source={data.image} />
      <Text style={styles.cardText}>{data.name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    borderWidth: 0,
    marginBottom: 20,
  },
  cardImage: {
    height: 300,
    width: 300,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 24,
  },
});

export default SwipeCard;
//this is a comment