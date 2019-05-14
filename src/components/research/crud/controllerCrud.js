import controllerServices from '../../../client-http/services'
import moment from 'moment'

export default {
  crudOfJournal (callbacks) {
    let diaActual = moment().format().substring(0, 16)
    let formFormat = {
      title: 'Revista',
      inputs: [
        {
          label: 'Titulo*', // 0
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
          label: 'Subtitulo', // 1
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
          label: 'Titulo corto', // 2
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
          label: 'Año de creación de la revista*', // 3
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
          label: 'ISSN', // 4
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
          label: 'EISSN', // 5
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
          label: 'DOI', // 6
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
          label: 'Descripción de la revista', // 7
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
          label: 'Guía para autores*', // 8
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
          label: 'Equipo editorial*', // 9
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
          label: 'Código de ética*', // 10
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
          label: 'Ingrese la periodicidad de su revista*', // 11
          type: 'radio',
          required: true,
          active: true,
          id: 'periodicidadId',
          res: '',
          options: []
        },
        {
          label: 'Ingrese la periodicidad de su revista en caso de ser diferente', // 12
          type: 'text',
          required: false,
          active: true,
          id: 'periodicidadOtro',
          res: '',
          options: []
        },
        {
          label: 'Tipo de revisión por pares *', // 13
          type: 'radio',
          required: true,
          active: true,
          id: 'tipoRevisionParesId',
          res: '',
          options: []
        },
        {
          label: 'Seleccione la(s) catergoria(s) a las cuales pertenece su revista*', // 14
          required: true,
          type: 'checkbox',
          active: true,
          id: 'categoriaId',
          res: [],
          options: []
        },
        {
          label: 'Escoja la disciplina de su revista*', // 15
          required: true,
          type: 'select',
          active: true,
          id: 'disciplinaId',
          res: '',
          options: []
        },
        {
          label: 'Escoja la disciplina 1 de su revista', // 16
          required: false,
          type: 'select',
          active: true,
          id: 'disciplinaId1',
          res: '',
          options: []
        },
        {
          label: 'Escoja la disciplina 2 de su revista', // 17
          required: false,
          type: 'select',
          active: true,
          id: 'disciplinaId2',
          res: '',
          options: []
        },
        {
          label: 'Escoja la disciplina 3 de su revista', // 18
          required: false,
          type: 'select',
          active: true,
          id: 'disciplinaId3',
          res: '',
          options: []
        },
        {
          label: 'Seleccione el (los) idioma (s) en los cuales publica la revista*', // 19
          required: true,
          type: 'checkbox',
          active: true,
          id: 'idiomaId',
          res: [],
          options: []
        },
        {
          label: 'Licencia Creative Commons *', // 20
          required: true,
          type: 'radio',
          active: true,
          id: 'licenciaId',
          res: '',
          options: []
        },
        {
          label: 'APC', // 21
          required: true,
          placeholder: 'Ingrese el apc*',
          type: 'select',
          active: true,
          id: 'apc',
          res: '',
          options: [
            {
              value: '1',
              text: 'Si'
            },
            {
              value: '0',
              text: 'No'
            }
          ]
        },
        {
          label: 'Política de Autoarchivo*', // 22
          required: true,
          type: 'radio',
          active: true,
          id: 'politicaAutoarchivoId',
          res: '',
          options: []
        },
        {
          label: 'OAI-PMH*', // 23
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
          label: 'Su revista acepta PrePrint?', // 24
          required: true,
          placeholder: 'Ingrese preprint',
          type: 'select',
          active: true,
          id: 'preprint',
          res: '',
          options: [
            {
              value: '1',
              text: 'Si'
            },
            {
              value: '0',
              text: 'No'
            }
          ]
        },
        {
          label: 'Estilo de citación*', // 25
          required: true,
          type: 'radio',
          active: true,
          id: 'estiloCitacionId',
          res: '',
          options: []
        },
        {
          label: 'Correo electrónico*', // 26
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
          label: 'Editor *', // 27
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
          label: 'OrcID', // 28
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
          label: 'Google Scholar', // 29
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
          label: 'Institución (facultad, institución)*', // 30
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
          label: 'País *', // 31
          required: true,
          type: 'select',
          active: true,
          id: 'pais',
          res: '',
          options: []
        },
        {
          label: 'Estado *', // 32
          required: true,
          type: 'select',
          active: true,
          id: 'estado',
          res: '',
          options: []
        },
        {
          label: 'Ciudad*', // 33
          required: true,
          type: 'select',
          active: true,
          id: 'ciudadId',
          res: '',
          options: []
        },
        {
          label: 'Teléfono', // 34
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
          label: 'Dirección', // 35
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
          label: 'URL de la revista *', // 36
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
          label: 'Indexaciones *', // 37
          required: true,
          type: 'checkbox',
          active: true,
          id: 'indexacionesId',
          res: [],
          options: []
        },
        {
          label: 'Google Scholar Revista', // 38
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
          label: 'Facebook', // 39
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
          label: 'Twitter', // 40
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
          label: 'Instagram', // 41
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
          label: 'Imagen de la revista', // 42
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
          label: 'Video de la revista', // 43
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
          label: 'fechaIngreso', // 44
          required: false,
          placeholder: 'Ingrese fechaIngreso',
          type: 'datetime-local',
          active: true,
          id: 'fechaIngreso',
          res: diaActual,
          name: '',
          value: diaActual
        },
        {
          label: 'Zipcode', // 45
          required: false,
          placeholder: 'Ingrese el zipcode',
          type: 'text',
          active: true,
          id: 'zipcode',
          res: '',
          name: '',
          value: ''
        },
        {
          label: 'Ingresa palabras clave de su revista', // 46
          required: false,
          placeholder: 'Ingresa palabras clave de su revista separas por punto y coma (;)',
          type: 'text',
          active: true,
          id: 'palabraClaveId',
          res: ''
        },
      ],
      button: {
        textButton: 'Insertar',
        active: true
      },
    }
    let _self = this
    _self.getInputOptions(
      controllerServices.getEnum().licencia,
      formFormat.inputs[20], 'licencia', function (errLicen, dataLicen) {
        if (errLicen) {
          return callbacks(true, dataLicen)
        }
        _self.getInputOptions(
          controllerServices.getEnum().estilocitacion,
          formFormat.inputs[25], 'estiloCitacion', function (errLicit, dataLicit) {
            if (errLicit) {
              return callbacks(true, dataLicit)
            }
            _self.getInputOptions(
              controllerServices.getEnum().periodicidad,
              formFormat.inputs[11], 'periodicidad', function (errPeriod, dataPeriod) {
                if (errPeriod) {
                  return callbacks(true, dataPeriod)
                }
                _self.getInputOptions(
                  controllerServices.getEnum().politicaautoarchivo,
                  formFormat.inputs[22], 'politicaAutoarchivo', function (errAArch, dataAArch) {
                    if (errAArch) {
                      return callbacks(true, dataAArch)
                    }
                    _self.getInputOptions(
                      controllerServices.getEnum().tiporevisionpares,
                      formFormat.inputs[13], 'tipoRevisionPares', function (errRev, dataRev) {
                        if (errRev) {
                          return callbacks(true, dataRev)
                        }
                        _self.getInputOptions(
                          controllerServices.getEnum().disciplina,
                          formFormat.inputs[15], 'disciplina', function (errDis, dataDis) {
                            if (errDis) {
                              return callbacks(true, dataDis)
                            }
                            _self.getInputOptions(
                              controllerServices.getEnum().disciplina,
                              formFormat.inputs[16], 'disciplina', function (errDis1, dataDis1) {
                                if (errDis1) {
                                  return callbacks(true, dataDis1)
                                }
                                _self.getInputOptions(
                                  controllerServices.getEnum().disciplina,
                                  formFormat.inputs[17], 'disciplina', function (errDis2, dataDis2) {
                                    if (errDis2) {
                                      return callbacks(true, dataDis2)
                                    }
                                    _self.getInputOptions(
                                      controllerServices.getEnum().disciplina,
                                      formFormat.inputs[18], 'disciplina', function (errDis3, dataDis3) {
                                        if (errDis3) {
                                          return callbacks(true, dataDis3)
                                        }
                                        _self.getInputOptions(
                                          controllerServices.getEnum().idioma,
                                          formFormat.inputs[19], 'idioma', function (errIdioma, dataIdioma) {
                                            if (errIdioma) {
                                              return callbacks(true, dataIdioma)
                                            }
                                          })
                                        _self.getInputOptions(
                                          controllerServices.getEnum().indexaciones,
                                          formFormat.inputs[37], 'indexaciones', function (errIndexacion, dataIndexacion) {
                                            if (errIndexacion) {
                                              return callbacks(true, dataIndexacion)
                                            }
                                            _self.getInputOptions(
                                              controllerServices.getEnum().pais,
                                              formFormat.inputs[31], 'name', function (errPais, dataPais) {
                                                if (errPais) {
                                                  return callbacks(true, dataPais)
                                                }
                                                _self.getInputOptions(
                                                  controllerServices.getEnum().categoria,
                                                  formFormat.inputs[14], 'nombre', function (errCat, dataCat) {
                                                    if (errCat) {
                                                      return callbacks(true, dataCat)
                                                    }
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
          })
      })
  },
  crudOfDiscipline (callbacks) {
    let formFormat = {
      title: 'Discipina',
      inputs: [
        {
          label: 'Disciplina',
          type: 'text',
          required: true,
          active: true,
          id: 'disciplina',
          placeholder: 'Ingrese el nombre de la Disciplina',
          res: ''
        }
      ],
      button: {
        textButton: 'Insertar',
        active: true
      },
    }
    callbacks(false, formFormat)
  },

  /*
  {
    "id": 0,
    "descripcion": "string",
    "fechaInicio": "2019-05-11T00:29:29.473Z",
    "fechaFinal": "2019-05-11T00:29:29.473Z",
    "titulo": "string",
    "imagen": "string",
    "video": "string",
    "documentoPdf": "string",
    "ojs": "string"
  }
  */
  crudOfAnnouncrement (callbacks) {
    let formFormat = {
      title: 'Convocatoria',
      inputs: [
        {
          label: 'Revista',
          type: 'select',
          required: true,
          active: true,
          id: 'revistaId',
          placeholder: 'Revista:',
          res: '',
          options: []
        },
        {
          label: 'Descripcion',
          type: 'text',
          required: true,
          active: true,
          id: 'descripcion',
          placeholder: 'Ingrese el nombre de la descripcion',
          res: ''
        },
        {
          label: 'Fecha de inicio',
          type: 'date',
          required: true,
          active: true,
          id: 'fechaInicio',
          placeholder: 'Ingrese la fecha de inicio',
          res: ''
        },
        {
          label: 'Fecha de cierre',
          type: 'date',
          required: true,
          active: true,
          id: 'fechaFinal',
          placeholder: 'Ingrese la fecha de cierre',
          res: ''
        },
        {
          label: 'Titulo',
          type: 'text',
          required: true,
          active: true,
          id: 'titulo',
          placeholder: 'Ingrese el titulo',
          res: ''
        },
        {
          label: 'Imagen',
          type: 'file',
          required: false,
          active: true,
          id: 'imagen',
          placeholder: 'Ingrese la imagen',
          res: ''
        },
        {
          label: 'Vídeo',
          type: 'text',
          required: false,
          active: true,
          id: 'video',
          placeholder: 'Ingrese el video',
          res: ''
        },
        {
          label: 'Documento PDF',
          type: 'file',
          required: false,
          active: true,
          id: 'documentoPdf',
          placeholder: 'Ingrese el documento PDF',
          res: ''
        },
        {
          label: 'OJS',
          type: 'text',
          required: false,
          active: true,
          id: 'ojs',
          placeholder: 'Ingrese el OJS',
          res: ''
        }
      ],
      button: {
        textButton: 'Insertar',
        active: true
      },
    }

    this.getInputOptions(
      controllerServices.getEnum().revista,
      formFormat.inputs[0], 'titulo', function (errCat, dataCat) {
        if (errCat) {
          return callbacks(true, dataCat)
        }
        callbacks(false, formFormat)
      }
    )
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

/*
{
  label: 'parametro', // //////////////////////////////////////////////////////////////////////////36
  required: true,
  placeholder: 'Ingrese el parametro',
  type: 'text',
  active: true,
  id: 'parametro',
  res: '',
  name: '',
  value: ''
} */
