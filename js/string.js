var txt = "reihan"
var out= document.getElementById('name');

// length
out.innerHTML= txt.length;

var txt = "reihan"

// indexOf
out.innerHTML = txt.indexOf('e');

//substr
out.innerHTML = txt.substr(1, 3);  //(indexKe, sampaike)

//replace
out.innerHTML = txt.replace('rei', 'e'); //(apayang diubah, kataganti)


//Uppercase/Lowercase
out.innerHTML = txt.toUpperCase()+txt.toLowerCase()

//charAt
out.innerHTML = txt.charAt(0) //(index Ke)

//split
var txt = "a,b,c,d"
var txtArr = txt.split(",") //nilai/char/value yg diambil tidak muncul
out.innerHTML = txtArr[3]
console.log(txtArr)

//call sring by array
out.innerHTML = txt[1]