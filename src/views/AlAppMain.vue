<template>
  <div class="main-box-app ">
    
    <div class="main-box-app__wrapper ">
      <!-- POPUP CREATE BOARD // переделать на book-->
      <al-board-pop-up
        @closePopUpOnClickWindow="togglePopUpCreateNewBoard()"
        v-if="toggleCreateNewBoard"
      >
        <template v-slot:input>
          <AlInput 
            v-model="valuePopUpInput"
            :authPlaceholderInput="placeholderPopUpInput"
            :authTypeInput="typePopUpInput"
            :authInputValue="valuePopUpInput"
          />
        </template>
        <template v-slot:btns>
          <div class="m-2">
            <AlBtn 
              :authBtnName="btnNamePopUpCreateBoard"  
              :defaultBtn="styleDefaultBtn"
              @click="addBoard()"
            />
          </div>
          <div class="m-2">
            <AlBtn 
              :authBtnName="btnNamePopUpCloseCreateBoard"
              :warrningBtn="styleWarningBtn"
              @click="togglePopUpCreateNewBoard()"
            />
          </div>
        </template>
      </al-board-pop-up>
      
      <AlAppMenu 
        @logout="signOutAuth()"
        @getUserDisplayName="getUserDisplayName()"
        :userDisplayName="getDisplayName"
        :userEmail="getUserEmail"
        :userPhotoURL="getUserPhotoURL"
        :toggleOptionsMenu="isToggleOptionsMenu"
      />
      <div class="main-box-app__al-dashboard" ref="navbarBox">
        <div class="main-box-app__al-navbar-wrapper">
          <div class="main-box-app__navbar" style="" ref="navbar" >
            <AlAppNavbar  
              @popUpCreateNewBoard="togglePopUpCreateNewBoard()"
            />
          </div>
          <div class="main-box-app__burger ">
            <AlAppBurgerNavbar 
              @clickOnBurger="toggleNavbarOnBurger()"
            />
          </div>

          <!-- MAIN BOX FOR CONTENT AND RANDOMAIZER -->
          <div class="main-box-app__content" ref="contentBox">
            <div class="main-box-app__tags">
              <div class="main-box-app__tag" v-for="tag in getAllActiveTags" :key="tag.index">
                <AlAppTagComponent 
                  :tagName="tag.name"
                  :strokeColor="tag.color"
                />
              </div>
            </div>
            <div class="main-box-app__tags">
              <div class="main-box-app__tag" v-for="bookFormat in getBooksFormat" :key="bookFormat.id">
                <div class="main-box-app__format-svg"  slot="iconFormatBooks">
                  <al-app-format-book-component
                    :bookFormatName="bookFormat.format"
                  >
                    <template>
                      <p>
                        &nbsp- {{ bookFormat.count }}
                      </p>
                    </template>
                  </al-app-format-book-component> 
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
      
    </div>
    
  </div>
</template>


<script>
import { mapGetters, mapMutations, mapActions, mapState } from 'vuex'

import AlBtn from '../components/AppBaseComponents/AlBtn.vue'
import AlInput from '../components/AppBaseComponents/AlInput.vue'
import AlAppMenu from '../components/AppBaseComponents/AlAppMenu.vue'
import AlAppNavbar from '../components/AppBaseComponents/AlAppNavbar.vue'
import AlAppBurgerNavbar from '../components/AppBaseComponents/AlAppBurgerNavbar.vue'
import AlBoardPopUp from '../components/boards/AlBoardPopUp.vue'
import AlAppTagComponent from '../components/AppMainContent/AlAppTagComponent.vue'
import AlAppFormatBookComponent from '../components/AppMainContent/AlAppFormatBookComponent.vue'

