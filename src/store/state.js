export default {
  modules: {
    auth: auth,
    tags: tags,
    books: books,
  },
  state: {
    count: 0,
    database: null,
    reference: null,
    
    userState: null,
  }

}