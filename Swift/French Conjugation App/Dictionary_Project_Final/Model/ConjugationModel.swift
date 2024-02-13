//
//  ConjugationModel.swift
//  Dictionary_Project_Final
//
//  Created by english on 2023-12-01.
//

import Foundation
class Conjugation {
    
    public var type : String
    public var tense : String
    public var verbForm : String
    public var conjugatedSubject : String?
    
    public static let listOfTenses = ["infinitive", "participe", "imparfait", "indiatif", "Passe Simple", "Passe Composse"]
    
    public init(type: String, tense: String, verbForm: String, conjugatedSubject: String? = nil) {
        self.type = type
        self.tense = tense
        self.verbForm = verbForm
        self.conjugatedSubject = conjugatedSubject
    }
}
