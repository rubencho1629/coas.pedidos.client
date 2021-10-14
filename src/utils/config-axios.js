import axios from 'axios'

const ApiDrugs = axios.create({
    baseURL: 'http://[::1]:3000/',
    responseType: 'json'
})

export { 
    ApiDrugs
}