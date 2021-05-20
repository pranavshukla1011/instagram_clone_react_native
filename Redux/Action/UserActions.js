import { USER_STATE_CHANGED } from '../types';
import firebase from 'firebase';

export const fetchUser = () => async (dispatch) => {
  firebase
    .firestore()
    .collection('users')
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then((snapshot) => {
      if (snapshot.exists) {
        console.log('currentUserSnapshot.data()');
        console.log(snapshot.data());
        dispatch({
          type: USER_STATE_CHANGED,
          payload: snapshot.data(),
        });
      } else {
        console.log('user snapshot cannot be fetched in fetchUser() function');
      }
    });
};
