<template>
    <vuestic-layout v-layout>
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
      currentId: undefined
    }
  },
  created () {
    let _self = this
    // this.removeInsertion()
    controllerCrud.crudOfJournal(function (errJournal, dataJournal) {
      if (errJournal) {
        alert(dataJournal)
        return
      }
      _self.formJournal = dataJournal
    })
  },
  methods: {
    toggleSidebar (opened) {
      this.opened = opened
    },
    sendSection (jsonResponse) {
      let _self = this
      if (jsonResponse.id === 'Revista') {
        console.log('entra')
        controllerServices.getJournalsCount()
          .then(responseCount => responseCount.json())
          .catch(error => {
            console.error('Error:', error)
            alert('Error: ' + error)
          })
          .then(responseCount => {
            jsonResponse.data['id'] = responseCount['count'] + 1
            _self.sendModel(controllerServices.getEnum().revista, jsonResponse.data).then(response => {
              if (response['id'] !== undefined) {
                _self.currentId = response['id']
                alert('Se inserto con exito Revista')
              } else {
                console.error('Error:', response.error)
                alert('Error: ' + response.error.message)
              }
            })
          })
      } else if (jsonResponse.id === 'RContacto') {
        _self.sendModel(controllerServices.getEnum().rcontacto, jsonResponse.data).then(response => {
          if (response['id'] !== undefined) {
            alert('Se inserto con exito RContacto')
          } else {
            console.error('Error:', response.error)
            alert('Error: ' + response.error.message)
          }
        })
      } else if (jsonResponse.id === 'RAdicional') {
        _self.sendModel(controllerServices.getEnum().radicional, jsonResponse.data).then(response => {
          if (response['id'] !== undefined) {
            alert('Se inserto con exito RAdicional')
          } else {
            console.error('Error:', response.error)
            alert('Error: ' + response.error.message)
          }
        })
      } else if (jsonResponse.id === 'RUbicacion') {
        _self.sendModel(controllerServices.getEnum().rubicacion, jsonResponse.data).then(response => {
          if (response['id'] !== undefined) {
            alert('Se inserto con exito RUbicacion')
          } else {
            console.error('Error:', response.error)
            alert('Error: ' + response.error.message)
          }
        })
      } else if (jsonResponse.id === 'RIndexaciones') {
        _self.sendModel(controllerServices.getEnum().rindexaciones, jsonResponse.data).then(response => {
          if (response['revistaId'] !== undefined) {
            alert('Se ha insertado la revista completa con exito')
          } else {
            console.error('Error:', response.error)
            alert('Error: ' + response.error.message)
          }
        })
      } else if (jsonResponse.id === 'RIdioma') {
        _self.sendModel(controllerServices.getEnum().ridiomas, jsonResponse.data).then(response => {
          if (response['revistaId'] !== undefined) {
            alert('Se ha insertado la revista completa con exito')
          } else {
            console.error('Error:', response.error)
            alert('Error: ' + response.error.message)
          }
        })
      } else if (jsonResponse.id === 'RevistasCategorias') {
        for (const key in jsonResponse.data.categoriaId) {
          let aux = { 'revistaId': jsonResponse.data.revistaId, 'categoriaId': jsonResponse.data.categoriaId[key] }
          _self.sendModel(controllerServices.getEnum().revistascategorias, aux).then(response => {
            if (response['revistaId'] !== undefined) {
              alert(`Se ha insertado la ${jsonResponse.data[key]} RevistasCategorias completa con exito`)
            } else {
              console.error('Error:', response.error)
              alert('Error: ' + response.error.message)
            }
          })
        }
      }
    },
    sendModel (model, data) {
      return controllerServices.postModel(model, data)
        .then(response => response.json())
        .catch(error => {
          console.error('Error:', error)
          alert('Error: ' + error)
        })
    },
    removeInsertion () {
      let _self = this
      if (_self.currentId === undefined) return
      controllerServices.deleteModel(controllerServices.getEnum().rcontacto, _self.currentId)
        .catch(error => {
          alert('No se ha eliminado RContacto, favor eliminarla manualmente desde https://jasolutions.com.co:2083/cpsess8986912440/3rdparty/phpMyAdmin/index.php?login=1&post_login=95105964238457')
          console.error('Error:', error)
          alert('Error: ' + error)
        })
        .then(resp => {
          if (resp.count === undefined) {
            alert('No se ha eliminado RContacto, favor eliminarla manualmente desde https://jasolutions.com.co:2083/cpsess8986912440/3rdparty/phpMyAdmin/index.php?login=1&post_login=95105964238457')
          } else {
            console.log('Se ha eliminado RContacto')
          }
          controllerServices.deleteModel(controllerServices.getEnum().radicional, _self.currentId)
            .catch(error => {
              alert('No se ha eliminado radicional, favor eliminarla manualmente desde https://jasolutions.com.co:2083/cpsess8986912440/3rdparty/phpMyAdmin/index.php?login=1&post_login=95105964238457')
              console.error('Error:', error)
              alert('Error: ' + error)
            })
            .then(resp => {
              if (resp.count === undefined) {
                alert('No se ha eliminado radicional, favor eliminarla manualmente desde https://jasolutions.com.co:2083/cpsess8986912440/3rdparty/phpMyAdmin/index.php?login=1&post_login=95105964238457')
              } else {
                console.log('Se ha eliminado radicional')
              }
              controllerServices.deleteModel(controllerServices.getEnum().rubicacion, _self.currentId)
                .catch(error => {
                  alert('NO Se ha eliminado rubicacion, favor eliminarla manualmente desde https://jasolutions.com.co:2083/cpsess8986912440/3rdparty/phpMyAdmin/index.php?login=1&post_login=95105964238457')
                  console.error('Error:', error)
                  alert('Error: ' + error)
                })
                .then(resp => {
                  if (resp.count === undefined) {
                    alert('NO Se ha eliminado rubicacion, favor eliminarla manualmente desde https://jasolutions.com.co:2083/cpsess8986912440/3rdparty/phpMyAdmin/index.php?login=1&post_login=95105964238457')
                  } else {
                    console.log('Se ha eliminado rubicacion')
                  }
                  alert('NO Se ha eliminado rindexaciones, ridiomas, revista, favor eliminarlas manualmente desde https://jasolutions.com.co:2083/cpsess8986912440/3rdparty/phpMyAdmin/index.php?login=1&post_login=95105964238457')
                  /* controllerServices.deleteModel(controllerServices.getEnum().rindexaciones, _self.currentId)
                    .catch(error => {
                      alert('NO Se ha eliminado rindexaciones, favor eliminarla manualmente desde https://jasolutions.com.co:2083/cpsess8986912440/3rdparty/phpMyAdmin/index.php?login=1&post_login=95105964238457');
                      console.error('Error:', error)
                      alert("Error: "+error)
                    })
                    .then(resp => {
                      if(resp.count === undefined){
                        alert('NO Se ha eliminado rindexaciones, favor eliminarla manualmente desde https://jasolutions.com.co:2083/cpsess8986912440/3rdparty/phpMyAdmin/index.php?login=1&post_login=95105964238457');
                      }else{
                        console.log('Se ha eliminado rindexaciones');
                      }
                      controllerServices.deleteModel(controllerServices.getEnum().ridiomas, _self.currentId)
                        .catch(error => {
                          alert('NO Se ha eliminado la insercion ridiomas, favor eliminarla manualmente desde https://jasolutions.com.co:2083/cpsess8986912440/3rdparty/phpMyAdmin/index.php?login=1&post_login=95105964238457');
                          console.error('Error:', error)
                          alert("Error: "+error)
                        })
                        .then(resp => {
                          if(resp.count === undefined){
                            alert('NO Se ha eliminado la insercion ridiomas, favor eliminarla manualmente desde https://jasolutions.com.co:2083/cpsess8986912440/3rdparty/phpMyAdmin/index.php?login=1&post_login=95105964238457');
                          }else{
                            console.log('Se ha eliminado ridiomas');
                          }
                          controllerServices.deleteModel(controllerServices.getEnum().revista, _self.currentId)
                            .catch(error => {
                              alet('No se ha eliminado Revista, favor eliminarla manualmente desde http://journals-research.com:3000/explorer/');
                              console.error('Error:', error)
                              alert("Error: "+error)
                            })
                            .then(resp => {
                              if(resp.count === undefined){
                                alet('No se ha eliminado Revista, favor eliminarla manualmente desde http://journals-research.com:3000/explorer/');
                              }else{
                                console.log('Se ha eliminado Revista');
                                console.log('Se ha eliminado ridiomas');
                                alert('Se removieron las inserciones con exito')
                              }
                            })
                        })
                    }) */
                })
            })
        })
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

</style>
