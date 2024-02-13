//
//  InformationViewController.swift
//  Dictionary_Project_Final
//
//  Created by english on 2023-12-07.
//

import UIKit

class InformationViewController: UIViewController, UITableViewDelegate, UITableViewDataSource, UIPickerViewDelegate, UIPickerViewDataSource{
    
    @IBOutlet weak var lblWord: UILabel!
    
    @IBOutlet weak var tvInformation: UITableView!
    
    @IBOutlet weak var tvLesModesTextField: UITextField!
    
    var frenchVerb: FrenchVerb?
    var informationData: [String] = []
    var modesData: [String] = []
    var pickerViewData: [String] = []

    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        initialize()
    }
    
    func initialize() {
        guard let verb = frenchVerb else {
            
            return
        }
        
        lblWord.text = verb.word?.uppercased() ?? "Default Word"
        
        informationData = [
            "Verb Group:\n\(verb.wordVerbGroup ?? "")",
            "Conjugate With Verb:\n\(verb.wordConjugateWithWhichVerb ?? "")",
            "Conjugate Model:\n\(verb.wordConjugateWhichVerbModel ?? "")",
            "Verb Type:\n\(verb.wordVerbType ?? "")",
            "Conjugate Rule:\n\(verb.wordConjugateRule ?? "")"
        ]
        
        tvInformation.dataSource = self
        tvInformation.delegate = self
        tvInformation.reloadData()
        
        
        modesData = [
            "infinitive",
            "participe",
            "indicatif",
            "subjonctif",
            "conditionnel",
            "imperatif"
        ]
        
        pickerViewData = modesData
        
        let pickerView = UIPickerView()
        pickerView.delegate = self
        pickerView.dataSource = self
        
        
        tvLesModesTextField.inputView = pickerView
        
        
        let toolbar = UIToolbar()
        toolbar.sizeToFit()
        let flexibleSpace = UIBarButtonItem(barButtonSystemItem: .flexibleSpace, target: nil, action: nil)
        
        let doneButton = UIBarButtonItem(barButtonSystemItem: .done, target: self, action: #selector(doneButtonTapped))
        
        toolbar.setItems([flexibleSpace, doneButton], animated: false);                tvLesModesTextField.inputAccessoryView = toolbar
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        if tableView === tvInformation {
            return informationData.count
        }
        return 0
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        let cell = tableView.dequeueReusableCell(withIdentifier: "cellInformation", for: indexPath)
        cell.textLabel?.text = informationData[indexPath.row]
        cell.textLabel?.numberOfLines = 0
        return cell
        
    }
    
    func numberOfComponents(in pickerView: UIPickerView) -> Int {
        return 1
    }
    
    
    func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
        return modesData.count
    }
    
    
    func pickerView(_ pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String? {
        return modesData[row]
    }
    
    
    func pickerView(_ pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int) {
        tvLesModesTextField.text = modesData[row]
    }
    
    
    @objc func doneButtonTapped() {
        tvLesModesTextField.resignFirstResponder()
    }
    
    override func shouldPerformSegue(withIdentifier identifier: String, sender: Any?) -> Bool {
        if identifier == Segue.toConjugationViewController{
            return !tvLesModesTextField.text!.isEmpty
        }
        return false
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == Segue.toConjugationViewController {
            let conjugationViewController = segue.destination as! ConjugationViewController
            conjugationViewController.frenchVerb = frenchVerb
            if tvLesModesTextField.text == "infinitive" {
                conjugationViewController.infinitive = frenchVerb?.infinitive
            }
            else if tvLesModesTextField.text == "participe" {
                conjugationViewController.participe = frenchVerb?.participe
            }
            else if tvLesModesTextField.text == "indicatif" {
                conjugationViewController.indicatif = frenchVerb?.indicatif
            }
            else if tvLesModesTextField.text == "subjonctif" {
                conjugationViewController.subjonctif = frenchVerb?.subjonctif
            }
            else if tvLesModesTextField.text == "conditionnel" {
                conjugationViewController.conditionnel = frenchVerb?.conditionnel
            }
            else if tvLesModesTextField.text == "imperatif" {
                conjugationViewController.imperatif = frenchVerb?.imperatif
            }
        }
    }
    
    
}
