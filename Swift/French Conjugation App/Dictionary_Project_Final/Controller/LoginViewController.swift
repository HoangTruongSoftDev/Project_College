//
//  LoginViewController.swift
//  Dictionary_Project_Final
//
//  Created by english on 2023-11-28.
//

import UIKit

class LoginViewController: UIViewController, SignUpViewControllerDelegate {
   
    
    
    

    @IBOutlet weak var txtPassword: UITextField!
    @IBOutlet weak var txtEmail: UITextField!
    var listOfRandomVerbs = [String]()
    @IBOutlet weak var btnImageShowPassword: UIButton!
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Do any additional setup after loading the view.
    }
    func fillOutUserInformation(email: String, password: String) {
        txtEmail.text = email
        txtPassword.text = password
    }
    @IBAction func btnImageShowPasswordTouchUpInside(_ sender: Any) {
        if txtPassword.isSecureTextEntry {
            txtPassword.isSecureTextEntry.toggle()
            let image = txtPassword.isSecureTextEntry ? "eye" : "eye.slash"
            btnImageShowPassword.setImage(UIImage(systemName: image), for: .normal)
        }
        else {
            txtPassword.isSecureTextEntry.toggle()
            let image = txtPassword.isSecureTextEntry ? "eye" : "eye.slash"
            btnImageShowPassword.setImage(UIImage(systemName: image), for: .normal)
        }
        
        
    }
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if (segue.identifier == Segue.toMainViewController) {
            (segue.destination as! MainViewController).listOfRandomVerbs = listOfRandomVerbs
        }
        else if (segue.identifier == Segue.toSignUpViewController) {
            (segue.destination as! SignUpViewController).delegate = self
        }
    }
    @IBAction func btnLoginTouchUpInside(_ sender: Any) {
        
        if (txtEmail.text!.isEmpty == true) {
            Toast.show(view: self, title: "Warning!!!", message: "Missing Email", delay: 3)
            return
        }
        if (txtPassword.text!.isEmpty == true) {
            Toast.show(view: self, title: "Warning!!!", message: "Missing Password", delay: 3)
            return
        }
        FrenchVerbAPI.signIn(email: txtEmail.text!, password: txtPassword.text!) { token in
            DispatchQueue.main.async {
                Context.loggedUserToken = token
                FrenchVerbAPI.getRandomVerb(quantity: 6) { listOfVerbs in
                    DispatchQueue.main.async {
                        self.listOfRandomVerbs = listOfVerbs
                        self.performSegue(withIdentifier: Segue.toMainViewController, sender: self)
                    }
                } failHandler: { httpStatusCode, errorMessage in
                    DispatchQueue.main.async {
                        Toast.show(view: self, title: "Warning!!!", message: errorMessage, delay: 3)
                    }
                }
            }
            
        } failHandler: { httpStatusCode, errorMessage in
            DispatchQueue.main.async {
                Toast.show(view: self, title: "Warning!!!", message: errorMessage, delay: 3)
                self.txtEmail.text = nil
                self.txtPassword.text = nil
            }
            
        }
    }
}
