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
import moment from 'moment'

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
      currentIdJournal: undefined,
      currentIdJContact: undefined,
      currentIdJAdd: undefined,
      currentIdJLocation: undefined,
      currentIdJIndexing: [],
      currentIdJLanguage: [],
      currentIdJCategories: [],
      currentIdJWord: [],
      currentIdWord: [],
      loading: false,
      loadingImage: ''
    }
  },
  created () {
    let _self = this
    this.loadingImage = loadingGif
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
      _self.currentIdJournal = undefined
      _self.currentIdJContact = undefined
      _self.currentIdJAdd = undefined
      _self.currentIdJLocation = undefined
      _self.currentIdJIndexing = []
      _self.currentIdJLanguage = []
      _self.currentIdJCategories = []
      _self.currentIdJWord = []
      _self.loading = true
      controllerServices.getModelsFilter(controllerServices.getEnum().revista, { 'where': { 'eissn': jsonResponse.data.eissn } })
        .then(response => response.json())
        .catch(error => {
          _self.loading = false
          console.error('Error:', error)
          alert('Error: ' + error)
        })
        .then(response => {
          if (response.length != 0) {
            _self.loading = false
            alert('Error: La revista con eissn = ' + jsonResponse.data.eissn + ' ya se encuentra en el sistema')
            return
          }
          controllerServices.getModelsFilter(controllerServices.getEnum().revista, { 'where': { 'issn': jsonResponse.data.issn } })
            .then(response => response.json())
            .catch(error => {
              _self.loading = false
              console.error('Error:', error)
              alert('Error: ' + error)
            })
            .then(response => {
              if (response.length != 0) {
                _self.loading = false
                alert('Error: La revista con issn = ' + jsonResponse.data.issn + ' ya se encuentra en el sistema')
                return
              }
              _self.sendModel(controllerServices.getEnum().revista, _self.getJsonNotVoid({
                'descripcion': jsonResponse.data.descripcion,
                'doi': jsonResponse.data.doi,
                'eissn': jsonResponse.data.eissn,
                'fechaCreacion': jsonResponse.data.fechaCreacion,
                'fechaIngreso': jsonResponse.data.fechaIngreso,
                'id': '',
                'imagen': jsonResponse.data.imagen,
                'issn': jsonResponse.data.issn,
                'licenciaId': jsonResponse.data.licenciaId,
                'subtitulo': jsonResponse.data.subtitulo,
                'titulo': jsonResponse.data.titulo,
                'tituloCorto': jsonResponse.data.tituloCorto
              })).then(response => {
                if (response['id'] === undefined) {
                  console.error('Error:', response.error)
                  alert('Error: ' + response.error.message)
                  _self.removeInsertion()
                  _self.loading = false
                  return
                }
                _self.currentIdJournal = response['id']
                _self.sendModel(controllerServices.getEnum().rcontacto, _self.getJsonNotVoid({
                  'editor': jsonResponse.data.editor,
                  'editorGooglescholar': jsonResponse.data.editorGooglescholar,
                  'editorOrcid': jsonResponse.data.editorOrcid,
                  'facultad': jsonResponse.data.institucion.split(',').length == 2 ? jsonResponse.data.institucion.split(',')[0] : '',
                  'id': _self.currentIdJournal,
                  'institucion': jsonResponse.data.institucion.split(',').length == 2 ? jsonResponse.data.institucion.split(',')[1] : jsonResponse.data.institucion
                })).then(response => {
                  if (response['id'] === undefined) {
                    console.error('Error:', response.error)
                    alert('Error: ' + response.error.message)
                    _self.removeInsertion()
                    _self.loading = false
                    return
                  }
                  _self.currentIdJContact = response['id']
                  _self.sendModel(controllerServices.getEnum().radicional, _self.getJsonNotVoid({
                    'apc': jsonResponse.data.apc,
                    'codigoEtica': jsonResponse.data.codigoEtica,
                    'correo': jsonResponse.data.correo,
                    'disciplinaId': jsonResponse.data.disciplinaId,
                    'disciplinaId1': jsonResponse.data.disciplinaId1, // si no hay no sale
                    'disciplinaId2': jsonResponse.data.disciplinaId2,
                    'disciplinaId3': jsonResponse.data.disciplinaId3,
                    'equipoEditorial': jsonResponse.data.equipoEditorial,
                    'estiloCitacionId': jsonResponse.data.estiloCitacionId,
                    'facebook': jsonResponse.data.facebook,
                    'googlescholar': jsonResponse.data.googlescholar,
                    'guiaAutores': jsonResponse.data.guiaAutores,
                    'id': _self.currentIdJournal,
                    'instagram': jsonResponse.data.instagram,
                    'oai': jsonResponse.data.oai,
                    'periodicidadId': jsonResponse.data.periodicidadId,
                    'periodicidadOtro': jsonResponse.data.periodicidadOtro,
                    'politicaAutoarchivoId': jsonResponse.data.politicaAutoarchivoId,
                    'preprint': jsonResponse.data.preprint,
                    'tipoRevisionParesId': jsonResponse.data.tipoRevisionParesId,
                    'twitter': jsonResponse.data.twitter,
                    'url': jsonResponse.data.url,
                    'videopresentacion': jsonResponse.data.videopresentacion
                  })).then(response => {
                    if (response['id'] === undefined) {
                      console.error('Error:', response.error)
                      alert('Error: ' + response.error.message)
                      _self.removeInsertion()
                      _self.loading = false
                      return
                    }
                    _self.currentIdJAdd = response['id']
                    _self.sendModel(controllerServices.getEnum().rubicacion, _self.getJsonNotVoid({
                      'ciudadId': jsonResponse.data.ciudadId,
                      'direccion': jsonResponse.data.direccion,
                      'id': _self.currentIdJournal,
                      'telefono': jsonResponse.data.telefono,
                      'zipcode': jsonResponse.data.zipcode
                    })).then(response => {
                      if (response['id'] === undefined) {
                        console.error('Error:', response.error)
                        alert('Error: ' + response.error.message)
                        _self.removeInsertion()
                        _self.loading = false
                        return
                      }
                      _self.currentIdJLocation = response['id']
                      let arrAux = []
                      for (const key in jsonResponse.data.indexacionesId) {
                        arrAux.push(_self.getJsonNotVoid({
                          'id': '',
                          'indexacionesId': jsonResponse.data.indexacionesId[key],
                          'revistaId': _self.currentIdJournal,
                          'parametro': jsonResponse.data[jsonResponse.auxIndex[jsonResponse.data.indexacionesId[key]]]
                        }))
                      }
                      _self.sendModelGroup(controllerServices.getEnum().rindexaciones, 0, arrAux, 'currentIdJIndexing', function (err, data) {
                        if (err) {
                          _self.loading = false
                          return
                        }
                        arrAux = []
                        for (const key in jsonResponse.data.idiomaId) {
                          arrAux.push(_self.getJsonNotVoid({
                            'id': '',
                            'idiomaId': jsonResponse.data.idiomaId[key],
                            'revistaId': _self.currentIdJournal
                          }))
                        }
                        _self.sendModelGroup(controllerServices.getEnum().ridiomas, 0, arrAux, 'currentIdJLanguage', function (err, data) {
                          if (err) {
                            _self.loading = false
                            return
                          }
                          arrAux = []
                          for (const key in jsonResponse.data.categoriaId) {
                            arrAux.push(_self.getJsonNotVoid({
                              'id': '',
                              'categoriaId': jsonResponse.data.categoriaId[key],
                              'revistaId': _self.currentIdJournal
                            }))
                          }
                          _self.sendModelGroup(controllerServices.getEnum().revistascategorias, 0, arrAux, 'currentIdJCategories', function (err, data) {
                            if (err) {
                              _self.loading = false
                              return
                            }
                            arrAux = []
                            let words = jsonResponse.data.palabraClaveId.split(";")
                            for (const iterator of words) {
                              if(iterator.trim() != ''){
                                arrAux.push(_self.getJsonNotVoid({
                                  'id': '',
                                  'palabraClave': iterator.trim()
                                }))
                              }
                            }
                            _self.identifyRepeated(controllerServices.getEnum().palabraclave, 0, arrAux, "palabraClave", [], function(err, data){
                              //data tiene los index de las palabras que ya estan en la BD
                              let wordsRepeated = []
                              for (const iterator of data) {
                                wordsRepeated.push(arrAux[iterator].palabraClave)
                                arrAux[iterator] = null
                              }
                              arrAux = arrAux.filter(function (el) {
                                return el != null;
                              });
                              _self.getIds(controllerServices.getEnum().palabraclave, 0, wordsRepeated, "palabraClave", [], function(err, data){
                                let idsRepeated = data
                                _self.sendModelGroup(controllerServices.getEnum().palabraclave, 0, arrAux, 'currentIdWord', function (err, data) {
                                if (err) {
                                  _self.loading = false
                                  return
                                }
                                arrAux = []
                                for (const iterator of idsRepeated) {
                                  arrAux.push(_self.getJsonNotVoid({
                                    'id': '',
                                    'palabraClaveId': iterator,
                                    'revistaId': _self.currentIdJournal
                                  }))
                                }
                                for (const iterator of _self.currentIdWord) {
                                  arrAux.push(_self.getJsonNotVoid({
                                    'id': '',
                                    'palabraClaveId': iterator,
                                    'revistaId': _self.currentIdJournal
                                  }))
                                }
                                _self.sendModelGroup(controllerServices.getEnum().palabrasclave, 0, arrAux, 'currentIdJWord', function (err, data) {
                                  if (err) {
                                    _self.loading = false
                                    return
                                  }
                                  controllerServices
                                    .getModelsFilter(controllerServices.getEnum().pais, { 'where': { 'id': jsonResponse.data.pais } })
                                    .then(response => response.json())
                                    .catch(error => {
                                      console.error('Error:', error)
                                      alert('Error: ' + error)
                                      _self.removeInsertion()
                                    })
                                    .then(response => {
                                      if (response.length == 0) {
                                        alert('Error: Error al intentar asociar el pais a la revista')
                                        _self.removeInsertion()
                                      }
                                      if (response[0].hayrevista == 0) {
                                        response[0].hayrevista = 1
                                        controllerServices.updateModel(controllerServices.getEnum().pais, response[0])
                                          .then(response => response.json())
                                          .catch(error => {
                                            console.error('Error:', error)
                                            alert('Error: ' + error)
                                            _self.removeInsertion()
                                          })
                                          .then(response => {
                                            if (response['id'] === undefined) {
                                              console.error('Error:', response.error)
                                              alert('Error: ' + response.error.message)
                                              _self.removeInsertion()
                                              _self.loading = false
                                              return
                                            }
                                            _self.loading = false
                                            alert('Se inserto Correctamente')
                                            _self.currentIdJournal = undefined
                                            _self.currentIdJContact = undefined
                                            _self.currentIdJAdd = undefined
                                            _self.currentIdJLocation = undefined
                                            _self.currentIdJIndexing = []
                                            _self.currentIdJLanguage = []
                                            _self.currentIdJCategories = []
                                            _self.currentIdJWord = []
                                            _self.clearForm()
                                          })
                                      } else {
                                        _self.loading = false
                                        alert('Se inserto Correctamente')
                                        _self.currentIdJournal = undefined
                                        _self.currentIdJContact = undefined
                                        _self.currentIdJAdd = undefined
                                        _self.currentIdJLocation = undefined
                                        _self.currentIdJIndexing = []
                                        _self.currentIdJLanguage = []
                                        _self.currentIdJCategories = []
                                        _self.clearForm()
                                      }
                                    })
                                })
                              })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
        })
    },
    sendModel (model, data) {
      let _self = this
      return controllerServices.postModel(model, data)
        .then(response => response.json())
        .catch(error => {
          console.error('Error:', error)
          alert('Error: ' + error)
          _self.removeInsertion()
        })
    },
    identifyRepeated(model, index, array, attribute, idsRepeated, callback) {
      let _self = this
      if (index >= array.length) {
        callback(false, idsRepeated)
        return
      }
      let jsonFilter = {}
      jsonFilter[attribute.toString()] = array[index][attribute]
      controllerServices.getModelCount(model, jsonFilter)
        .then(response => response.json())
        .catch(error => {
          console.error('Error:', error)
          alert('Error: ' + error)
          _self.removeInsertion()
          callback(true, error)
        })
        .then(response => {
          if (response['count'] === undefined) {
            console.error('Error:', response.error)
            alert('Error: ' + response.error.message)
            _self.removeInsertion()
            callback(true, error)
            return
          }else if(response['count'] != 0){
            idsRepeated.push(index)
          }
          _self.identifyRepeated(model, ++index, array, attribute, idsRepeated, callback)
        })
    },
    getIds(model, index, array, attribute, ids, callback) {
      let _self = this
      if (index >= array.length) {
        callback(false, ids)
        return
      }
      let jsonFilter = {}
      jsonFilter[attribute] = array[index]
      controllerServices.getModelsFilter(model, {"where": jsonFilter})
        .then(response => response.json())
        .catch(error => {
          console.error('Error:', error)
          alert('Error: ' + error)
          _self.removeInsertion()
          callback(true, error)
        })
        .then(response => {
          if (response.length != 0) {
            ids.push(response[0].id)
          }
          _self.getIds(model, ++index, array, attribute, ids, callback)
        })
    },
    sendModelGroup (model, index, array, idsGropus, callback) {
      /* idsGropus : El nombre de la variable asociada a data() por si se necesita eliminar */
      let _self = this
      if (index >= array.length) {
        callback(false, '')
        return
      }
      controllerServices.postModel(model, array[index])
        .then(response => response.json())
        .catch(error => {
          console.error('Error:', error)
          alert('Error: ' + error)
          _self.removeInsertion()
          callback(true, error)
        })
        .then(response => {
          if (response['id'] === undefined) {
            console.error('Error:', response.error)
            alert('Error: ' + response.error.message)
            _self.removeInsertion()
            callback(true, error)
            return
          }
          _self[idsGropus].push(response['id'])
          _self.sendModelGroup(model, ++index, array, idsGropus, callback)
        })
    },
    clearForm () {
      for (const iterator of this.formJournal.inputs) {
        if (Array.isArray(iterator.res)) {
          iterator.res = []
        } else {
          iterator.res = ''
        }
        if (iterator.id == 'fechaIngreso') {
          iterator.res = moment().format().substring(0, 16)
        }
      }
    },
    removeInsertion () {
      let _self = this
      if (_self.currentIdJournal === undefined) return
      controllerServices.deleteModel(controllerServices.getEnum().rcontacto, _self.currentIdJContact)
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
          controllerServices.deleteModel(controllerServices.getEnum().rubicacion, _self.currentIdJLocation)
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
              _self.removeModelGroup(controllerServices.getEnum().rindexaciones, 0, _self.currentIdJIndexing, function (err, data) {
                if (err) {
                  alert('NO Se han eliminado correctamente las rindexaciones, favor eliminarla manualmente desde https://jasolutions.com.co:2083/cpsess8986912440/3rdparty/phpMyAdmin/index.php?login=1&post_login=95105964238457')
                } else {
                  console.log('Se ha eliminado rindexaciones')
                }
                _self.removeModelGroup(controllerServices.getEnum().ridiomas, 0, _self.currentIdJLanguage, function (err, data) {
                  if (err) {
                    alert('NO Se han eliminado correctamente los ridiomas, favor eliminarla manualmente desde https://jasolutions.com.co:2083/cpsess8986912440/3rdparty/phpMyAdmin/index.php?login=1&post_login=95105964238457')
                  } else {
                    console.log('Se ha eliminado ridiomas')
                  }
                  _self.removeModelGroup(controllerServices.getEnum().revistascategorias, 0, _self.currentIdJCategories, function (err, data) {
                    if (err) {
                      alert('NO Se han eliminado correctamente las revistas categorias, favor eliminarla manualmente desde https://jasolutions.com.co:2083/cpsess8986912440/3rdparty/phpMyAdmin/index.php?login=1&post_login=95105964238457')
                    } else {
                      console.log('Se ha eliminado revista categorias')
                    }
                    _self.removeModelGroup(controllerServices.getEnum().palabrasclave, 0, _self.currentIdJWord, function (err, data) {
                      if (err) {
                        alert('NO Se han eliminado correctamente las palabras asociadas a las revistas, favor eliminarla manualmente desde https://jasolutions.com.co:2083/cpsess8986912440/3rdparty/phpMyAdmin/index.php?login=1&post_login=95105964238457')
                      } else {
                        console.log('Se ha eliminado las palabras clave asociadas a la revista')
                      }
                      controllerServices.deleteModel(controllerServices.getEnum().radicional, _self.currentIdJAdd)
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
                          controllerServices.deleteModel(controllerServices.getEnum().revista, _self.currentIdJournal)
                            .catch(error => {
                              alet('No se ha eliminado Revista, favor eliminarla manualmente desde http://journals-research.com:3000/explorer/')
                              console.error('Error:', error)
                              alert('Error: ' + error)
                            })
                            .then(resp => {
                              if (resp.count === undefined) {
                                alet('No se ha eliminado Revista, favor eliminarla manualmente desde http://journals-research.com:3000/explorer/')
                              } else {
                                console.log('Se ha eliminado Revista')
                                alert('Se removieron las inserciones con exito')
                              }
                          })
                      })
                    })
                  })
                })
              })
            })
        })
    },
    removeModelGroup (model, index, array, callback) {
      let _self = this
      if (index > array.length) {
        callback(false, '')
        return
      }
      controllerServices.deleteModel(model, array[index])
        .then(response => response.json())
        .catch(error => {
          console.error('Error:', error)
          callback(true, error)
        })
        .then(response => {
          if (response['count'] === undefined) {
            console.error('Error:', response.error)
            _self.removeInsertion()
            callback(true, error)
          }
          _self.removeModelGroup(model, ++index, array, callback)
        })
    },
    getJsonNotVoid (json) {
      let res = {}
      for (const key in json) {
        if (json[key] != '' || key == 'id') {
          res[key] = json[key]
        }
      }
      return res
    },
    getIndexOfForm (key, value) {
      let index = 0
      for (const iterator of this.formJournal.inputs) {
        if (iterator[key] == value) {
          return index
        }
        index += 1
      }
      return -1
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
