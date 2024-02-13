//
//  LabelViewController.swift
//  IphoneClock
//
//  Created by english on 2023-11-02.
//

import UIKit

class LabelViewController: UIViewController {

    public var buttonDelegate : ButtonDelegate!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        txtLabel.text = receivedClock.label
    }
    
    public var receivedClock : Clock!
    @IBOutlet weak var txtLabel: UITextField!
    
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */
    
    @IBAction func btnSave(_ sender: Any) {
        if txtLabel.text!.isEmpty {
            return;
        }
        receivedClock.label = txtLabel.text!
        if buttonDelegate != nil {
            buttonDelegate?.refreshButton()
        }
        navigationController?.popViewController(animated: true)
    }
}
