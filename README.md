# Expo Router Example

React Native App for cataloguing users Media.

![Main Screen](preview.gif) / ![](preview.gif)


## 🚀 How to use

Runs expo dev build on ios.

```sh
npm install
```

```sh
npx expo run:ios
```

## 🚀 Implementation comments

- App uses Mobx State Tree as a state management solution `./store/photos` and `./store/videos` for data models.

- API used: 
[Photo Timeline](https://api.slingacademy.com/v1/sample-data/photos) - uses Axios to fetch the data
[Video and Photo Timeline](./mock/api.json) - fetches data locally due to 429 error code on the original API

- Uses Video Component `react-native-video`

- [Expo Router: Docs](https://docs.expo.dev/router/introduction/)

## 📝 Todo

- implement `handleNavigate` on individual Pictures/ Videos - redirecting to the new page - card-details (partial implementation currently).

- start/stop videos based on scroll. [potential solution] (npm install @svanboxel/visibility-sensor-react-native)

- video loading animation.

- test on Android.

- remove `./hook` folder used for a test API implementation before integrating MST.

- clean test and refactor.


## 📝 Biggest blockers resolved

- https://stackoverflow.com/questions/54440051/module-not-found-error-cant-resolve-react-native-libraries-image-resolveasse - on rendering the `<Video/>` and any similar video libraries, which required me to go down the endless path of reinstalling my libraries, xcode, Cocoappods, in order to move to Expo dev build, which resolved the issue. Initially I started developing in Expo - due to huge issues with Cocoapods setup trying to develop natively, though ultimately I was forced to resolved and sacrificed multiple hours to figuring it out. 

- Obtaining 429 error code on the clients API and mildly changing the structure of the assignment to ensure the project where I can demonstrate my skills - ie fetching the data. I decided to use an extra API to demostrate my knowledge of Axios, as well as to practice utilising MST. 

- Learning Mobx and MST from skratch.

- Overall debugging. 



