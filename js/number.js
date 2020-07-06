var num = 12.555;


//toString
document.getElementById('name').innerHTML = num.toString()
console.log(typeof num.toString()) //typedata String
console.log(typeof num) //type data awal=number/integer

//toFixed
document.getElementById('name').innerHTML = num.toFixed()

//toFixed
document.getElementById('name').innerHTML = num.toFixed(2)

// global method
var txtNum = "12.555"
document.getElementById('name').innerHTML = Number(txtNum)
document.getElementById('name').innerHTML = typeof Number(txtNum)
document.getElementById('name').innerHTML = typeof txtNum
document.getElementById('name').innerHTML = parseInt(txtNum) //dibulatkan karna integer bilangan bulat

//Math
//random(basicnya menjadikan random dari angka 0 ke angka 1)
var test= Math.random().toFixed(2)+ num;
document.getElementById('name').innerHTML = test
//agaar randomnya bebas angka walaupun ada batas maksimal
var x = 10; // batas maksimlas(range)
var y = 1; // batas minimal

var random= Math.floor(Math.random() * x ) + y // angka 1 adalah batas angka terkecil

//min
var min = Math.min(1,2,3);
document.getElementById('name').innerHTML = min

//max
var max = Math.max(1,2,3);
document.getElementById('name').innerHTML = max

//round
var angka = Math.round(1212.5); // membulatkan angka untuk setiap angka > 5 akan dibulatkan ke atas , <5 sebaliknya

//ceil
var ceil = Math.ceil(1212.1);//tetap membulatkan angkanya(sekecil apapun) ke atas/membesar . exampleResult: 1213

//floor
var floor = Math.floor(2212.9);//tetap membulatkan angkanya(sekecil apapun) ke bawah/mengecil . exampleResult: 1212

//

