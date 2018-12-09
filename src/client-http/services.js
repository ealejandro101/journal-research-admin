let url = 'http://localhost:3000/api'

let services = {
  getEnum () {
    return Object.freeze({
      'categoria': 'Categoria',
      'ciudad': 'Ciudads',
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
      'tiporevisionpares': 'Tiporevisionpares'
    })
  },
  getModels (model) {
    return fetch(`${url}/${model}`, {
      method: 'GET', // or 'PUT'
      // body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  postModel (model, data) {
    return fetch(`${url}/${model}`, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  deleteModel (model, data) {
    return fetch(`${url}/${model}/${data}`, {
      method: 'DELETE', // or 'PUT'
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
}

export default services
