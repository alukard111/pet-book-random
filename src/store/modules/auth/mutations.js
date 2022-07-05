import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'

export default {
  LOAD_STATE_AUTH_CHANGE(state) {
    const auth = getAuth()
    state.auth = auth
    state.user = auth.currentUser
    state.providerGoogle = new GoogleAuthProvider()
    state.providerGitGub = new GithubAuthProvider()
  },

  // ERROR__MESSAGE__ALERT SET_ERROR_MESSAGE_IN_STATE
  SET_ERROR_MESSAGE_IN_STATE(state, error) {
    if (Boolean(error)) {
      state.errorAuthOrCreateUser = state.errors[error]
    } 

    setTimeout(() => {
      state.errorAuthOrCreateUser = ''
    },5000)
  },
}