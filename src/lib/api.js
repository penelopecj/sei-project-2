import axios from 'axios'

const baseUrl = 'https://api.spoonacular.com'
const myAPI = '69ac378c6f8740ab96787d606ad9ced6'
//process.env.REACT_APP_MY_API_KEY

// * Here we are going to get informations about the recipe thanks to the api

export function getRecipeInfo(pageUrl){
  return axios.get(`${baseUrl}/recipes/extract?apiKey=${myAPI}&url=${pageUrl}`)
}
