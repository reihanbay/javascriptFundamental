var txt = "reihan"
var out= document.getElementById('name');

// length
out.innerHTML= txt.length;

var txt = "reihan"

// indexOf
out.innerHTML = txt.indexOf('e');

// lastindexOf
out.innerHTML = txt.lastIndexOf('e'); //mencari indeks yg dicari namun yg keluar ygterakhir kali

// search
out.innerHTML = txt.search('han'); //mencari indeks yg dicari , bisa huruf bisa kata

//substr
out.innerHTML = txt.substr(1, 3);  //(indexKe, sampaike)
//substring
out.innerHTML = txt.substring(1, 3);  //(indexKe, sampaike)

//replace
out.innerHTML = txt.replace('rei', 'e'); //(apayang diubah, kataganti)


//Uppercase/Lowercase
out.innerHTML = txt.toUpperCase()+txt.toLowerCase()

//charAt
out.innerHTML = txt.charAt(1) //(index Ke)

//split
var txt = "a,b,c,d"
var txtArr = txt.split(",") //nilai/char/value yg diambil tidak muncul
out.innerHTML = txtArr[3]
console.log(txtArr)

//call sring by array
out.innerHTML = txt[1]