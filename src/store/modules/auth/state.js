export default {
  errors: {
    'auth/email-already-in-use': 'Этот e-mail уже занят',
    'auth/invalid-email': 'E-mail введен не корректно',
    'auth/weak-password': 'Password должен быть минимум из 6 символов',
    'auth/user-not-found': 'Пользователь не найден',
    'auth/wrong-password': 'Неверный пароль',
    'auth/space-in-password': 'В пароле не должно содержаться пробелов'
  },
  errorCreateUserInputAlertMessage: '',
  errorMessageAuthUserInput: '',
  errorAuthOrCreateUser: '',

  auth: null,
  user: null,
  providerGoogle: null,
  providerGitGub: null
}