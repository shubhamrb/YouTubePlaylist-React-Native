// screens/Video.js
import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import WebView from 'react-native-webview';
export default class WatchVideo extends React.Component {
  home() {
    Actions.home();
  }
  videos() {
    Actions.videos();
  }
  constructor(props) {
    super(props);
    // console.log(this.props);
  }
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        {
          <WebView
            source={{
              uri: 'https://www.youtube.com/watch?v=' + this.props.video_url,
            }}
            startInLoadingState={true}
          />
        }
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
