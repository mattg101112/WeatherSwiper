import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import SwipeCard from './SwipeCard';

const data = [
  { name: 'User 1', image: require('./images/image1.jpg') },
  { name: 'User 2', image: require('./images/image2.jpg') },
  { name: 'User 3', image: require('./images/image3.jpg') },
  // Add more card data here
];

const SwipeCardsScreen = () => {
  const [cards, setCards] = useState(data);

  const handleYup = () => {
    // Handle right swipe action
  };

  const handleNope = () => {
    // Handle left swipe action
  };

  return (
    <View style={styles.container}>
      <SwipeCards
        cards={cards}
        renderCard={(cardData) => <SwipeCard data={cardData} />}
        stack={false}
        showYup={true}
        showNope={true}
        handleYup={handleYup}
        handleNope={handleNope}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SwipeCardsScreen;