// ตั้งค่าหลังติดตั้ง (ดูขั้นตอนใน README.md)
// ถ้าปล่อยว่างทั้งสองช่อง เว็บจะทำงานเป็นโหมดพรีวิว (ข้อมูลตัวอย่าง เก็บในเบราว์เซอร์ ไม่ต้องล็อกอิน)
window.APP_CONFIG = {
  API_URL: "https://script.google.com/macros/s/AKfycbxG9GGurj4pKc4M9qPzEq6Ryj3B7Fwsq6d6n6VVDu2IQwjCszX7UWQJzuUu8t1foOo/exec",    // ลิงก์ Web app จาก Apps Script (ลงท้ายด้วย /exec)
  CLIENT_ID: "388050775921-95vqp529a07n0s73jhsj5m2olq5pka1k.apps.googleusercontent.com"   // OAuth Client ID จาก Google Cloud (ลงท้ายด้วย .apps.googleusercontent.com)
};
