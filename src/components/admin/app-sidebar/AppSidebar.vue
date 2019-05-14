<template>
  <vuestic-sidebar :hidden="isOpen">
    <template slot="menu">
      <sidebar-link-group>
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-graph"></span>
          <span>Admin</span>
        </span>
        <sidebar-link :to="{ path: '/addJournal' }">
          <span slot="title">
            <span>Insertar Revista</span>
          </span>
        </sidebar-link>
        <sidebar-link :to="{ path: '/addDiscipline' }">
          <span slot="title">
            <span>Insertar Disciplina</span>
          </span>
        </sidebar-link>
        <sidebar-link :to="{ path: '/announcement' }">
          <span slot="title">
            <span>Convocatorias</span>
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
  }
}

</script>
