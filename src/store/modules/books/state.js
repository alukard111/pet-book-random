export default {
  stateViewsBooks: false,

  bookName: '',
  bookElectron: false,
  bookPapper: false,
  bookAudio: false,
  bookSummer: false,
  tagName: '',
  tagColor: '',

  bookTemplate: {
    bookId: '40_book_Id',
    name: 'bookName',
    format: {
      electron: false,
      papper: false,
      audio: false,
      summer: false
    },
    tag: {
      name: 'tagName',
      color: '#99D492'
    }
  },

  books: [
  ],

  archiveBooks: [
    
  ],


  booksFormat: [
    {
      format: 'Электронная книга',
      src: './assets/icon/svg/phone.svg',
      id: 'electronBooks0',
      count: 0
    },
    {
      format: 'Аудио книга',
      src: './assets/icon/svg/audioBook.svg',
      id: 'audioBook0',
      count: 0
    },
    {
      format: 'Бумажная книга',
      src: './assets/icon/svg/papperBook.svg',
      id: 'papperBook0',
      count: 0
    },
    {
      format: 'Саммари',
      src: './assets/icon/svg/summaryBook.svg',
      id: 'summaryBook0',
      count: 0
    },

  ],

  activeTagTemplate: {
    name: '',
    color: '',
    count: 0
  },
  
  activeTags: [
    { 
      name: 'tagName',
      color: '#99D492',
      count: 1
    },
  ]
}