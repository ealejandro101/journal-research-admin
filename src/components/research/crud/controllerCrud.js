import controllerServices from '../../../client-http/services'

export default {
  crudOfJournal (callbacks) {
    let formFormat = {
      title: 'Revista',
      inputs: [
        {
          label: 'Titulo*',
          required: true,
          placeholder: 'Ingrese el titulo',
          type: 'text',
          active: true,
          id: 'titulo',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'Subtitulo',
          required: false,
          placeholder: 'Ingrese el subtitulo',
          type: 'text',
          active: true,
          id: 'subtitulo',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'Titulo corto',
          required: false,
          placeholder: 'Ingrese el Titulo corto',
          type: 'text',
          active: true,
          id: 'tituloCorto',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'Año de creación de la revista*',
          required: true,
          placeholder: 'Ingrese fecha de creacion',
          type: 'datetime-local',
          active: true,
          id: 'fechaCreacion',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'ISSN',
          required: false,
          placeholder: 'Ingrese el ISSN de su revista (Versión impresa)',
          type: 'text',
          active: true,
          id: 'issn',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'EISSN',
          required: false,
          placeholder: 'Ingrese el ISSN electrónico de su revista',
          type: 'text',
          active: true,
          id: 'eissn',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'DOI',
          required: false,
          placeholder: 'Ingrese el DOI de su revista - 10.xxxx',
          type: 'text',
          active: true,
          id: 'doi',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'Descripción de la revista',
          required: false,
          placeholder: 'Incluya política editorial (objetivo y alcance)',
          type: 'text',
          active: true,
          id: 'descripcion',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'Guía para autores*',
          required: true,
          placeholder: 'Ingrese la url de la guía para autores',
          type: 'text',
          active: true,
          id: 'guiaAutores',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'Equipo editorial*',
          required: true,
          placeholder: 'Ingrese la url donde se encuentra el equipo editorial de la revista',
          type: 'text',
          active: true,
          id: 'equipoEditorial',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'Código de ética*',
          required: true,
          placeholder: 'Ingrese url donde se encuentra el código de la revista',
          type: 'text',
          active: true,
          id: 'codigoEtica',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'Ingrese la periodicidad de su revista*',
          type: 'radio',
          required: true,
          active: true,
          id: 'periodicidadId',
          res: '',
          options: []
        },
        {
          label: 'Ingrese la periodicidad de su revista*',
          type: 'radio',
          required: true,
          active: true,
          id: 'tipoRevisionParesId',
          res: '',
          options: []
        },
        {
          label: 'Seleccione la(s) catergoria(s) a las cuales pertenece su revista*',
          required: true,
          type: 'checkbox',
          active: true,
          id: 'categoriaId',
          res: '',
          options: []
        },
        {
          label: 'Escoja la disciplina de su revista*',
          required: true,
          type: 'checkbox',
          active: true,
          id: 'disciplinaId',
          res: '',
          options: []
        },
        {
          label: 'Escoja la disciplina 1 de su revista*',
          required: false,
          type: 'checkbox',
          active: true,
          id: 'disciplinaId1',
          res: '',
          options: []
        },
        {
          label: 'Escoja la disciplina 2 de su revista*',
          required: false,
          type: 'checkbox',
          active: true,
          id: 'disciplinaId2',
          res: '',
          options: []
        },
        {
          label: 'Escoja la disciplina 3 de su revista*',
          required: false,
          type: 'checkbox',
          active: true,
          id: 'disciplinaId3',
          res: '',
          options: []
        },
        {
          label: 'Seleccione el (los) idioma (s) en los cuales publica la revista*',
          required: true,
          type: 'checkbox',
          active: true,
          id: 'idiomaId',
          res: '',
          options: []
        },
        {
          label: 'Licencia Creative Commons *',
          type: 'radio',
          active: true,
          id: 'licenciaId',
          res: '',
          options: []
        },
        {
          label: 'APC',
          placeholder: 'Ingrese el apc*',
          type: 'number',
          active: true,
          id: 'apc',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'Política de Autoarchivo*',
          required: true,
          type: 'radio',
          active: true,
          id: 'politicaAutoarchivoId',
          res: '',
          options: []
        },
        {
          label: 'OAI-PMH*',
          required: true,
          placeholder: 'Ingrese la ulr del OAI de la revista',
          type: 'text',
          active: true,
          id: 'oai',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'Su revista acepta PrePrint?',
          placeholder: 'Ingrese preprint',
          type: 'number',
          active: true,
          id: 'preprint',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'Estilo de citación*',
          required: true,
          type: 'radio',
          active: true,
          id: 'estiloCitacionId',
          res: '',
          options: []
        },
        {
          label: 'Correo electrónico*',
          required: true,
          placeholder: 'Ingrese el email de la revista',
          type: 'mail',
          active: true,
          id: 'correo',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'Editor *',
          required: true,
          placeholder: 'Ingrese el nombre del editor de la revista',
          type: 'text',
          active: true,
          id: 'editor',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'OrcID',
          required: false,
          placeholder: 'ingrese el OrcID del editor',
          type: 'text',
          active: true,
          id: 'editorOrcid',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'Google Scholar',
          required: false,
          placeholder: 'ingrese la url del Google Scholar del editor',
          type: 'text',
          active: true,
          id: 'editorGooglescholar',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'Institución (facultad, institución)*',
          required: true,
          placeholder: 'Ingrese el nombre de la Institución a la cual pertenece la revista',
          type: 'text',
          active: true,
          id: 'institucion',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'País *',
          required: true,
          type: 'radio',
          active: true,
          id: 'pais#############',
          res: '',
          options: []
        },
        {
          label: 'Ciudad*',
          required: true,
          type: 'radio',
          active: true,
          id: 'ciudadId',
          res: '',
          options: []
        },
        {
          label: 'Teléfono',
          required: false,
          placeholder: 'Ingrese el telefono',
          type: 'text',
          active: true,
          id: 'telefono',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'Dirección',
          required: false,
          placeholder: 'Ingrese la direccion',
          type: 'text',
          active: true,
          id: 'direccion',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'URL de la revista *',
          required: true,
          placeholder: 'Ingrese url',
          type: 'text',
          active: true,
          id: 'url',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'Indexaciones *',
          required: true,
          type: 'radio',
          active: true,
          id: 'indexacionesId',
          res: '',
          options: []
        },
        {
          label: 'parametro', // //////////////////////////////////////////////////////////////////////////
          required: true,
          placeholder: 'Ingrese el parametro',
          type: 'text',
          active: true,
          id: 'parametro',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'Google Scholar Revista',
          required: false,
          placeholder: 'Ingrese el googlescholar',
          type: 'text',
          active: true,
          id: 'googlescholar',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'Facebook',
          required: false,
          placeholder: 'Ingrese la URL del facebook de la revista',
          type: 'text',
          active: true,
          id: 'facebook',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'Twitter',
          required: false,
          placeholder: 'ngrese la URL del twitter de la revista',
          type: 'text',
          active: true,
          id: 'twitter',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'Instagram',
          required: false,
          placeholder: 'Ingrese instagram',
          type: 'text',
          active: true,
          id: 'instagram',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'Imagen de la revista',
          required: false,
          placeholder: 'Ingrese la url de la última caratula o logo de la revista',
          type: 'text',
          active: true,
          id: 'imagen',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'Video de la revista',
          required: false,
          placeholder: 'Ingresa en enlace (Youtube, Vimeo) del video promocional de su revista (en caso de tenerlo)',
          type: 'text',
          active: true,
          id: 'videopresentacion',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'fechaIngreso',
          placeholder: 'Ingrese fechaIngreso',
          type: 'datetime-local',
          active: true,
          id: 'fechaIngreso',
          res: '',
          name: '',
          value: ''
        }
      ],
      button: {
        textButton: 'Insertar',
        active: true
      },
    }
    callbacks(false, formFormat)
    let _self = this
    controllerServices.getModels(controllerServices.getEnum().licencia)
      .then(response => response.json())
      .catch(error => {
        console.error('Error:', error)
        callbacks(true, error)
      })
      .then(responseLicense => {
        let inputLicence = {/* Input de opciones */
          label: 'licenciaId',
          type: 'radio',
          active: true,
          id: 'licenciaId',
          res: '',
          options: []
        }
        for (const iterator of responseLicense) {
          inputLicence.options.push({
            name: 'licenciaId', /* igual en radio */
            value: iterator.id,
            checked: true,
            text: iterator.licencia
          })
        }
      /* _self.getInputOptions(
        controllerServices.getEnum().estilocitacion,
        inputCitacion, 'estiloCitacion', function (errLicit, dataLicit) {
          if (errLicit) {
            return callbacks(true, dataLicit)
          }
          _self.getInputOptions(
            controllerServices.getEnum().periodicidad,
            inputPeriodicidad, 'periodicidad', function (errPeriod, dataPeriod) {
              if (errPeriod) {
                return callbacks(true, dataPeriod)
              }
              _self.getInputOptions(
                controllerServices.getEnum().politicaautoarchivo,
                inputAutoarchivo, 'politicaAutoarchivo', function (errAArch, dataAArch) {
                  if (errAArch) {
                    return callbacks(true, dataAArch)
                  }
                  _self.getInputOptions(
                    controllerServices.getEnum().tiporevisionpares,
                    inputRevisionPares, 'tipoRevisionPares', function (errRev, dataRev) {
                      if (errRev) {
                        return callbacks(true, dataRev)
                      }
                      _self.getInputOptions(
                        controllerServices.getEnum().disciplina,
                        inputDiscipline, 'disciplina', function (errDis, dataDis) {
                          if (errDis) {
                            return callbacks(true, dataDis)
                          }
                          _self.getInputOptions(
                            controllerServices.getEnum().disciplina,
                            inputDiscipline1, 'disciplina', function (errDis1, dataDis1) {
                              if (errDis1) {
                                return callbacks(true, dataDis1)
                              }
                              _self.getInputOptions(
                                controllerServices.getEnum().disciplina,
                                inputDiscipline2, 'disciplina', function (errDis2, dataDis2) {
                                  if (errDis2) {
                                    return callbacks(true, dataDis2)
                                  }
                                  _self.getInputOptions(
                                    controllerServices.getEnum().disciplina,
                                    inputDiscipline3, 'disciplina', function (errDis3, dataDis3) {
                                      if (errDis3) {
                                        return callbacks(true, dataDis3)
                                      }
                                      _self.getInputOptions(
                                        controllerServices.getEnum().idioma,
                                        inputIdioma, 'idioma', function (errIdioma, dataIdioma) {
                                          if (errIdioma) {
                                            return callbacks(true, dataIdioma)
                                          }
                                          formFormat.inputs.push(dataIdioma)
                                          callbacks(false, formFormat)
                                        })
                                        _self.getInputOptions(
                                          controllerServices.getEnum().indexaciones,
                                          inputIndexacion, 'indexaciones', function (errIndexacion, dataIndexacion) {
                                            if (errIndexacion) {
                                              return callbacks(true, dataIndexacion)
                                            }
                                            formFormat.inputs.push(dataIndexacion)
                                            _self.getInputOptions(
                                              controllerServices.getEnum().ciudad,
                                              inputCity, 'ciudad', function (errCiudad, dataCiudad) {
                                                if (errCiudad) {
                                                  return callbacks(true, dataCiudad)
                                                }
                                                formFormat.inputs.push(dataCiudad)
                                                _self.getInputOptions(
                                                  controllerServices.getEnum().categoria,
                                                  inputCategory, 'nombre', function (errCat, dataCat) {
                                                    if (errCat) {
                                                      return callbacks(true, dataCat)
                                                    }
                                                    formFormat.inputs.push(dataCat)
                                                    callbacks(false, formFormat)
                                                  })
                                              })
                                          })
                                    }
                                  )
                                }
                              )
                            }
                          )
                        }
                      )
                    }
                  )
                }
              )
            }
          )
        }) */
      })
  },
  getInputOptions (model, input, text, callbacks) {
    // model de la bd, text de las opciones
    // input = {label, type, active, id, res, options}
    controllerServices.getModels(model)
      .then(response => response.json())
      .catch(error => {
        console.error('Error:', error)
        callbacks(true, error)
      })
      .then(response => {
        let res = input
        for (const iterator of response) {
          res.options.push({
            name: input.id,
            value: iterator.id,
            checked: true,
            text: iterator[text]
          })
        }
        callbacks(false, res)
      })
  }
}
