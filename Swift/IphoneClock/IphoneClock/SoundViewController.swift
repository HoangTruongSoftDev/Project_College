//
//  SoundViewController.swift
//  IphoneClock
//
//  Created by english on 2023-11-02.
//

import UIKit

class SoundViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    
    var receivedClock : Clock!
    
    var buttonDelegate : ButtonDelegate!
    
    @IBOutlet weak var tableViewSound: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Do any additional setup after loading the view.
        tableViewSound.dataSource = self
        tableViewSound.delegate = self
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
        return Clock.listOfSounds.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: Cell.soundCell, for: indexPath)
        var content = cell.defaultContentConfiguration()
        content.text = Clock.listOfSounds[indexPath.row]
        if content.text == receivedClock!.sound {
            content.image = UIImage(systemName: "checkmark")
            content.imageProperties.tintColor = .systemCyan
        }
        content.textProperties.color = UIColor.white
        cell.contentConfiguration = content
        return cell
    }
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        receivedClock.sound = Clock.listOfSounds[indexPath.row]
        tableView.reloadData()
    }
    @IBAction func btnSave(_ sender: Any) {
        if buttonDelegate != nil {
            buttonDelegate!.refreshButton()
        }
        navigationController?.popViewController(animated: true)
    }
}

