<template>
  <div
    class="ui attached tab segment"
    :class="{ 'active': isActive }"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        required: true
      },
      selected: {
        default: false
      },
      title: {
        required: true
      }
    },

    data () {
      return {
        isActive: false
      }
    },

    computed: {
      href () {
        return `#${this.name.toLowerCase().replace(/ /g, '-')}`
      }
    },

    mounted () {
      this.isActive = this.selected;
    }
  }
</script>
