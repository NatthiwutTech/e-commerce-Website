E-Commerce Website

โปรเจกต์เว็บE-Commerce (Full-Stack) ที่ทำขึ้นเพื่อฝึกฝนการพัฒนาระบบแบบครบวงจร ตั้งแต่การออกแบบฐานข้อมูล ออกแบบ API ไปจนถึงการทำ UI ฝั่งหน้าบ้านและการ deploy ขึ้นใช้งานจริง

ภาพรวมโปรเจกต์

โปรเจกต์นี้จำลองระบบร้านค้าออนไลน์แบบครบวงจร ตั้งแต่การเรียกดูสินค้า ระบบสมัครสมาชิก/เข้าสู่ระบบ (รวมถึง Google Login) ระบบตะกร้าสินค้า การชำระเงิน ไปจนถึงการจัดการคำสั่งซื้อ โดยพัฒนาแยกทั้งฝั่ง Client และ Server เอง

เทคโนโลยีที่ใช้

**ฝั่ง Frontend**
- React (Vite)
- Zustand — จัดการ global state
- Axios — เรียกใช้งาน API
- React Router — ทำระบบ routing ฝั่ง client
- Google OAuth — ระบบล็อกอินผ่าน Google
- React Hook Form + Zod — จัดการฟอร์มและตรวจสอบข้อมูล (validation)

**ฝั่ง Backend**
- Node.js + Express
- Prisma ORM
- PostgreSQL (host บน Supabase)
- JSON Web Token (JWT) — ระบบยืนยันตัวตน
- bcryptjs — เข้ารหัสรหัสผ่าน

**บริการเสริมอื่นๆ**
- Stripe — ระบบชำระเงิน
- Cloudinary — จัดเก็บและอัปโหลดรูปภาพ

**การ Deploy**
- ทั้งฝั่ง Frontend และ Backend deploy บน Vercel

ฟีเจอร์หลัก

- สมัครสมาชิกและเข้าสู่ระบบ (อีเมล/รหัสผ่าน และ Google OAuth)
- เรียกดูและค้นหาสินค้า
- ระบบตะกร้าสินค้าและขั้นตอนชำระเงิน
- ประมวลผลการชำระเงินผ่าน Stripe
- อัปโหลดรูปภาพผ่าน Cloudinary
- ประวัติและการจัดการคำสั่งซื้อ
- ดีไซน์ที่รองรับหลายขนาดหน้าจอ (Responsive UI)

โครงสร้างโปรเจกต์

```
├── Client/     # ฝั่ง Frontend (React + Vite)
└── Server/     # ฝั่ง Backend (Express + Prisma)
```

เริ่มต้นใช้งาน

สิ่งที่ต้องมีก่อน
- Node.js
- ฐานข้อมูล PostgreSQL (หรือโปรเจกต์บน Supabase)
- บัญชี Stripe (สำหรับคีย์ระบบชำระเงิน)
- บัญชี Cloudinary (สำหรับคีย์อัปโหลดรูปภาพ)

วิธีติดตั้ง

1. Clone repository
   ```bash
   git clone https://github.com/NatthiwutTech/e-commerce-Website.git
   ```

2. ติดตั้ง dependencies ทั้งฝั่ง client และ server
   ```bash
   cd Server && npm install
   cd ../Client && npm install
   ```

3. ตั้งค่าตัวแปรแวดล้อม (`.env`) ทั้งในโฟลเดอร์ `Client` และ `Server` — เช่น database URL, JWT secret, Stripe keys, Cloudinary keys และ Google OAuth client ID

4. เตรียมฐานข้อมูล
   ```bash
   cd Server
   npx prisma migrate dev
   ```

5. รันโปรเจกต์
   ```bash
   # Server
   npm run start

   # Client (เปิด terminal อีกหน้าต่างแยก)
   cd ../Client
   npm run dev
   ```
