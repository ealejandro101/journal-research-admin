import controllerServices from '../../../client-http/services'
export default {
  crudOfJournal (callbacks) {
    controllerServices.getCategories()
      .then(response => response.json())
      .catch(error => {
        console.error('Error:', error)
        callbacks(true, null)
      })
      .then(response => {
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
              type: 'subtitulo',
              active: true,
              id: 'input-subtitle',
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
          }
        }
        let inputCategory = {/* Input de opciones */
          label: 'categoriaId',
          type: 'radio', /* radio */
          active: true,
          id: 'categoriaId',
          res: '',
          options: []
        }
        for (const iterator of response) {
          inputCategory.options.push({
            name: 'categoriaId', /* igual en radio */
            value: iterator.id,
            checked: true,
            text: iterator.nombre
          })
        }
        json.inputs.push(inputCategory)
        controllerServices.getLicense()
          .then(response => response.json())
          .catch(error => {
            console.error('Error:', error)
            callbacks(true, null)
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
          })
        callbacks(false, json)
      })
  }

}
