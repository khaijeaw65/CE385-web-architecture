// workshop 1.1
const w1_1 = () => {
  // สร้าง object student เก็บข้อมูล ชื่อ, อายุ, สาขา
  const student = {
    name: "ณัฐวัฒน์ จิรกุลประดิษฐ์",
    age: 28,
    major: "วิศวกรรมคอมพิวเตอร์",
  };

  // แสดงข้อมูล student ออกทาง console
  console.log(`ชื่อ: ${student.name}`);
  console.log(`อายุ: ${student.age}`);
  console.log(`สาขา: ${student.major}`);
};

// workshop 1.2
const w1_2 = () => {
  // เก็บข้อมูลชนิดต่าง ๆ ตามที่กำหนด
  const myString = "Hello, World!";
  const myNumber = 42;
  const myBoolean = true;
  const myNull = null;
  const myUndefined = undefined;

  // แสดงค่าพร้อมชนิดข้อมูลออกทาง console
  console.log(`myString: ${myString} - Type: ${typeof myString}`);
  console.log(`myNumber: ${myNumber} - Type: ${typeof myNumber}`);
  console.log(`myBoolean: ${myBoolean} - Type: ${typeof myBoolean}`);
  console.log(`myNull: ${myNull} - Type: ${typeof myNull}`);
  console.log(`myUndefined: ${myUndefined} - Type: ${typeof myUndefined}`);
};

// workshop 1.3
const w1_3 = () => {
  // สร้างตัวแปรเก็บข้อมูลคะแนนในแต่ละวิชา
  const mathScore = 85;
  const scienceScore = 72;
  const englishScore = 90;

  // คำนวณคะแนนรวม
  const sum = mathScore + scienceScore + englishScore;
  // คำนวณคะแนนเฉลี่ย
  const average = sum / 3;

  // แสดงผลลัพธ์ออกทาง console
  console.log(`คะแนนรวม: ${sum}`);
  console.log(`คะแนนเฉลี่ย: ${average.toFixed(2)}`);
  console.log(`คะแนนเฉลี่ย >= 80: ${average >= 80}`);
};

// workshop 1.4
const w1_4 = () => {
  // สร้างตัวแปรเก็บข้อมูลชื่อผู้ใช้ รหัสผ่าน และอายุ
  const username = "admin";
  const password = "1234";
  const age = 20;

  // ตรวจสอบเงื่อนไขตามที่กำหนด และแสดงข้อความออกทาง console
  if (username === "admin" && password === "1234" && age >= 18) {
    console.log("เข้าสู่ระบบสำเร็จ");
    return;
  }

  // ตรวจสอบชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง และแสดงข้อความออกทาง console
  if (username !== "admin" || password !== "1234") {
    console.log("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    return;
  }

  // ตรวจสอบอายุไม่ถึงเกณฑ์ และแสดงข้อความออกทาง console
  if (age < 18) {
    console.log("อายุไม่ถึงเกณฑ์");   
  }
};
