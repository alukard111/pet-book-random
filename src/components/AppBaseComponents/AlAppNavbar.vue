<template>
  <div class="navbar-box">
    <nav class="navbar-box__wrapper">
      <div class="navbar-box__navbar navbar">
        <a class="navbar__link" href="#" @click.stop="$emit('popUpCreateNewBoard')" v-if="!this.getStateViewsBooks">
          <span class="navbar__icon-box">
            <svg width="20" 
                  height="20" 
                  fill="currentColor" 
                  class="m-auto" 
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg" id="Layer_3" style="enable-background:new 0 0 64 64;" version="1.1"  xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink">
              <path d="M62.707,50.707c0.286-0.286,0.372-0.716,0.217-1.09C62.77,49.243,62.404,49,62,49h-1.111C62.19,47.728,63,45.958,63,44  c0-2.785-1.639-5.188-4-6.315V9c0-0.135-0.027-0.27-0.081-0.394l-3-7C55.762,1.238,55.4,1,55,1s-0.762,0.238-0.919,0.606l-3,7  C51.027,8.73,51,8.865,51,9v28h-4V12V2c0-0.552-0.447-1-1-1H7C3.691,1,1,3.691,1,7v51c0,2.757,2.243,5,5,5h4h16h1h35  c0.404,0,0.77-0.243,0.924-0.617c0.155-0.374,0.069-0.804-0.217-1.09l-2.586-2.586C59.408,57.994,59,57.008,59,56  s0.408-1.994,1.121-2.707L62.707,50.707z M24,60.576c-1.763-0.774-3-2.531-3-4.576s1.237-3.802,3-4.576V60.576z M22.414,49  l0.879-0.879C24.14,47.274,24.7,46.172,24.907,45H55v4H26H22.414z M55,43H24.907c-0.207-1.172-0.767-2.274-1.614-3.121L22.414,39H55  V43z M61,44c0,2.414-1.721,4.434-4,4.899v-9.798C59.279,39.566,61,41.586,61,44z M57,10v21h-4V10H57z M55,4.539L56.484,8h-2.967  L55,4.539z M53,33h4v4.08C56.672,37.033,56.34,37,56,37h-3V33z M7,3h38v8H27.618l1.277-2.553c0.155-0.31,0.139-0.678-0.044-0.973  C28.668,7.18,28.347,7,28,7H18c-0.379,0-0.725,0.214-0.895,0.553L15.382,11H7c-2.206,0-4-1.794-4-4S4.794,3,7,3z M39,13h2v14  c0,0.551-0.448,1-1,1s-1-0.449-1-1V13z M31,13h2v17c0,0.551-0.448,1-1,1s-1-0.449-1-1V13z M25.105,11.553  C25.036,11.691,25,11.845,25,12v15.586l-3.293-3.293C21.512,24.098,21.256,24,21,24s-0.512,0.098-0.707,0.293L17,27.586v-15.35  L18.618,9h7.764L25.105,11.553z M3,58V11.46C4.063,12.414,5.462,13,7,13h2v48H6C4.346,61,3,59.654,3,58z M11,61V13h4v17  c0,0.404,0.243,0.769,0.617,0.924s0.804,0.069,1.09-0.217L21,26.414l4.293,4.293C25.484,30.898,25.74,31,26,31  c0.129,0,0.259-0.025,0.383-0.076C26.757,30.769,27,30.404,27,30V13h2v17c0,1.654,1.346,3,3,3s3-1.346,3-3V13h2v14  c0,1.654,1.346,3,3,3s3-1.346,3-3V13h2v24H20c-0.404,0-0.77,0.243-0.924,0.617c-0.155,0.374-0.069,0.804,0.217,1.09l2.586,2.586  C22.592,42.006,23,42.992,23,44s-0.408,1.994-1.121,2.707l-2.586,2.586c-0.286,0.286-0.372,0.716-0.217,1.09  C19.23,50.757,19.596,51,20,51h1.111C19.81,52.272,19,54.042,19,56s0.81,3.728,2.111,5H11z M59.586,61H27h-1v-4h31.093  c0.207,1.172,0.767,2.274,1.614,3.121L59.586,61z M58.707,51.879C57.86,52.726,57.3,53.828,57.093,55H26v-4h30h3.586L58.707,51.879z  "/>
            </svg>
          </span>
          <span class="navbar__text">
            add book
          </span>
          <template>
            <div class="tempalte__add-button-block add-button-block">
              <button 
                class="add-button-block__btn"
                @click.stop="$emit('popUpCreateNewBoard')"
              >+</button>
            </div>  
          </template>
        </a>   

          <!-- BOOKSSSSSSSSS АКТУАЛЬНЫЕ -->
        <div class="navbar__all-books" v-if="!this.getStateViewsBooks">
          <a class="navbar__link navbar__link_books " href="#" v-for="book in getBooks" :key="book.bookId">
            <span class="flex items-center navbar__link-line">
              <!-- icons format books -->
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" 
                x="0px" 
                y="0px"
                width="20" 
                height="20"
                viewBox="0 0 792 792"
                style="enable-background:new 0 0 792 792;"
                xml:space="preserve"
                v-if="book.format.electron"
              >
                <path d="M521.806,792c0,0,71.889,0,71.889-71.997V71.997C593.694,0,521.806,0,521.806,0H270.194c0,0-71.889,0-71.889,71.997
                  v648.006C198.306,792,270.194,792,270.194,792H521.806z M396,762.022c-19.841,0-35.944-16.104-35.944-35.944
                  c0-19.842,16.103-35.944,35.944-35.944c19.842,0,35.944,16.103,35.944,35.944C431.944,745.919,415.842,762.022,396,762.022z
                  M342.083,43.888c0-4.457,2.121-7.944,4.78-7.944h98.272c2.624,0,4.781,3.559,4.781,7.944v2.121c0,4.457-2.157,7.944-4.781,7.944
                  h-98.272c-2.624,0-4.78-3.559-4.78-7.944V43.888z M234.25,89.861h323.5v575.111h-323.5V89.861z"/>
              </svg>
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="20" height="20" viewBox="0 0 478.125 478.125" style="enable-background:new 0 0 478.125 478.125;"
                xml:space="preserve"
                v-if="book.format.papper"
                >
                <path d="M420.75,19.125h9.562V0H95.625C68.85,0,47.812,21.038,47.812,47.812V420.75c0,32.513,24.862,57.375,57.375,57.375h19.125
                    V76.5H95.625c-15.3,0-28.688-13.388-28.688-28.688s13.388-28.688,28.688-28.688H382.5c0,0-9.562,13.388-9.562,28.688
                    S382.5,76.5,382.5,76.5H143.438v401.625h286.875V76.5h-9.562c-15.3,0-28.688-13.388-28.688-28.688S405.45,19.125,420.75,19.125z"/>
              </svg>
              <svg v-if="book.format.audio" width="20" height="20" viewBox="0 0 64 56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                <path d="M63,42.2795 L63,37.7225 C63.595,37.3765 64,36.7385 64,36.0005 C64,18.3265 49.673,4.0005 32,4.0005 C14.327,4.0005 0,18.3265 0,36.0005 C0,36.7385 0.405,37.3765 1,37.7225 L1,42.2795 C0.406,42.6275 0,43.2655 0,44.0005 L0,52.0005 C0,53.0995 0.9,54.0005 2,54.0005 C3.1,54.0005 4,53.0995 4,52.0005 L4,51.0005 L5,51.0005 L5,55.0005 C5,57.7505 7.25,60.0005 10,60.0005 L11,60.0005 C12.65,60.0005 14,58.6495 14,57.0005 L14,39.0005 C14,37.3495 12.65,36.0005 11,36.0005 L10,36.0005 C7.25,36.0005 5,38.2505 5,41.0005 L5,46.0005 L4,46.0005 L4,44.0005 C4,43.2655 3.594,42.6275 3,42.2795 L3,37.7225 C3.595,37.3765 4,36.7385 4,36.0005 C4,20.5365 16.536,8.0005 32,8.0005 C47.464,8.0005 60,20.5365 60,36.0005 C60,36.7385 60.405,37.3765 61,37.7225 L61,42.2795 C60.406,42.6275 60,43.2655 60,44.0005 L60,46.0005 L59,46.0005 L59,41.0005 C59,38.2505 56.75,36.0005 54,36.0005 L53,36.0005 C51.35,36.0005 50,37.3495 50,39.0005 L50,57.0005 C50,58.6495 51.35,60.0005 53,60.0005 L54,60.0005 C56.75,60.0005 59,57.7505 59,55.0005 L59,51.0005 L60,51.0005 L60,52.0005 C60,53.0995 60.9,54.0005 62,54.0005 C63.1,54.0005 64,53.0995 64,52.0005 L64,44.0005 C64,43.2655 63.594,42.6275 63,42.2795" sketch:type="MSShapeGroup"></path>
              </svg>
              <svg v-if="book.format.summer" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="20" height="20" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <path d="M144.75,0l-32,352H15.375v80c0,44.125,35.875,80,80,80h288c44.125,0,80-35.875,79.938-78.781L496.625,0H144.75z
                  M95.375,480c-26.5,0-48-21.531-48-48v-48h256v48c0,18,5.938,34.625,16,48H95.375z M431.375,432c0,26.469-21.562,48-48,48
                  c-26.5,0-48-21.531-48-48v-80h-190.5L174,32h288.062L431.375,432z M385.625,192H223.688l2.938-32h161.438L385.625,192z M390.5,128
                  h-161l2.938-32H393L390.5,128z M252.688,256h-34.813l2.875-32h34.375L252.688,256z M284.75,224h66.375l-2.438,32h-66.813
                  L284.75,224z"/>
              </svg>

              <span class="navbar__text">
                {{ book.name }}
              </span>
            </span>

            <span class="navbar__tag-box navbar__link-line flex items-center">
              <span class="navbar__text navbar__text-tag"  >{{ book.tag.name }}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M7 20L11 4M13 20L17 4M6 9H20M4 15H18"
                  :stroke="book.tag.color"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </a>     
        </div>
        
        <!-- DELET BOOKS -->
        <div class="navbar__archive" v-if="this.getStateViewsBooks">
          <a class="navbar__link navbar__link_books " href="#" v-for="book in getArchiveBooks" :key="book.bookId">
            <span class="flex items-center navbar__link-line">
          <!--!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  -->
              <!-- icons format books -->
            
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" 
                x="0px" 
                y="0px"
                width="20" 
                height="20"
                viewBox="0 0 792 792"
                style="enable-background:new 0 0 792 792;"
                xml:space="preserve"
                v-if="book.format.electron"
              >
                <path d="M521.806,792c0,0,71.889,0,71.889-71.997V71.997C593.694,0,521.806,0,521.806,0H270.194c0,0-71.889,0-71.889,71.997
                  v648.006C198.306,792,270.194,792,270.194,792H521.806z M396,762.022c-19.841,0-35.944-16.104-35.944-35.944
                  c0-19.842,16.103-35.944,35.944-35.944c19.842,0,35.944,16.103,35.944,35.944C431.944,745.919,415.842,762.022,396,762.022z
                  M342.083,43.888c0-4.457,2.121-7.944,4.78-7.944h98.272c2.624,0,4.781,3.559,4.781,7.944v2.121c0,4.457-2.157,7.944-4.781,7.944
                  h-98.272c-2.624,0-4.78-3.559-4.78-7.944V43.888z M234.25,89.861h323.5v575.111h-323.5V89.861z"/>
              </svg>
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="20" height="20" viewBox="0 0 478.125 478.125" style="enable-background:new 0 0 478.125 478.125;"
                xml:space="preserve"
                v-if="book.format.papper"
                >
                <path d="M420.75,19.125h9.562V0H95.625C68.85,0,47.812,21.038,47.812,47.812V420.75c0,32.513,24.862,57.375,57.375,57.375h19.125
                    V76.5H95.625c-15.3,0-28.688-13.388-28.688-28.688s13.388-28.688,28.688-28.688H382.5c0,0-9.562,13.388-9.562,28.688
                    S382.5,76.5,382.5,76.5H143.438v401.625h286.875V76.5h-9.562c-15.3,0-28.688-13.388-28.688-28.688S405.45,19.125,420.75,19.125z"/>
              </svg>
              <svg v-if="book.format.audio" width="20" height="20" viewBox="0 0 64 56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                <path d="M63,42.2795 L63,37.7225 C63.595,37.3765 64,36.7385 64,36.0005 C64,18.3265 49.673,4.0005 32,4.0005 C14.327,4.0005 0,18.3265 0,36.0005 C0,36.7385 0.405,37.3765 1,37.7225 L1,42.2795 C0.406,42.6275 0,43.2655 0,44.0005 L0,52.0005 C0,53.0995 0.9,54.0005 2,54.0005 C3.1,54.0005 4,53.0995 4,52.0005 L4,51.0005 L5,51.0005 L5,55.0005 C5,57.7505 7.25,60.0005 10,60.0005 L11,60.0005 C12.65,60.0005 14,58.6495 14,57.0005 L14,39.0005 C14,37.3495 12.65,36.0005 11,36.0005 L10,36.0005 C7.25,36.0005 5,38.2505 5,41.0005 L5,46.0005 L4,46.0005 L4,44.0005 C4,43.2655 3.594,42.6275 3,42.2795 L3,37.7225 C3.595,37.3765 4,36.7385 4,36.0005 C4,20.5365 16.536,8.0005 32,8.0005 C47.464,8.0005 60,20.5365 60,36.0005 C60,36.7385 60.405,37.3765 61,37.7225 L61,42.2795 C60.406,42.6275 60,43.2655 60,44.0005 L60,46.0005 L59,46.0005 L59,41.0005 C59,38.2505 56.75,36.0005 54,36.0005 L53,36.0005 C51.35,36.0005 50,37.3495 50,39.0005 L50,57.0005 C50,58.6495 51.35,60.0005 53,60.0005 L54,60.0005 C56.75,60.0005 59,57.7505 59,55.0005 L59,51.0005 L60,51.0005 L60,52.0005 C60,53.0995 60.9,54.0005 62,54.0005 C63.1,54.0005 64,53.0995 64,52.0005 L64,44.0005 C64,43.2655 63.594,42.6275 63,42.2795" sketch:type="MSShapeGroup"></path>
              </svg>
              <svg v-if="book.format.summer" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="20" height="20" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <path d="M144.75,0l-32,352H15.375v80c0,44.125,35.875,80,80,80h288c44.125,0,80-35.875,79.938-78.781L496.625,0H144.75z
                  M95.375,480c-26.5,0-48-21.531-48-48v-48h256v48c0,18,5.938,34.625,16,48H95.375z M431.375,432c0,26.469-21.562,48-48,48
                  c-26.5,0-48-21.531-48-48v-80h-190.5L174,32h288.062L431.375,432z M385.625,192H223.688l2.938-32h161.438L385.625,192z M390.5,128
                  h-161l2.938-32H393L390.5,128z M252.688,256h-34.813l2.875-32h34.375L252.688,256z M284.75,224h66.375l-2.438,32h-66.813
                  L284.75,224z"/>
              </svg>

              <span class="navbar__text">
                {{ book.name }}
              </span>
            </span>

            <span class="navbar__tag-box navbar__link-line flex items-center">
              <span class="navbar__text navbar__text-tag"  >{{ book.tag.name }}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M7 20L11 4M13 20L17 4M6 9H20M4 15H18"
                  :stroke="book.tag.color"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </a>     
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex"


