import { 
  getAuth,
  signOut,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  
} from 'firebase/auth'
import router from '../../../router'



export default {
  async stateAuth(context) {
    const auth = await getAuth()
    const user = await auth.currentUser
    return context.commit({
      type: 'LOAD_STATE_AUTH_CHANGE',
      auth: user
    })
  },

  userPhotourl(context) {
    return context.state.user.photoURL
  },

// SIGN__IN__WITH
  signInWithGoogle(context) {
    console.log('context', context)
    signInWithPopup(context.state.auth, context.state.providerGoogle)
      .then((result) => {

        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;

        context.commit('LOAD_STATE_AUTH_CHANGE')
        // context.dispatch('onAuthStateEnter')

        // --- НЕ НАШЕЛ В ФАЙР БЭЙЗ КАК ЭТИМ ПОЛЬЗОВАТЬСЯ ---
        // signInWithRedirect(context.state.auth, context.state.providerGoogle)
      }).catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;

        // The email of the user's account used.
        // const email = error.email;

        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  },
  signInWithGithub(context) {
    console.log('context')
    signInWithPopup(context.state.auth, context.state.providerGitGub)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        context.commit('LOAD_STATE_AUTH_CHANGE')
      }).catch((error) => {
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;

        // The email of the user's account used.
        // const email = error.email;

        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        console.log(errorMessage)
        // ...
      });
  },

  // SIGN__IN__WITH EMAIL__PASSWORD
  runSignInWithEmailAndPassword(context, payload) {
    signInWithEmailAndPassword(context.state.auth, payload.email, payload.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        context.commit('SET_ERROR_MESSAGE_IN_STATE', '')
        context.commit('LOAD_STATE_AUTH_CHANGE')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message

        context.commit('SET_ERROR_MESSAGE_IN_STATE', errorCode)
      });
  },

  // SIGN__IN__WITH_OUT
  signOut(context) {
    signOut(context.state.auth)
      .then(() => {
        context.commit('LOAD_STATE_AUTH_CHANGE')
      })
      .catch((error) => {
      // An error happened.
        console.error(error)
      });
  },

  createAccountWithEmailAndPassword(context, value) {
    // проверка на...пробелы в пароле 
    if (value.password.split('').some((e) => { return e === ' ' })) {
      return context.commit('SET_ERROR_MESSAGE_IN_STATE', 'auth/space-in-password')
    } 
    createUserWithEmailAndPassword(context.state.auth, value.email, value.password)
      .then((userCredential) => {
        
        // Signed in 
        const user = userCredential.user;
        context.commit('SET_ERROR_MESSAGE_IN_STATE', '')
        context.commit('LOAD_STATE_AUTH_CHANGE')
        context.dispatch('onAuthStateEnter')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        context.commit('SET_ERROR_MESSAGE_IN_STATE', errorCode)
        // ..
      });
  },

  isASpace(context, isSpace) {
    return isSpace === ' '
  },



  // перенаправление на др страницу
  onAuthStateEnter(context) {
    console.log('ssosp')
    onAuthStateChanged(context.state.auth, (user) => {
      if (user?.accessToken && router.app?._route.fullPath !== '/app') {
        router.push({path: '/app'})
      } 
    })
  },
}