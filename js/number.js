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


