//
//  ViewController.swift
//  IphoneClock
//
//  Created by english on 2023-10-27.
//

import UIKit

class ViewController: UIViewController, UITableViewDataSource, UITableViewDelegate, SecondViewControllerDelegate {
    
    public var selectedClock : Clock?
    
    @IBOutlet weak var tableViewClock: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        Clock.mockData()
        tableViewClock.dataSource = self
        tableViewClock.delegate = self
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return Clock.listOfClocks.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: Cell.clockCell, for: indexPath)
        var content = cell.defaultContentConfiguration()
        let currentClock = Clock.listOfClocks[indexPath.row]
        content.text = currentClock.description
        content.secondaryText = currentClock.label
        content.image =  currentClock.on ? UIImage(systemName: "circle.inset.filled") : UIImage(systemName: "circle.dotted")
        content.imageProperties.tintColor = currentClock.on ? .systemGreen : .systemRed
        content.textProperties.color = UIColor.white
        content.secondaryTextProperties.color = UIColor.white
        cell.contentConfiguration = content
        return cell
        
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        selectedClock = Clock.listOfClocks[indexPath.row]
        performSegue(withIdentifier: Segue.toSecondViewControllerByController, sender: self)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == Segue.toSecondViewControllerByController {
            let seconViewController = segue.destination as! SecondViewController
            seconViewController.receivedClock = selectedClock
        }
        (segue.destination as! SecondViewController).secondViewDelegate = self
    }
    func refreshTable() {
       tableViewClock.reloadData()
    }

}

