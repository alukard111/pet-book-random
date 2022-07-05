<template>
  <div class="al-auth__btn-box">
      <!-- :class="[...classesBtn, ...classes, activeBtn ? 'al-auth__btn_active' : '', ]" -->
    <button 
      class="al-auth__btn"
      :class="{
        'al-auth__btn_default' : defaultBtn,
        'al-auth__btn_active' : activeBtn,
        'al-auth__btn_warrning' : warrningBtn,
        'al-auth__btn_accept' : acceptBtn,
      }"
      @click="$emit('click')"
      ref="authBtn"
    >
      {{ authBtnName }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    authBtnName: {
      type: String || Number,
      require: true,
      default: 'Button'
    },
    defaultBtn: {
      type: Boolean,
      require: false,
      default: false
    },
    activeBtn: {
      type: Boolean,
      require: false,
      default: false
    },
    warrningBtn: {
      type: Boolean,
      require: false,
      default: false
    },
    acceptBtn: {
      type: Boolean,
      require: false,
      default: false
    },

  },

  data: () => ({
    classesBtn: [] 
  }),

  mounted() {
  },

  computed: {
  } 
}
</script>

<style lang="postcss" scoped>
/* @layer base { */
  .al-auth__btn {
    @apply
      w-32
      h-10
      p-2

      text-sm
      text-center

      border-black
      border-opacity-25
      border-2
     
      transition 
      duration-300
      ease-in-out
    ;
  }

  .al-auth__btn_active {
    @apply
      bg-blue-300
      bg-opacity-40
      border-blue-800
      border-opacity-25
      border-2
      hover:border-blue-400
      hover:border-opacity-40
      hover:bg-blue-600
      hover:bg-opacity-40
      hover:text-white
      active:text-white
      active:bg-blue-700
      active:bg-opacity-40
      active:border-blue-500
      active:border-opacity-40
    ;
  }

  .al-auth__btn_default {
    @apply 
      hover:border-blue-400
      hover:border-opacity-40
      hover:bg-blue-500
      hover:bg-opacity-40
      hover:text-white
      active:text-white
      active:bg-blue-700
      active:bg-opacity-40
      active:border-blue-500
      active:border-opacity-40
    ;
  }

  .al-auth__btn_warrning {
    @apply
      hover:border-red-400
      hover:border-opacity-40
      hover:bg-red-500
      hover:bg-opacity-40
      hover:text-white
      active:text-white
      active:bg-red-700
      active:bg-opacity-40
      active:border-red-500
    ;
  }

  .al-auth__btn_accept {
    @apply
      hover:border-green-400
      hover:border-opacity-40
      hover:bg-green-500
      hover:bg-opacity-40
      hover:text-white
      active:bg-green-700
      active:bg-opacity-40
      active:text-white
      active:border-green-500
    ;
  }
</style>