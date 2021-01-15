import React,{useState} from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function category() {

  const [catergoryIndex, setCategoryIndex] = useState(0);

    const categories = ['CATEGORIES','BRANDS','PROMOTIONS'];

    return(
        <View style={styles.catContainer}>
            {categories.map((item, index) => (
            <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => setCategoryIndex(index)}>
                <Text
                    style={[
                        styles.categoryText,
                        catergoryIndex === index && styles.categoryTextSelected,
                    ]}>
                    {item}
                </Text>
            </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    catContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'#F2F2F2',
        width:wp(100),
        height:hp(8),
        alignItems:'center',
        paddingHorizontal:hp(3)
    },
    categoryText: {
        fontSize: 14, 
        color: 'grey', 
    },
    categoryTextSelected: {
        color: 'green',
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderColor: 'green',
      },
})
