export default {
  // DATABASE
  getReference(context) {
    const refs = ref(state.database)
    console.log('ref', refs)
    get(child(refs, 'accounts'
      )).then((snapshot) => {
        console.log( 'val ',snapshot.val())
      }).catch((err) => {
        console.error(err)
      })
    console.log('getRefence off')
  },

  // DATABASE
  setValueDB(context, eMail, passwords) {
      console.log('setValueDB')
      const db = getDatabase();
      set(ref(db, 'accounts'), {
        accostit: {
          email: 'asad',
          password: 'asdasd'
        }
      }
    )
  }
}