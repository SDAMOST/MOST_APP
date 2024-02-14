# MOST APP

## How to start on Windows
### Install dependencies 
````bash
npm install
````

### Enable Wi-Fi debugging
#### 1. Connect your physical device via USB
#### 2. Add this script to your package.json file in "scripts" (remember to enter your physical device IP without "\<", "\>"):
```json
"android-wifi": "adb kill-server && adb tcpip 5555 && adb connect <your physical device IP>:5555 && adb devices"
```
#### 3. Connect to your physical device using ADB:
````bash
npm run android-wifi
````
If everything went correctly, you should see an output:
````bash
List of devices attached
<your physical device IP>:5555       device
````

### Run project
````bash
npm start
````
Wait until you see the menu:
````bash
i - run on iOS
a - run on Android
d - open Dev Menu
r - reload app
````
And press "i" or "a" (depends on your physical device system)

## Initial setup tutorial
https://youtu.be/8ejuHsaXiwU?si=8t_omEmthRKRsQYB (we use JDK 17 instead 11)

#### How to enable Wi-Fi debugging
https://bobbertoc.medium.com/debugging-android-wirelessly-for-react-native-made-easy-6461c36ac38b
