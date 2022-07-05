import { getRandomInt } from '../../../helpers/common.js'

export default {
  ADD_ACTIVE_TAGS(state, payload) {
    if (Boolean((state.activeTags.length))) {
      let activeTagIndex = state.activeTags.findIndex((item) => {
        
        return item.name === state.tagName
      })

      if (activeTagIndex !== -1) {
        state.activeTags[activeTagIndex].count++
      } else {
        let newActiveTag = JSON.parse(JSON.stringify(state.activeTagTemplate))
        newActiveTag.name = state.tagName
        newActiveTag.color = state.tagColor
        newActiveTag.count = 1
        state.activeTags.push(newActiveTag)
      }
    }
    
  },

  SET_BOOK(state) {
    const copyBook = JSON.parse(JSON.stringify(state.bookTemplate))
    copyBook.bookId = getRandomInt(1000000) + '_book_id'
    copyBook.name = state.bookName
    copyBook.format.electron = state.bookElectron
    copyBook.format.papper = state.bookPapper
    copyBook.format.audio = state.bookAudio
    copyBook.format.summer = state.bookSummer

    copyBook.tag.name = state.tagName
    copyBook.tag.color = state.tagColor
    
    state.books.push(copyBook)
    console.log(copyBook)
  },
  // SET_BOOK(state, payload) {
  //   const copyBook = JSON.parse(JSON.stringify(state.bookTemplate))
  //   copyBook.bookId = getRandomInt(1000000) + '_book_id'
  //   copyBook.name = payload.name
  //   copyBook.format.electron = payload.electron
  //   copyBook.format.papper = payload.papper
  //   copyBook.format.audio = payload.audio
  //   copyBook.format.summer = payload.summer

  //   copyBook.tag.name = payload.tagName
  //   copyBook.tag.color = payload.tagColor
    
  //   state.books.push(copyBook)
  //   console.log(copyBook)
  // },

  CLEAR_FORMAT_BOOK(state) {
    state.bookElectron = false
    state.bookPapper = false
    state.bookAudio = false
    state.bookSummer = false
  },

  CLEAR_INPUT_BOOK(state) {
    state.bookName = ''
    state.tagName = ''
    state.tagColor = ''
  },

  

  WRITE_FORMAT_BOOK(state, payload) {
    switch(payload.format) {
      case 'electron':
        state.bookElectron = !state.bookElectron
        break
      case 'papper':
        state.bookPapper = !state.bookPapper
        break
      case 'audio':
        state.bookAudio = !state.bookAudio
        break
      case 'summer':
        state.bookSummer = !state.bookSummer
        break
    }
  },

  WRITE_SELECTED_TAG(state, payload) {
    state.tagName = payload.tagName
    state.tagColor = payload.tagColor
  },

  WRITE_BOOK_NAME(state, payload) {
    state.bookName = payload.bookName
  },


  ARCHIVE_STATE_VIEWS_BOOKS(state) {
    if (!state.stateViewsBooks) {
      state.stateViewsBooks = true
    }
  },
  ALL_STATE_VIEWS_BOOKS(state) {
    if (state.stateViewsBooks) {
      state.stateViewsBooks = false
    }
  },
}