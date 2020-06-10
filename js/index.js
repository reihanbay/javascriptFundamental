// deklarasivariabel
var angka1 =1730;

// ------TIPE DATA-----

// tipedata string
var text= "apa ya?";

// tipe data angka/integer/float/double
var angka2 =173;
var decimal= 1.2;

// var tipe data boelan
var isHandsome= true;

// var tipe data array
var car=['sedan','inova','kijang'];

// variabel tipe data object 
var objek={
    mata : melihat,
    kaki : 2
};


// Operator 

var number1 = 2; 
var number2 = 4;

// aritmatika

var min = number1 - number2; //pengurangan
var plus = number1 + number2; //penjumlahan
var bagi = number1 / number2; //pembagian
var kali = number1 * number2; //perkalian
var sisa = number1 % number2; //sisa bagi
var pangkat = number2 ** number1; //pemangkatan

//penugasan
var no1 = number1;              // Pengisian Nilai	=
var isiTambah = no1 +=1 ;       // Pengisian dan Penambahan	+=
var isiKurang= number2 -=no1;   // Pengisian dan Pengurangan	-=
var isiKali= no1 *= 2;          // Pengisian dan Perkalian	*=
var isiPangkat= no1**=2;        // Pengisian dan Pemangkatan	**=
var isiBagi= no1 /=2;           // Pengisian dan Pembagian	/=
var isiSisa= no1 %=2;             // Pengisian dan Sisa bagi	%=

//perbandingan
var aku = 20;
var kamu = 19;

        // sama dengan
        var hasil = aku == kamu;
        document.write(`${aku} == ${kamu} = ${hasil}<br/>`);
        
        // lebih besar
        var hasil = aku > kamu;
        document.write(`${aku} > ${kamu} = ${hasil}<br/>`);
        
        // lebih besar samadengan
        var hasil = aku >= kamu;
        document.write(`${aku} >= ${kamu} = ${hasil}<br/>`);
        
        // lebih kecil
        var hasil = aku < kamu;
        document.write(`${aku} < ${kamu} = ${hasil}<br/>`);
        
        // lebih kecil samadengan
        var hasil = aku <= kamu;
        document.write(`${aku} <= ${kamu} = ${hasil}<br/>`);
        
        // tidak samadengan
        var hasil = aku != kamu;
        document.write(`${aku} != ${kamu} = ${hasil}<br/>`);

//Logika
        var benar = aku > kamu;
        var salah = aku < kamu;

        // operator && (and)
        var hasil = benar && salah;
        document.write(`${benar} && ${salah} = ${hasil}<br/>`);
        
        // operator || (or)
        var hasil = benar || salah;
        document.write(`${benar} || ${salah} = ${hasil}<br/>`);
        
        // operator ! (not)
        var hasil = !benar
        document.write(`!${benar} = ${hasil}<br/>`);

//Bitwise
var x = 4;
        var y = 3;

        // operator bitwise and
        var hasil = x & y;
        document.write(`${x} & ${y} = ${hasil}<br/>`);

        // operator bitwise or
        var hasil = x | y;
        document.write(`${x} | ${y} = ${hasil}<br/>`);

        // operator bitwise xor
        var hasil = x ^ y;
        document.write(`${x} ^ ${y} = ${hasil}<br/>`);

        // operator negasi
        var hasil = ~x;
        document.write(`~${x} = ${hasil}<br/>`);
        
        // operator bitwise right shift >>
        var hasil = x >> y;
        document.write(`${x} >> ${y} = ${hasil}<br/>`);

        // operator bitwise right shift <<
        var hasil = x << y;
        document.write(`${x} << ${y} = ${hasil}<br/>`);

        // operator bitwise right shift (unsigned) >>>
        var hasil = x >>> y;
        document.write(`${x} >>> ${y} = ${hasil}<br/>`);

//Ternary
var pertanyaan = confirm("Apakah kamu berumur diatas 18 tahun?")

        var hasil = pertanyaan ? "Selamat datang" : "Kamu tidak boleh di sini";
        alert(hasil);



// ----------------------------------------
var i = 5;
    if(i == 4){
        alert("ra dadi");
    } else {
        alert("angkane "+i)
    }
document.getElementById("wrap").innerHTML = i;


function setName(){
    var name=document.getElementById("inName")
    document.getElementById("name").innerHTML= name.value ;
}
