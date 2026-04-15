var canNang = Number(prompt("Nhập cân nặng (kg): "));
var chieuCao = Number(prompt("Nhập chiều cao (m): "));
var BMI = canNang / (chieuCao * chieuCao);
console.log("Chỉ số BMI của bạn là: " + BMI);

if (BMI < 15) {
  console.log("Thân hình quá gầy");
} else if (BMI >= 15 && BMI < 16) {
  console.log("Thân hình gầy");
} else if (BMI >= 16 && BMI < 18.5) {
  console.log("Thân hình hơi gầy");
} else if (BMI >= 18.5 && BMI < 25) {
  console.log("Thân hình bình thường");
} else if (BMI >= 25 && BMI < 30) {
  console.log("Thân hình hơi béo");
} else if (BMI >= 30 && BMI < 35) {
  console.log("Thân hình hơi béo");
} else {
  console.log("Thân hình béo ");
}
