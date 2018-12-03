<template>
  <vuestic-sidebar :hidden="isOpen">
    <template slot="menu">
      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-graph"></span>
          <span>{{ $t('menu.models') }}</span>
        </span>
        <sidebar-link v-for="(item, index) in models" :key="index"
          :to="{ path: item.route }">
          <span slot="title">
            <span>{{ item.title }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
    </template>
  </vuestic-sidebar>
</template>

<script>

import VuesticSidebar
  from '../../../vuestic-theme/vuestic-components/vuestic-sidebar/VuesticSidebar'
import SidebarLink from './components/SidebarLink'
import SidebarLinkGroup from './components/SidebarLinkGroup'
import jsonTexts from '../../../i18n/es.json'

export default {
  name: 'app-sidebar',
  components: {
    VuesticSidebar,
    SidebarLink,
    SidebarLinkGroup
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      models: []
    }
  },
  created () {
    let self = this
    this.$bus.$on('change-lang', function (data) {
      let jsonModels = jsonTexts.models
      let index = 0
      for (const key in jsonModels) {
        self.models[index]['title'] = this.$t(`models.${key}`)
        index++
      }
    })
  },
  mounted () {
    this.setModels()
  },
  methods: {
    setModels () {
      let jsonModels = jsonTexts.models
      for (const key in jsonModels) {
        this.models.push({
          'title': this.$t(`models.${key}`),
          'route': `/crud/${key}`
        })
      }
    }
  }
}

</script>
