# Workshop Week 4

## วิธีการ test
เรียกใช้ function w4_1, w4_2, w4_3 หรือ w4_4  เพื่อ test การทำงานตามโจทย์

## Workshop 4.1

### ขั้นตอนการทำงาน
1. สร้าง file operation.js ตามที่กำหนด
2. ในไฟล์ operation.js สร้าง function operation และกำหนด parameter ตามโจทย์
3. ใช้ if check type จาก parameter และ ใช้คำสั่ง return ผลลัพธ์จากการคำนวณตาม type 
4. หาก type ไม่ตรงกับที่กำหนดจะทำการ throw exception แทน
5. export function operation แบบ default
6.ในไฟล์ index.js เรียกใช้ function operation จากไฟล์ operation.js และ ระบุ arguments ตามที่กำหนด

## Workshop 4.2

### ขั้นตอนการทำงาน
1. สร้าง function fetchDataWithCallback รับ callback 1 ตัวผ่าน parameter ตามที่กำหนด
2. call setTimeout และ simulate ข้อมูลจาก api จากนั้น ส่งให้ callback ใช้งานหลังจากผ่านไป 2 วินาที
3. สร้าง function fetchDataWithPromise
4. return Promise object โดยให้ resolve ใน setTimeout เพื่อ simulate api calls หลังจากผ่านไป 2 วินาที
5. เรียกใช้ fetchDataWithCallback จากนั้น console.log ข้อมูลที่ callback ได้รับ
6. เรียกใช้ fetchDataWithPromise จากนั้นใช้ .then และ .catch ในการ handle ผลลัพธ์จาก resolve และ reject

## Workshop 4.3

### ขั้นตอนการทำงาน
1. สร้าง function simulateAsyncOperation รับ parameter timeout ตามที่กำหนด
2. return Promise Object โดยที่ reject หาก timeout จาก parameter มีค่าน้อยกว่า 1000 และ resolve หากมากกว่า หรือ เท่ากับ 1000 โดยที่จะ resolve หลังจาก timout ที่กำหนดด้วย setTimeout
3. สร้าง function performAsyncTask รับ parameter timeout
5. สร้าง try/catch ครอบการทำงานของ statement
6. เรียก function simulateAsyncOperation ด้วย timout จาก parameter
7. แสดงผลลัพธ์จาก resolve และ reject ผ่าน console.log
8. เรียกใช้งาน performAsyncTask ตาม test case

## Workshop 4.4

### ขั้นตอนการทำงาน
1. สร้าง function fetchDataFromServer1, fetchDataFromServer2, และ fetchDataFromServer3 โดยที่ทั้ง 3 function จะ return Promise object ตามที่กำหนด
2. fetchDataFromServer1 และ fetchDataFromServer3 ให้ resolve ในขณะที่ fetchDataFromServer2 ให้ reject หลังจาก timeout ที่กำหนด
3. เรียกใช้ function ทั้งหมดผ่าน Promise.race เพื่อรองรับ กรณีที่ 1
4. เรียกใช้ function ทั้งหมดผ่าน Promise.allSettled เพื่อรองรับ กรณีที่ 2