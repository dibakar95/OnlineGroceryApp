// @flow
import {Alert, Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';
import {Metrics} from './dimensions';
// let designSizeWidth = 375;
// let designSizeHeight = 812;
// $FlowFixMe Map is not recognised by Flow, why?
// const cacheMap = new Map();

/**
 * @method isIphoneX: Return true if device is Iphone X.
 */
function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896)
  );
}

// eslint-disable-next-line no-nested-ternary

/**
 * @method getWidth: Return the width according to device
 * pixel ratio.
 * @param {number} imgWidth Width in number
 */
export const getWidth = function getWidth(imgWidth: number) {
  const deviceScreenWidth = Dimensions.get('window').width;
  const orientation =
    Dimensions.get('window').width > Dimensions.get('window').height
      ? 'Landscape'
      : 'Portrait';

  let designSizeWidth;
  if (orientation === 'Landscape') {
    designSizeWidth = 812;
  } else {
    designSizeWidth = 375;
  }

  // if (cacheMap.has(`w${imgWidth}`)) {
  //   return cacheMap.get(`w${imgWidth}`);
  // }
  const requiredWidth = PixelRatio.roundToNearestPixel(
    (imgWidth / designSizeWidth) * deviceScreenWidth,
  );
  // cacheMap.set(`w${imgWidth}`, requiredWidth);
  return requiredWidth;
};

/**
 * @method getHeight: Return the height according to device
 * pixel ratio.
 * @param {number} imgHeight Height in number
 */
export const getHeight = function getHeight(imgHeight: number): number {
  const deviceHeight = Dimensions.get('window').height;

  const deviceScreenHeight = isIphoneX()
    ? deviceHeight * 0.9
    : Platform.OS === 'android'
    ? deviceHeight - StatusBar.currentHeight
    : deviceHeight;

  const orientation =
    Dimensions.get('window').width > Dimensions.get('window').height
      ? 'Landscape'
      : 'Portrait';
  let designSizeHeight;
  if (orientation === 'Landscape') {
    designSizeHeight = 375;
  } else {
    designSizeHeight = 812;
  }
  // if (cacheMap.has(`h${imgHeight}`)) {
  //   // $FlowFixMe
  //   return cacheMap.get(`h${imgHeight}`);
  // }

  const requiredHeight = PixelRatio.roundToNearestPixel(
    (imgHeight / designSizeHeight) * deviceScreenHeight,
  );
  // cacheMap.set(`h${imgHeight}`, requiredHeight);
  return requiredHeight;
};

export const getSWidth = function getSWidth(imgWidth: number) {
  const orientation =
    Dimensions.get('window').width > Dimensions.get('window').height
      ? 'Landscape'
      : 'Portrait';
  let iPhoneFiveHeight = 568,
    galaxys8Height = 740,
    iPhoneXHeight = 812;
  if (orientation === 'Landscape') {
    (iPhoneFiveHeight = 320), (galaxys8Height = 360), (iPhoneXHeight = 375);
  }

  const smallHeight = Metrics.screenHeight <= iPhoneFiveHeight;
  const mediumHeight =
    Metrics.screenHeight > iPhoneFiveHeight &&
    Metrics.screenHeight <= galaxys8Height;
  const largeHeight =
    Metrics.screenHeight > galaxys8Height &&
    Metrics.screenHeight < iPhoneXHeight;
  const xLargeHeight = Metrics.screenHeight >= iPhoneXHeight;
  let returnWidth = 0;
  const width = Number(getWidth(imgWidth));
  if (smallHeight) {
    returnWidth = width * 0.92;
  } else if (mediumHeight) {
    returnWidth = width * 0.95;
  } else if (largeHeight) {
    returnWidth = width * 0.975;
  } else {
    returnWidth = width;
  }
  return returnWidth;
};

export const getSHeight = function getSHeight(imgHeight: number): number {
  let iPhoneFiveHeight = 568,
    galaxys8Height = 740,
    iPhoneXHeight = 812;

  const orientation =
    Dimensions.get('window').width > Dimensions.get('window').height
      ? 'Landscape'
      : 'Portrait';

  if (orientation === 'Landscape') {
    (iPhoneFiveHeight = 320), (galaxys8Height = 360), (iPhoneXHeight = 375);
  }
  let returnHeight = 0;
  const smallHeight = Metrics.screenHeight <= iPhoneFiveHeight;
  const mediumHeight =
    Metrics.screenHeight > iPhoneFiveHeight &&
    Metrics.screenHeight <= galaxys8Height;
  const largeHeight =
    Metrics.screenHeight > galaxys8Height &&
    Metrics.screenHeight < iPhoneXHeight;
  const xLargeHeight = Metrics.screenHeight >= iPhoneXHeight;
  const height = Number(getHeight(imgHeight));
  if (smallHeight) {
    returnHeight = height * 0.78;
  } else if (mediumHeight) {
    returnHeight = height * 0.84;
  } else if (largeHeight) {
    returnHeight = height * 0.92;
  } else {
    returnHeight = height;
  }
  return returnHeight;
};

export const responsiveSize = size => {
  const responsiveValue = Metrics.screenWidth / 480;
  return size * responsiveValue;
};
