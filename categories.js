import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';

const cat = ['한식', '중식', '양식', '일식', '분식', '이국식', '편의점'];

const Content = props => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleButton = () => {
    setIsEnabled(!isEnabled);
    
  };

  return (
    <TouchableOpacity style={[styles.category, {backgroundColor: isEnabled ? "white" : "#f9ebea"}, {borderColor: isEnabled? "red": "#c0392b"}]} onPress={toggleButton} >
      <Text numberOfLines={1} style={{fontSize: 15}}>
        {props.type}
      </Text>
    </TouchableOpacity>
  );
};

const Categories = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={{ marginHorizontal: 3, marginBottom: 30 }}>
      <Content type={item} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}> 
      {/* 완료 버튼 */}
      <TouchableOpacity style={styles.top} onPress={()=> navigation.navigate('Random')}>
        <Text style={styles.txt}>완료</Text>
      </TouchableOpacity>

      <View style={styles.entertain}>
      </View>
      <Text style={styles.bigTxt}>
        카테고리
      </Text>
      <View style={styles.line}>
      </View>

      {/* 카테고리 버튼 */}
      <FlatList 
        style={styles.categoryView}
        data={cat}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        numColumns={5}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 5,
  }, 
  categoryView: {
    flex: 1,
    marginTop: 37,
    alignItems: 'center',
  },
  category: {
    //backgroundColor: 'white',
    borderRadius: 25,
    borderColor: 'red',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 14,
    marginHorizontal: 4,
    marginTop: 30
  },
  top: {
    alignItems: 'flex-end',
    marginRight: 20,
    marginTop: 40,
  },
  txt: {
    fontSize: 15,
  },
  entertain: {
    width: '100%', 
    height: 240, 
    marginTop: 22,
    backgroundColor: 'pink',
  },
  bigTxt: {
    fontSize: 20,
    marginLeft: 15,
    marginTop: 20,
  },
  line: {
    width: '100%', 
    height: 2, 
    marginTop: 18,
    backgroundColor: '#f2f3f4',
  },
});

export default Categories;
