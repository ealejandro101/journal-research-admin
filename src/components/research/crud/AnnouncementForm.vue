<template>
    <vuestic-layout v-layout>
      <div v-if="loading" class="divLoading d-flex justify-content-center"><div class="d-flex align-self-center"><img :src="loadingImage" alt="Cargando ..."></div></div>
      <app-navbar :isOpen="opened" @toggle-menu="toggleSidebar"/>
      <app-sidebar :isOpen="opened" @toggle-menu="toggleSidebar"/>
      <main slot="content" id="content" class="content" role="main">
        <div class="container-fluid">
          <div class="row mb-3 justify-content-center">
            <div class="col-8">
              <p>El link del video debe de ser en este formato</p>
              <div class="divImg w-100">
                <img :src="imgYoutube" alt="">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <research-form :form="formJournal" @listen:event="sendSection"></research-form>
            </div>
          </div>
        </div>

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
import imgYoutube from '../../../assets/linkYoutube.jpg'

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
      loadingImage: '',
      imgYoutube: imgYoutube
    }
  },
  created () {
    let _self = this
    this.loadingImage = loadingGif
    controllerCrud.crudOfAnnouncrement(function (errDisc, dataDisc) {
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
      if (new Date(jsonResponse.data.fechaFinal) < new Date(jsonResponse.data.fechaInicio)) {
        return alert('La fecha final debe ser menor a la fecha inicial de la convocatoria')
      }
      let _self = this
      this.loading = true
      jsonResponse.data['id'] = ''
      fetch(`${controllerServices.getURL()}/${controllerServices.getEnum().convocatoria}/add`, {
        method: 'POST',
        body: JSON.stringify({ 'Convocatoria': jsonResponse.data }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json()).then(response => {
        _self.loading = false
        if (response.convocatoria['id'] !== undefined) {
          alert('Se ha insertado con exito la Convocatoria')
          // _self.clearForm()
        } else {
          console.error('Error:', response.convocatoria.error)
          alert('Error: ' + response.convocatoria.error.message)
        }
      }).catch(err => {
        console.error('Error:', err)
        alert('Error al intentar crear la convocatoria')
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
.divImg img{
  width: 100%;
  height: auto;
}
</style>
