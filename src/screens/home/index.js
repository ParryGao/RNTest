import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import styles from './styles';

const Home = () => (
  <View style={styles.contain}>
    <View style={styles.header}>
      <Text style={styles.headerText}>€ • EUR</Text>
      <View style={styles.headerCenter}>
        <Text style={styles.headerCenterText}>$ • USD</Text>
      </View>
      <Text style={styles.headerText}>£ • GBP</Text>
    </View>
    <Text style={styles.money}>{'$7\'265.50'}</Text>
    <Text style={styles.unit}>in USD • US dollar</Text>
    <Text style={styles.subMoney}>{'$15\'320.00'}</Text>
    <Text style={styles.subUnit}>total in USD equivalent</Text>
    <View style={styles.tempView}>
      <Text style={styles.tempText}>There is no Icon</Text>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.sectionText}>TODAY</Text>
      <View style={styles.row}>
        <View style={styles.rowImageContain}>
          <Image style={styles.rowImage} source={{ uri: '' }} />
        </View>
        <View style={styles.rowContent}>
          <Text style={styles.rowTitle}>Pandora</Text>
          <Text style={styles.rowSubTitle}>Monthly subscription</Text>
        </View>
        <Text style={styles.rowMoney}>$5.00</Text>
      </View>
      <Text style={styles.sectionText}>YESTERDAY</Text>
      <View style={styles.row}>
        <View style={styles.rowImageContain}>
          <Image style={styles.rowImage} source={{ uri: '' }} />
        </View>
        <View style={styles.rowContent}>
          <Text style={styles.rowTitle}>Jessica Reynols</Text>
          <Text style={styles.rowSubTitle}>Payaback time :)</Text>
        </View>
        <Text style={styles.rowMoney}>$3.65</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.rowImageContain}>
          <Image style={styles.rowImage} source={{ uri: '' }} />
        </View>
        <View style={styles.rowContent}>
          <Text style={styles.rowTitle}>Exchange</Text>
          <Text style={styles.rowSubTitle}>USD to EUR</Text>
        </View>
        <Text style={styles.rowMoney}>$129.00</Text>
      </View>
    </ScrollView>
  </View>
);

export default Home;
