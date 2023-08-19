import axios from 'axios'
import { API_SERVER } from '../constants'

const getDefaultHeaders = (customHeaders) => {
  return {
    'Content-Type': 'application/json',
    accept: 'application/json',
    ...customHeaders,
  }
}

const callApi = (serviceEndpoint, params, requestMethod, requestBody, headers) => {
  const axiosInstance = axios.create({
    headers: getDefaultHeaders(headers),
    baseURL: API_SERVER
  })

  switch (requestMethod) {
    case 'GET':
      return axiosInstance
        .get(serviceEndpoint, { params })
        .then((response) => response?.data)
        .catch((error) => {
          throw error.response
        })
    case 'POST':
      return axiosInstance
        .post(serviceEndpoint, requestBody)
        .then((response) => response?.data)
        .catch((error) => {
          throw error.response
        })
    case 'PUT':
      return axiosInstance
        .put(serviceEndpoint, requestBody)
        .then((response) => response?.data)
        .catch((error) => {
          throw error.response
        })
    case 'DELETE':
      return axiosInstance
        .delete(serviceEndpoint, { params })
        .then((response) => response?.data)
        .catch((error) => {
          throw error
        })

    default:
      return ''
  }
}

export default callApi;