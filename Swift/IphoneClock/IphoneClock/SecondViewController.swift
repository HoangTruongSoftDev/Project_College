//
//  SecondViewController.swift
//  IphoneClock
//
//  Created by english on 2023-10-31.
//

import UIKit
protocol SecondViewControllerDelegate {
    func refreshTable()
}
class SecondViewController: UIViewController, UITableViewDataSource, UITableViewDelegate, ButtonDelegate {

    
    
    
    
    var secondViewDelegate : SecondViewControllerDelegate?
    
    @IBOutlet weak var swClock: UISwitch!
    
    @IBOutlet weak var tableVIewHour: UITableView!
    
    @IBOutlet weak var tableViewMinute: UITableView!
    
    @IBOutlet weak var btnRepeat: UIButton!
    
    @IBOutlet weak var btnDelete: UIButton!
    
    public var receivedClock : Clock?
    
    public var newClock : Clock?
    
    @IBOutlet weak var btnLabel: UIButton!
    
    @IBOutlet weak var btnSound: UIButton!
    
    @IBOutlet weak var swSnooze: UISwitch!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        initialize()
        
        
        // Do any additional setup after loading the view.
    }
    
    private func initialize() {
        tableViewMinute.dataSource = self
        tableVIewHour.dataSource = self
        tableViewMinute.delegate = self
        tableVIewHour.delegate = self
        
            
        if receivedClock != nil {
            navigationItem.title = "Edit Alarm"
            newClock = receivedClock
        }
        else {
            navigationItem.title = "Add Alarm"
            newClock = Clock()
            btnDelete.isHidden = true
        }
        
        btnRepeat.setTitle(newClock!.repeatDay + " >", for: .normal)
        btnLabel.setTitle(newClock!.label + " >", for: .normal)
        btnSound.setTitle(newClock!.sound + " >", for: .normal)
        swSnooze.isOn = newClock!.snooze
        swClock.isOn = newClock!.on
        
        
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        
        if tableView === tableViewMinute {
            return 60
        }
        else {
            return 24
        }
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        
        if (tableView === tableVIewHour) {
            
            let cell : UITableViewCell = tableView.dequeueReusableCell(withIdentifier: Cell.hourCell, for: indexPath)
            var content = cell.defaultContentConfiguration()
            content.text = String(Clock.listOfHours[indexPath.row])
            content.textProperties.color = UIColor.orange
            
            cell.contentConfiguration = content
            return cell
        }
        else  {
            let cell : UITableViewCell =  tableView.dequeueReusableCell(withIdentifier: Cell.minuteCell, for: indexPath)
            var content = cell.defaultContentConfiguration()
            content.text = String(Clock.listOfMinutes[indexPath.row])
            content.textProperties.color = UIColor.orange
            cell.contentConfiguration = content
            
            return cell
        }
    }
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        if (tableView === tableVIewHour) {
            newClock!.hour = Clock.listOfHours[indexPath.row]
        }
        else {
            newClock!.minute = Clock.listOfMinutes[indexPath.row]
        }
    }
    
    
    @IBAction func saveAlarm(_ sender: Any) {
        //        newClock!.label = String((btnLabel.titleLabel?.text?.split(separator: " ").first)!)
        //        newClock!.sound = String((btnSound.titleLabel?.text?.split(separator: " ").first)!)
        newClock!.snooze = swSnooze.isOn
        newClock!.on = swClock.isOn
        if receivedClock == nil {
            Clock.listOfClocks.append(newClock!)
        }
        if secondViewDelegate != nil {
            secondViewDelegate!.refreshTable()
        }
        navigationController!.popViewController(animated: true)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == Segue.toRepeatViewController {
            (segue.destination as! RepeatViewController).receivedClock = newClock
            (segue.destination as! RepeatViewController).buttonDelegate = self
        }
        else if segue.identifier == Segue.toLabelViewController{
            (segue.destination as! LabelViewController).receivedClock = newClock
            (segue.destination as! LabelViewController).buttonDelegate = self
        }
        else if segue.identifier == Segue.toSoundViewController {
            (segue.destination as! SoundViewController).receivedClock = newClock
            (segue.destination as! SoundViewController).buttonDelegate = self
        }
    }

    @IBAction func btnDeleteTouchUpInside(_ sender: Any) {
        var indexOfClock = Clock.listOfClocks.firstIndex(of: newClock!)
        Clock.listOfClocks.remove(at: indexOfClock!)
        if secondViewDelegate != nil {
            secondViewDelegate?.refreshTable()
        }
        navigationController!.popViewController(animated: true)
    }
    func refreshButton() {
        btnRepeat.setTitle(newClock!.repeatDay + " >", for: UIControl.State.normal)
        btnLabel.setTitle(newClock!.label + " >", for: .normal)
        btnSound.setTitle(newClock!.sound + " >", for: .normal)
    }
}
