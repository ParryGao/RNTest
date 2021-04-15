import {
  StyleSheet,
} from 'react-native';
import { px } from 'helpers/px';
import { COLORS, fontStyle, fontWeight, HEIGHT, statusBarHeight, WIDTH } from 'resources/global-styles';

const styles = StyleSheet.create({
  contain: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: HEIGHT,
  },
  header: {
    width: '100%',
    height: statusBarHeight + px(44),
    paddingTop: statusBarHeight,
    paddingHorizontal: px(7),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    ...fontStyle(17, 24, COLORS.TEXT_BLOCK),
  },
  headerImage: {
    width: px(45),
    height: px(45),
    resizeMode: 'contain',
  },

  exchangeItem: {
    width: '100%',
    height: px(175),
    paddingHorizontal: px(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exchangeItemBottom: {
    marginTop: -px(22),
    height: px(260),
    backgroundColor: '#F2F8FF',
  },
  exchangeItemLeft: {

  },
  currencySelect: {

  },
  accountType: {
    ...fontWeight(30, 36, COLORS.TEXT),
  },
  current: {
    ...fontStyle(14, 19, COLORS.TEXT_GRAY),
    marginTop: px(6),
  },
  new: {
    ...fontStyle(14, 19, COLORS.TEXT_GRAY),
    marginTop: px(4),
  },

  separa: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.BLUE_LIGHT,
  },
  translateView: {
    marginTop: -px(22),
    width: '100%',
    paddingHorizontal: px(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
  proportionView: {
    width: px(102),
    height: px(44),
    borderRadius: px(12),
    borderWidth: 1,
    borderColor: COLORS.BLUE_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
  },
  proportionBtn: {
    width: px(44),
    height: px(44),
    borderRadius: px(6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
    shadowColor: 'rgba(42,55,71,0.15)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 4,
  },
  proportionIcon: {
    width: px(19),
    height: px(16),
  },

  input: {
    padding: 0,
    width: px(200),
    height: px(40),
    fontSize: px(30),
    fontWeight: '600',
    color: COLORS.TEXT_BLOCK,
    textAlign: 'right',
  },
  toMoney: {
    ...fontWeight(30, 36, COLORS.TEXT_BLOCK),
  },

  exchangeBtn: {
    marginTop: -px(48),
    width: px(311),
    height: px(48),
    borderRadius: px(24),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4A98F7',
  },
  exchangeText: {
    ...fontStyle(16, 19, COLORS.WHITE),
  },
});

export default styles;
