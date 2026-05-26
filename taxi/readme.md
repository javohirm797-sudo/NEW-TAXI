# ZUR TAXI - Premium Veb Ilova

Ushbu loyiha **ZUR TAXI** xizmati ilovasining premium darajadagi veb-klyonidir. Ilova to'liq interaktiv bo'lib, yo'lovchi buyurtma berish jarayoni, haydovchi qabul qilishi va admin paneli boshqaruvini simulyatsiya qilib beradi. Xavfsizlik maqsadida **Admin paneli** parollangan bo'lib, faqat maxsus kod yordamida kirish mumkin (Boshlang'ich passkod: `203040`).

---

## 🚀 Xususiyatlari

1. **Ko'p tilli interfeys (Localization):**
   * O'zbek va Rus tillarini to'liq qo'llab-quvvatlaydi.
   * Til o'zgarganda barcha matnlar va placeholderlar avtomatik o'zgaradi.
   
2. **Rolli tizim va sinxronizatsiya:**
   * **Yo'lovchi (Passenger):** Manzil tanlash, tarif tanlash (Start, Comfort, Biznes, Yetkazish), to'lov turini tanlash (Click, Payme, Naqd, Karta) va buyurtma berish.
   * **Haydovchi (Driver):** Online/Offline statusni o'zgartirish, kiruvchi buyurtmani countdown taymer bilan qabul qilish yoki rad etish, yo'lovchi sari harakatlanish va sayohatni boshlash/tugatish.
   * **Admin panel:** Real vaqtdagi statistikalar, bugungi soatlik buyurtmalar grafigi (Chart.js), haydovchilar reytingi va ularning band/bo'sh holatlari jadvali.

3. **Interaktiv Xarita va Animatsiyalar:**
   * **Leaflet.js** yordamida Toshkent xaritasi va real ko'cha koordinatalari.
   * Haydovchining yo'lovchi sari va manzil sari harakatlanishi silliq animatsiya orqali ko'rsatiladi.
   * Haydovchi qidirish, radar va taymerlar uchun chiroyli mikror-animatsiyalar.

4. **Simulyator Nazorati (Floating Controller):**
   * Yo'l harakati (Trafik) darajasini o'zgartirish (Tezlikka ta'sir qiladi).
   * Simulyatsiya tezligini sozlash (1x dan 5x gacha).
   * Xaritaga yangi tasodifiy haydovchi qo'shish.
   * Simulyator holatini to'liq boshlang'ich holatga qaytarish (Reset).

---

## 🛠 Ishga tushirish (Getting Started)

Loyiha hech qanday o'rnatish yoki build qilishni talab qilmaydi. Uni ishga tushirish juda oddiy:

1. `f:\taxi` papkasidagi `index.html` faylini istalgan brauzerda (Chrome, Edge, Firefox, Safari) oching (sichqonchani ikki marta bosish orqali).
2. Yoki lokal server orqali ochish uchun VS Code `Live Server` kengaytmasidan foydalanishingiz mumkin.

---

## 📖 Foydalanish Yo'riqnomasi (Simulyatsiyani sinab ko'rish)

Loyihaning to'liq ishlashini tekshirish uchun quyidagi ketma-ketlikni bajaring:

1. Brauzerda ilovani oching (boshlang'ich rejim **Yo'lovchi** bo'ladi).
2. O'ng tomondagi xaritada Toshkent markazi va 3 ta faol haydovchini (sariq rangli mashina piktogrammalari) ko'rasiz.
3. **Yo'lovchi ekranida:**
   * "Qayerga" maydoniga bosing va harflarni yozing (Masalan: `Chorsu bozori` deb yozib, chiqqan taklifni bosing).
   * Tariflardan birini tanlang (masalan, **Comfort**).
   * To'lov turini o'zgartirish uchun hamyon rasmi ustiga bosing va **Payme** yoki **CLICK**ni tanlab, tasdiqlang.
   * **TAXI BUYURTMA BERISH** tugmasini bosing.
4. Tizimda haydovchi qidirish boshlanadi. Tezda yuqoridagi roldan **Haydovchi (Driver)** tugmasini bosing:
   * Haydovchi ekranida chiroyli sound/timer bilan yangi buyurtma oynasi ochilganini ko'rasiz.
   * **Qabul qilish (Accept)** tugmasini bosing.
5. Endi rolni **Yo'lovchi (Passenger)** paneliga qaytaring:
   * Ekranda "Haydovchi yo'lda..." holati, Rustam Karimovning ismi, mashina raqami (01 A 777 AA) va kelish vaqti ko'rinadi.
   * Xaritada esa haydovchi mashinasi yo'lovchi (A nuqta) sari silliq harakatlanayotganini kuzatishingiz mumkin.
6. Haydovchi yo'lovchiga yetib kelgach, rolni yana **Haydovchi (Driver)** paneliga o'tkazing:
   * Haydovchi ekranida **SAYOHATNI BOSHLASH** tugmasi faollashadi, uni bosing.
7. Xaritada mashina B nuqta (Chorsu) sari yura boshlaydi. Yo'lovchi panelida esa "Sayohat davom etmoqda" yozuvi va progress bar to'la boshlaydi.
8. Mashina manzilga yetgach, Haydovchi panelidagi **SAYOHATNI YAKUNLASH / BALANSDAN YECHISH** tugmalarini bosing.
9. Yo'lovchi panelida **Sayohat yakunlandi!** oynasi ochiladi. Haydovchiga 5 yulduzli baho bering va fikr yozib **Yuborish** tugmasini bosing.
10. **Admin** paneliga o'ting (Passkod: `203040` deb yozib tasdiqlang) va bugungi tushumlar oshganini hamda Rustam Karimovning statistikasi yangilanganini kuzating!
