export default {
  getStateUser: state => {
    console.log('gettersAuth')
    if (state.user !== null && state.user !== undefined) {
      return state.user
    }
  },
  getPhotoUserURL: state => {
    console.log('gettersAuth')
    if (state.user !== null) {
      return state.user.photoURL
    }
  },
  getUserDisplayName: state => {
    console.log('gettersAuth')
    if (state.user !== null) {
      return state.user.displayName
    }
  },
  getUserEmail: state => {
    console.log('gettersAuth')
    if (state.user !== null) {
      return state.user.email
    }
  }
}