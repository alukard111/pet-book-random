export default {
  getBooksFormat(state) {
    return state.booksFormat
  },

  getActiveTagBooks(state) {
    return state.activeTags
  },

 

  getAllBooks(state) {
    return state.books
  },

  getSelectedTagName(state) {
    if (Boolean(state.tagName.length)) {
      return state.tagName
    }
    return 'Tag name'
  },

  getSelectedTagColor(state) {
    if (Boolean(state.tagColor.length)) {
      return state.tagColor
    }
    return '#56B870'
  },

  getStateFormBook(state) {
    console.log(state.bookElectron,
      state.bookAudio,
      state.bookPapper,
     state.bookSummer)
    const stateFormBook = (state.bookElectron || state.bookAudio || state.bookPapper || state.bookSummer) && 
      Boolean(state.bookName.length) && Boolean(state.tagName.length) && Boolean(state.tagColor.length)
    console.log('stateFormBook', stateFormBook)
    return stateFormBook
  },

  getStateViewsBooks(state) {
    return state.stateViewsBooks
  },

  getArchiveBooks(state) {
    return state.archiveBooks
  }
}