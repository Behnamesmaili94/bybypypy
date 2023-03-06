
//دسته بندی اعداد رندوم
var random;
var arr = []
var arr10 = []
var arr20 = []
var arr30 = []
var arr40 = []
var arr50 = []
var arr60 = []
var arr70 = []
var arr80 = []
var arr90 = []
var arr100 = []

for (let index = 0; index < 100; index++) {
    var random = Math.random() * 100
    random = Math.floor(random)
    arr.push(random)
}

for (let index = 0; index < arr.length; index++) {

    if (arr[index] <= 10) {
        arr10.push(arr[index])
    }
    if (arr[index] <= 20 & arr[index] > 10) {
        arr20.push(arr[index])
    }
    if (arr[index] <= 30 & arr[index] > 20) {
        arr30.push(arr[index])
    }
    if (arr[index] <= 40 & arr[index] > 30) {
        arr40.push(arr[index])
    }
    if (arr[index] <= 50 & arr[index] > 40) {
        arr50.push(arr[index])
    }
    if (arr[index] <= 60 & arr[index] > 50) {
        arr60.push(arr[index])
    }
    if (arr[index] <= 70 & arr[index] > 60) {
        arr70.push(arr[index])
    }
    if (arr[index] <= 80 & arr[index] > 70) {
        arr80.push(arr[index])
    }
    if (arr[index] <= 90 & arr[index] > 80) {
        arr90.push(arr[index])
    }
    if (arr[index] <= 100 & arr[index] > 90) {
        arr100.push(arr[index])
    }

}

//console.log('Random number is: ', random)
console.log(arr)
console.log('x<10', arr10)
console.log('x<20', arr20)
console.log('x<30', arr30)
console.log('x<40', arr40)
console.log('x<50', arr50)
console.log('x<60', arr60)
console.log('x<70', arr70)
console.log('x<80', arr80)
console.log('x<90', arr90)
console.log('x<100', arr100)

 
/*function a() {

    let data = "0"
    let newArray = input+Number(data) 

    return newArray
}
alert(a())
*/

/*let number = Number(prompt('Insert number :'))
let round_d = Math.floor(number)
let round_u = Math.ceil(number)*/

//console.log(round_d,'round down is : ')
//console.log(round_u,'round up is : ')
