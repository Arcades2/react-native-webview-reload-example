# WebView.reload() example
Demonstrates how `WebView.reload()` is broken when the initial load fails.

### Branches

| Branch | `react-native` version |
|---|---|
| master | [facebook/react-native#master](https://github.com/facebook/react-native/tree/master) |
| fixed | [jballer/react-native#fixed](https://github.com/facebook/react-native/compare/master...jballer:fixWebView) |

*Note: You need to run `npm install` after switching branches*

### Steps to reproduce:

1. Block your device or simulator's network connection (Airplane mode or disable connectivity)
1. Launch or reload this demo application
1. Observe the "reload" button appears
1. Re-enable the network connection
1. Press the "reload" button