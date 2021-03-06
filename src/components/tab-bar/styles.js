import {
  StyleSheet,
} from 'react-native';
import { px } from 'helpers/px';
import { COLORS, extraFooterHeight } from 'resources/global-styles';

const styles = StyleSheet.create({
  tabBar: {
    width: '100%',
    height: px(50) + extraFooterHeight,
    paddingBottom: extraFooterHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: COLORS.WHITE,
    shadowColor: 'rgba(166,179,194,0.3)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 14,
    elevation: 4,
  },
  tabItem: {
    flex: 1,
    height: '100%',
    marginHorizontal: px(12),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItemIcon: {
    width: px(20),
    height: px(20),
    resizeMode: 'contain',
  },
  exchangeIcon: {
    width: px(28),
    height: px(28),
    resizeMode: 'contain',
  },
});

export default styles;
