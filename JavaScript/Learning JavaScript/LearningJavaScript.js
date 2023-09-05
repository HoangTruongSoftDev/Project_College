
function showImage(src_image) {
    document.getElementById('my_image').src = src_image;
}

for (let i = 0; i < 5; i++) {
    setTimeout(function(){ 
       console.log('Yo! ', i);
    }, 1000);
 }
 var x = 3;
 x += 3;
 x = 'truong';
 alert("x + y = " + x);
 var arr = ["apple", "banana", "lemon"];

 var func = function sumOfTwoNumbers(a, b) {
    return a + b;
 }
 document.getElementById("checkType").innerHTML = "The type is: " + typeof func;

 var person = {
    firstName : "Truong",
    lastName : "Pham",
    age : 21,
    address : "HCM",
    goToSchool : function() {
        return "by bike";
    },
    getFullName : function() {
        return this.firstName + " " + this.lastName;
    }
 }
 delete person.age;

 person.fullName = person.firstName + " " + person.lastName;

 person.firstName = "Tuan";
 var t = 'address';

 person.playGame = function() {
    return "playing CS:GO";
 };



 var studentName = "TRUONG";
 var brands = "Apple Samsung Oppo Xiaomi Huawei Oppo Bphone";
 document.getElementById("objectPerson").innerHTML = brands.replace(/Oppo/g, "Google");