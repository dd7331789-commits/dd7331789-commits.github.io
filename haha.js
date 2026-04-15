function hien_thi_quy(thang) {
    if(thang>0 && thang<=12){
    if(thang<=3) console.log("thang",thang,"thuoc quy I");
    else if (thang<=6) console.log("thang",thang,"thuoc quy II");
    else if (thang<=9) console.log("thang",thang,"thuoc quy III");
    else console.log("thang",thang,"thuoc quy IV");
      }  else console.log("Dữ liệu nhập không hợp lệ");
}
var t = Number(prompt("Nhap vao thang tu 1-12"));
hien_thi_quy(t);