import Foundation
import UIKit



class FrenchVerbAPI {
    
    static let baseURL = "https://french-verbs-fall-2023-app-ramym.ondigitalocean.app/"

    static func getVerb( verb : String,
                         successHandler: @escaping ( _ verb : FrenchVerb ) -> Void,
                         failHandler : @escaping (_ httpStatusCode : Int, _ errorMessage: String) -> Void) {
        
        let endPoint = "v0/verbs"
        
        let header : [String:String] = ["x-access-token": Context.loggedUserToken!]
        
        let payload : [String:Any] = ["verb": verb]
        
        
        API.call(baseURL: baseURL, endPoint: endPoint, method: "POST", header: header, payload: payload) { httpStatusCode, response in
            
            if let content = response["verb"] as? [String:Any]{
                if let verb = FrenchVerb.decode(json: content){
                    successHandler(verb)
                    return
                }
            }
            failHandler(httpStatusCode, "Cannot decode response!")
            
        } failHandler: { httpStatusCode, errorMessage in
            
            failHandler(httpStatusCode, errorMessage)
            
        }
        
    }
        
    
    static func signIn( email : String, password : String,
                         successHandler: @escaping ( _ token : String ) -> Void,
                         failHandler : @escaping (_ httpStatusCode : Int, _ errorMessage: String) -> Void) {
        
        let endPoint = "v0/users/login"
        
        let header : [String:String] = [:]
        
        let payload : [String:Any] = ["email": email, "password" : password]
        
        
        API.call(baseURL: baseURL, endPoint: endPoint, method: "POST", header: header, payload: payload) { httpStatusCode, response in

            if let token = response["token"] as? String {
                successHandler(token)
                return
            }
            failHandler(httpStatusCode, "Cannot decode response!")
            
        } failHandler: { httpStatusCode, errorMessage in
            
            failHandler(httpStatusCode, errorMessage)
            
        }
        
    }
    static func signUp( email : String, password : String, name: String,
                         successHandler: @escaping ( _ id : String ) -> Void,
                         failHandler : @escaping (_ httpStatusCode : Int, _ errorMessage: String) -> Void) {
        
        let endPoint = "v0/users"
        
        let header : [String:String] = [:]
        
        let payload : [String:Any] = ["email": email, "name": name, "password" : password]
        
        
        API.call(baseURL: baseURL, endPoint: endPoint, method: "POST", header: header, payload: payload) { httpStatusCode, response in

            if let id = response["id"] as? String {
                successHandler(id)
                return
            }
            failHandler(httpStatusCode, "Cannot decode response!")
            
        } failHandler: { httpStatusCode, errorMessage in
            
            failHandler(httpStatusCode, errorMessage)
            
        }
        
    }
    static func getRandomVerb( quantity : Int,
                         successHandler: @escaping ( _ listOfVerbs : [String] ) -> Void,
                         failHandler : @escaping (_ httpStatusCode : Int, _ errorMessage: String) -> Void) {
        
        let endPoint = "v0/verbs/random"
        
        let header : [String:String] = ["x-access-token": Context.loggedUserToken!]
        
        let payload : [String:Any] = ["quantity": quantity]
        
        
        API.call(baseURL: baseURL, endPoint: endPoint, method: "POST", header: header, payload: payload) { httpStatusCode, response in
            
            if let content = response["verbs"] as? [String]{
                successHandler(content)
                return
            }
            failHandler(httpStatusCode, "Cannot decode response!!!")
            
        } failHandler: { httpStatusCode, errorMessage in
            
            failHandler(httpStatusCode, errorMessage)
            
        }
    }
    static func getFavouriteVerbs( quantity : Int,
                         successHandler: @escaping ( _ listOfVerbs : [String] ) -> Void,
                         failHandler : @escaping (_ httpStatusCode : Int, _ errorMessage: String) -> Void) {
        
        let endPoint = "v0/verbs/random"
        
        let header : [String:String] = ["x-access-token": Context.loggedUserToken!]
        
        let payload : [String:Any] = ["quantity": quantity]
        
        
        API.call(baseURL: baseURL, endPoint: endPoint, method: "POST", header: header, payload: payload) { httpStatusCode, response in
            
            if let content = response["verbs"] as? [String]{
                successHandler(content)
                return
            }
            failHandler(httpStatusCode, "Cannot decode response!!!")
            
        } failHandler: { httpStatusCode, errorMessage in
            
            failHandler(httpStatusCode, errorMessage)
            
        }
    }
}
