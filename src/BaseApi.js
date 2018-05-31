import axios from 'axios';
export default class BaseApi {
  constructor () {
   this._axios = this._createAxiosInstance(); 
  }
}
