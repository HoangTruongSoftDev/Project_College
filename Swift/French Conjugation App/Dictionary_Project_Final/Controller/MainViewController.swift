//
//  MainViewController.swift
//  Dictionary_Project_Final
//
//  Created by english on 2023-11-28.
//

import UIKit

class MainViewController: UIViewController,UITableViewDelegate, UITableViewDataSource, UISearchBarDelegate {
    
    
    var searchArray : [FrenchVerb]?
    var allVerbsArray : [FrenchVerb]?
    var listOfRandomVerbs : [String]?
    @IBOutlet weak var tableViewWords: UITableView!
    @IBOutlet weak var searchBar: UISearchBar!
    @IBOutlet weak var btnRandomVerb1: UIButton!
    @IBOutlet weak var btnRandomVerb2: UIButton!
    @IBOutlet weak var btnRandomVerb3: UIButton!
    @IBOutlet weak var btnRandomVerb4: UIButton!
    @IBOutlet weak var btnRandomVerb5: UIButton!
    @IBOutlet weak var btnRandomVerb6: UIButton!
    var searchString : Bool?
    
    var sendingFrenchVerb : FrenchVerb?
    override func viewDidLoad() {
        super.viewDidLoad()
        initialize()
        // Do any additional setup after loading the view.
    }
    private func initialize() {
        btnRandomVerb1.layer.cornerRadius = 32
        btnRandomVerb1.layer.masksToBounds = true
        btnRandomVerb4.layer.cornerRadius = 32
        btnRandomVerb4.layer.masksToBounds = true
        btnRandomVerb5.layer.cornerRadius = 32
        btnRandomVerb5.layer.masksToBounds = true
        searchString = false
        searchArray = [FrenchVerb]()
        allVerbsArray = [FrenchVerb]()
        btnRandomVerb1.setTitle(listOfRandomVerbs![0], for: .normal)
        btnRandomVerb2.setTitle(listOfRandomVerbs![1], for: .normal)
        btnRandomVerb3.setTitle(listOfRandomVerbs![2], for: .normal)
        btnRandomVerb4.setTitle(listOfRandomVerbs![3], for: .normal)
        btnRandomVerb5.setTitle(listOfRandomVerbs![4], for: .normal)
        btnRandomVerb6.setTitle(listOfRandomVerbs![5], for: .normal)
        tableViewWords.register(UINib(nibName: WordTableViewCell.identifier, bundle: nil), forCellReuseIdentifier: WordTableViewCell.identifier)
        tableViewWords.dataSource = self
        tableViewWords.delegate = self
    }
   
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        
        return searchString! ? searchArray!.count : allVerbsArray!.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: WordTableViewCell.identifier, for: indexPath)
        if searchString == true {
            (cell as! WordTableViewCell).setCellContent(data: searchArray![indexPath.row])
        }
        else {
            (cell as! WordTableViewCell).setCellContent(data: allVerbsArray![indexPath.row])
        }
        
        return cell
        
    }
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 80
    }
    func searchBar(_ searchBar: UISearchBar, textDidChange searchText: String) {
        if searchText != "" {
            FrenchVerbAPI.getVerb(verb: searchText) { verb in
                DispatchQueue.main.async {
                    self.searchString = true
                    self.searchArray = [verb]
                    if (verb.verb != nil) {
                        let checkExist = self.allVerbsArray?.contains {currentVerb in return currentVerb.verb == verb.verb}
                        if (checkExist == false) {
                            self.allVerbsArray?.append(verb)
                        }
                    }
                    self.tableViewWords.reloadData()
                }
            } failHandler: { httpStatusCode, errorMessage in
                DispatchQueue.main.async {
                    print("\(httpStatusCode) - \(errorMessage)")
                }

            }
            
        }
        else { // why this function doesn't show all allDatas array
            searchString = false
            searchArray!.removeAll()
            tableViewWords.reloadData()
        }
        
    }
    func searchBarCancelButtonClicked(_ searchBar: UISearchBar) {
        searchString = false
        searchArray!.removeAll()
        searchBar.text = ""
        tableViewWords.reloadData()
    }
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        if (searchString == true) {
            sendingFrenchVerb = searchArray![indexPath.row]
        }
        else {
            sendingFrenchVerb = allVerbsArray![indexPath.row]
        }
        performSegue(withIdentifier: Segue.toInformationViewController, sender: self)
    }
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if (segue.identifier == Segue.toInformationViewController) {
            
            (segue.destination as! InformationViewController).frenchVerb = sendingFrenchVerb
        }
    }
   
    @IBAction func btnConjugate1TouchUpInside(_ sender: Any) {
        
        let selectedFrenchVerb = btnRandomVerb1.titleLabel!.text
        FrenchVerbAPI.getVerb(verb: selectedFrenchVerb!) { verb in
            DispatchQueue.main.async {
                self.sendingFrenchVerb = verb
                self.performSegue(withIdentifier: Segue.toInformationViewController, sender: self)
                
            }
        } failHandler: { httpStatusCode, errorMessage in
            DispatchQueue.main.async {
                print("\(httpStatusCode) - \(errorMessage)")
            }
        
        }
    }
    @IBAction func btnConjugate2TouchUpInside(_ sender: Any) {
        let selectedFrenchVerb = btnRandomVerb2.titleLabel!.text
        FrenchVerbAPI.getVerb(verb: selectedFrenchVerb!) { verb in
            DispatchQueue.main.async {
                self.sendingFrenchVerb = verb
                self.performSegue(withIdentifier: Segue.toInformationViewController, sender: self)
            }
        } failHandler: { httpStatusCode, errorMessage in
            DispatchQueue.main.async {
                print("\(httpStatusCode) - \(errorMessage)")
            }
        
        }
    }
    @IBAction func btnConjugate3TouchUpInside(_ sender: Any) {
        let selectedFrenchVerb = btnRandomVerb3.titleLabel!.text
        FrenchVerbAPI.getVerb(verb: selectedFrenchVerb!) { verb in
            DispatchQueue.main.async {
                self.sendingFrenchVerb = verb
                self.performSegue(withIdentifier: Segue.toInformationViewController, sender: self)
            }
        } failHandler: { httpStatusCode, errorMessage in
            DispatchQueue.main.async {
                print("\(httpStatusCode) - \(errorMessage)")
            }
        
        }
    }
    @IBAction func btnConjugate4TouchUpInside(_ sender: Any) {
        let selectedFrenchVerb = btnRandomVerb4.titleLabel!.text
        FrenchVerbAPI.getVerb(verb: selectedFrenchVerb!) { verb in
            DispatchQueue.main.async {
                self.sendingFrenchVerb = verb
                self.performSegue(withIdentifier: Segue.toInformationViewController, sender: self)
            }
        } failHandler: { httpStatusCode, errorMessage in
            DispatchQueue.main.async {
                print("\(httpStatusCode) - \(errorMessage)")
            }
        
        }
    }
    @IBAction func btnConjugate5TouchUpInside(_ sender: Any) {
        let selectedFrenchVerb = btnRandomVerb5.titleLabel!.text
        FrenchVerbAPI.getVerb(verb: selectedFrenchVerb!) { verb in
            DispatchQueue.main.async {
                self.sendingFrenchVerb = verb
                self.performSegue(withIdentifier: Segue.toInformationViewController, sender: self)
            }
        } failHandler: { httpStatusCode, errorMessage in
            DispatchQueue.main.async {
                print("\(httpStatusCode) - \(errorMessage)")
            }
        
        }
    }
    @IBAction func btnConjugate6TouchUpInside(_ sender: Any) {
        let selectedFrenchVerb = btnRandomVerb6.titleLabel!.text
        FrenchVerbAPI.getVerb(verb: selectedFrenchVerb!) { verb in
            DispatchQueue.main.async {
                self.sendingFrenchVerb = verb
                self.performSegue(withIdentifier: Segue.toInformationViewController, sender: self)
            }
        } failHandler: { httpStatusCode, errorMessage in
            DispatchQueue.main.async {
                print("\(httpStatusCode) - \(errorMessage)")
            }
        
        }
    }
}
