import { Platform, StatusBar, Dimensions } from "react-native";

const isAndroid = Platform.OS === "android",
  deviceHeight = Dimensions.get("window").height,
  deviceWidth = Dimensions.get("window").width,
  Utility = {
    getStatusBarHeight() {
      if (isAndroid) {
        return 0;
      }

      if (deviceHeight === Utility.getiPhoneXDimensions().height) {
        return 44;
      }
      return 20;
    },

    getiPhoneXDimensions() {
      return { height: 812, width: 375 };
    },

    getiPhone5sDimensions() {
      return { height: 568, width: 320 };
    },

    getiPhone6sDimensions() {
      return { height: 667, width: 375 };
    },
    getYearList() {
      let d = new Date();
      let currentYear = d.getFullYear();
      let yearArr = []
      // let elementPlaceholder = { label: "Year", value: 0 }
      // yearArr.push(elementPlaceholder)
      let label = 1;
      for (let year = currentYear; year >= 1900; year--, label++) {
        let element = { label: year.toString(), value: label }
        yearArr.push(element)
      }
      return yearArr;
    },
    
  };




export default Utility;
