//
//  SignUpViewController.swift
//  Dictionary_Project_Final
//
//  Created by english on 2023-11-14.
//

import UIKit
protocol SignUpViewControllerDelegate {
    func fillOutUserInformation(email: String, password: String)
}
class SignUpViewController: UIViewController {

    var delegate : SignUpViewControllerDelegate?
    @IBOutlet weak var btnShowPassword: UIButton!
    @IBOutlet weak var txtUsername: UITextField!
    
    @IBOutlet weak var btnImageShowPassword: UIButton!
    @IBOutlet weak var txtPassword: UITextField!
    
    @IBOutlet weak var txtEmail: UITextField!
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
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
    @IBAction func btnSignUpTouchUpInside(_ sender: Any) {
        if txtUsername.text?.isEmpty == true {
            Toast.show(view: self, title: "Warning!!!", message: "Missing Username", delay: 2)
            txtUsername.becomeFirstResponder()
            return
        }
        if txtEmail.text?.isEmpty == true {
            Toast.show(view: self, title: "Warning!!!", message: "Missing Email", delay: 2)
            txtUsername.becomeFirstResponder()
            return
        }
        if txtPassword.text?.isEmpty == true {
            Toast.show(view: self, title: "Warning!!!", message: "Missing Password", delay: 2)
            txtPassword.becomeFirstResponder()
            return
        }

        FrenchVerbAPI.signUp(email: txtEmail.text!, password: txtPassword.text!, name: txtUsername.text!) { id in
                DispatchQueue.main.async {
                    if (self.delegate != nil) {
                        self.delegate!.fillOutUserInformation(email: self.txtEmail!.text!, password: self.txtPassword!.text!)
                    }
                    self.navigationController?.popViewController(animated: true)
                }
                
        } failHandler: { httpStatusCode, errorMessage in
            DispatchQueue.main.async {
                Toast.show(view: self, title: "Warning!!!", message: errorMessage, delay: 3)
                self.txtEmail.text = nil
                self.txtPassword.text = nil
                self.txtUsername.text = nil
            }
        }

    }
    

}
