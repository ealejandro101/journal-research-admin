<template>
    <vuestic-layout v-layout>
      <div v-if="loading" class="divLoading d-flex justify-content-center"><div class="d-flex align-self-center"><img :src="loadingImage" alt="Cargando ..."></div></div>
      <app-navbar :isOpen="opened" @toggle-menu="toggleSidebar"/>
      <app-sidebar :isOpen="opened" @toggle-menu="toggleSidebar"/>
      <main slot="content" id="content" class="content" role="main">
        <research-form :form="formJournal" @listen:event="sendSection"></research-form>
      </main>
      <span slot="footer">©2018. Made by&nbsp;<a href="https://epicmax.co" target="_blank">Epicmax </a></span>
  </vuestic-layout>
</template>

<script>
import VuesticLayout from '../../../vuestic-theme/vuestic-components/vuestic-layout/VuesticLayout'
import AppNavbar from './../../admin/app-navbar/AppNavbar'
import AppSidebar from './../../admin/app-sidebar/AppSidebar'
import AppBreadcrumbs from './../../admin/app-breadcrumbs/AppBreadcrumbs'
import { mapGetters } from 'vuex'
import Layout from 'vuestic-theme/vuestic-directives/Layout'
import ResearchForm from './ResearchForm.vue'
import controllerCrud from './controllerCrud'
import controllerServices from '../../../client-http/services'
import loadingGif from '../../../../static/loading.gif'

export default {
  components: {
    VuesticLayout,
    AppNavbar,
    AppSidebar,
    AppBreadcrumbs,
    ResearchForm
  },
  directives: {
    layout: Layout,
  },
  data () {
    return {
      opened: true,
      formJournal: undefined,
      loading: false,
      loadingImage: ''
    }
  },
  created () {
    let _self = this
    this.loadingImage = loadingGif
    controllerCrud.crudOfDiscipline(function (errDisc, dataDisc) {
      if (errDisc) {
        alert(dataDisc)
        return
      }
      _self.formJournal = dataDisc
    })
  },
  methods: {
    toggleSidebar (opened) {
      this.opened = opened
    },
    sendSection (jsonResponse) {
      let _self = this
      this.loading = true
      jsonResponse.data['id'] = ''
      _self.sendModel(controllerServices.getEnum().disciplina, jsonResponse.data).then(response => {
        _self.loading = false
        if (response['id'] !== undefined) {
          alert('Se ha insertado con exito la Disciplina')
          _self.clearForm()
        } else {
          console.error('Error:', response.error)
          alert('Error: ' + response.error.message)
        }
      })
    },
    sendModel (model, data) {
      let _self = this
      return controllerServices.postModel(model, data)
        .then(response => response.json())
        .catch(error => {
          console.error('Error:', error)
          _self.loading = false
          alert('Error: ' + error)
        })
    },
    clearForm () {
      for (const iterator of this.formJournal.inputs) {
        if (Array.isArray(iterator.res)) {
          iterator.res = []
        } else {
          iterator.res = ''
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'isLoading'
    ])
  }
}
</script>

<style>
.divLoading{
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.582);
}
</style>
