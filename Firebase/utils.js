// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app' 
import 'firebase/compat/auth' 
import 'firebase/compat/firestore'
import { useDispatch } from 'react-redux';
useDispatch
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZGsb2ZKIKcOTSr6SaHvzKqPDJMMLOfKI",
  authDomain: "td-fitness-d3ea5.firebaseapp.com",
  projectId: "td-fitness-d3ea5",
  storageBucket: "td-fitness-d3ea5.appspot.com",
  messagingSenderId: "619514090086",
  appId: "1:619514090086:web:055d577269f357c2d013a7"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const handleSignUp = ({ displayName, email, password, confirmPassword}) => {
  console.log(displayName)
    auth.createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
        const { user } = userCredentials
        console.log(user)
        handleUserProfile({userAuth: user, additionalData:{ displayName }})
    }).catch(error => {console.log(error.message)})
}

export const handleUserProfile = async({ userAuth, additionalData }) => {
  if(!userAuth) return

  const { uid } = userAuth

  const userRef = firestore.doc(`users/${uid}`)

  const snapshot = await userRef.get()

  if(!snapshot.exists){
      const { displayName, email } = userAuth
      const timeStamp = new Date()
      const userRoles = ['user']
      try{
          await userRef.set({
              displayName,
              email,
              createdDate: timeStamp,
              userRoles,
              ...additionalData
          })
      }catch(err){
          console.log(err)
      }
  }
  return userRef
}

export const emailSignIn = async ({email, password}) => {
  try{
    const { user } = await auth.signInWithEmailAndPassword(email, password)
    const userRef = await handleUserProfile({userAuth: user})
    const snapshot = await userRef.get()
    return ({id: snapshot.id, ...snapshot.data()})
  }catch(error){
    console.log(error)
  }
}

export const signOut = async () => {
  try{
    auth.signOut()
  }catch(error){
    console.log(error)
  }
}

// Object {
//   "_redirectEventId": undefined,
//   "apiKey": "AIzaSyBZGsb2ZKIKcOTSr6SaHvzKqPDJMMLOfKI",
//   "appName": "[DEFAULT]",
//   "createdAt": "1652831476040",
//   "displayName": undefined,
//   "email": "ghhshdjd@hdjdjd.comg",
//   "emailVerified": false,
//   "isAnonymous": false,
//   "lastLoginAt": "1652831476040",
//   "phoneNumber": undefined,
//   "photoURL": undefined,
//   "providerData": Array [
//     Object {
//       "displayName": null,
//       "email": "ghhshdjd@hdjdjd.comg",
//       "phoneNumber": null,
//       "photoURL": null,
//       "providerId": "password",
//       "uid": "ghhshdjd@hdjdjd.comg",
//     },
//   ],
//   "stsTokenManager": Object {
//     "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY5N2Q3ZmI1ZGNkZThjZDA0OGQzYzkxNThiNjIwYjY5MTA1MjJiNGQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdGQtZml0bmVzcy1kM2VhNSIsImF1ZCI6InRkLWZpdG5lc3MtZDNlYTUiLCJhdXRoX3RpbWUiOjE2NTI4MzE0NzYsInVzZXJfaWQiOiJseVhKWUJJUjhPWlpOUjFvVnl0ckQ1QUVETVMyIiwic3ViIjoibHlYSllCSVI4T1paTlIxb1Z5dHJENUFFRE1TMiIsImlhdCI6MTY1MjgzMTQ3NiwiZXhwIjoxNjUyODM1MDc2LCJlbWFpbCI6ImdoaHNoZGpkQGhkamRqZC5jb21nIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImdoaHNoZGpkQGhkamRqZC5jb21nIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Fos5nKeYfK4QMULByWBG_rTiKIXOQ8CzjOULFLv9xSzflUi5V-lSiybBszRqBDC-aKCzVwAJAj1Z-lNFTLFnfh-yFCrXfsbpBu8v_EBNgjSDrtw4Gyb6Hqx0hyi64BiiBKZgRm0ZFXjs8Qhmqvbu-EewXEIMpBf2sHy7FQtAUQLlVKblzISTsddHrYzh0biETNjsbVIvlEoQ30JmfW__baJHih0yqNV4px3447lKxHNJisj6k3xK1oBba2e-TaunW9lU9Kck5tViJsBs_ctxaJqrSDqvf1nK-D-yycK05XfTGe7AcDRpY6YUTv3VawL_UJuev5gglepOY9NNiVSRmg",
//     "expirationTime": 1652835076325,
//     "refreshToken": "AIwUaOkCaqU_3WEP4Jvk6usSyA90T6OunZM0RCn20sYyvprK04tdjxzefmjOmPEi_LjNxqt7bOqJCyXAKmSsl-ZdbyoVYrWBnOblb3Vl9If2mSFxf_MIXSZkB_3LIDr1HrbZ-2XeOl51d0VTVAdKeXwuLrm_oKVT2el8x4UCvv2WZGpex8-kL4QrVujtukjKhLWJKZcS8Q7r-6UqvnuibVYG8UcTXbTF7Q",       
//   },
//   "tenantId": undefined,
//   "uid": "lyXJYBIR8OZZNR1oVytrD5AEDMS2",
// }
