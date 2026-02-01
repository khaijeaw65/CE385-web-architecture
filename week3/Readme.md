# Workshop Week 3

## วิธีการ test
เรียกใช้ function w3_1 หรือ w3_2 เพื่อ test การทำงานตามโจทย์

## Workshop 3.1

### ขั้นตอนการทำงาน
1. สร้างตัวแปร sumEven และ productOdd จากนั้น assign value ตามโจทย์
2. สร้าง for loop สำหรับคำนวณผลรวมของเลขคู่ โดยใช้ index เริ่มที่ 2 และสิ้นสุดหากเมื่อ index มีค่า น้อยกว่าหรือเท่ากับ 50
3. ใช้ if check หาก index ปัจจุบัน / 2 ได้เศษเท่ากับ 0 โดยใช้ mod (%) เพื่อ check index ปัจจุบันเป็นเลขคู่หรือไม่ หากใช่ ทำการบวก index ปัจจุบัน เข้ากับ value ของ sumEven จากนั้น assign กลับไปที่ sumEven ดังเดิม
4. สร้าง for loop สำหรับคำนวณผลคูณของเลขคี่ โดยใช้ index เริ่มที่ 1 และสิ้นสุดหากเมื่อ index มีค่า น้อยกว่าหรือเท่ากับ 10
5. ใช้ if check หาก index ปัจจุบัน / 2 ได้เศษไม่กับเท่ากับ 0 โดยใช้ mod (%) เพื่อ check index ปัจจุบันเป็นเลขคี่หรือไม่ หากใช่ ทำการคูณ index ปัจจุบัน เข้ากับ value ของ productOdd จากนั้น assign กลับไปที่ productOdd ดังเดิม


## Workshop 3.1

### ขั้นตอนการทำงาน
1. สร้าง function calculateBMI โดยกำหนด parameter weight, height ตามโจทย์
2. สร้าง mapping object เก็บข้อมูล category
3. คำนวณ bmi โดยใช้สูตรที่กำหนด
4. สร้างตัวแปร category สำหรับเก็บผลจากการ check bmi ตามเงื่อนไข
5. return ผลลัพธ์ ในรูปแบบของ object ตามที่กำหนด
6. เรียกใช้ function และกำหนด arguments ตาม test case ที่กำหนด และ แสดงผลลัพธ์ผ่าน console.log