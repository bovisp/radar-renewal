<template>
  <div>
    <div class="ui three top attached steps">
      <div class="step" v-for="tab in tabs" :class="{ 'active' : tab.isActive }" :key="tab.name" @click="selectTab(tab)">
        <i v-show="true" :class="{ 'green check icon': filledTabs[tab.title] === true }"></i>
        <div class="content">
          <div class="title">{{ tab.name }}</div>
        </div>
      </div>
    </div>

    <slot></slot>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          tabs: [],
          filledTabs: {}
        }
      },

      methods: {
        selectTab(selectedTab) {
          this.tabs.forEach(tab => {
            tab.isActive = (tab.name == selectedTab.name)
          })
        }
      },

      created () {
        this.tabs = this.$children

        window.events.$on('filled', (filledTab) => {
          this.filledTabs[filledTab.tab] = filledTab.filled
        })

        window.events.$on('changed', (tabName) => {
          let self = this

          let tab = l_find(self.tabs, { title: tabName })

          this.selectTab(tab)
        })
      }
    }
</script>
