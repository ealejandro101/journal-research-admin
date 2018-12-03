let url = 'http://journals-research.com:3000/api'

let services = {
  getJournals () {
    return fetch(`${url}/Revista`, {
      method: 'GET', // or 'PUT'
      // body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
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
  getCategories () {
    return fetch(`${url}/Categoria`, {
      method: 'GET', // or 'PUT'
      // body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  getLicense () {
    return fetch(`${url}/Licencia`, {
      method: 'GET', // or 'PUT'
      // body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  postJournal (journal) {
    return fetch(`${url}/Revista`, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(journal), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

export default services
