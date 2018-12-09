import controllerServices from '../../../client-http/services'

export default {
  crudOfJournal (callbacks) {
    let json = {
      title: 'Revista',
      inputs: [
        {
          label: 'Titulo',
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
          placeholder: 'Ingrese el Titulo corto',
          type: 'text',
          active: true,
          id: 'tituloCorto',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'doi',
          placeholder: 'Ingrese el doi',
          type: 'text',
          active: true,
          id: 'doi',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'eissn',
          placeholder: 'Ingrese el eissn',
          type: 'text',
          active: true,
          id: 'eissn',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'issn',
          placeholder: 'Ingrese el issn',
          type: 'text',
          active: true,
          id: 'issn',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'imagen',
          placeholder: 'Ingrese el imagen',
          type: 'text',
          active: true,
          id: 'imagen',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'descripcion',
          placeholder: 'Ingrese descripcion',
          type: 'text',
          active: true,
          id: 'descripcion',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'fechaCreacion',
          placeholder: 'Ingrese fechaCreacion',
          type: 'datetime-local',
          active: true,
          id: 'fechaCreacion',
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
        json.inputs.push(inputLicence)
        callbacks(false, json)
      })
  },
  crudOfJContact (callbacks) {
    let json = {
      title: 'RContacto',
      inputs: [
        {
          label: 'id',
          placeholder: 'Ingrese el id de la revista',
          type: 'number',
          active: true,
          id: 'id',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'editor',
          placeholder: 'Ingrese el editor',
          type: 'text',
          active: true,
          id: 'editor',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'editorGooglescholar',
          placeholder: 'Ingrese el editorGooglescholar',
          type: 'text',
          active: true,
          id: 'editorGooglescholar',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'editorOrcid',
          placeholder: 'Ingrese el editorOrcid',
          type: 'text',
          active: true,
          id: 'editorOrcid',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'facultad',
          placeholder: 'Ingrese la facultad',
          type: 'text',
          active: true,
          id: 'facultad',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'institucion',
          placeholder: 'Ingrese la institucion',
          type: 'text',
          active: true,
          id: 'institucion',
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
    callbacks(false, json)
  },
  crudOfJAdditional (callbacks) {
    // eslint-disable-next-line no-unused-vars
    let _self = this
    // eslint-disable-next-line no-unused-vars
    let formFormat = {
      title: 'RAdicional',
      inputs: [
        {
          label: 'id',
          placeholder: 'Ingrese el id de la revista',
          type: 'number',
          active: true,
          id: 'id',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'apc',
          placeholder: 'Ingrese el apc',
          type: 'number',
          active: true,
          id: 'apc',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'codigoEtica',
          placeholder: 'Ingrese el codigoEtica',
          type: 'text',
          active: true,
          id: 'codigoEtica',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'correo',
          placeholder: 'Ingrese el correo',
          type: 'text',
          active: true,
          id: 'correo',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'equipoEditorial',
          placeholder: 'Ingrese el equipoEditorial',
          type: 'text',
          active: true,
          id: 'equipoEditorial',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'facebook',
          placeholder: 'Ingrese el facebook',
          type: 'text',
          active: true,
          id: 'facebook',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'googlescholar',
          placeholder: 'Ingrese el googlescholar',
          type: 'text',
          active: true,
          id: 'googlescholar',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'guiaAutores',
          placeholder: 'Ingrese la guiaAutores',
          type: 'text',
          active: true,
          id: 'guiaAutores',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'instagram',
          placeholder: 'Ingrese instagram',
          type: 'text',
          active: true,
          id: 'instagram',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'oai',
          placeholder: 'Ingrese oai',
          type: 'text',
          active: true,
          id: 'oai',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'periodicidadOtro',
          placeholder: 'Ingrese periodicidadOtro',
          type: 'text',
          active: true,
          id: 'periodicidadOtro',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'preprint',
          placeholder: 'Ingrese preprint',
          type: 'number',
          active: true,
          id: 'preprint',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'twitter',
          placeholder: 'Ingrese twitter',
          type: 'text',
          active: true,
          id: 'twitter',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'url',
          placeholder: 'Ingrese url',
          type: 'text',
          active: true,
          id: 'url',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'videopresentacion',
          placeholder: 'Ingrese videopresentacion',
          type: 'text',
          active: true,
          id: 'videopresentacion',
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

    let inputCitacion = this.getFormatInputOptions()
    inputCitacion.label = 'estiloCitacionId'
    inputCitacion.type = 'radio'
    inputCitacion.active = true
    inputCitacion.id = 'estiloCitacionId'

    let inputPeriodicidad = this.getFormatInputOptions()
    inputPeriodicidad.label = 'periodicidadId'
    inputPeriodicidad.type = 'radio'
    inputPeriodicidad.active = true
    inputPeriodicidad.id = 'periodicidadId'

    let inputAutoarchivo = this.getFormatInputOptions()
    inputAutoarchivo.label = 'politicaAutoarchivoId'
    inputAutoarchivo.type = 'radio'
    inputAutoarchivo.active = true
    inputAutoarchivo.id = 'politicaAutoarchivoId'

    let inputRevisionPares = this.getFormatInputOptions()
    inputRevisionPares.label = 'tipoRevisionParesId'
    inputRevisionPares.type = 'radio'
    inputRevisionPares.active = true
    inputRevisionPares.id = 'tipoRevisionParesId'

    let inputDiscipline = this.getFormatInputOptions()
    inputDiscipline.label = 'Ingrese la disciplina'
    inputDiscipline.type = 'radio'
    inputDiscipline.active = true
    inputDiscipline.id = 'disciplinaId'

    let inputDiscipline1 = this.getFormatInputOptions()
    inputDiscipline1.label = 'Ingrese la disciplina1'
    inputDiscipline1.type = 'radio'
    inputDiscipline1.active = true
    inputDiscipline1.id = 'disciplinaId1'

    let inputDiscipline2 = this.getFormatInputOptions()
    inputDiscipline2.label = 'Ingrese la disciplina2'
    inputDiscipline2.type = 'radio'
    inputDiscipline2.active = true
    inputDiscipline2.id = 'disciplinaId2'

    let inputDiscipline3 = this.getFormatInputOptions()
    inputDiscipline3.label = 'Ingrese la disciplina3'
    inputDiscipline3.type = 'radio'
    inputDiscipline3.active = true
    inputDiscipline3.id = 'disciplinaId3'

    _self.getInputOptions(
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
                                    formFormat.inputs.push(dataLicit)
                                    formFormat.inputs.push(dataPeriod)
                                    formFormat.inputs.push(dataAArch)
                                    formFormat.inputs.push(dataRev)
                                    formFormat.inputs.push(dataDis)
                                    formFormat.inputs.push(dataDis1)
                                    formFormat.inputs.push(dataDis2)
                                    formFormat.inputs.push(dataDis3)
                                    return callbacks(false, formFormat)
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
      })
  },
  crudOfJLanguage (callbacks) {
    let _self = this
    // eslint-disable-next-line no-unused-vars
    let formFormat = {
      title: 'RIdioma',
      inputs: [
        {
          label: 'revistaId',
          placeholder: 'Ingrese el revistaId',
          type: 'number',
          active: true,
          id: 'revistaId',
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

    let inputIdioma = this.getFormatInputOptions()
    inputIdioma.label = 'idiomaId'
    inputIdioma.type = 'radio'
    inputIdioma.active = true
    inputIdioma.id = 'idiomaId'

    _self.getInputOptions(
      controllerServices.getEnum().idioma,
      inputIdioma, 'idioma', function (errIdioma, dataIdioma) {
        if (errIdioma) {
          return callbacks(true, dataIdioma)
        }
        formFormat.inputs.push(dataIdioma)
        callbacks(false, formFormat)
      })
  },
  crudOfJIndexing (callbacks) {
    let _self = this
    // eslint-disable-next-line no-unused-vars
    let formFormat = {
      title: 'RIndexaciones',
      inputs: [
        {
          label: 'revistaId',
          placeholder: 'Ingrese el revistaId',
          type: 'number',
          active: true,
          id: 'revistaId',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'parametro',
          placeholder: 'Ingrese el parametro',
          type: 'text',
          active: true,
          id: 'parametro',
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

    let inputIndexacion = this.getFormatInputOptions()
    inputIndexacion.label = 'indexacionesId'
    inputIndexacion.type = 'radio'
    inputIndexacion.active = true
    inputIndexacion.id = 'indexacionesId'

    _self.getInputOptions(
      controllerServices.getEnum().indexaciones,
      inputIndexacion, 'indexaciones', function (errIndexacion, dataIndexacion) {
        if (errIndexacion) {
          return callbacks(true, dataIndexacion)
        }
        formFormat.inputs.push(dataIndexacion)
        callbacks(false, formFormat)
      })
  },
  crudOfJLocation (callbacks) {
    let _self = this
    // eslint-disable-next-line no-unused-vars
    let formFormat = {
      title: 'RUbicacion',
      inputs: [
        {
          label: 'id',
          placeholder: 'Ingrese el id de la revista',
          type: 'number',
          active: true,
          id: 'id',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'direccion',
          placeholder: 'Ingrese la direccion',
          type: 'text',
          active: true,
          id: 'direccion',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'telefono',
          placeholder: 'Ingrese el telefono',
          type: 'text',
          active: true,
          id: 'telefono',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'zipcode',
          placeholder: 'Ingrese el zipcode',
          type: 'text',
          active: true,
          id: 'zipcode',
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

    let inputCity = this.getFormatInputOptions()
    inputCity.label = 'ciudadId'
    inputCity.type = 'radio'
    inputCity.active = true
    inputCity.id = 'ciudadId'

    _self.getInputOptions(
      controllerServices.getEnum().ciudad,
      inputCity, 'ciudad', function (errCiudad, dataCiudad) {
        if (errCiudad) {
          return callbacks(true, dataCiudad)
        }
        formFormat.inputs.push(dataCiudad)
        callbacks(false, formFormat)
      })
  },
  crudOfJournalCategory (callbacks) {
    let _self = this
    let formFormat = {
      title: 'RevistasCategorias',
      inputs: [
        {
          label: 'revistaId',
          type: 'number',
          active: true,
          id: 'revistaId',
          res: ''
        }
      ],
      button: {
        textButton: 'Insertar',
        active: true
      },
    }
    let inputCategory = _self.getFormatInputOptions()
    inputCategory.label = 'categoriaId'
    inputCategory.type = 'checkbox'
    inputCategory.id = 'categoriaId'
    inputCategory.res = []

    _self.getInputOptions(
      controllerServices.getEnum().categoria,
      inputCategory, 'nombre', function (errCat, dataCat) {
        if (errCat) {
          return callbacks(true, dataCat)
        }
        formFormat.inputs.push(dataCat)
        callbacks(false, formFormat)
      })
  },
  getFormatInputOptions () {
    // Retorna el formato correcto de los inputs con opciones
    return {
      label: String,
      type: String,
      active: Boolean,
      id: String,
      res: '',
      options: []
    }
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
