import * as firebase from 'firebase'


const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config)

const database = firebase.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default}

//child remove event
//database.ref('expenses').on('child_removed', (snapshot) => {
  //console.log(snapshot.key, snapshot.val())
//})

//child_changed
/* database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key)
}) */

//child_added
/* database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key)
}) */



//ARRAY DATA IN FIREBASE
//firebase ne podržava array

/* const notes = [{
  id: '12',
  title: 'First note',
  body: 'This is my note'
}, {
  id: '761esi',
  title: 'Another note',
  body: 'This is my note'
}] */

//ovo će samo u firebase-u konvektirat array u objekt
//database.ref('notes').set(notes)

//ovo bi u biti bio array u firebase-u
/* const firebaseNotes = {
  notes: {
    khldkfhad: {
      title: 'First note',
      body: 'This is my note'
    }, 
      khldkfhad: {
        title: 'Another note',
        body: 'This is my note'
      }
  }
} */

//ovako se gurne objekt
/* database.ref('notes').push({
  title: 'Course topics',
  body: 'React Native, Angular, Pyton'
}) */



//i to će generirat ovakvu strukturu u firebase bazi
/* notes: {
  nekiDugiJedinstveniGeneriraniBrojKojiDajeFirebase: {
    title: 'Todo',
    body: 'Go for a run'
  },  */

//onda se može updejtat

/* database.ref('notes/nekiDugiJedinstveniGeneriraniBrojKojiDajeFirebase')
.update({
  body: 'Buy food'
}) */

/* database.ref('expenses').push({
  description: 'This is some description',
  note: 'This is my note',
  amount: 546550,
  createdAt: 54564656161
}) */

/* database.ref('expenses').once('value').then((snapshot) =>{
  const expenses = []
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key, //ovo će uzeti onaj jedinstveni id koji generira firebase
      ...childSnapshot.val() // spredad će sve unutra
    })
  })

  console.log (expenses)
})

database.ref('expenses').on('value', (snapshot) =>{
  const expenses = []
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key, //ovo će uzeti onaj jedinstveni id koji generira firebase
      ...childSnapshot.val() // spredad će sve unutra
      })
    })
    console.log (expenses)
    })
 */


//------------------

/* database.ref().set({
	name: 'Ivanko Perisic',
  age: 26,
  stressLevel: 6,
	job: {
    company: 'Google',
    title: 'Software developer'
  },
	location: {
		city: 'Split',
		country: 'Croatia'
	}
}).then(() => {
  console.log('Data is saved')
}).catch((e) =>{
  console.log('This failed.', e)
})

database.ref('age').set(27)
database.ref('location/city').set('Zagreb')

database.ref('attributes').set({
  height: 182,
  weight: 90
  }).then(() => {
    console.log('Attributes are set')
  }).catch((e) => {
    console.log('Set of attributes failed to run', e)
  })

//Remove data from database
 database.ref('isSingle').remove().then(()=> {
  console.log('Data is removed')
}).catch((e) => {
  console.log('Data was not removed', e)
})

//Use set to delete data
database.ref('isSingle').set(null)

//Update data without set
database.ref().update({
  name: 'Tatjana',
  age: 29,
  //dodavanje novog propertia
 // job: 'Software developer',
  //brisanje nekog propertija iz baze postavljanjem u null
  isSingle: null
})

database.ref().update({
  //job: 'Manager',
  'location/city': 'Boston'
})

//change stressLevel to 9
//change to job company is Amazon
//city change to Seatle
database.ref().update({
  stressLevel: 9,
  'location/city': 'Seatle',
  'job/company': 'Amazon'
}).then(() => {
  console.log('Properties are updated')
}).catch((e) => {
  console.log('Properties update failed to run', e)
})  */


//READING DATA FROM FIREBASE
/* database.ref('location/city')
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val()
    console.log(val)
  })
  .catch((e) => {
    console.log('Error fetching data', e)
  })

const onValueChange = (snapshot) => {
  console.log(snapshot.val())
  } */

/* const onValueChange = database.ref().on('value', (snapshot) => {
  console.log(snapshot.val())
  }, (e) => {
console.log('Error with data fetching', e)
})
 */
//setup data subscription
/* const onValueChange = database.ref().on('value', (snapshot) => {
  const val = snapshot.val()
  console.log(`${val.name} is ${val.job.title} at ${val.job.company}`)
}, (e) => {
  console.log('Error with data fetching', e)
}) */

//Andrew is software developer at amazon

//change the data and make sure it reprints


