// import Transport from './Transport';
import axios from 'axios'
class Transport{
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

const isRealEmpty = function (value:any) {
    return value === undefined
        || value === null
        || (typeof value === 'object'
            && Object.keys(value).length === 0)
        || (typeof value === 'string'
            && value.trim().length === 0)
}
class CSB extends Transport{
    constructor(endpoint: string, apiKey: number){
        super(endpoint, apiKey);
    }
    login(accountId: any, userId: any){
        let data = {
            account_id: accountId,
            user_id: userId,
            type: 'track',
            event: 'User Login',
            timestamp: new Date().toISOString()
        }
        return this.post('/api/v1_1/login', data)
    }
    logout(accountId: any, userId: any){
        let data = {
            account_id: accountId,
            user_id: userId,
            type: 'track',
            event: 'User Logout',
            timestamp: new Date().toISOString()
        }
        return this.post('/api/v1_1/logout', data)
    }
    account(accountId: any, properties:any){
        try {
            properties = properties || {}
            if (isRealEmpty(accountId)) {
                throw 'Invalid Account ID'
            }
            properties['account_id'] = accountId;    
            return this.post('/api/v1_1/account', properties)       
        } catch (error) {
            console.log(error);
        }
    }
    user(accountId: any, userId: any, properties:any) {
        properties = properties || {}
        
        if (isRealEmpty(accountId)) {
            throw 'Invalid Account ID'
        }
        
        if (isRealEmpty(userId)) {
            throw 'Invalid User ID'
        }
        
        properties['account_id'] = accountId;
        properties['user_id'] = userId;
        
        return this.post('/api/v1_1/user', properties)
    }
    subscription(accountId: any, subscriptionId: any, properties:any) {
        properties = properties || {}
        
        if (isRealEmpty(accountId)) {
            throw 'Invalid Account ID'
        }
        
        if (isRealEmpty(subscriptionId)) {
            throw 'Invalid Subscription ID'
        }
        
        properties['account_id'] = accountId;
        properties['subscription_id'] = subscriptionId;
        
        return this.post('/api/v1_1/subscription', properties)
    }
    invoice(accountId: any, subscriptionId: any, invoiceId: any, properties:any) {
        properties = properties || {}
        
        if (isRealEmpty(accountId)) {
            if (isRealEmpty(subscriptionId)) {
                throw 'Please Provide Subscription ID or Account ID'
            }
        }
        
        if (isRealEmpty(invoiceId)) {
            throw 'Invalid Invoice ID'
        }
        
        if (!isRealEmpty(accountId)) {
            properties['account_id'] = accountId;
        }
        
        if (!isRealEmpty(subscriptionId)) {
            properties['subscription_id'] = subscriptionId;
        }
        
        properties['invoice_id'] = invoiceId;
        
        return this.post('/api/v1_1/invoice', properties)
    }
    feature(
        accountId: any,
        userId: any,
        productId: any,
        moduleId: any,
        featureId: any,
        total: number
    ) {
        total = total || 1
        
        if (isRealEmpty(accountId)) {
            throw 'Invalid Account ID'
        }
        
        if (isRealEmpty(userId)) {
            throw 'Invalid User ID'
        }
        
        if (isRealEmpty(productId)) {
            throw 'Invalid Product ID'
        }
        
        if (isRealEmpty(moduleId)) {
            throw 'Invalid Module ID'
        }
        
        if (isRealEmpty(featureId)) {
            throw 'Invalid Feature ID'
        }
        
        let data = {
            account_id: accountId,
            user_id: userId,
            product_id: productId,
            module_id: moduleId,
            feature_id: featureId,
            total: total,
            type: 'feature',
            timestamp: new Date().toISOString()
        }
        
        return this.post('/api/v1_1/feature', data)
    }
}
export default CSB
