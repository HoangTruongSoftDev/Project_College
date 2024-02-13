//
//  DataModel.swift
//  Dictionary_Project_Final
//
//  Created by english on 2023-12-01.
//


import Foundation
class Data {
    public var word : String
    public var fullDescription : String
    public var wordVerbGroup : String
    public var wordConjugateWithWhichVerb : String
    public var wordConjugateWhichVerbModel : String
    public var wordVerbType : String
    public var wordConjugateRule : String
    public var conjugation : Conjugation
    public var isFavouriteWord : Bool
    
    public init(word: String, fullDescription: String, wordVerbGroup: String, wordConjugateWithWhichVerb: String, wordConjugateWhichVerbModel: String, wordVerbType: String, wordConjugateRule: String, conjugation: Conjugation, isFavouriteWord : Bool = false) {
        self.word = word
        self.fullDescription = fullDescription
        self.wordVerbGroup = wordVerbGroup
        self.wordConjugateWithWhichVerb = wordConjugateWithWhichVerb
        self.wordConjugateWhichVerbModel = wordConjugateWhichVerbModel
        self.wordVerbType = wordVerbType
        self.wordConjugateRule = wordConjugateRule
        self.conjugation = conjugation
        self.isFavouriteWord = isFavouriteWord
    }
}
