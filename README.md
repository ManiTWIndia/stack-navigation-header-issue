This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

### Stack navigation Header issue

This issue happens only in React native new architecture. When headerShown is false or custom header is passed, in the select component used (react-native-modal-dropdown) the dropdown opens at expected position.  

But by default when no options are passed, the dropdown opens at a position above the expected one and the difference between the expected and actual position is the header height. This is not narrowed down to the select component alone. This also happens for popover component (react-native-popover-view). We have narrowed it down to the default header used in the @react-navigation/stack but not able to debug further.

Dropdown and popover components opening at incorrect position when using default header in React Navigation 6 stack
Environment:

React Native version: 0.73.6
@react-navigation/stack version: 6.3.28
React Native new architecture: Fabric
Device/OS: iOS

Issue Description:

When using the default header in @react-navigation/stack:

Dropdown components (react-native-modal-dropdown) open at a position shifted above the expected position by the header height.
Popover components (react-native-popover-view) exhibit the same behavior.

Additional Observations:
The issue does not occur when:
headerShown is set to false.
A custom header is provided.

Steps to Reproduce:
https://github.com/ManiTWIndia/stack-navigation-header-issue

Dropdown and popover components should open at the correct position, aligned with the trigger element, regardless of header settings.
Request for Assistance:

Request guidance on how to debug this issue further to pinpoint the exact cause.
If it's a bug in @react-navigation/stack, request a fix.

Appreciation:
Thank the maintainers for their time and consideration.