import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase'

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const startLoginFacebook = () => {
    return () => {
        return firebase.auth().signInWithPopup(facebookAuthProvider)
    }
}

export const startLoginTwitter = () => {
    return () => {
        return firebase.auth().signInWithPopup(twitterAuthProvider)
    }
}

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut()
    }
}

