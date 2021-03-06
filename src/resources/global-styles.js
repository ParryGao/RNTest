/* eslint-disable indent */
import {
  Dimensions,
  Platform,
} from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { px } from 'helpers/px';

export const COLORS = {
  WHITE: '#ffffff',
  TEXT: '#1F3F66',
  TEXT_BLOCK: '#242B33',
  TEXT_WEIGHT: '#1F2833',
  TEXT_GRAY: '#8A9199',
  TEXT_BLUE: '#3872BA',
  BLUE: '#4A98F7',
  BLUE_LIGHT: '#B4D3FA',
  GRAY_BG: '#f0f0f0',
};

export const rgba = (colorVariable, alpha) => {
  if (!COLORS[colorVariable]) {
    return colorVariable;
  }
  const conv = (n) => parseInt(n, 16);
  const color = COLORS[colorVariable].replace('#', '');
  return `rgba(${conv(color.substr(0, 2))
    }, ${conv(color.substr(2, 2))
    }, ${conv(color.substr(4, 2))
    }, ${alpha})`;
};

export const fontStyle = (size, lineHeight, color) => {
  const style = {
    fontSize: px(size),
    color: color || COLORS.BLACK,
    fontWeight: '400',
  };
  if (lineHeight && lineHeight !== size) {
    style.lineHeight = px(lineHeight);
  }
  return style;
};

export const fontWeight = (size, lineHeight, color, weight = 'bold') => {
  const weightMapping = {
    heavy: '900',
    bold: '600',
    demi: '500',
  };
  const style = {
    fontSize: px(size),
    fontWeight: weightMapping[weight] || weightMapping.bold,
    color: color || COLORS.BLACK,
  };
  if (lineHeight && lineHeight !== size) {
    style.lineHeight = px(lineHeight);
  }
  return style;
};

export const statusBarHeight = Platform.OS === 'ios' ? ifIphoneX(44, 20) : 0;
export const extraFooterHeight = ifIphoneX(30, 0);

const window = Dimensions.get('window');
export const WIDTH = window.width;
export const HEIGHT = window.height;

export const SIZES = {
  WIDTH,
  HEIGHT,
  HEADER_H: px(50) + statusBarHeight,
};
