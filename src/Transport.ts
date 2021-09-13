import axios from 'axios'

export default class Transport{
  http: any;
  constructor(endpoint:string, apiKey:number){
    this.http = axios.create({
      baseURL: endpoint,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer${apiKey}`
      }
    })
  }
  post (url: string, data: { account_id: any; user_id: any; type: string; event?: string; timestamp: string; product_id?: any; module_id?: any; feature_id?: any; total?: any; }) {
    return this.http.post(url, data)
  }
}

// export default Transport

