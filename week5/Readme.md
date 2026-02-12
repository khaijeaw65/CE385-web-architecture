# Workshop Week 5

## 🚀 Installation & Setup

### 1️⃣ Initialize Project

```bash
npm init -y
```

### 2️⃣ เปิดใช้งาน ES Modules

เพิ่มหรือแก้ไขใน `package.json`:

```json
"type": "module"
```

### 3️⃣ Install Dependencies

```bash
npm install express
```

---

## ▶️ วิธีการ run

Start the server using:

```bash
node index.js
```

ถ้าสำเร็จ จะขึ้นข้อความใน terminal/console

```
Server is running on http://localhost:3000
```

---

## 🧪 วิธีการทดสอบ (Testing Guide)

1. Run server ด้วยคำสั่ง:

```bash
node index.js
```

2. ใช้ HTTP client เช่น:
   - Postman
   - Thunder Client
   - Insomnia
   - curl

3. เรียกใช้งาน API endpoints ตามที่กำหนดด้านล่าง

---

## 📡 API Endpoints

### 🔹 1. Get All Students

**GET** `/students`

Response:

```json
[
  { "id": 1, "name": "node", "age": 18 },
  { "id": 2, "name": "express", "age": 19 },
  { "id": 3, "name": "javascript", "age": 20 }
]
```

---

### 🔹 2. Get Student By ID

**GET** `/students/:id`

Example:

```
GET /students/1
```

Response:

```json
{ "id": 1, "name": "node", "age": 18 }
```

กรณีไม่พบข้อมูล:

```json
{ "message": "Student not found" }
```

Status Code: `404`

---

### 🔹 3. Create New Student

**POST** `/students`

Request Body (JSON):

```json
{
  "id": 4,
  "name": "react",
  "age": 21
}
```

Validation:
- `name` ต้องพบใน request body
- `age` ต้องพบใน request body

Success Response:

```json
{
  "id": 4,
  "name": "react",
  "age": 21
}
```

Status Code: `201`

หากไม่พบ name และ age ใน request body:

```json
{ "message": "Invalid data" }
```

Status Code: `400`

---

### 🔹 4. Update Student

**PUT** `/students/:id`

Request Body:

```json
{
  "name": "updated name",
  "age": 25
}
```

Success Response:

```json
{
  "id": 1,
  "name": "updated name",
  "age": 25
}
```

หากไม่พบนักศึกษาจาก id ที่ส่งผ่าน url params:

```json
{ "message": "Student not found" }
```

Status Code: `404`

---

### 🔹 5. Delete Student

**DELETE** `/students/:id`

Success Response:

```json
{
  "id": 1,
  "name": "node",
  "age": 18
}
```

หากไม่พบข้อมูลนักศึกษา:

```json
{ "message": "Student not found" }
```

Status Code: `404`

---

## ⚙️ ขั้นตอนการพัฒนา (Development Steps)

1. สร้าง `package.json` ด้วยคำสั่ง `npm init`
2. กำหนด `"type": "module"` ใน `package.json`
3. ติดตั้ง Express ด้วยคำสั่ง `npm install express`
4. Import Express ด้วยคำสั่ง:

```js
import express from "express";
```

5. สร้างตัวแปร `students` สำหรับเก็บข้อมูลนักศึกษา
6. สร้าง `app` ด้วย `express()`
7. ใช้ `express.json()` middleware สำหรับอ่าน JSON body
8. สร้าง API endpoints สำหรับ CRUD operations
9. รัน server ด้วย `app.listen()`

---