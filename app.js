// **DOM va BOM tushunchasi (oddiy va test uchun tushunarli)**

// ### 1. DOM (Document Object Model)

// DOM — bu HTML hujjatining brauzer tomonidan yaratilgan daraxtsimon (tree) ko‘rinishi. JavaScript DOM orqali sahifadagi elementlarni o‘zgartira oladi.

// Masalan:

// ```html
// <h1 id="title">Salom</h1>
// ```

// JavaScript:

// ```javascript
// document.getElementById("title").innerHTML = "Assalomu alaykum";
// ```

// Bu kod `<h1>` matnini o‘zgartiradi.

// **DOM obyektlari:**

// * `document`
// * `getElementById()`
// * `querySelector()`
// * `createElement()`
// * `innerHTML`

// **Qisqa ta'rif:**

// > DOM — HTML sahifadagi elementlarni boshqarish imkonini beruvchi model.

// ---

// ### 2. BOM (Browser Object Model)

// BOM — brauzerning o‘zini boshqarish uchun ishlatiladigan obyektlar to‘plami.

// Masalan:

// ```javascript
// alert("Salom");
// ```

// yoki

// ```javascript
// window.open("https://google.com");
// ```

// Bu yerda `window` BOM ga tegishli.

// **BOM obyektlari:**

// * `window`
// * `location`
// * `history`
// * `navigator`
// * `screen`

// **Qisqa ta'rif:**

// > BOM — brauzer oynasi va uning funksiyalarini boshqaruvchi model.

// ---

// ## DOM va BOM farqi

// | DOM                        | BOM                           |
// | -------------------------- | ----------------------------- |
// | HTML hujjat bilan ishlaydi | Brauzer bilan ishlaydi        |
// | Asosiy obyekt: `document`  | Asosiy obyekt: `window`       |
// | Elementlarni o‘zgartiradi  | Oyna, URL, tarixni boshqaradi |

// ---

// ## Test uchun eslab qolish

// **Savol 1:** DOM nimani boshqaradi?
// ✅ HTML hujjat elementlarini

// **Savol 2:** BOM ning asosiy obyekti qaysi?
// ✅ `window`

// **Savol 3:** `document.getElementById()` qaysi modelga tegishli?
// ✅ DOM

// **Savol 4:** `alert()` funksiyasi qaysi modelga tegishli?
// ✅ BOM

// **Savol 5:** URL manzilini olish uchun qaysi obyekt ishlatiladi?
// ✅ `location` (BOM)

// ### Yodlash usuli

// * **DOM = Document = HTML sahifa**
// * **BOM = Browser = Brauzer oynasi**
