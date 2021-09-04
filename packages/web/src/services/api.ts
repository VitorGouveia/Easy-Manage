import axios from "axios"
import { apiUrl } from "../../constans"
export const api = axios.create({
  baseURL: apiUrl
})