export default { 
  components: {
    AlInput,
    AlAppMenu,
    AlAppNavbar,
    AlAppBurgerNavbar,
    AlBoardPopUp,
    AlBtn,
    AlAppTagComponent,
    AlAppFormatBookComponent
  },
  

  data: () => ({

    funcEventChangeToggle: null,
    isToggleOptionsMenu: false,
    
    toggleCreateNewBoard: false,
    btnNamePopUpCreateBoard: 'Добавить книгу',    
    btnNamePopUpCloseCreateBoard: 'Отмена',
    styleWarningBtn: true,
    styleDefaultBtn: true,
    placeholderPopUpInput: 'Название и автор книги',
    typePopUpInput: 'text',
    valuePopUpInput: '',
  }),


  beforeMount() {
    // this.$store.commit('auth/LOAD_STATE_AUTH_CHANGE')
    this.loadStateAuthChange()

    this.windowEventAddChangeToggle()
  },
  
  mounted() {
    console.log()
  },
  
  destroy() {
    this.windowEventRemoveChangeToggle()
  },

  computed: {
    ...mapGetters({
      getAllActiveTags: 'books/getActiveTagBooks',
      getAllBooks: 'books/getAllBooks',

      getBooksFormat: 'books/getBooksFormat',
      getTags: 'tags/getTags',

      getDisplayName: 'auth/getUserDisplayName',
      getUserEmail: 'auth/getUserEmail',
      getUserPhotoURL: 'auth/getPhotoUserURL',

      getStateFormBook: 'books/getStateFormBook'
    }),

  },

  methods: {
    ...mapMutations({
      addActiveTags: 'books/ADD_ACTIVE_TAGS',
      writeBookName: 'books/WRITE_BOOK_NAME',
      setBook: 'books/SET_BOOK',
      loadStateAuthChange: 'auth/LOAD_STATE_AUTH_CHANGE'
    }),
    ...mapActions({
      clearInputNewBook: 'books/clearInputNewBook'
    }),

    routerPush() { 
      if (this.$store.state.auth.user) {
        this.$router.push('/app')
      }
      if ( !this.$store.state.auth.user ) { 
        this.$router.push('/signin') 
      }
    },


    // burger for navbar
    toggleNavbarOnBurger() {
      const elNavbarWrapper = document.querySelector('.main-box-app__al-dashboard')
      this.$refs.contentBox.classList.toggle('main-box-app__content_disable-burger')
      if (elNavbarWrapper.style.marginLeft === `${this.$refs.navbar.offsetWidth}px`) {
        elNavbarWrapper.style.marginLeft = `0px`
      } else {
        elNavbarWrapper.style.marginLeft = `${this.$refs.navbar.offsetWidth}px`
      }
    },

    // vuex
    signOutAuth() {
      return this.$store.dispatch('auth/signOut')
    },

    changeToggleOptionsMenu() {
      return this.isToggleOptionsMenu = !this.isToggleOptionsMenu
    },

    windowEventAddChangeToggle() {
      return window.addEventListener('click', this.windowEventChangeToggleOptionsMenu)
    },

    windowEventRemoveChangeToggle() {
      return window.removeEventListener('click', this.windowEventChangeToggleOptionsMenu)
    },

    windowEventChangeToggleOptionsMenu(e) {
      if (e.target.classList.contains('menu-toggle-link')) {
        this.changeToggleOptionsMenu()
      } else {
        this.isToggleOptionsMenu = false
      }
    },


    togglePopUpCreateNewBoard() {
      this.toggleCreateNewBoard = !this.toggleCreateNewBoard
    return this.toggleCreateNewBoard
    },

    addBoard() {
      this.writeBookName({ bookName: this.valuePopUpInput })
      if (this.getStateFormBook) {
        this.togglePopUpCreateNewBoard()
        this.setBook()
        this.addActiveTags()
        this.clearInputNewBook()
        this.valuePopUpInput = ''
      }
    },


  },
}
</script>

<style lang="postcss" scoped>
.main-box-app {
  @apply
    bg-gray-200
    h-screen
    m-0
    overflow-hidden
  ;
}

.main-box-app__wrapper {
  @apply
    mx-auto 
    w-full 
    flex 
    flex-col 
    transition
    ease-in-out
    duration-300
  ;
}
.main-box-app__al-dashboard {
  @apply
    m-0
    w-screen
    flex
    justify-start
    transition-all
    ease-in-out
    relative 
    duration-300  
  ;
}
.main-box-app__al-navbar-wrapper {
  @apply
    flex
    w-full
    overflow-hidden
  ;
}
.main-box-app__navbar {
   @apply
    m-0
    flex
    w-3/12
    justify-start
    transition
    ease-in-out
    duration-300  
    absolute
    -left-1/4
  ;
}
.main-box-app__burger {
  @apply
    
    transition
    ease-in-out
    duration-300 
  ;
}
.main-box-app__burger-active {
  @apply
    -translate-x-96
  ;
}
.main-box-app__content {
  @apply
    flex 
    justify-start
    
    h-screen
    overflow-x-auto 
    justify-start
    transition-all
    duration-300
  ;
}
.main-box-app__content_disable-burger {
  @apply
    
    w-9/12
  ;
}

.main-box-app__tags {
  @apply
    w-80
    p-2
    m-2 
  ;
}

.main-box-app__tag +.main-box-app__tag {
  @apply 
    my-2
  ;
}
</style> 