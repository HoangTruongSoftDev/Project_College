//
//  RepeatViewController.swift
//  IphoneClock
//
//  Created by english on 2023-10-31.
//

import UIKit
class RepeatViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {

    var receivedClock : Clock!
    @IBOutlet weak var tableViewRepeat: UITableView!
    
    public var buttonDelegate : ButtonDelegate!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        tableViewRepeat.delegate = self
        tableViewRepeat.dataSource = self
        
        // Do any additional setup after loading the view.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        Clock.listOfRepeats.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let repeatCell = tableView.dequeueReusableCell(withIdentifier: Cell.reapeatCell, for: indexPath)
        var content = repeatCell.defaultContentConfiguration()
        content.text = Clock.listOfRepeats[indexPath.row]
        if receivedClock?.repeatDay == content.text {
            content.image = UIImage(systemName: "checkmark")
            content.imageProperties.tintColor = .systemBlue
        }
        content.textProperties.color = UIColor.white
        repeatCell.contentConfiguration = content
        return repeatCell
    }
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        receivedClock!.repeatDay = Clock.listOfRepeats[indexPath.row]
        tableViewRepeat.reloadData()
    }

    @IBAction func btnSaveRepeat(_ sender: Any) {
        
        if buttonDelegate != nil {
            buttonDelegate?.refreshButton()
        }

        navigationController?.popViewController(animated: true)
    }
}
