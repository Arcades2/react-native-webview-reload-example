# react-native-webview-reload-example
Demonstrates `WebView.reload()`, which doesn't work when the initial load failed (as of v0.22)

Steps to reproduce:

1. Block your device or simulator's network connection (Airplane mode or disable connectivity)
1. Launch or reload this demo application
1. Observe the "reload" button appears
1. Re-enable the network connection
1. Press the "reload" button

Observe that "reload()" is called on the WebView, but the page does not reload.

This failure is because, internally, the `UIWebView`'s current request does not have its URL property set when the initial request fails.

This cannot be worked around by setting the React `WebView`'s URL; it doesn't reach the bridge since the value on the JS side has not changed.
