package main

import (
	"fmt"
	"math"
)

/*
	Define 2 arrays with pointers and find the minimum and maximum of each.

Then swap the minimum value of the first array with minimum of the second and the same thing
for the maximum
*/
func main() {
	var array1 = []int{100, 232, 3, 1, 5, 60, 2}
	var array2 = []int{100, 400, 232, 34, 99, 5, 60, 4}
	modifyFunction(&array1, &array2)
}

func modifyFunction(array1 *[]int, array2 *[]int) {
	fmt.Println("Before Swap")
	fmt.Println("Array 1: ", *array1)
	fmt.Println("Array 2: ", *array2)
	minValue1 := math.MaxInt
	minIndex1 := 0
	for i := 0; i < len(*array1); i++ {
		if (*array1)[i] < minValue1 {
			minValue1 = (*array1)[i]
			minIndex1 = i
		}
	}
	minValue2 := math.MaxInt
	minIndex2 := 0
	for i := 0; i < len(*array2); i++ {
		if (*array2)[i] < minValue2 {
			minValue2 = (*array2)[i]
			minIndex2 = i
		}
	}

	maxValue1 := math.MinInt
	maxIndex1 := 0
	for i := 0; i < len(*array1); i++ {
		if (*array1)[i] > maxValue1 {
			maxValue1 = (*array1)[i]
			maxIndex1 = i
		}
	}
	maxValue2 := math.MinInt
	maxIndex2 := 0
	for i := 0; i < len(*array2); i++ {
		if (*array2)[i] > maxValue2 {
			maxValue2 = (*array2)[i]
			maxIndex2 = i
		}
	}
	temp := minValue2
	minValue2 = minValue1
	minValue1 = temp

	(*array1)[minIndex1] = minValue1
	(*array2)[minIndex2] = minValue2
	temp = maxValue2
	maxValue2 = maxValue1
	maxValue1 = temp

	(*array1)[maxIndex1] = maxValue1
	(*array2)[maxIndex2] = maxValue2
	fmt.Println("After Swap")
	fmt.Println("Array 1: ", *array1)
	fmt.Println("Array 2: ", *array2)
}
