# firebaseToCSV
## Create firebase file
Add a file in root directory named firebase.js and paste this code with your credentials. (This was created to help Gluco-log but can be used as reference.)

```

const firebase=require('firebase/app')
const firestore=require('firebase/firestore')
const authentication=require('firebase/auth')
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore()
const auth=firebaseApp.auth()

// export {db,auth}
module.exports={db,auth}
```
