import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './styles';

const Exchange = () => {
  const navigation = useNavigation();
  const [money, setMoney] = useState('250');

  return (
    <View style={styles.contain}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.headerImage} source={{ uri: 'close' }} />
        </TouchableOpacity>
        <Text style={styles.title}>Exchange</Text>
        <TouchableOpacity>
          <Image style={styles.headerImage} source={{ uri: 'exponent' }} />
        </TouchableOpacity>
      </View>

      <View style={styles.exchangeItem}>
        <View style={styles.exchangeItemLeft}>
          <TouchableOpacity style={styles.currencySelect}>
            <Text style={styles.accountType}>USD</Text>
          </TouchableOpacity>
          <Text style={styles.current}>Current: $1568 </Text>
          <Text style={styles.new}>New: $1318 </Text>
        </View>
        <TextInput
          style={styles.input}
          value={money}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setMoney(text)}
          keyboardType="numeric"
          placeholder="input"
          autoFocus
        />
      </View>

      <View style={styles.separa} />
      <View style={styles.translateView}>
        <View style={styles.proportionView}>
          <Text style={styles.proportionText}>$1 = €0.86 </Text>
        </View>
        <TouchableOpacity style={styles.proportionBtn}>
          <Image style={styles.proportionIcon} source={{ uri: '' }} />
        </TouchableOpacity>
      </View>

      <View style={[styles.exchangeItem, styles.exchangeItemBottom]}>
        <View style={styles.exchangeItemLeft}>
          <TouchableOpacity style={styles.currencySelect}>
            <Text style={styles.accountType}>EUR</Text>
          </TouchableOpacity>
          <Text style={styles.current}>Current: €2761</Text>
          <Text style={styles.new}>New: €2977</Text>
        </View>
        <Text style={styles.toMoney}>215.60</Text>
      </View>

      <TouchableOpacity style={styles.exchangeBtn}>
        <Text style={styles.exchangeText}>Exchange</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Exchange;
