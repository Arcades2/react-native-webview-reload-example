/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  WebView
} from 'react-native';

const WEBVIEW_REF = 'webview';

class WebViewReloadAfterInitialFailDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uri: 'https://www.reactnative.com'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          ref={WEBVIEW_REF}
          source={{uri: this.state.uri}}
          style={{flex: 1}}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          renderError={this.renderError.bind(this)}
          startInLoadingState={true}
        />
      </View>
    );
  }

  renderError(errorDomain, errorCode, errorDesc) {
    return (
      <View style={styles.error}>
        <TouchableOpacity style={styles.button}>
          <Text style={{color:'white'}} onPress={this.reloadWebView.bind(this)}>Reload</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{color:'white'}} onPress={this.resetURL.bind(this)}>Reset URL</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onNavigationStateChange(navState) {
    this.setState({lastNavURL: navState.url});
  }

  reloadWebView() {
    this.refs[WEBVIEW_REF].reload();
  }

  resetURL() {
    this.setState({uri: this.state.lastNavURL});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  error: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#FF0000',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 3
  }
});

AppRegistry.registerComponent('WebViewReloadAfterInitialFailDemo', () => WebViewReloadAfterInitialFailDemo);
