import {
  StyleSheet,
} from 'react-native';
import { px } from 'helpers/px';
import { COLORS, fontStyle, fontWeight, statusBarHeight, WIDTH, HEIGHT } from 'resources/global-styles';

const styles = StyleSheet.create({
  contain: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: HEIGHT,
  },
  header: {
    width: '100%',
    height: statusBarHeight + px(40),
    paddingTop: statusBarHeight,
    paddingHorizontal: px(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    ...fontStyle(15, 18, COLORS.TEXT),
  },
  headerCenter: {
    width: px(90),
    height: px(40),
    borderRadius: px(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BLUE,
  },
  headerCenterText: {
    ...fontStyle(15, 18, COLORS.WHITE),
  },

  money: {
    ...fontWeight(40, 48, COLORS.TEXT),
    marginTop: px(50),
  },
  unit: {
    ...fontWeight(14, 19, COLORS.TEXT),
    marginTop: px(5),
  },
  subMoney: {
    ...fontWeight(20, 24, COLORS.TEXT),
    marginTop: px(38),
  },
  subUnit: {
    ...fontWeight(14, 19, COLORS.TEXT),
    marginTop: px(5),
  },
  tempView: {
    marginTop: px(15),
    marginBottom: px(20),
    width: '100%',
    height: px(80),
    backgroundColor: COLORS.BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempText: {
    ...fontStyle(15, 18, COLORS.TEXT),
  },
  sectionText: {
    ...fontStyle(13, 18, COLORS.TEXT),
    marginBottom: px(18),
    marginLeft: px(20),
  },
  row: {
    marginBottom: px(38),
    width: WIDTH,
    paddingHorizontal: px(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowImageContain: {
    width: px(44),
    height: px(44),
    borderRadius: px(15),
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
    width: '100%',
    height: '100%',
  },
  rowContent: {
    flex: 1,
    paddingLeft: px(16),
  },
  rowTitle: {
    ...fontWeight(16, 22, COLORS.TEXT_BLOCK),
  },
  rowSubTitle: {
    ...fontStyle(14, 19, COLORS.TEXT_GRAY),
    marginTop: px(2),
  },
  rowMoney: {
    ...fontWeight(16, 19, COLORS.TEXT_WEIGHT),
  },
});

export default styles;
