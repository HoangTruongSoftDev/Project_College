"""
Assignment 3
Name: Hoang Truong Pham
Student ID: 202130169

Question 8: Write a Python program to display astrological sign for given date of birth.

"""

def AstrologicalSign(day,month):
    if day >=1 and day <= 31:
        if month == "december":
            if day <= 21:
                return "Sagittarius"
            else:
                return "Capricorn"
        elif month == "january":
            if day <=19:
                return "Capricorn"
            else:
                return "Aquarius"
        elif month == "february":
            if day <= 18:
                return "Aquarius"
            else:
                return "Pisces"
        elif month == "march":
            if day <= 20:
                return "Pisces"
            else:
                return "Aries"
        elif month == "april":
            if day <= 19:
                return "Aries"
            else:
                return "Taurus"
        elif month == "may":
            if day <= 20:
                return "Taurus"
            else:
                return "Gemini"
        elif month == "june":
            if day <= 20:
                return "Gemini"
            else:
                return "Cancer"
        elif month == "july":
            if day <= 22:
                return "Cancer"
            else:
                return "Leo"
        elif month == "august":
            if day <= 22:
                return "Leo"
            else:
                return "Virgo"
        elif month == "september":
            if day <= 22:
                return "Virgo"
            else:
                return "Libra"
        elif month == "october":
            if day <= 22:
                return "Libra"
            else:
                return "Scorpio"
        elif month == "november":
            if day <= 19:
                return "Scorpio"
            else:
                return "Sagittarius"
        else:
            print("Error Existing! Please check month must input correct with all lowercase")
    else:
        print("Error Existing! Please check day must between 1 and 31")

day = int(input("Input birthday: "))
month = input("Input month of birth: ")
print("Your Astrological sign is : ",AstrologicalSign(day,month))


