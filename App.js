/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import {WebView} from 'react-native-webview';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const {width, height} = Dimensions.get('window');

const App = () => {
  return (
    <Fragment>
      <StatusBar backgroundColor='#ff0000'
                 translucent={true}
                 hidden={true}
                 animated={true} />
      <SafeAreaView>
        {/*<ScrollView*/}
        {/*  contentInsetAdjustmentBehavior="automatic"*/}
        {/*  style={styles.scrollView}>*/}
          <View style={{width: width, height: height}}>
            {/*<WebView source={{ uri: 'https://facebook.github.io/react-native/' }} />*/}
            <WebView source={{uri: 'http://80jub.cn/app/index.php?i=1&c=entry&do=index&m=tiger_newhu'}}/>
          </View>
        {/*</ScrollView>*/}
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
