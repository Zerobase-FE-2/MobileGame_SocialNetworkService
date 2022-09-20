import { getDatabase, ref, onValue, child, get } from 'firebase/database';

// const db = getDatabase();
// const starCountRef = ref(db, 'posts/' + postId + '/starCount');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });

const dbRef = ref(getDatabase());
get(child(dbRef, `users/${userId}`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log('No data available');
    }
  })
  .catch((error) => {
    console.error(error);
  });
