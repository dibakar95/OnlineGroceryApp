import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native';
import {Banana} from '../../assets/images';
import {Fonts, FontSize} from '../../theme';
import {getWidth} from '../../utils';
import {Data} from '../home/components/data'


const Item = ({ items,color,fruit,price, }) => (
    <View style={styles.mainContainerFlat}>
    <Text style={{...styles.fruitsText,color:`${color}`}}>{fruit}</Text>
    <Text style={{...styles.fruitsItem,color:`${color}`}}>{items}</Text>
    <View style={styles.fruitsPriceContainer}>
      <Text style={{...styles.fruitsPrice,color:`${color}`}}>Rs{price}</Text>
      <TouchableOpacity style={styles.button}>
        <View style={styles.plus1} />
        <View style={styles.plus2} />
      </TouchableOpacity>
    </View>
  </View>
  );
  


const HomeContainer = props => {
    const renderItem = ({ item}) => (
        <Item items={item.items} fruit={item.fruit} price={item.price} color={item.color} id={item.id} />
      );

  return (
<SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.search}>
          <View style={styles.search1} />

          <TextInput
            style={styles.searchInput}
            placeholderTextColor="#7C7C7C"
            placeholder="Search Store"
          />
        </View>
        </View> 

 <View style={{marginTop:getWidth(60),marginBottom:10}}>

        <FlatList
        bounces={false}
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
</View>
    

      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  search: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop:getWidth(10)
  },
  search1: {
    width: getWidth(30),
    height: getWidth(35),
    backgroundColor: 'darkgrey',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  searchInput: {
    width: getWidth(300),
    height: getWidth(35),
    backgroundColor: 'darkgrey',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  mainContainerFlat: {
   
    width: getWidth(173),
    backgroundColor: 'darkgrey',
    height: getWidth(180),
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderRadius: 10,
    marginTop:30,
    marginLeft:10
    
    
  },
  fruitsText: {
    fontSize: 20,
    fontFamily: Fonts.MontserratBold,
    alignSelf: 'center',
  },
  fruitsItem: {
    fontSize: 18,
    fontFamily: Fonts.MontserratBold,
    alignSelf: 'center',
  },
  fruitsPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  fruitsPrice: {
    fontSize: 18,
    fontFamily: Fonts.MontserratBold,
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: 'green',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus1: {
    width: 20,
    height: 2,
    backgroundColor: 'white',
  },
  plus2: {
    width: 2,
    height: 20,
    backgroundColor: 'white',
    position: 'absolute',
  },
});
export default HomeContainer;


