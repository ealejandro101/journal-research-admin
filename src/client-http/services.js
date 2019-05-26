let url = 'http://journals-research.com:3000/api'
// let url = 'http://localhost:3000/api'

let services = {
  getURL () {
    return url
  },
  getEnum () {
    return Object.freeze({
      'categoria': 'Categoria',
      'ciudad': 'Ciudads',
      'estado': 'Estados',
      'disciplina': 'Disciplinas',
      'estilocitacion': 'Estilocitacions',
      'idioma': 'Idiomas',
      'indexaciones': 'Indexaciones',
      'licencia': 'Licencia',
      'pais': 'Pais',
      'palabraclave': 'Palabraclaves',
      'palabrasclave': 'Palabrasclaves',
      'periodicidad': 'Periodicidads',
      'politicaautoarchivo': 'Politicaautoarchivos',
      'radicional': 'Radicionals',
      'rcontacto': 'Rcontactos',
      'revista': 'Revista',
      'revistascategorias': 'RevistasCategorias',
      'ridiomas': 'Ridiomas',
      'rindexaciones': 'Rindexaciones',
      'rubicacion': 'Rubicacions',
      'tiporevisionpares': 'Tiporevisionpares',
      'convocatoria': 'Convocatoria'
    })
  },
  getModels (model) {
    return fetch(`${url}/${model}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  getModelsFilter (model, filter) {
    return fetch(`${url}/${model}?filter=${JSON.stringify(filter)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  postModel (model, data) {
    return fetch(`${url}/${model}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  updateModel (model, data) {
    return fetch(`${url}/${model}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  deleteModel (model, data) {
    return fetch(`${url}/${model}/${data}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
  },
  getJournalsCount () {
    return fetch(`${url}/Revista/count`, {
      method: 'GET', // or 'PUT'
      // body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  getModelCount (model, filter) {
    return fetch(`${url}/${model}/count?where=${JSON.stringify(filter)}`, {
      method: 'GET', // or 'PUT'
      // body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
}

export default services
