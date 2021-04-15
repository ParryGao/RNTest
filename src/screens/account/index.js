import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const Account = () => (
  <View style={styles.contain}>
    <View style={styles.header}>
      <TouchableOpacity>
        <Image style={styles.headerImage} source={{ uri: 'left_icon' }} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.headerImage} source={{ uri: 'right_icon' }} />
      </TouchableOpacity>
    </View>

    <View style={styles.userInfo}>
      <TouchableOpacity style={styles.editBtn}>
        <Image style={styles.editIcon} source={{ uri: '' }} />
      </TouchableOpacity>
      <View style={styles.avatarContain}>
        <Image style={styles.avatar} source={{ uri: 'userpic' }} />
      </View>
      <TouchableOpacity style={styles.editBtn}>
        <Image style={styles.editIcon} source={{ uri: '' }} />
      </TouchableOpacity>
    </View>
    <Text style={styles.userName}>Richard Jefferson</Text>
    <View style={styles.accountInfo}>
      <Text style={styles.accountType}>standart account</Text>
      <View style={styles.upgradeView}>
        <Text style={styles.upgrade}>upgrade</Text>
      </View>
    </View>

    <View style={styles.cards}>
      {
        [
          { icon: '', title: 'Insurance' },
          { icon: '', title: 'Savings' },
          { icon: '', title: 'Credit' },
          { icon: '', title: 'Investments' },
        ].map((item) => (
          <TouchableOpacity style={styles.row} key={item.title}>
            <Image style={styles.rowImage} source={{ uri: item.icon }} />
            <Text style={styles.rowText}>{item.title}</Text>
          </TouchableOpacity>
        ))
      }
    </View>
  </View>
);

export default Account;
