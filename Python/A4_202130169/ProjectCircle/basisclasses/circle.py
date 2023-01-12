from math import floor
class Circle:
    __counter = 1

    def __init__(self, circleRadius = 0.00, circleColor = "Red"):
        self.__circleId = "CIR_" + str(self.__counter)
        self.__radius = circleRadius
        self.__color = circleColor
        Circle.__counter += 1

    def getCircleId(self):
        return self.__circleId

    def getRadius(self):
        return self.__radius

    def getColor(self):
        return self.__color

    def __str__(self):
        return f"Circle Id: {self.__circleId}. Radius: {self.__radius}. Color: {self.__color}. Perimeter: {round(self.__radius*2*3.14,2)}. Area: {round(self.__radius**2*3.14,2)}"
    def __del__(self):
        className = self.__class__.__name__
        Circle__counter -= 1
        print(f"One of the objects from the class {className} has been removed")
        
