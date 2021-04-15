import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const TabItem = ({
  icon,
  selected,
  onPress,
}) => (
  <TouchableOpacity style={styles.tabItem} onPress={onPress}>
    <Image style={[styles.tabItemIcon, icon === 'add' ? styles.exchangeIcon : null]} source={{ uri: selected ? `${icon}_selected` : icon }} />
  </TouchableOpacity>
);

export default TabItem;