export default {
  components: {
  },

  data: () => ({
    hex: 'text-[#39A96B]'
  }),

  mounted() {
    
  },

  computed: {
    ...mapGetters({
      getBooks: 'books/getAllBooks',
      getArchiveBooks: 'books/getArchiveBooks',
      getStateViewsBooks: 'books/getStateViewsBooks'
    }),
  },

  methods: {
  }
}
</script>

<style lang="postcss" scoped>


.navbar-box {
  @apply
    w-full
    transition
    ease-in-out
    duration-300
  ;
}


.navbar-box__wrapper {
  @apply
    m-0
    bg-white
    h-screen
    overflow-hidden
  ;

}
.navbar {

}
.navbar__link {
  @apply
    w-full 
    font-thin 
    uppercase
    text-gray-500
    flex 
    items-center 
    p-2 
    transition-colors 
    duration-200 
    justify-start 
    hover:text-white
    transition
    duration-150 
    ease-in-out
    hover:bg-blue-400
  ;
}

.navbar__link_books {
  @apply
    flex-col
    items-start
    border-b
    border-gray-300
    normal-case
  ;
}

.navbar__link-line {
  @apply
    w-full
  ;
}
.navbar__icon-box {
  @apply
    text-left
  ; 
}
.navbar__text {
  @apply
    mx-4
    text-base
    font-semibold
  ;
}

.navbar__text-tag {
  @apply
    font-extralight
    text-xs
    mx-1
  ;
}

.navbar__tag-box {
  @apply
    pl-5
    justify-end
  ;
}

.add-button-block__btn {
  @apply 
    rounded-full
    text-white

    transition
    ease-in-out
    duration-150
    w-6
    h-6
    bg-gray-600
    hover:bg-blue-600
    active:bg-blue-400
  ;
}

</style>