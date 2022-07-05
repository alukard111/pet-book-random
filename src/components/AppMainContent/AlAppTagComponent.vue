<template>
  <div class="al-app-tag-component" @click="$emit('click')">
    <div 
      class="al-app-tag-component__inner"
      :class="{
        'al-app-tag-component__inner_active' : activeTag
      }"  
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M7 20L11 4M13 20L17 4M6 9H20M4 15H18"
          :stroke="strokeColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span class="al-app-tag-component__text">
        {{ tagName }}
      </span>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    strokeColor: {
      type: String,
      require: false,
      default: 'black'
    },
    tagName: {
      type: String,
      require: false,
      default: 'book'
    },

    activeTag: {
      type: Boolean,
      require: false,
      defaulr: false
    }
  },

  methods: {
  }
}
</script>

<style lang="postcss" scoped>
.al-app-tag-component {
  
}
.al-app-tag-component__inner {
  @apply
    border-2
    border-black
    border-opacity-25
    p-2
    min-w-full
    h-10
    flex
    items-center
  ;
}

.al-app-tag-component__inner_active {
  @apply
    border-blue-400
    border-opacity-50
    bg-blue-200
    bg-opacity-50
    shadow-md
    shadow-blue-500/50
  ;
}

.al-app-tag-component__text {
  @apply
    text-gray-900
    text-base
    font-semibold
  ;
}

</style>