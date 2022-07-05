<template >
  <div class="board-popup">
    <div 
      class="board-popup__substrate"
      @click="$emit('closePopUpOnClickWindow')"
    >
    </div>
    <div class="board-popup__content-wrapper">
      <div class="board-popup__content">
        <div class="board-popup__img-book__wrapper">
          <img class="board-popup__img-book" src="../../assets/icon/png/book.png">
        </div>

        <!-- формат книги -->
        <div class="board-popup__form">
          <template>
            <div class="carrier-book__wrapper">
              <div class="carrier-book">
                <span class="carrier-book__select-item" @click="selectBookFormat($event, 'electron')">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    x="0px" 
                    y="0px"
                    width="40" 
                    height="40"
                    viewBox="0 0 792 792"
                    style="enable-background:new 0 0 792 792;"
                    xml:space="preserve"
                  >
                    <path d="M521.806,792c0,0,71.889,0,71.889-71.997V71.997C593.694,0,521.806,0,521.806,0H270.194c0,0-71.889,0-71.889,71.997
                      v648.006C198.306,792,270.194,792,270.194,792H521.806z M396,762.022c-19.841,0-35.944-16.104-35.944-35.944
                      c0-19.842,16.103-35.944,35.944-35.944c19.842,0,35.944,16.103,35.944,35.944C431.944,745.919,415.842,762.022,396,762.022z
                      M342.083,43.888c0-4.457,2.121-7.944,4.78-7.944h98.272c2.624,0,4.781,3.559,4.781,7.944v2.121c0,4.457-2.157,7.944-4.781,7.944
                      h-98.272c-2.624,0-4.78-3.559-4.78-7.944V43.888z M234.25,89.861h323.5v575.111h-323.5V89.861z"/>
                  </svg>
                  <span class="carrier-book__name">Электронная</span>
                </span>
                <span class="carrier-book__select-item" @click="selectBookFormat($event, 'papper')">
                  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="40" height="40" viewBox="0 0 478.125 478.125" style="enable-background:new 0 0 478.125 478.125;"
                    xml:space="preserve">
                    <path d="M420.75,19.125h9.562V0H95.625C68.85,0,47.812,21.038,47.812,47.812V420.75c0,32.513,24.862,57.375,57.375,57.375h19.125
                        V76.5H95.625c-15.3,0-28.688-13.388-28.688-28.688s13.388-28.688,28.688-28.688H382.5c0,0-9.562,13.388-9.562,28.688
                        S382.5,76.5,382.5,76.5H143.438v401.625h286.875V76.5h-9.562c-15.3,0-28.688-13.388-28.688-28.688S405.45,19.125,420.75,19.125z"/>
                  </svg>
                  <span class="carrier-book__name">Бумажная</span>
                </span>
                <span class="carrier-book__select-item" @click="selectBookFormat($event, 'audio')">
                  <svg width="40" height="40" viewBox="0 0 64 56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                    <path d="M63,42.2795 L63,37.7225 C63.595,37.3765 64,36.7385 64,36.0005 C64,18.3265 49.673,4.0005 32,4.0005 C14.327,4.0005 0,18.3265 0,36.0005 C0,36.7385 0.405,37.3765 1,37.7225 L1,42.2795 C0.406,42.6275 0,43.2655 0,44.0005 L0,52.0005 C0,53.0995 0.9,54.0005 2,54.0005 C3.1,54.0005 4,53.0995 4,52.0005 L4,51.0005 L5,51.0005 L5,55.0005 C5,57.7505 7.25,60.0005 10,60.0005 L11,60.0005 C12.65,60.0005 14,58.6495 14,57.0005 L14,39.0005 C14,37.3495 12.65,36.0005 11,36.0005 L10,36.0005 C7.25,36.0005 5,38.2505 5,41.0005 L5,46.0005 L4,46.0005 L4,44.0005 C4,43.2655 3.594,42.6275 3,42.2795 L3,37.7225 C3.595,37.3765 4,36.7385 4,36.0005 C4,20.5365 16.536,8.0005 32,8.0005 C47.464,8.0005 60,20.5365 60,36.0005 C60,36.7385 60.405,37.3765 61,37.7225 L61,42.2795 C60.406,42.6275 60,43.2655 60,44.0005 L60,46.0005 L59,46.0005 L59,41.0005 C59,38.2505 56.75,36.0005 54,36.0005 L53,36.0005 C51.35,36.0005 50,37.3495 50,39.0005 L50,57.0005 C50,58.6495 51.35,60.0005 53,60.0005 L54,60.0005 C56.75,60.0005 59,57.7505 59,55.0005 L59,51.0005 L60,51.0005 L60,52.0005 C60,53.0995 60.9,54.0005 62,54.0005 C63.1,54.0005 64,53.0995 64,52.0005 L64,44.0005 C64,43.2655 63.594,42.6275 63,42.2795" sketch:type="MSShapeGroup"></path>
                  </svg>
                  <span class="carrier-book__name">Аудио</span>
                </span>
                <span class="carrier-book__select-item" @click="selectBookFormat($event, 'summer')">
                  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="40" height="40" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                  <path d="M144.75,0l-32,352H15.375v80c0,44.125,35.875,80,80,80h288c44.125,0,80-35.875,79.938-78.781L496.625,0H144.75z
                    M95.375,480c-26.5,0-48-21.531-48-48v-48h256v48c0,18,5.938,34.625,16,48H95.375z M431.375,432c0,26.469-21.562,48-48,48
                    c-26.5,0-48-21.531-48-48v-80h-190.5L174,32h288.062L431.375,432z M385.625,192H223.688l2.938-32h161.438L385.625,192z M390.5,128
                    h-161l2.938-32H393L390.5,128z M252.688,256h-34.813l2.875-32h34.375L252.688,256z M284.75,224h66.375l-2.438,32h-66.813
                    L284.75,224z"/>
                  </svg>
                  <span class="carrier-book__name">Саммари</span>
                </span>
              </div>
            </div>
          </template>
          
          <!-- <slot name="title"></slot> -->
          <!-- SELECTED TAG (включает поп-ап с выбором тега) -->
          <template>
            <div class="tag relative">
              <div class="tag__wrapper" @click="toggleTagPopUp()">
                <svg width="60" viewBox="-10 -12 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g dominant-baseline="central">
                    <path 
                      d="M7 20L11 4M13 20L17 4M6 9H20M4 15H18"
                      
                      :stroke="getSelectedTagColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                  </g>
                </svg>

                <!-- ИМЯ ТЕГА -->
                <span>
                  {{ getSelectedTagName }}
                </span>
                
              </div>
              <!-- POPUP TAG БИРКИ!! -->
              <div v-if="tagPopUpState" class="tag__popup absolute top-0 left-0">
                
                <!-- ADD TAG -->
                <div class="tag__popup-add-tag ">
                  <span class="tag__popup-title">
                    Add new tag
                  </span>
                  <!--  tagName and color input-->
                  <input type="text" placeholder="Name new tag" class="tag__popup-input-text" v-model="newTagName">
                  <input type="color" class="tag__popup-input-color" v-model="newTagColor">
                  <button class="tag__popup-btn" @click="createTag()">добавить</button>
                </div>

                <!-- SELECT TAG -->
                <div class="tag__popup-select-tag">
                  <!-- закрыть выбор тегов (+ выбрать тег) -->
                  <button class="tag__select_btn" @click="selectTagOnClictBtn()">
                    ok
                  </button>
                  <div class="tag__select" v-for="tag in getSelectionTags" :key="tag.tagId" @click="selectTagOn($event, tag.tagId, tag.tagName, tag.color)">
                    <svg 
                      version="1.1" 
                      xmlns="http://www.w3.org/2000/svg" 
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px" 
                      y="0px"
                      viewBox="0 0 100 100" 
                      :fill="tag.color"
                      xml:space="preserve"
                      
                    >
                      <path d="M96.456,2.028c-0.544-1.577-2.248-2.408-3.804-1.859c-1.557,0.549-2.379,2.272-1.837,3.849
                        c4.599,13.351-4.53,23.317-11.485,28.657l-2.817-4.072c-0.942-1.361-3.058-2.495-4.699-2.52l-15.777,0.072
                        c-1.64-0.026-4.085,0.735-5.43,1.689L4.123,60.786c-2.251,1.596-2.799,4.736-1.223,7.016L24.027,98.34
                        c1.577,2.28,4.111,2.007,6.362,0.412l46.483-32.941c1.345-0.955,2.885-3.02,3.426-4.59l4.94-15.731
                        c0.538-1.571,0.21-3.969-0.733-5.331l-1.717-2.481C92.139,30.451,101.841,17.665,96.456,2.028z M74.829,48.808
                        c-3.603,2.552-8.569,1.665-11.091-1.98c-2.523-3.648-1.648-8.672,1.957-11.227c2.859-2.027,6.573-1.879,9.246,0.088
                        c-1.346,0.82-2.269,1.292-2.445,1.376c-1.49,0.712-2.127,2.512-1.426,4.02c0.51,1.095,1.584,1.736,2.705,1.736
                        c0.426,0,0.859-0.094,1.271-0.29c0.958-0.457,1.989-1.009,3.064-1.652C78.595,43.845,77.426,46.968,74.829,48.808z"/>
                    </svg>
                    <span class="tag__select_text">
                      {{ tag.tagName }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <!-- хз что это - разобраться! -->
          <slot name="input"></slot>
          <div class="flex flex-wrap justify-center">
            <slot name="btns"></slot>
           
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>


<script>
import AlInput from '../AppBaseComponents/AlInput.vue'
import AlBtn from '../AppBaseComponents/AlBtn.vue'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

export default {
  components: {
    AlInput,
    AlBtn
  },
  props: {
    valueInput: {
      type: String || Number,
      require: false,
      default: ''
    },
    // if toggle === true показывает окно popUP
    togglePopUpState: {
      type: Boolean,
      require: false,
      default: false
    }
  },

  data: () => ({
    

    tagPopUpState: false,

    // выбранный тег (default)
    tagName: 'Tag name',
    tagColor: '#BFC167',

    // new tag name and color
    newTagName: '',
    newTagColor: '',

    // select tag
    selectTagKey: '',
    selectTagName: '',
    selectTagColor: '',

    bookName: '',
  }),


  mounted() {
    this.electronBookSvg
  },


  computed: {
    ...mapGetters({
      getSelectionTags: 'tags/getTags',
      // возвращает имя выбранного тега
      getSelectedTagName: 'books/getSelectedTagName',
       // возвращает цвет выбранного тега
      getSelectedTagColor: 'books/getSelectedTagColor'
    }),

    electronBookSvg() {
      return console.log('require')
    },

    togglePopUpComputed() {
      return this.togglePopUpState = !this.togglePopUpState
    },
  },


  methods: {
    ...mapActions({
      createNewTag: 'tags/CREATE_NEW_TAG',

      writeNewFormatBook: 'books/writeNewFormatBook'
    }),
    ...mapMutations({
      writeSelectedTag: 'books/WRITE_SELECTED_TAG',
    }),

    createTag() {
      if (this.validateTagName()) {
        console.log('newTagColor', this.newTagColor)
        this.createNewTag({ name: this.newTagName, color:this.newTagColor })
      }
      // отчистка инпута
      this.clearInputTag()
    },

    // валидация имени тега
    validateTagName() {
      return Boolean(this.newTagName.trim().length)
    },

    // отчистить инпут новых тегов
    clearInputTag() {
      this.newTagName = ''
      this.newTagColor = ''
    },

    toggleTagPopUp() {
      this.tagPopUpState = !this.tagPopUpState
      this.clearInputTag()
    },
    togglePopUp() {
      this.togglePopUpComputed
    },

    // ВКЛЮЧАЕТ И ВЫКЛЮЧАЕТ СТИЛИ У ВЫБРАННОЙ КНИГИ В ADD POPUP ОКНЕ 
    toggleCarrierBook(event) {
      document.querySelectorAll('.carrier-book__select-item').forEach((elBook) => {
        if (elBook.classList.contains('carrier-book__select-item_active')) {
          return elBook.classList.toggle('carrier-book__select-item_active')
        }
      })
      event.currentTarget.classList.toggle('carrier-book__select-item_active')
    },

    // меняет стиль на активный у тега
    toggleSelectTagStyle(event) {
      document.querySelectorAll('.tag__select').forEach((tag) => {
        if (tag.classList.contains('tag__select_active')) {
          return tag.classList.toggle('tag__select_active')
        }
      })
      event.currentTarget.classList.toggle('tag__select_active')
    },

    // записать выбранный тег
    writeSelectTag(key, name, color) {
      this.selectTagKey = key
      this.selectTagName = name
      this.selectTagColor = color
    },

    // очистить выбранный тег
    clearSelectTag() {
      this.writeSelectTag('', '', '')
    },

    // включить выбор тега - запускает функцию записи и применяет изменение стилей 
    selectTagOn(event, key, name, color) {
      this.toggleSelectTagStyle(event)
      this.writeSelectTag(key, name, color) 
    },

    selectTagOnClictBtn() {
      this.toggleTagPopUp()
      this.writeSelectedTag({ tagName: this.selectTagName, tagColor: this.selectTagColor })
    },

    // выбрать формат книгу 
    selectBookFormat(event, format) {
      this.toggleCarrierBook(event)
      this.writeNewFormatBook(format)
    },
  }
}
</script>

<style lang="postcss" scoped>
.board-popup {
  @apply
    absolute
    z-30
  
    flex
    items-center
    justify-center

    w-full
    h-full
  ;
}
.board-popup__substrate {
  @apply
    w-full
    h-full

    bg-gray-600
    opacity-50
  ;
}
.board-popup__content-wrapper {
  @apply
    absolute
    z-40

    ring
    ring-8
    ring-blue-400
    ring-opacity-50

    w-3/4
    h-3/4
    lg:w-2/4
    lg:h-2/4
  ;
}
.board-popup__content {
  @apply
    w-full
    h-full
    bg-white

    flex
    items-center
  ;
}

.board-popup__form {
  @apply
    flex
    flex-col
  ;
}
.carrier-book {
  @apply
    w-96
    h-20
    flex
  ;
}
.carrier-book__select-item {
  @apply
    text-center
    flex
    flex-col
    items-center
    text-sm
    p-2
    ml-2
    rounded-md
    cursor-pointer
    hover:bg-blue-400
    transition
    duration-150
  ;
}

.carrier-book__select-item_active {
  @apply
    transition
    duration-150
    bg-blue-300
    hover:bg-blue-200
  ;
}

.carrier-book__select-item_active>svg {
  @apply
    transition
    duration-150
    fill-[#FCF4FC]
  ;
}
.carrier-book__icon {
}
.carrier-book__name {
}


.board-popup__img-book__wrapper {

}
.board-popup__img-book {
  @apply
    w-8/12
    ml-10
  ;
}


.tag {
  @apply
    flex
    justify-center
  ;
}
.tag__wrapper {
  @apply
    flex
    items-center
    justify-center
    my-2
    py-2
    cursor-pointer
    w-40

    rounded-md
    
    transition
    duration-150
    hover:bg-blue-200
  ;
}
/* .tag__wrapper>svg {
  @apply
    w-10
    h-10
  ;
} */
.tag__popup-select-tag {
  @apply
    flex
    flex-wrap
    overflow-y-auto
    border-t
    border-gray-400
  ;
}
.tag__btn-add-tag {
  @apply
    m-2
    p-2
    flex
    flex-col
    justify-center
    items-center
    cursor-pointer

    rounded-md
    hover:bg-blue-400
  ;
}
.tag__btn-add-text {
  @apply
    text-sm
    text-center
  ;
}

.tag__select_btn,
.tag__select {
  @apply
    flex
    flex-col
    items-center
    justify-center
    m-2
    p-2    
    w-16
    
    rounded-md
    hover:bg-blue-400
    active:bg-blue-500
    active:text-white
  ;
}

.tag__select_active {
  @apply
    bg-blue-300
  ;
}
.tag__select_text {
  @apply
    text-xs
    whitespace-pre-wrap
    w-20
    text-center
  ;
}
.tag__select>svg {
  @apply 
    w-10
    h-10
  ;
}
.tag__popup {
  @apply
    absolute
    top-0
    left-0

    w-96
    h-96
    z-50
    drop-shadow-xl
    bg-white
    overflow-auto
  ;
} 

.tag__popup-add-tag {
  @apply
    flex 
    flex-col
    m-2
    
  ;
}
.tag__popup-title {
  @apply
    p-2
  ;
}
.tag__popup-input-text {
  @apply
    p-2
    border
    border-black
  ;
}
.tag__popup-input-color {
  @apply
    my-2   
  ;
}
.tag__popup-btn {
  @apply
    p-2
    border
    hover:bg-blue-300
    active:bg-blue-500
    active:text-white
  ;
}
</style>