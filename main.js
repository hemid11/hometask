// function ayAdi(eded) {
//     const aylar = {
//         1: "January",
//         2: "February",
//         3: "March",
//         4: "April",
//         5: "May",
//         6: "June",
//         7: "July",
//         8: "August",
//         9: "September",
//         10: "October",
//         11: "November",
//         12: "December"
//     };
//     if (eded < 1 || eded > 12) {
//         return "invalid input";
//     } else {
//         return aylar[eded];
//     }
// }
// const eded = parseInt(prompt("Bir reqem daxil edin:"));
// alert(ayAdi(eded));



// function sembolYazdir(sembol, reqem) {
//     if (!Number.isInteger(reqem) || reqem <= 0 || typeof sembol !== 'string' || sembol.length !== 1) {
//         return "Yalnış daxil etmə";
//     }
//     let netice = "";
//     for (let i = 0; i < reqem; i++) {
//         netice += sembol;
//     }
//     return netice;
// }
// const simvol = prompt("Bir simvol daxil edin:");
// const reqem = parseInt(prompt("Bir tam rəqəm daxil edin:"));
// alert(sembolYazdir(simvol, reqem));


// function mertebelerinCemi(reqem) {
//     const reqemStr = reqem.toString();
//     let toplam = 0;
//     for (let i = 0; i < reqemStr.length; i++) {
//         toplam += parseInt(reqemStr[i]);
//     }
//     return toplam;
// }
// const reqem = parseInt(prompt("Bir reqem daxil edin:"));
// alert(mertebelerinCemi(reqem));


// function PerfectnumberKontrol(eded) {
//     let toplam = 0;
//     for (let i = 1; i < eded; i++) {
//         if (eded % i === 0) {
//             toplam += i;
//         }
//     }
//     return toplam === eded;
// }
// const eded = parseInt(prompt("Bir eded daxil edin:"));
// alert(PerfectnumberKontrol(eded) ? eded + " perfect number-dir." : eded + " perfect number deyil.");


// function enBoyukEnKicikOrta() {
//     let enBoyuk = arguments[0], enKicik = arguments[0];
//     for (let i = 1; i < arguments.length; i++) {
//         if (arguments[i] > enBoyuk) enBoyuk = arguments[i];
//         if (arguments[i] < enKicik) enKicik = arguments[i];
//     }
//     return (enBoyuk + enKicik) / 2;
// }
// const reqemler = [];
// const reqemAdedi = parseInt(prompt("reqemleri daxil edin"));
// for (let i = 0; i < reqemAdedi; i++) {
//     reqemler.push(parseInt(prompt(`reqem ${i + 1}:`)));
// }
// console.log("Ortalama:", enBoyukEnKicikOrta(...reqemler));


// const bolunenReqemSayi = (reqem) => {
//     if (reqem < 1) {
//         return "Daxil olunan ədəd - dəyər ala bilməz!";
//     } else if (reqem < 50) {
//         return Math.floor(reqem / 3);
//     } else if (reqem <= 100) {
//         return Math.floor(reqem / 5);
//     } else {
//         return Math.floor(reqem / 8);
//     }
// };
// const reqem = parseInt(prompt("Bir reqem daxil edin:"));
// alert(bolunenReqemSayi(reqem));


const ortaqHerfler = function() {
    const string1 = prompt("İlk sozu daxil edin:");
    const string2 = prompt("İkinci sozu daxil edin:");
    const herfler = {};
    let ortaqHerf = 0;
    for (let harf of string1) {
        herfler[harf] = (herfler[harf] || 0) + 1;
    }
    for (let herf of string2) {
        if (herfler[herf]) {
            ortaqHerf++;
            herfler[herf]--;
        }
    }
    return ortaqHerf;
};
console.log(ortaqHerfler());


