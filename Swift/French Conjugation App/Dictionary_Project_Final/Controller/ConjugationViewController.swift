//
//  ConjugationViewController.swift
//  Dictionary_Project_Final
//
//  Created by Anh Khoa Nguyen on 2023-12-07.
//

import UIKit

class ConjugationViewController: UIViewController, UIPickerViewDelegate, UIPickerViewDataSource {
    
    
    @IBOutlet weak var lblVerb: UILabel!
    
    var conditionnel : FrenchVerbConditionnel?
    var imperatif : FrenchVerbImperatif?
    var indicatif : FrenchVerbIndicatif?
    
    var infinitive : FrenchVerbInfinitive?
    var participe : FrenchVerbParticipe?
    
    var subjonctif : FrenchVerbSubjonctif?
    var frenchVerb : FrenchVerb?
    var tenseArray : [String]?
    
    @IBOutlet weak var txtTense: UITextField!
    @IBOutlet weak var txtViewInformation: UITextView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        initialize()
        
    }
    func numberOfComponents(in pickerView: UIPickerView) -> Int {
        return 1
    }
    
    func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
        
        return tenseArray!.count
    }
    func pickerView(_ pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String? {
        return tenseArray![row]
    }
    
    func pickerView(_ pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int) {
        txtTense.text = tenseArray![row]
    }
    @objc func doneButtonTapped() {
        txtTense.resignFirstResponder()
    }
    func initialize(){
        
        let pickerView = UIPickerView()
        pickerView.delegate = self
        pickerView.dataSource = self
        txtTense.inputView = pickerView
        
        let toolbar = UIToolbar()
        toolbar.sizeToFit()
        let flexibleSpace = UIBarButtonItem(barButtonSystemItem: .flexibleSpace, target: nil, action: nil)
        
        let doneButton = UIBarButtonItem(barButtonSystemItem: .done, target: self, action: #selector(doneButtonTapped))
        txtViewInformation.isEditable = false
        toolbar.setItems([flexibleSpace, doneButton], animated: false);
        txtTense.inputAccessoryView = toolbar
        
        
        var labelSubText = "Default Tense"
        var initialTextView = "Default Textt View"
        lblVerb.text = frenchVerb?.word?.uppercased() ?? "Default Word"
        if conditionnel != nil {
            labelSubText = "Conditionel"
            txtTense.text = "Present"
            initialTextView = " \(conditionnel!.present!.i as! String)\n \(conditionnel!.present!.you as! String)\n \(conditionnel!.present!.heSheIt as! String)\n \(conditionnel!.present!.we as! String)\n \(conditionnel!.present!.youAll as! String)\n \(conditionnel!.present!.they as! String)"
            tenseArray = [String]()
            if conditionnel!.present != nil {
                tenseArray!.append("Present")
            }
            if conditionnel!.passe1reForme != nil {
                tenseArray!.append("Passe 1re Forme")
            }
            if conditionnel!.passe2eForme != nil {
                tenseArray!.append("Passe 2e Forme")
            }
        }
        else if imperatif != nil {
            initialTextView = " First Present: \(imperatif!.present!.first as! String)\n Second Present: \(imperatif!.present!.second as! String)\n Third Present: \(imperatif!.present!.third as! String)"
            labelSubText = "Imperatif"
            txtTense.text = "Present"
            tenseArray = [String]()
            if imperatif!.present != nil {
                tenseArray!.append("Present")
            }
            if imperatif!.passe != nil {
                tenseArray!.append("Passe")
            }
        }
        else if indicatif != nil {
            labelSubText = "Indicatif"
            initialTextView = " \(indicatif!.present!.i as! String)\n \(indicatif!.present!.you as! String)\n \(indicatif!.present!.heSheIt as! String)\n \(indicatif!.present!.we as! String)\n \(indicatif!.present!.youAll as! String)\n \(indicatif!.present!.they as! String)"
            tenseArray = [String]()
            txtTense.text = "Present"
            if indicatif!.present != nil {
                tenseArray!.append("Present")
            }
            if indicatif!.passeSimple != nil {
                tenseArray!.append("Passe Simple")
            }
            if indicatif!.imparfait != nil {
                tenseArray!.append("Imparfait")
            }
            if indicatif!.passeCompose != nil {
                tenseArray!.append("Passe Compose")
            }
            if indicatif!.futurSimple != nil {
                tenseArray!.append("Futur Simple")
            }
            if indicatif!.passeAnterieur != nil {
                tenseArray!.append("Passe Anterieur")
            }
            if indicatif!.plusQueParfait != nil {
                tenseArray!.append("Plus Que Parfait")
            }
            if indicatif!.futurAnterieur != nil {
                tenseArray!.append("Futur Anterieur")
            }
        }
        else if infinitive != nil {
            labelSubText = "Infinitive"
            initialTextView = " Present Infinitive: \(infinitive!.present as! String)"
            tenseArray = [String]()
            txtTense.text = "Present"
            if infinitive!.present != nil {
                tenseArray!.append("Present")
            }
            if infinitive!.passe != nil {
                tenseArray!.append("Passe")
            }
        }
        else if participe != nil {
            labelSubText = "Participe"
            
            initialTextView = " Present Participe: \(participe!.present as! String)"
            tenseArray = [String]()
            txtTense.text = "Present"
            if participe!.present != nil {
                tenseArray!.append("Present")
            }
            if participe!.passe != nil {
                tenseArray!.append("Passe")
            }
        }
        else if subjonctif != nil {
            initialTextView = " \(subjonctif!.present!.i as! String)\n \(subjonctif!.present!.you as! String)\n \(subjonctif!.present!.heSheIt as! String)\n \(subjonctif!.present!.we as! String)\n \(subjonctif!.present!.youAll as! String)\n \(subjonctif!.present!.they as! String)"
            labelSubText = "Subjonctif"
            tenseArray = [String]()
            txtTense.text = "Present"
            if subjonctif!.present != nil {
                tenseArray!.append("Present")
            }
            if subjonctif!.imparfait != nil {
                tenseArray!.append("Imparfait")
            }
            if subjonctif!.passe != nil {
                tenseArray!.append("Passe")
            }
            if subjonctif!.plusQueParfait != nil {
                tenseArray!.append("Plus Que Parfait")
            }
            
        }
        lblVerb.text! +=  " - \(labelSubText.uppercased())"
        txtViewInformation.text = initialTextView
    }
    
    @IBAction func btnSearchType(_ sender: Any) {
        var modifiedTextView = txtViewInformation.text
        if conditionnel != nil {
            if (txtTense.text == "Present") {
                modifiedTextView = " \(conditionnel!.present!.i as! String)\n \(conditionnel!.present!.you as! String)\n \(conditionnel!.present!.heSheIt as! String)\n \(conditionnel!.present!.we as! String)\n \(conditionnel!.present!.youAll as! String)\n \(conditionnel!.present!.they as! String)"
            }
            
            else if txtTense.text == "Passe 1re Forme" {
                modifiedTextView = " \(conditionnel!.passe1reForme!.i as! String)\n \(conditionnel!.passe1reForme!.you as! String)\n \(conditionnel!.passe1reForme!.heSheIt as! String)\n \(conditionnel!.passe1reForme!.we as! String)\n \(conditionnel!.passe1reForme!.youAll as! String)\n \(conditionnel!.passe1reForme!.they as! String)"
            }
            
            else if txtTense.text == "Passe 2e Forme" {
                modifiedTextView = " \(conditionnel!.passe2eForme!.i as! String)\n \(conditionnel!.passe2eForme!.you as! String)\n \(conditionnel!.passe2eForme!.heSheIt as! String)\n \(conditionnel!.passe2eForme!.we as! String)\n \(conditionnel!.passe2eForme!.youAll as! String)\n \(conditionnel!.passe2eForme!.they as! String)"
            }
        }
        else if imperatif != nil {
            
            if (txtTense.text == "Present") {
                modifiedTextView = " First Present: \(imperatif!.present!.first as! String)\n Second Present: \(imperatif!.present!.second as! String)\n Third Present\(imperatif!.present!.third as! String)"
            }
            
            else if txtTense.text == "Passe" {
                modifiedTextView = " First Passe: \(imperatif!.passe!.first as! String)\n Second Passe: \(imperatif!.passe!.second as! String)\n Third Passe: \(imperatif!.passe!.third as! String)"
            }

        }
        else if indicatif != nil {
            
            
            if (txtTense.text == "Present") {
                modifiedTextView = " \(indicatif!.present!.i as! String)\n \(indicatif!.present!.you as! String)\n \(indicatif!.present!.heSheIt as! String)\n \(indicatif!.present!.we as! String)\n \(indicatif!.present!.youAll as! String)\n \(indicatif!.present!.they as! String)"
            }
            
            else if txtTense.text == "Passe Simple" {
                modifiedTextView = " \(indicatif!.passeSimple!.i as! String)\n \(indicatif!.passeSimple!.you as! String)\n \(indicatif!.passeSimple!.heSheIt as! String)\n \(indicatif!.passeSimple!.we as! String)\n \(indicatif!.passeSimple!.youAll as! String)\n \(indicatif!.passeSimple!.they as! String)"
            }
            else if txtTense.text == "Passe Compose" {
                modifiedTextView = " \(indicatif!.passeCompose!.i as! String)\n \(indicatif!.passeCompose!.you as! String)\n \(indicatif!.passeCompose!.heSheIt as! String)\n \(indicatif!.passeCompose!.we as! String)\n \(indicatif!.passeCompose!.youAll as! String)\n \(indicatif!.passeCompose!.they as! String)"
            }
            else if txtTense.text == "Futur Simple" {
                modifiedTextView = " \(indicatif!.futurSimple!.i as! String)\n \(indicatif!.futurSimple!.you as! String)\n \(indicatif!.futurSimple!.heSheIt as! String)\n \(indicatif!.futurSimple!.we as! String)\n \(indicatif!.futurSimple!.youAll as! String)\n \(indicatif!.futurSimple!.they as! String)"
            }
            else if txtTense.text == "Passe Anterieur" {
                modifiedTextView = " \(indicatif!.passeAnterieur!.i as! String)\n \(indicatif!.passeAnterieur!.you as! String)\n \(indicatif!.passeAnterieur!.heSheIt as! String)\n \(indicatif!.passeAnterieur!.we as! String)\n \(indicatif!.passeAnterieur!.youAll as! String)\n \(indicatif!.passeAnterieur!.they as! String)"
            }
            else if txtTense.text == "Plus Que Parfait" {
                modifiedTextView = " \(indicatif!.plusQueParfait!.i as! String)\n \(indicatif!.plusQueParfait!.you as! String)\n \(indicatif!.plusQueParfait!.heSheIt as! String)\n \(indicatif!.plusQueParfait!.we as! String)\n \(indicatif!.plusQueParfait!.youAll as! String)\n \(indicatif!.plusQueParfait!.they as! String)"
            }
            else if txtTense.text == "Futur Anterieur" {
                modifiedTextView = " \(indicatif!.futurAnterieur!.i as! String)\n \(indicatif!.futurAnterieur!.you as! String)\n \(indicatif!.futurAnterieur!.heSheIt as! String)\n \(indicatif!.futurAnterieur!.we as! String)\n \(indicatif!.futurAnterieur!.youAll as! String)\n \(indicatif!.futurAnterieur!.they as! String)"
            }
            else if txtTense.text == "Imparfait" {
                modifiedTextView = " \(indicatif!.imparfait!.i as! String)\n \(indicatif!.imparfait!.you as! String)\n \(indicatif!.imparfait!.heSheIt as! String)\n \(indicatif!.imparfait!.we as! String)\n \(indicatif!.imparfait!.youAll as! String)\n \(indicatif!.imparfait!.they as! String)"
            }
        }
        else if infinitive != nil {
            if txtTense.text == "Present" {
                modifiedTextView = " Present Infinitive: \(infinitive!.present as! String)"
            }
            else if txtTense.text == "Passe" {
                modifiedTextView = " Passe Infinitive: \(infinitive!.passe as! String)"
            }
        }
        else if participe != nil {
            if txtTense.text == "Present" {
                modifiedTextView = " Present Participe: \(participe!.present as! String)"
            }
            else if txtTense.text == "Passe" {
                modifiedTextView = " Passe Participe: \(participe!.passe as! String)"
            }
        }
        else if subjonctif != nil {
            
            if txtTense.text == "Present" {
                modifiedTextView = " \(subjonctif!.present!.i as! String)\n \(subjonctif!.present!.you as! String)\n \(subjonctif!.present!.heSheIt as! String)\n \(subjonctif!.present!.we as! String)\n \(subjonctif!.present!.youAll as! String)\n \(subjonctif!.present!.they as! String)"
            }
            else if txtTense.text == "Imparfait" {
                modifiedTextView = " \(subjonctif!.imparfait!.i as! String)\n \(subjonctif!.imparfait!.you as! String)\n \(subjonctif!.imparfait!.heSheIt as! String)\n \(subjonctif!.imparfait!.we as! String)\n \(subjonctif!.imparfait!.youAll as! String)\n \(subjonctif!.imparfait!.they as! String)"
            }
            else if txtTense.text == "Passe" {
                modifiedTextView = " \(subjonctif!.passe!.i as! String)\n \(subjonctif!.passe!.you as! String)\n \(subjonctif!.passe!.heSheIt as! String)\n \(subjonctif!.passe!.we as! String)\n \(subjonctif!.passe!.youAll as! String)\n \(subjonctif!.passe!.they as! String)"
            }
            else if txtTense.text == "Plus Que Parfait" {
                modifiedTextView = " \(subjonctif!.plusQueParfait!.i as! String)\n \(subjonctif!.plusQueParfait!.you as! String)\n \(subjonctif!.plusQueParfait!.heSheIt as! String)\n \(subjonctif!.plusQueParfait!.we as! String)\n \(subjonctif!.plusQueParfait!.youAll as! String)\n \(subjonctif!.plusQueParfait!.they as! String)"
            }
        }
        txtViewInformation.text = modifiedTextView
    }
}
