(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CSB"] = factory();
	else
		root["CSB"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CSB.ts":
/*!********************!*\
  !*** ./src/CSB.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar Transport_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './Transport'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())); // import axios from 'axios'\n// class Transport{\n//   http: any;\n//   constructor(endpoint:string, apiKey:number){\n//     this.http = axios.create({\n//       baseURL: endpoint,\n//       timeout: 5000,\n//       headers: {\n//         'Content-Type': 'application/json',\n//         Accept: 'application/json',\n//         Authorization: `Bearer${apiKey}`\n//       }\n//     })\n//   }\n//   post (url: string, data: { account_id: any; user_id: any; type: string; event?: string; timestamp: string; product_id?: any; module_id?: any; feature_id?: any; total?: any; }) {\n//     return this.http.post(url, data)\n//   }\n// }\n// \n\n\nvar isRealEmpty = function isRealEmpty(value) {\n  return value === undefined || value === null || _typeof(value) === 'object' && Object.keys(value).length === 0 || typeof value === 'string' && value.trim().length === 0;\n};\n\nvar CSB =\n/** @class */\nfunction (_super) {\n  __extends(CSB, _super);\n\n  function CSB(endpoint, apiKey) {\n    return _super.call(this, endpoint, apiKey) || this;\n  }\n\n  CSB.prototype.login = function (accountId, userId) {\n    var data = {\n      account_id: accountId,\n      user_id: userId,\n      type: 'track',\n      event: 'User Login',\n      timestamp: new Date().toISOString()\n    };\n    return this.post('/api/v1_1/login', data);\n  };\n\n  CSB.prototype.logout = function (accountId, userId) {\n    var data = {\n      account_id: accountId,\n      user_id: userId,\n      type: 'track',\n      event: 'User Logout',\n      timestamp: new Date().toISOString()\n    };\n    return this.post('/api/v1_1/logout', data);\n  };\n\n  CSB.prototype.account = function (accountId, properties) {\n    try {\n      properties = properties || {};\n\n      if (isRealEmpty(accountId)) {\n        throw 'Invalid Account ID';\n      }\n\n      properties['account_id'] = accountId;\n      return this.post('/api/v1_1/account', properties);\n    } catch (error) {\n      console.log(error);\n    }\n  };\n\n  CSB.prototype.user = function (accountId, userId, properties) {\n    properties = properties || {};\n\n    if (isRealEmpty(accountId)) {\n      throw 'Invalid Account ID';\n    }\n\n    if (isRealEmpty(userId)) {\n      throw 'Invalid User ID';\n    }\n\n    properties['account_id'] = accountId;\n    properties['user_id'] = userId;\n    return this.post('/api/v1_1/user', properties);\n  };\n\n  CSB.prototype.subscription = function (accountId, subscriptionId, properties) {\n    properties = properties || {};\n\n    if (isRealEmpty(accountId)) {\n      throw 'Invalid Account ID';\n    }\n\n    if (isRealEmpty(subscriptionId)) {\n      throw 'Invalid Subscription ID';\n    }\n\n    properties['account_id'] = accountId;\n    properties['subscription_id'] = subscriptionId;\n    return this.post('/api/v1_1/subscription', properties);\n  };\n\n  CSB.prototype.invoice = function (accountId, subscriptionId, invoiceId, properties) {\n    properties = properties || {};\n\n    if (isRealEmpty(accountId)) {\n      if (isRealEmpty(subscriptionId)) {\n        throw 'Please Provide Subscription ID or Account ID';\n      }\n    }\n\n    if (isRealEmpty(invoiceId)) {\n      throw 'Invalid Invoice ID';\n    }\n\n    if (!isRealEmpty(accountId)) {\n      properties['account_id'] = accountId;\n    }\n\n    if (!isRealEmpty(subscriptionId)) {\n      properties['subscription_id'] = subscriptionId;\n    }\n\n    properties['invoice_id'] = invoiceId;\n    return this.post('/api/v1_1/invoice', properties);\n  };\n\n  CSB.prototype.feature = function (accountId, userId, productId, moduleId, featureId, total) {\n    total = total || 1;\n\n    if (isRealEmpty(accountId)) {\n      throw 'Invalid Account ID';\n    }\n\n    if (isRealEmpty(userId)) {\n      throw 'Invalid User ID';\n    }\n\n    if (isRealEmpty(productId)) {\n      throw 'Invalid Product ID';\n    }\n\n    if (isRealEmpty(moduleId)) {\n      throw 'Invalid Module ID';\n    }\n\n    if (isRealEmpty(featureId)) {\n      throw 'Invalid Feature ID';\n    }\n\n    var data = {\n      account_id: accountId,\n      user_id: userId,\n      product_id: productId,\n      module_id: moduleId,\n      feature_id: featureId,\n      total: total,\n      type: 'feature',\n      timestamp: new Date().toISOString()\n    };\n    return this.post('/api/v1_1/feature', data);\n  };\n\n  return CSB;\n}(Transport_1[\"default\"]);\n\nexports[\"default\"] = CSB;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ1NCLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ1NCLy4vc3JjL0NTQi50cz82ZTJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFuc3BvcnQgZnJvbSAnLi9UcmFuc3BvcnQnO1xuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuLy8gY2xhc3MgVHJhbnNwb3J0e1xuLy8gICBodHRwOiBhbnk7XG4vLyAgIGNvbnN0cnVjdG9yKGVuZHBvaW50OnN0cmluZywgYXBpS2V5Om51bWJlcil7XG4vLyAgICAgdGhpcy5odHRwID0gYXhpb3MuY3JlYXRlKHtcbi8vICAgICAgIGJhc2VVUkw6IGVuZHBvaW50LFxuLy8gICAgICAgdGltZW91dDogNTAwMCxcbi8vICAgICAgIGhlYWRlcnM6IHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIke2FwaUtleX1gXG4vLyAgICAgICB9XG4vLyAgICAgfSlcbi8vICAgfVxuLy8gICBwb3N0ICh1cmw6IHN0cmluZywgZGF0YTogeyBhY2NvdW50X2lkOiBhbnk7IHVzZXJfaWQ6IGFueTsgdHlwZTogc3RyaW5nOyBldmVudD86IHN0cmluZzsgdGltZXN0YW1wOiBzdHJpbmc7IHByb2R1Y3RfaWQ/OiBhbnk7IG1vZHVsZV9pZD86IGFueTsgZmVhdHVyZV9pZD86IGFueTsgdG90YWw/OiBhbnk7IH0pIHtcbi8vICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBkYXRhKVxuLy8gICB9XG4vLyB9XG4vLyBcbmNvbnN0IGlzUmVhbEVtcHR5ID0gZnVuY3Rpb24gKHZhbHVlOmFueSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgIHx8IHZhbHVlID09PSBudWxsXG4gICAgICAgIHx8ICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG4gICAgICAgICAgICAmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwKVxuICAgICAgICB8fCAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgJiYgdmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMClcbn1cbmNsYXNzIENTQiBleHRlbmRzIFRyYW5zcG9ydHtcbiAgICBjb25zdHJ1Y3RvcihlbmRwb2ludDogc3RyaW5nLCBhcGlLZXk6IG51bWJlcil7XG4gICAgICAgIHN1cGVyKGVuZHBvaW50LCBhcGlLZXkpO1xuICAgIH1cbiAgICBsb2dpbihhY2NvdW50SWQ6IGFueSwgdXNlcklkOiBhbnkpe1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIGFjY291bnRfaWQ6IGFjY291bnRJZCxcbiAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIHR5cGU6ICd0cmFjaycsXG4gICAgICAgICAgICBldmVudDogJ1VzZXIgTG9naW4nLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXBpL3YxXzEvbG9naW4nLCBkYXRhKVxuICAgIH1cbiAgICBsb2dvdXQoYWNjb3VudElkOiBhbnksIHVzZXJJZDogYW55KXtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY2NvdW50X2lkOiBhY2NvdW50SWQsXG4gICAgICAgICAgICB1c2VyX2lkOiB1c2VySWQsXG4gICAgICAgICAgICB0eXBlOiAndHJhY2snLFxuICAgICAgICAgICAgZXZlbnQ6ICdVc2VyIExvZ291dCcsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QoJy9hcGkvdjFfMS9sb2dvdXQnLCBkYXRhKVxuICAgIH1cbiAgICBhY2NvdW50KGFjY291bnRJZDogYW55LCBwcm9wZXJ0aWVzOmFueSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCB7fVxuICAgICAgICAgICAgaWYgKGlzUmVhbEVtcHR5KGFjY291bnRJZCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnSW52YWxpZCBBY2NvdW50IElEJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvcGVydGllc1snYWNjb3VudF9pZCddID0gYWNjb3VudElkOyAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvc3QoJy9hcGkvdjFfMS9hY2NvdW50JywgcHJvcGVydGllcykgICAgICAgXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXNlcihhY2NvdW50SWQ6IGFueSwgdXNlcklkOiBhbnksIHByb3BlcnRpZXM6YW55KSB7XG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9XG4gICAgICAgIFxuICAgICAgICBpZiAoaXNSZWFsRW1wdHkoYWNjb3VudElkKSkge1xuICAgICAgICAgICAgdGhyb3cgJ0ludmFsaWQgQWNjb3VudCBJRCdcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGlzUmVhbEVtcHR5KHVzZXJJZCkpIHtcbiAgICAgICAgICAgIHRocm93ICdJbnZhbGlkIFVzZXIgSUQnXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHByb3BlcnRpZXNbJ2FjY291bnRfaWQnXSA9IGFjY291bnRJZDtcbiAgICAgICAgcHJvcGVydGllc1sndXNlcl9pZCddID0gdXNlcklkO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCgnL2FwaS92MV8xL3VzZXInLCBwcm9wZXJ0aWVzKVxuICAgIH1cbiAgICBzdWJzY3JpcHRpb24oYWNjb3VudElkOiBhbnksIHN1YnNjcmlwdGlvbklkOiBhbnksIHByb3BlcnRpZXM6YW55KSB7XG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9XG4gICAgICAgIFxuICAgICAgICBpZiAoaXNSZWFsRW1wdHkoYWNjb3VudElkKSkge1xuICAgICAgICAgICAgdGhyb3cgJ0ludmFsaWQgQWNjb3VudCBJRCdcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGlzUmVhbEVtcHR5KHN1YnNjcmlwdGlvbklkKSkge1xuICAgICAgICAgICAgdGhyb3cgJ0ludmFsaWQgU3Vic2NyaXB0aW9uIElEJ1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBwcm9wZXJ0aWVzWydhY2NvdW50X2lkJ10gPSBhY2NvdW50SWQ7XG4gICAgICAgIHByb3BlcnRpZXNbJ3N1YnNjcmlwdGlvbl9pZCddID0gc3Vic2NyaXB0aW9uSWQ7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KCcvYXBpL3YxXzEvc3Vic2NyaXB0aW9uJywgcHJvcGVydGllcylcbiAgICB9XG4gICAgaW52b2ljZShhY2NvdW50SWQ6IGFueSwgc3Vic2NyaXB0aW9uSWQ6IGFueSwgaW52b2ljZUlkOiBhbnksIHByb3BlcnRpZXM6YW55KSB7XG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9XG4gICAgICAgIFxuICAgICAgICBpZiAoaXNSZWFsRW1wdHkoYWNjb3VudElkKSkge1xuICAgICAgICAgICAgaWYgKGlzUmVhbEVtcHR5KHN1YnNjcmlwdGlvbklkKSkge1xuICAgICAgICAgICAgICAgIHRocm93ICdQbGVhc2UgUHJvdmlkZSBTdWJzY3JpcHRpb24gSUQgb3IgQWNjb3VudCBJRCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGlzUmVhbEVtcHR5KGludm9pY2VJZCkpIHtcbiAgICAgICAgICAgIHRocm93ICdJbnZhbGlkIEludm9pY2UgSUQnXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICghaXNSZWFsRW1wdHkoYWNjb3VudElkKSkge1xuICAgICAgICAgICAgcHJvcGVydGllc1snYWNjb3VudF9pZCddID0gYWNjb3VudElkO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIWlzUmVhbEVtcHR5KHN1YnNjcmlwdGlvbklkKSkge1xuICAgICAgICAgICAgcHJvcGVydGllc1snc3Vic2NyaXB0aW9uX2lkJ10gPSBzdWJzY3JpcHRpb25JZDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcHJvcGVydGllc1snaW52b2ljZV9pZCddID0gaW52b2ljZUlkO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCgnL2FwaS92MV8xL2ludm9pY2UnLCBwcm9wZXJ0aWVzKVxuICAgIH1cbiAgICBmZWF0dXJlKFxuICAgICAgICBhY2NvdW50SWQ6IGFueSxcbiAgICAgICAgdXNlcklkOiBhbnksXG4gICAgICAgIHByb2R1Y3RJZDogYW55LFxuICAgICAgICBtb2R1bGVJZDogYW55LFxuICAgICAgICBmZWF0dXJlSWQ6IGFueSxcbiAgICAgICAgdG90YWw6IG51bWJlclxuICAgICkge1xuICAgICAgICB0b3RhbCA9IHRvdGFsIHx8IDFcbiAgICAgICAgXG4gICAgICAgIGlmIChpc1JlYWxFbXB0eShhY2NvdW50SWQpKSB7XG4gICAgICAgICAgICB0aHJvdyAnSW52YWxpZCBBY2NvdW50IElEJ1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoaXNSZWFsRW1wdHkodXNlcklkKSkge1xuICAgICAgICAgICAgdGhyb3cgJ0ludmFsaWQgVXNlciBJRCdcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGlzUmVhbEVtcHR5KHByb2R1Y3RJZCkpIHtcbiAgICAgICAgICAgIHRocm93ICdJbnZhbGlkIFByb2R1Y3QgSUQnXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChpc1JlYWxFbXB0eShtb2R1bGVJZCkpIHtcbiAgICAgICAgICAgIHRocm93ICdJbnZhbGlkIE1vZHVsZSBJRCdcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGlzUmVhbEVtcHR5KGZlYXR1cmVJZCkpIHtcbiAgICAgICAgICAgIHRocm93ICdJbnZhbGlkIEZlYXR1cmUgSUQnXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgYWNjb3VudF9pZDogYWNjb3VudElkLFxuICAgICAgICAgICAgdXNlcl9pZDogdXNlcklkLFxuICAgICAgICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdElkLFxuICAgICAgICAgICAgbW9kdWxlX2lkOiBtb2R1bGVJZCxcbiAgICAgICAgICAgIGZlYXR1cmVfaWQ6IGZlYXR1cmVJZCxcbiAgICAgICAgICAgIHRvdGFsOiB0b3RhbCxcbiAgICAgICAgICAgIHR5cGU6ICdmZWF0dXJlJyxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QoJy9hcGkvdjFfMS9mZWF0dXJlJywgZGF0YSlcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDU0JcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/CSB.ts\n");

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/CSB.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ankitkamboj/Documents/csb-node/src/CSB.ts */"./src/CSB.ts");


/***/ })

/******/ });
});