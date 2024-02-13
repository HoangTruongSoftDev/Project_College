//
//  Clock.swift
//  IphoneClock
//
//  Created by english on 2023-10-31.
//

import Foundation

class Clock : NSObject {
    
    public var minute : Int
    public var hour : Int
    public var on : Bool
    public var repeatDay : String
    public var label : String
    public var sound : String
    public var snooze : Bool
    
    
    public static var listOfClocks = [Clock]()
    public static var listOfHours = [Int]()
    public static var listOfMinutes = [Int]()
    public static var listOfRepeats = ["Every Sunday", "Every Monday", "Every Tuesday", "Every Wednesday", "Every Thursday", "Every Friday", "Every Saturday", "Never"]
    public static var listOfSounds = ["Apex", "Beacon", "Despacito", "Few Ones Left", "Attention", "Circuit", "Cosmic", "Crystals", "Night Owl", "Ripples", "Twinkle"]
    
    public override var description : String {
        return String(hour) + ":" + String(minute)
    }
    
    public init(minute: Int, hour: Int, on: Bool, repeatDay: String, label: String, sound: String, snooze: Bool) {
        self.minute = minute
        self.hour = hour
        self.on = on
        self.repeatDay = repeatDay
        self.label = label
        self.sound = sound
        self.snooze = snooze
    }
    public override init() {
        self.minute = 0
        self.hour = 0
        self.on = false
        self.repeatDay = "Never"
        self.label = "Alarm"
        self.sound = "Apex"
        self.snooze = false
    }
    public static func mockData() {
        for i in 0...23 {
            Clock.listOfHours.append(i)
        }
        for i in 0...59 {
            Clock.listOfMinutes.append(i + 1)
        }
        
    }
    
}


