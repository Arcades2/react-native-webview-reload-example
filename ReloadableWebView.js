import React, {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  WebView
} from 'react-native';

const WEBVIEW_REF = 'webview';

var ReloadableWebView = React.createClass({

  render() {
    return (
      <View style={styles.container}>
        <WebView
          ref={WEBVIEW_REF}
          source={{uri: 'https://www.reactnative.com'}}
          style={{flex: 1}}
          renderError={this.renderError}
          startInLoadingState={true}
        />
      </View>
    );
  },

  renderError(errorDomain, errorCode, errorDesc) {
    return (
      <View style={styles.error}>
        <TouchableOpacity style={styles.button}>
          <Text style={{color:'white'}} onPress={this.reload}>Reload</Text>
        </TouchableOpacity>
      </View>
    );
  },

  reload() {
    this.refs[WEBVIEW_REF].reload();
  }

});

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


module.exports = ReloadableWebView;
