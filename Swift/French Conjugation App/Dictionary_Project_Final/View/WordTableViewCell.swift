//
//  WordTableViewCell.swift
//  Dictionary_Project_Final
//
//  Created by english on 2023-12-01.
//

import UIKit

class WordTableViewCell: UITableViewCell {

    private var data : FrenchVerb?
    @IBOutlet weak var labelWord: UILabel!
//    @IBOutlet weak var btnImageFavourite: UIButton!
    public static let identifier = "WordTableViewCell"
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }
    public func setCellContent(data : FrenchVerb) {
        self.data = data
        labelWord.text = data.verb
//        var image = data.isFavouriteWord == true ?        UIImage(systemName: "star.fill") : UIImage(systemName: "star")
//        btnImageFavourite.setImage(image, for: .normal)
    }
    
    @IBAction func btnImageFavouriteTouchUpInside(_ sender: Any) {
//        data?.isFavouriteWord = data!.isFavouriteWord == true ? false : true
//        var image = data!.isFavouriteWord == true ?        UIImage(systemName: "star") : UIImage(systemName: "star.fill")
//        btnImageFavourite.setImage(image, for: .normal)
    }
}
