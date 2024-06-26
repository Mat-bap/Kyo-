import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

const Categories = () => {

  return (
  <SafeAreaView style={styles.container}> 

      <Text style={styles.txt}> 
        matbab
      </Text>
      <Text style={styles.txtSm}> 
        오늘 뭐 먹지..
      </Text>

  </SafeAreaView>
 
  )
}

const styles = StyleSheet.create({

  container:{
      height: '100%',
      width:'100%',
      backgroundColor: '#fff',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      marginTop: 325
  }, 
  txt:{
      fontSize: 43,
      textAlign: 'center'
  },
  txtSm:{
      fontSize: 22,
      textAlign: 'center'
  },

})

export default Categories;
