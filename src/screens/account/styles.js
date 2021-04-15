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
  headerImage: {
    width: px(45),
    height: px(45),
    resizeMode: 'contain',
  },

  userInfo: {
    marginTop: -px(8),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  editBtn: {
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
  editIcon: {
    width: px(18),
    height: px(18),
    resizeMode: 'contain',
  },
  avatarContain: {

  },
  avatar: {
    width: px(136),
    height: px(136),
  },

  userName: {
    ...fontWeight(20, 24, COLORS.TEXT_BLOCK),
    marginTop: px(14),
  },
  accountInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountType: {
    ...fontWeight(15, 20, COLORS.TEXT_BLOCK),
  },
  upgradeView: {
    marginLeft: px(17),
    width: px(100),
    height: px(40),
    borderRadius: px(20),
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
  upgrade: {
    ...fontWeight(15, 20, COLORS.TEXT_BLUE),
  },

  cards: {
    marginTop: px(80),
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  row: {
    marginLeft: px(20),
    marginBottom: px(20),
    width: px(158),
    height: px(156),
    borderRadius: px(18),
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
  rowImage: {
    width: px(60),
    height: px(60),
    resizeMode: 'contain',
  },
  rowText: {
    ...fontWeight(16, 22, COLORS.TEXT_BLOCK),
    marginTop: px(15),
  },
});

export default styles;
