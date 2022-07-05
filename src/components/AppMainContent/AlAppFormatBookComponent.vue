<template>
  <div class="al-app-tag-component" @click="$emit('click')">
    <div 
      class="al-app-tag-component__inner"
      :class="{
        'al-app-tag-component__inner_active' : activeTag
      }" 
    >
    
      <span class="al-app-tag-component__text">
        {{ bookFormatName }}
      </span>
      <slot>
        
      </slot>
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
    bookFormatName: {
      type: String,
      require: false,
      default: 'book'
    },

    activeTag: {
      type: Boolean,
      require: false,
      defaulr: false
    },

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