What platform(s) does this occur on?

iOS

Where did you reproduce the issue?

in a development build

Summary

Description:

I've discovered that the onMarkerClick callback function is not triggering when markers are clicked in AppleMaps.View component from the expo-maps package (alpha version). I know it is an alpha version packaged but I've been exploring using it for a new app.

Expected Behavior:

When clicking on a marker on the map, the onMarkerClick callback should be triggered, executing the provided function.

Actual Behavior:

Marker clicks do not trigger the onMarkerClick callback. No console logs appear and no functions execute when markers are tapped.

Reproduction Steps:

Create a React Native project with Expo
Install expo-maps: npx expo install expo-maps
Set up an AppleMaps.View with markers and an onMarkerClick handler
Run the app and try to click on markers✱**
Since expo-maps is in alpha, I understand there may be bugs like this. Any guidance on potential workarounds or expected timeline for a fix would be appreciated.

Environment

expo-env-info 1.2.2 environment info:
    System:
      OS: macOS 15.4
      Shell: 5.9 - /bin/zsh
    Binaries:
      Node: 22.14.0 - /usr/local/bin/node
      Yarn: 1.22.22 - /usr/local/bin/yarn
      npm: 10.9.2 - /usr/local/bin/npm
      Watchman: 2025.02.17.00 - /opt/homebrew/bin/watchman
    Managers:
      CocoaPods: 1.16.2 - /opt/homebrew/bin/pod
    SDKs:
      iOS SDK:
        Platforms: DriverKit 24.4, iOS 18.4, macOS 15.4, tvOS 18.4, visionOS 2.4, watchOS 11.4
      Android SDK:
        API Levels: 34, 35
        Build Tools: 34.0.0, 35.0.0, 36.0.0, 36.0.0, 36.0.0
        System Images: android-34 | Google Play ARM 64 v8a, android-35 | Google Play ARM 64 v8a, android-35 | Pre-Release 16 KB Page Size Google Play ARM 64 v8a
    IDEs:
      Android Studio: 2024.2 AI-242.23339.11.2421.12550806
      Xcode: 16.3/16E140 - /usr/bin/xcodebuild
    npmPackages:
      expo: ~52.0.43 => 52.0.44 
      react: 18.3.1 => 18.3.1 
      react-native: 0.76.9 => 0.76.9 
    npmGlobalPackages:
      eas-cli: 16.2.1
      expo-cli: 6.3.12
    Expo Workflow: bare
Expo Doctor Diagnostics

15/15 checks passed. No issues detected!
