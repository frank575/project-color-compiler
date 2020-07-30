import axios from 'axios'
const baseUrl = '/api'
const https = Vue => {
  const apis = {
    compiler: (params) => axios.post(`${baseUrl}/compiler`, params),
    getColors: (params) => axios.post(`${baseUrl}/getColors`, params),
    // addColors: (params) => axios.post(`${baseUrl}/addColors`, params),
    translateColorsAndVariables: (params) => axios.post(`${baseUrl}/translateColorsAndVariables`, params),
    getFilePath: (params) => axios.get(`${baseUrl}/getFilePath`, {params}),
    beforeDownload: (params) => axios.post(`${baseUrl}/beforeDownload`, params),
    importProject: (params) => axios.post(`${baseUrl}/importProject`, params),
  }
  Vue.prototype.$http = apis
}

export default https