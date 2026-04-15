let month = parseInt(prompt("Nhập số tháng (1-12):"));
let year = parseInt(prompt("Nhập số năm:"));

if (isNaN(month) || isNaN(year) || month < 1 || month > 12) {
    alert("Dữ liệu không hợp lệ! Tháng phải từ 1-12 và năm phải là số.");
} else {
    let days; 
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            days = 31;
            break;
        
        case 4: case 6: case 9: case 11:
            days = 30;
            break;
        
        case 2:
            if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
                days = 29; 
            } else {
                days = 28; 
            }
            break;
    }

    console.log("Tháng " + month + " năm " + year + " có " + days + " ngày");
    alert("Tháng " + month + " năm " + year + " có " + days + " ngày");
}