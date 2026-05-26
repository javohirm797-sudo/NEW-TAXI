/**
 * 1310 Milliy Taxi Clone - Application Logic
 * Implements simulations, multi-role interactions, custom Leaflet mapping, Chart.js graphs, and localization.
 */

// ----------------------------------------------------
// 1. Localization Dictionary (UZ / RU)
// ----------------------------------------------------
const i18n = {
    uz: {
        role_passenger: "Yo'lovchi",
        role_driver: "Haydovchi",
        role_admin: "Admin",
        order_title: "Taxi Buyurtma Berish",
        order_subtitle: "Manzilni tanlang va qulay tarifda sayohat qiling",
        from_label: "Qayerdan:",
        to_label: "Qayerga:",
        tariffs_title: "Tariflar",
        best_value: "Hamyonbop",
        tariff_start: "Start",
        tariff_comfort: "Comfort",
        tariff_business: "Biznes",
        tariff_delivery: "Yetkazish",
        pay_cash: "Naqd pul",
        pay_cash_desc: "Sayohat tugagach haydovchiga to'lanadi",
        pay_click_desc: "Telefon raqam yoki karta orqali to'lov",
        pay_payme_desc: "Payme ilovasi yoki chek orqali to'lov",
        pay_card: "Karta (Uzcard/Humo)",
        pay_card_desc: "Ilovaga biriktirilgan bank kartasi orqali",
        apply: "Kiritish",
        order_btn: "TAXI BUYURTMA BERISH",
        searching_driver: "Haydovchi qidirilmoqda...",
        going_to_pickup: "Mijoz sari harakat",
        driver_arrived: "Haydovchi yetib keldi!",
        trip_in_progress: "Sayohat davom etmoqda",
        trip_completed: "Sayohat Yakunlandi!",
        rate_trip_sub: "Haydovchimiz sizga yoqdimi? Uni baholang.",
        submit_feedback: "Yuborish",
        cancel_ride: "Buyurtmani Bekor Qilish",
        online: "Faol",
        offline: "Dam olishda",
        driver_today_earnings: "Bugungi Daromad",
        driver_completed_trips: "Buyurtmalar",
        driver_acceptance_rate: "Qabul foizi",
        waiting_orders: "Yangi buyurtmalar kutilmoqda...",
        waiting_orders_sub: "Buyurtma tushsa avtomatik ravishda shu yerda ko'rinadi",
        offline_msg_title: "Siz o'chiq holatdasiz",
        offline_msg_desc: "Buyurtmalarni qabul qilish uchun 'Faol' rejimga o'ting.",
        new_order_badge: "YANGI BUYURTMA",
        pickup_loc: "Qayerdan (Olish manzili):",
        dropoff_loc: "Qayerga (Borish manzili):",
        fare: "Sayohat Narxi:",
        payment: "To'lov:",
        decline: "Rad etish",
        accept: "Qabul qilish",
        admin_title: "Boshqaruv Paneli (Admin)",
        admin_subtitle: "Real vaqtdagi statistika va monitoring",
        admin_total_trips: "Bugungi buyurtmalar",
        admin_revenue: "Umumiy Tushum",
        admin_active_drivers: "Faol Haydovchilar",
        admin_hourly_chart: "Bugungi soatlik buyurtmalar",
        admin_drivers_list: "Haydovchilar Holati",
        driver: "Haydovchi",
        car: "Mashina",
        status: "Holati",
        admin_completed: "Bajarilgan",
        rating: "Reyting",
        sim_control: "Simulyator Nazorati",
        sim_traffic: "Yo'l harakati (Trafik):",
        traffic_low: "Kam (Tez harakat)",
        traffic_med: "O'rtacha",
        traffic_heavy: "Tirbandlik (Sekin)",
        sim_speed: "Harakat tezligi (Simulyatsiya):",
        sim_add_driver: "Haydovchi qo'shish",
        sim_reset: "Qayta yuklash",
        admin_add_driver_title: "Yangi Haydovchi Qo'shish",
        driver_name_label: "F.I.Sh (Ismi):",
        driver_phone_label: "Telefon raqami:",
        driver_car_label: "Mashina modeli:",
        driver_color_label: "Mashina rangi:",
        driver_plate_label: "Davlat raqami:",
        admin_btn_add: "TIZIMGA QO'SHISH",
        admin_auth_title: "Admin Boshqaruviga Kirish",
        admin_auth_desc: "Ushbu panelga kirish cheklangan. Kirish passkodini kiriting:",
        auth_error: "Kiritilgan passkod noto'g'ri!",
        select_payment_title: "To'lov turini tanlang",
        confirm: "Tasdiqlash",
        searching_driver_desc: "Tizim sizga eng yaqin haydovchini aniqlamoqda. Iltimos kutib turing.",
        driver_eta_prefix: "Yetib kelish: ",
        trip_eta_prefix: "Manzilgacha: ",
        arrived_desc: "Haydovchi belgilangan joyga yetib keldi. Oq rangli Cobalt (01 A 777 AA)",
        nav_turn_right: "O'ngga buriling va yo'l bo'ylab davom eting",
        nav_turn_left: "Chapga buriling va 500 metrdan keyin to'xtang",
        nav_straight: "To'g'ri yuring, chorrahadan o'tib manzilga yetasiz",
        nav_arrived: "Siz manzilga yetib keldingiz!"
    },
    ru: {
        role_passenger: "Пассажир",
        role_driver: "Водитель",
        role_admin: "Админ",
        order_title: "Заказать Такси",
        order_subtitle: "Выберите маршрут и путешествуйте с комфортом",
        from_label: "Откуда:",
        to_label: "Куда:",
        tariffs_title: "Тарифы",
        best_value: "Выгодно",
        tariff_start: "Старт",
        tariff_comfort: "Комфорт",
        tariff_business: "Бизнес",
        tariff_delivery: "Доставка",
        pay_cash: "Наличные",
        pay_cash_desc: "Оплата водителю в конце поездки",
        pay_click_desc: "Оплата через карту или номер телефона",
        pay_payme_desc: "Оплата через приложение Payme или чек",
        pay_card: "Карта (Uzcard/Humo)",
        pay_card_desc: "Через привязанную карту в приложении",
        apply: "Применить",
        order_btn: "ЗАКАЗАТЬ ТАКСИ",
        searching_driver: "Поиск водителя...",
        going_to_pickup: "Направление к клиенту",
        driver_arrived: "Водитель прибыл!",
        trip_in_progress: "Поездка в процессе",
        trip_completed: "Поездка Завершена!",
        rate_trip_sub: "Вам понравился наш водитель? Оцените его.",
        submit_feedback: "Отправить",
        cancel_ride: "Отменить Заказ",
        online: "Активен",
        offline: "На отдыхе",
        driver_today_earnings: "Доход сегодня",
        driver_completed_trips: "Заказы",
        driver_acceptance_rate: "Принятие",
        waiting_orders: "Ожидание новых заказов...",
        waiting_orders_sub: "Новые заказы будут автоматически отображаться здесь",
        offline_msg_title: "Вы не на линии",
        offline_msg_desc: "Перейдите в статус 'Активен' для приема заказов.",
        new_order_badge: "НОВЫЙ ЗАКАЗ",
        pickup_loc: "Откуда (Точка забора):",
        dropoff_loc: "Куда (Точка назначения):",
        fare: "Стоимость поездки:",
        payment: "Оплата:",
        decline: "Отклонить",
        accept: "Принять",
        admin_title: "Панель Управления (Админ)",
        admin_subtitle: "Статистика и мониторинг в реальном времени",
        admin_total_trips: "Заказов сегодня",
        admin_revenue: "Общая Выручка",
        admin_active_drivers: "Активные Водители",
        admin_hourly_chart: "Почасовые заказы сегодня",
        admin_drivers_list: "Статус водителей",
        driver: "Водитель",
        car: "Машина",
        status: "Статус",
        admin_completed: "Выполнено",
        rating: "Рейтинг",
        sim_control: "Управление Симуляцией",
        sim_traffic: "Дорожный трафик:",
        traffic_low: "Слабый (Быстро)",
        traffic_med: "Средний",
        traffic_heavy: "Пробки (Медленно)",
        sim_speed: "Скорость симуляции:",
        sim_add_driver: "Добавить водителя",
        sim_reset: "Сбросить",
        admin_add_driver_title: "Добавить Нового Водителя",
        driver_name_label: "Ф.И.О (Имя):",
        driver_phone_label: "Номер телефона:",
        driver_car_label: "Модель машины:",
        driver_color_label: "Цвет машины:",
        driver_plate_label: "Гос. номер:",
        admin_btn_add: "ДОБАВИТЬ В СИСТЕМУ",
        admin_auth_title: "Вход в Панель Админа",
        admin_auth_desc: "Доступ к этой панели ограничен. Введите пароль доступа:",
        auth_error: "Неверный пароль доступа!",
        select_payment_title: "Выберите способ оплаты",
        confirm: "Подтвердить",
        searching_driver_desc: "Система подбирает ближайшего к вам водителя. Пожалуйста, подождите.",
        driver_eta_prefix: "Прибытие через: ",
        trip_eta_prefix: "До места назначения: ",
        arrived_desc: "Водитель прибыл на место. Белый Cobalt (01 A 777 AA)",
        nav_turn_right: "Поверните направо и продолжайте движение по дороге",
        nav_turn_left: "Поверните налево и через 500 метров остановитесь",
        nav_straight: "Идите прямо, пересеките перекресток и прибудете на место",
        nav_arrived: "Вы прибыли на место назначения!"
    }
};

let currentLang = 'uz';

function changeLanguage(lang) {
    if (!i18n[lang]) return;
    currentLang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        if (i18n[lang][key]) {
            elem.innerText = i18n[lang][key];
        }
    });

    // Inputs placeholders translation
    const inputsWithPlaceholders = [
        { id: 'input-from', key: 'from_label' },
        { id: 'input-to', key: 'to_label' },
        { id: 'input-promo', key: 'apply' },
        { id: 'feedback-comment', key: 'rate_trip_sub' }
    ];
    
    // Custom placeholders translation
    if (lang === 'uz') {
        document.getElementById('input-from').placeholder = "Ketish manzili (Masalan: Amir Temur xiyoboni)";
        document.getElementById('input-to').placeholder = "Boradigan manzil (Masalan: Chorsu bozori)";
        document.getElementById('input-promo').placeholder = "Promo-kod";
        document.getElementById('feedback-comment').placeholder = "Fikr va takliflaringiz...";
        document.getElementById('admin-driver-car').placeholder = "Masalan: Chevrolet Gentra";
    } else {
        document.getElementById('input-from').placeholder = "Откуда (Например: Сквер Амира Темура)";
        document.getElementById('input-to').placeholder = "Куда (Например: Базар Чорсу)";
        document.getElementById('input-promo').placeholder = "Промо-код";
        document.getElementById('feedback-comment').placeholder = "Ваши отзывы и предложения...";
        document.getElementById('admin-driver-car').placeholder = "Например: Chevrolet Gentra";
    }
}

// ----------------------------------------------------
// 2. Preset Kattaqo'rg'on Locations & Geocoding Simulation
// ----------------------------------------------------
const locations = [
    { name: "Kattaqo'rg'on dehqon bozori", coords: [39.8995, 66.2570] },
    { name: "Kattaqo'rg'on vokzali", coords: [39.9075, 66.2485] },
    { name: "Kattaqo'rg'on suv ombori (Dengiz)", coords: [39.8550, 66.2650] },
    { name: "Chinor chorrahasi", coords: [39.9050, 66.2530] },
    { name: "Kattaqo'rg'on shahar hokimiyati", coords: [39.9015, 66.2515] },
    { name: "Alisher Navoiy istirohat bog'i", coords: [39.9025, 66.2460] },
    { name: "Pedagogika kolleji", coords: [39.8950, 66.2420] },
    { name: "Go'zalkent mahallasi", coords: [39.8920, 66.2620] },
    { name: "Kattatog' mahallasi", coords: [39.9150, 66.2350] }
];

// ----------------------------------------------------
// 3. Driver Database — localStorage orqali doimiy saqlash
// ----------------------------------------------------
const DRIVERS_STORAGE_KEY = 'zur_taxi_drivers_v2';
const TAXIMETER_STORAGE_KEY = 'zur_taxi_taximeter_variant';

/**
 * Haydovchilarni localStorage ga saqlash.
 * marker va marker-related maydonlar serializable emas, shuning uchun chiqarib tashlanadi.
 */
function saveDriversToStorage() {
    const serializable = drivers.map(d => ({
        id: d.id,
        name: d.name,
        phone: d.phone,
        carModel: d.carModel,
        carColor: d.carColor,
        carPlate: d.carPlate,
        rating: d.rating,
        status: d.status === 'busy' ? 'online' : d.status, // busy emas, online sifatida saqlash
        passcode: d.passcode,
        coords: d.coords,
        completedTrips: d.completedTrips,
        todayEarnings: d.todayEarnings,
        balance: d.balance || 0,
        avatarColor: d.avatarColor || '#555555',
        angle: d.angle || 0
    }));
    try {
        localStorage.setItem(DRIVERS_STORAGE_KEY, JSON.stringify(serializable));
    } catch(e) {
        console.warn('localStorage saqlashda xato:', e);
    }
}

const DEFAULT_DRIVERS = [
    {
        id: 1,
        name: "Rustam Karimov",
        phone: "+998 90 777 77 77",
        carModel: "Gentra",
        carColor: "Kulrang",
        carPlate: "01 A 777 AA",
        rating: 4.9,
        status: "online",
        passcode: "1111",
        coords: [39.9015, 66.2515],
        completedTrips: 11,
        todayEarnings: 285000,
        balance: 15000,
        avatarColor: "#FFC107",
        angle: 0
    },
    {
        phone: "+998 93 123 45 67",
        carModel: "BYD Song",
        carColor: "Oq",
        carPlate: "30 B 123 CB",
        rating: 4.8,
        status: "online",
        passcode: "2222",
        coords: [39.8995, 66.2570],
        completedTrips: 8,
        todayEarnings: 150000,
        avatarColor: "#2EC4B6",
        angle: 0
    },
    {
        id: 3,
        name: "Dilshod Tursunov",
        phone: "+998 94 987 65 43",
        carModel: "Cobalt",
        carColor: "To'q ko'k",
        carPlate: "30 A 888 AA",
        rating: 4.95,
        status: "online",
        passcode: "3333",
        coords: [39.9075, 66.2485],
        completedTrips: 15,
        todayEarnings: 320000,
        avatarColor: "#FF4A5A",
        angle: 0
    }
];

/**
 * localStorage dan haydovchilarni yuklash.
 * marker null holda tiklanadi; updateDriverMarkers() chaqirilganda yaratiladi.
 */
function loadDriversFromStorage() {
    try {
        const raw = localStorage.getItem(DRIVERS_STORAGE_KEY);
        const seeded = localStorage.getItem('zur_taxi_seeded');
        
        if (!seeded) {
            localStorage.setItem(DRIVERS_STORAGE_KEY, JSON.stringify(DEFAULT_DRIVERS));
            localStorage.setItem('zur_taxi_seeded', 'true');
            return DEFAULT_DRIVERS.map(d => ({ ...d, marker: null }));
        }
        
        if (!raw) {
            return [];
        }
        
        const saved = JSON.parse(raw);
        if (!Array.isArray(saved)) {
            return [];
        }
        return saved.map(d => {
            const defaultMatch = DEFAULT_DRIVERS.find(def => def.id === d.id);
            return {
                ...d,
                passcode: d.passcode || (defaultMatch ? defaultMatch.passcode : "0000"),
                balance: d.balance || 0,
                marker: null
            };
        });
    } catch(e) {
        console.warn('localStorage o\'qishda xato:', e);
        return [];
    }
}

/**
 * Taksometr variantini saqlash/yuklash
 */
function saveTaximeterVariant(variant) {
    try { localStorage.setItem(TAXIMETER_STORAGE_KEY, String(variant)); } catch(e) {}
}
function loadTaximeterVariant() {
    try { return parseInt(localStorage.getItem(TAXIMETER_STORAGE_KEY)) || 1; } catch(e) { return 1; }
}

let drivers = loadDriversFromStorage(); // localStorage dan yuklash
let currentLoggedInDriver = null;

// Tizimga avval kirgan haydovchini xotiradan tiklaymiz
function loadCurrentLoggedInDriver() {
    const savedId = localStorage.getItem('zur_taxi_current_driver');
    if (savedId) {
        const found = drivers.find(d => d.id.toString() === savedId);
        if (found) currentLoggedInDriver = found;
    }
}


// *** PROMO CODES ***
const PROMOS_STORAGE_KEY = 'zur_taxi_promocodes';
function loadPromosFromStorage() {
    try {
        const raw = localStorage.getItem(PROMOS_STORAGE_KEY);
        if (!raw) return [];
        return JSON.parse(raw);
    } catch(e) { return []; }
}
function savePromosToStorage() {
    localStorage.setItem(PROMOS_STORAGE_KEY, JSON.stringify(promoCodes));
}

let promoCodes = loadPromosFromStorage();
let activePromoDiscount = 0; // 0 means no discount, otherwise 1-10 percentage
let activePromoCodeStr = null;

let selectedTariff = "start";
let selectedPayment = "cash";
let passengerPickup = null;
let passengerDropoff = null;
let activeInputFocus = "from"; // tracks A/B input selection focus ('from' or 'to')
let activeOrder = null; // Holds order state
let isAdminAuthenticated = false; // Auth state for admin panel
let simulatedOrderInterval = null; // Automated driver order loop interval
let isWaitingMode = false;
let waitSeconds = 0;
let waitInterval = null;

// Simulation speed modifier (ms delay per movement step)
let simTrafficDelay = 1000; 
let simSpeedModifier = 2; // scale speed: 1x, 2x, 3x, 4x, 5x

// *** TAXIMETER VARIANT ***
// Variant 1 (Standart): Mujoz oldiga borish = 5000 so'm (boshlang'ich narx),
//   so'ng har 1 km uchun 2000 so'm. Faqat Kattaqo'rg'on ichida.
// Variant 2 (Kilometrik): Boshlang'ich = 8000 so'm, har 1 km = 2500 so'm.
let activeTaximeterVariant = 1;

const TAXIMETER_VARIANTS = {
    1: {
        name: "Standart",
        label: "Variant 1 • Standart",
        rates: {
            start:    { base: 5000, perKm: 2000, freeKm: 0 },
            comfort:  { base: 10000, perKm: 1800, freeKm: 0 },
            business: { base: 12000, perKm: 3000, freeKm: 0 },
            delivery: { base: 5000, perKm: 1000, freeKm: 0 }
        },
        waitPerSec: 10  // 600/min
    },
    2: {
        name: "Kilometrik",
        label: "Variant 2 • Kilometrik",
        rates: {
            start:    { base: 8000, perKm: 2500, freeKm: 0 },
            comfort:  { base: 10000, perKm: 2200, freeKm: 0 },
            business: { base: 15000, perKm: 3500, freeKm: 0 },
            delivery: { base: 7000, perKm: 1500, freeKm: 0 }
        },
        waitPerSec: Math.round(1000/60)  // ~17/sec = ~1000/min
    }
};

function getTaximeterRates(tariff) {
    const tv = TAXIMETER_VARIANTS[activeTaximeterVariant];
    return tv.rates[tariff] || tv.rates.start;
}

// Custom A/B Point SVGs
const pickupIconSvg = `
    <svg width="36" height="36" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="rgba(46, 196, 182, 0.25)" />
        <circle cx="50" cy="50" r="22" fill="#2EC4B6" stroke="#FFFFFF" stroke-width="4" />
        <text x="50" y="58" font-family="'Space Grotesk', sans-serif" font-size="24" font-weight="bold" fill="#FFFFFF" text-anchor="middle">A</text>
    </svg>
`;

const dropoffIconSvg = `
    <svg width="36" height="36" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="rgba(255, 74, 90, 0.25)" />
        <circle cx="50" cy="50" r="22" fill="#FF4A5A" stroke="#FFFFFF" stroke-width="4" />
        <text x="50" y="58" font-family="'Space Grotesk', sans-serif" font-size="24" font-weight="bold" fill="#FFFFFF" text-anchor="middle">B</text>
    </svg>
`;

// Burchakni hisoblash (angle between coordinates)
function getAngle(p1, p2) {
    const lat1 = p1[0];
    const lon1 = p1[1];
    const lat2 = p2[0];
    const lon2 = p2[1];
    
    const dLon = (lon2 - lon1);
    const dLat = (lat2 - lat1);
    
    let angle = Math.atan2(dLon, dLat) * 180 / Math.PI;
    return angle;
}

// Eng yaqin landmark kordinatasini topish
function getClosestLocation(latlng) {
    let closest = locations[0];
    let minDist = Infinity;
    locations.forEach(loc => {
        const dist = getDistance([latlng.lat, latlng.lng], loc.coords);
        if (dist < minDist) {
            minDist = dist;
            closest = loc;
        }
    });
    return closest;
}

function setDestinationB(coords, name) {
    passengerDropoff = {
        name: name,
        coords: coords
    };
    
    // Set destination marker
    if (destinationMarker) {
        map.removeLayer(destinationMarker);
    }
    
    const dropoffIcon = L.divIcon({
        html: dropoffIconSvg,
        className: 'custom-passenger-pin',
        iconSize: [36, 36],
        iconAnchor: [18, 18]
    });
    
    destinationMarker = L.marker(coords, { icon: dropoffIcon }).addTo(map).bindPopup(name).openPopup();
    
    // Draw route and calculate fares
    drawRouteAndCalculateFares();
}

function drawRouteAndCalculateFares() {
    if (!passengerPickup || !passengerDropoff) return;
    
    // Calculate fares first
    calculateFares();
    
    // Remove old route lines if any
    if (routeLine) map.removeLayer(routeLine);
    if (routeLineBg) map.removeLayer(routeLineBg);
    
    // Generate route points and draw the polyline
    generateRoutePoints(passengerPickup.coords, passengerDropoff.coords, 30).then(points => {
        // Double check passengerPickup/passengerDropoff are still set and we're not in active order
        if (passengerPickup && passengerDropoff && !activeOrder) {
            routeLineBg = L.polyline(points, { color: 'rgba(255, 193, 7, 0.25)', weight: 12, lineCap: 'round', lineJoin: 'round' }).addTo(map);
            routeLine = L.polyline(points, { color: '#FFC107', weight: 6, lineCap: 'round', lineJoin: 'round' }).addTo(map);
            map.fitBounds(routeLine.getBounds(), { padding: [50, 50] });
        }
    });
}

// ----------------------------------------------------
// 4. Leaflet Map setup
// ----------------------------------------------------
let map;
let routeLine = null;
let routeLineBg = null;
let passengerMarker = null;
let destinationMarker = null;
let userLocationMarker = null;

function initMap() {
    // Center of Kattaqo'rg'on
    map = L.map('map', {
        zoomControl: false
    }).setView([39.8978, 66.2503], 14);

    // Google Maps Roadmap tiles (shows all streets and local landmarks)
    L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        attribution: '&copy; Google Maps'
    }).addTo(map);

    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);

    // Initialize driver markers on the map
    updateDriverMarkers();
    
    // Setup Yandex-style map center pin selector
    setupMapCenterPin();

    // Map size invalidation on resize/reflow to prevent gray/unrendered tiles (critical for responsive designs)
    window.addEventListener('resize', () => {
        setTimeout(() => {
            if (map) map.invalidateSize();
        }, 200);
    });
}

function updateDriverMarkers() {
    drivers.forEach(driver => {
        if (driver.status === 'offline') {
            if (driver.marker) {
                map.removeLayer(driver.marker);
                driver.marker = null;
            }
            return;
        }

        // SVG car marker (Top-down Yandex Go style)
        const carSvg = `
            <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(${driver.angle || 0} 50 50)">
                    <!-- Wheels -->
                    <rect x="18" y="20" width="10" height="18" rx="3" fill="#111" />
                    <rect x="72" y="20" width="10" height="18" rx="3" fill="#111" />
                    <rect x="18" y="62" width="10" height="18" rx="3" fill="#111" />
                    <rect x="72" y="62" width="10" height="18" rx="3" fill="#111" />
                    
                    <!-- Car Body -->
                    <rect x="25" y="15" width="50" height="70" rx="15" fill="${driver.status === 'busy' ? '#FF4A5A' : '#FFD500'}" stroke="#0C0E12" stroke-width="4" />
                    
                    <!-- Windshield -->
                    <path d="M32 35 C32 28, 68 28, 68 35 L64 45 L36 45 Z" fill="#222" />
                    <!-- Rear Window -->
                    <path d="M34 72 C34 76, 66 76, 66 72 L62 65 L38 65 Z" fill="#222" />
                    
                    <!-- Roof -->
                    <rect x="33" y="44" width="34" height="22" rx="4" fill="${driver.status === 'busy' ? '#FF4A5A' : '#FFD500'}" />
                    
                    <!-- Taxi Checker Pattern -->
                    <rect x="42" y="50" width="16" height="8" rx="1" fill="#000" />
                    <rect x="43" y="51" width="4" height="3" fill="#FFF" />
                    <rect x="51" y="51" width="4" height="3" fill="#FFF" />
                    <rect x="47" y="54" width="4" height="3" fill="#FFF" />
                    <rect x="55" y="54" width="4" height="3" fill="#FFF" />
                    
                    <!-- Headlights -->
                    <rect x="32" y="13" width="8" height="4" rx="1" fill="#FFF" opacity="0.9" />
                    <rect x="60" y="13" width="8" height="4" rx="1" fill="#FFF" opacity="0.9" />
                    
                    <!-- Mirrors -->
                    <path d="M25 32 L17 32 C15 32, 15 35, 17 35 L25 35 Z" fill="${driver.status === 'busy' ? '#FF4A5A' : '#FFD500'}" stroke="#000" stroke-width="2" />
                    <path d="M75 32 L83 32 C85 32, 85 35, 83 35 L75 35 Z" fill="${driver.status === 'busy' ? '#FF4A5A' : '#FFD500'}" stroke="#000" stroke-width="2" />
                </g>
            </svg>
        `;

        const customIcon = L.divIcon({
            html: carSvg,
            className: 'custom-driver-icon',
            iconSize: [40, 40],
            iconAnchor: [20, 20]
        });

        if (driver.marker) {
            driver.marker.setLatLng(driver.coords);
            driver.marker.setIcon(customIcon);
        } else {
            driver.marker = L.marker(driver.coords, { icon: customIcon }).addTo(map);
            driver.marker.bindPopup(`<b>${driver.name}</b><br>${driver.carModel} (${driver.carPlate})<br>Holati: ${driver.status === 'busy' ? 'Band' : 'Bo\'sh'}`);
        }
    });
}

function setupMapCenterPin() {
    const pin = document.getElementById('map-center-pin');
    const bubbleText = document.getElementById('pin-bubble-text');

    if (!map || !pin) return;

    // Helper to check if pin should be visible
    function shouldShowPin() {
        const passengerPanel = document.getElementById('panel-passenger');
        const isPassengerActive = passengerPanel && passengerPanel.classList.contains('active');
        return isPassengerActive && !activeOrder && (activeInputFocus === 'from' || activeInputFocus === 'to');
    }

    // Export visibility checker globally
    window.updateCenterPinVisibility = function() {
        if (shouldShowPin()) {
            pin.classList.add('visible');
            // Update bubble with current center
            const center = map.getCenter();
            bubbleText.innerText = currentLang === 'uz' ? "Manzil aniqlanmoqda..." : "Определение адреса...";
            getAddressFromCoords(center.lat, center.lng).then(address => {
                bubbleText.innerText = address;
            });
        } else {
            pin.classList.remove('visible');
        }
    };

    // Listeners for map dragging
    map.on('movestart', () => {
        if (shouldShowPin()) {
            pin.classList.add('dragging');
        }
    });

    map.on('move', () => {
        if (shouldShowPin()) {
            const center = map.getCenter();
            const closest = getClosestLocation(center);
            bubbleText.innerText = closest.name;
        }
    });

    map.on('moveend', () => {
        if (shouldShowPin()) {
            pin.classList.remove('dragging');
            const center = map.getCenter();
            bubbleText.innerText = currentLang === 'uz' ? "Manzil aniqlanmoqda..." : "Определение адреса...";
            
            getAddressFromCoords(center.lat, center.lng).then(address => {
                bubbleText.innerText = address;

                if (activeInputFocus === 'from') {
                    passengerPickup = {
                        name: address,
                        coords: [center.lat, center.lng]
                    };
                    document.getElementById('input-from').value = address;
                } else if (activeInputFocus === 'to') {
                    passengerDropoff = {
                        name: address,
                        coords: [center.lat, center.lng]
                    };
                    document.getElementById('input-to').value = address;
                    
                    if (destinationMarker) {
                        map.removeLayer(destinationMarker);
                    }
                    destinationMarker = L.marker([center.lat, center.lng], { icon: dropoffIcon }).addTo(map)
                        .bindPopup(address);
                }

                // Recalculate fares
                calculateFares();
            });
        }
    });

    // Tap map to pan to that point or set destination B
    map.on('click', (e) => {
        if (shouldShowPin()) {
            map.panTo(e.latlng);
        } else if (activeInputFocus === 'to' && !activeOrder) {
            const coords = [e.latlng.lat, e.latlng.lng];
            const destInput = document.getElementById('input-to');
            destInput.value = currentLang === 'uz' ? "Manzil aniqlanmoqda..." : "Определение адреса...";
            
            getAddressFromCoords(coords[0], coords[1]).then(address => {
                destInput.value = address;
                setDestinationB(coords, address);
            });
        }
    });
    
    // Initial trigger
    window.updateCenterPinVisibility();
}

// ----------------------------------------------------
// 5. Admin Dashboard Chart.js Integration
// ----------------------------------------------------
let revenueChart = null;

function initAdminChart() {
    const ctx = document.getElementById('revenueChart').getContext('2d');
    
    // Mock hourly distributions of order counts
    revenueChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
            datasets: [{
                label: 'Buyurtmalar soni',
                data: [35, 52, 45, 68, 59, 94, 82, 47],
                borderColor: '#FFC107',
                backgroundColor: 'rgba(255, 193, 7, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    grid: { color: '#2D344B' },
                    ticks: { color: '#8E9BAE' }
                },
                y: {
                    grid: { color: '#2D344B' },
                    ticks: { color: '#8E9BAE' }
                }
            }
        }
    });
}
// --- Promo Code Admin Logic ---
window.deletePromoCode = function(code) {
    if (!confirm(currentLang === 'uz' ? "Ushbu promo-kodni o'chirishni xohlaysizmi?" : "Удалить этот промокод?")) return;
    promoCodes = promoCodes.filter(p => p.code !== code);
    savePromosToStorage();
    renderPromoCodes();
};

function renderPromoCodes() {
    const tbody = document.getElementById('admin-promo-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    if (promoCodes.length === 0) {
        tbody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: var(--text-muted);">${currentLang === 'uz' ? "Promo-kodlar mavjud emas" : "Нет промокодов"}</td></tr>`;
        return;
    }
    
    promoCodes.forEach(promo => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong style="color: var(--primary);">${promo.code}</strong></td>
            <td>${promo.discount}%</td>
            <td>
                <button class="btn-danger-light" style="padding: 4px 8px; font-size: 12px;" onclick="deletePromoCode('${promo.code}')">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}
// -----------------------------

function updateAdminStats() {
    const onlineDrivers = drivers.filter(d => d.status !== 'offline').length;
    const totalDrivers = drivers.length;
    document.getElementById('admin-active-drivers-count').innerText = `${onlineDrivers}/${totalDrivers} ta`;

    // Kalkulyatsiya: Umumiy buyurtmalar va jami tushum
    let totalTrips = 0;
    let totalRevenue = 0;
    drivers.forEach(d => {
        totalTrips += (d.completedTrips || 0);
        totalRevenue += (d.todayEarnings || 0);
    });
    
    const totalTripsEl = document.getElementById('admin-total-trips-count');
    const totalRevenueEl = document.getElementById('admin-total-revenue-count');
    if (totalTripsEl) totalTripsEl.innerText = `${totalTrips} ta`;
    if (totalRevenueEl) totalRevenueEl.innerText = `${totalRevenue.toLocaleString('uz-UZ')} UZS`;

    // Fill table
    const tableBody = document.getElementById('admin-drivers-table-body');
    tableBody.innerHTML = '';

    drivers.forEach(driver => {
        let statusBadge = '';
        if (driver.status === 'online') {
            statusBadge = `<span class="status-pill online">Bo'sh</span>`;
        } else if (driver.status === 'busy') {
            statusBadge = `<span class="status-pill busy">Band</span>`;
        } else {
            statusBadge = `<span class="status-pill offline">O'chiq</span>`;
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${driver.name}</strong></td>
            <td>${driver.carModel} (${driver.carPlate})</td>
            <td><code style="background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px; color: #ffeb3b;">${driver.passcode || 'Kodsiz'}</code></td>
            <td style="color: ${(driver.balance || 0) < 0 ? '#FF4A5A' : '#2EC4B6'}; font-weight: bold;">${(driver.balance || 0).toLocaleString('uz-UZ')} UZS</td>
            <td>${statusBadge}</td>
            <td>${driver.completedTrips} ta</td>
            <td><i class="fa-solid fa-star" style="color:#FFC107;"></i> ${driver.rating}</td>
            <td>
                <button class="admin-action-btn btn-admin-topup" data-id="${driver.id}" title="Pul o'tkazish" style="color: #2EC4B6; border-color: rgba(46,196,182,0.3);"><i class="fa-solid fa-wallet"></i> TopUp</button>
                <button class="admin-action-btn btn-admin-track" data-id="${driver.id}" title="Kuzatish"><i class="fa-solid fa-crosshairs"></i> Kuzatish</button>
                <button class="admin-action-btn btn-admin-status" data-id="${driver.id}" title="Status"><i class="fa-solid fa-rotate"></i> Status</button>
                <button class="admin-action-btn btn-admin-delete" data-id="${driver.id}" title="O'chirish"><i class="fa-solid fa-trash"></i> O'chirish</button>
            </td>
        `;
        tableBody.appendChild(tr);
    });

    // Bind Action Button Listeners
    tableBody.querySelectorAll('.btn-admin-track').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            const drv = drivers.find(d => d.id === id);
            if (drv && drv.status !== 'offline' && drv.marker) {
                // Focus on marker and open popup
                map.setView(drv.coords, 16);
                drv.marker.openPopup();
            } else if (drv && drv.status === 'offline') {
                alert(currentLang === 'uz' ? "Haydovchi o'chiq holatda (xaritada ko'rinmaydi)!" : "Водитель не на линии (не отображается на карте)!");
            }
        });
    });

    tableBody.querySelectorAll('.btn-admin-status').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            const drv = drivers.find(d => d.id === id);
            if (drv) {
                if (drv.status === 'online') {
                    drv.status = 'offline';
                } else if (drv.status === 'offline') {
                    drv.status = 'online';
                } else if (drv.status === 'busy') {
                    drv.status = 'online';
                }
                saveDriversToStorage(); // localStorage ga saqlash
                updateDriverMarkers();
                updateAdminStats();
                syncDriverUIPanel();
            }
        });
    });

    tableBody.querySelectorAll('.btn-admin-topup').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            const drv = drivers.find(d => d.id === id);
            if (drv) {
                const amountStr = prompt(`"${drv.name}" hisobiga qancha summa qo'shmoqchisiz?\n(Manfiy son yozsangiz hisobidan yechiladi)`, "5000");
                if (amountStr !== null) {
                    const amount = parseInt(amountStr);
                    if (!isNaN(amount)) {
                        drv.balance = (drv.balance || 0) + amount;
                        saveDriversToStorage();
                        updateAdminStats();
                        syncDriverUIPanel();
                        alert(`Muvaffaqiyatli bajarildi! Yangi balans: ${drv.balance.toLocaleString('uz-UZ')} UZS`);
                    } else {
                        alert("Iltimos, to'g'ri raqam kiriting.");
                    }
                }
            }
        });
    });

    tableBody.querySelectorAll('.btn-admin-delete').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            const drv = drivers.find(d => d.id === id);
            if (drv) {
                if (confirm(currentLang === 'uz' ? `${drv.name}ni tizimdan o'chirishni tasdiqlaysizmi?` : `Подтверждаете удаление ${drv.name}?`)) {
                    if (drv.marker) {
                        map.removeLayer(drv.marker);
                    }
                    drv.marker = null;
                    drivers = drivers.filter(d => d.id !== id);
                    saveDriversToStorage(); // localStorage ga saqlash
                    updateDriverMarkers();
                    updateAdminStats();
                    syncDriverUIPanel();
                }
            }
        });
    });
}

// ----------------------------------------------------
// 6. UI Navigation Actions
// ----------------------------------------------------
function switchRole(role) {
    if (role === 'admin' && !isAdminAuthenticated) {
        // Open passcode modal
        document.getElementById('admin-auth-modal').classList.add('show');
        document.getElementById('input-admin-passcode').value = '';
        document.getElementById('auth-error-msg').style.display = 'none';
        setTimeout(() => document.getElementById('input-admin-passcode').focus(), 100);
        return; // Block role switch
    }

    if (role === 'driver' && !currentLoggedInDriver) {
        // Open driver auth modal
        document.getElementById('driver-auth-modal').classList.add('show');
        document.getElementById('input-driver-passcode').value = '';
        document.getElementById('driver-auth-error-msg').style.display = 'none';
        setTimeout(() => document.getElementById('input-driver-passcode').focus(), 100);
        return; // Block role switch
    }


    // Hide all panels
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));

    // Show selected panel
    if (role === 'passenger') {
        document.getElementById('panel-passenger').classList.add('active');
        document.getElementById('btn-role-passenger').classList.add('active');
        document.body.classList.remove('hide-map');
    } else if (role === 'driver') {
        document.getElementById('panel-driver').classList.add('active');
        document.getElementById('btn-role-driver').classList.add('active');
        document.body.classList.add('hide-map');
        syncDriverUIPanel();
    } else if (role === 'admin') {
        document.getElementById('panel-admin').classList.add('active');
        document.getElementById('btn-role-admin').classList.add('active');
        document.body.classList.add('hide-map');
        updateAdminStats();
        renderPromoCodes();
    }

    // Toggle Center Pin visibility based on active role
    if (window.updateCenterPinVisibility) {
        window.updateCenterPinVisibility();
    }
}

// ----------------------------------------------------
// 7. Route and Price Calculations
// ----------------------------------------------------
function getDistance(coords1, coords2) {
    const lat1 = coords1[0];
    const lon1 = coords1[1];
    const lat2 = coords2[0];
    const lon2 = coords2[1];
    
    // Simple Euclidean distance approximation scaled to kilometers in Tashkent
    const dLat = (lat2 - lat1) * 111.32;
    const dLon = (lon2 - lon1) * 85.0;
    return Math.sqrt(dLat * dLat + dLon * dLon);
}

function getFarePrice(tariff, distance) {
    // Use active taximeter variant rates
    const pricing = getTaximeterRates(tariff);
    
    let price;
    const freeKm = pricing.freeKm || 0;
    if (distance <= freeKm) {
        price = pricing.base;
    } else {
        price = pricing.base + ((distance - freeKm) * pricing.perKm);
    }
    
    // Round to nearest 500 UZS
    price = Math.round(price / 500) * 500;
    if (price < pricing.base) price = pricing.base;
    
    return price;
}

function calculateFares() {
    if (!passengerPickup || !passengerDropoff) return;

    const distance = getDistance(passengerPickup.coords, passengerDropoff.coords);

    const tariffs = ['start', 'comfort', 'business', 'delivery'];
    tariffs.forEach(tariff => {
        let price = getFarePrice(tariff, distance);
        
        if (activePromoDiscount > 0) {
            price = Math.round(price * (1 - (activePromoDiscount / 100)));
        }
        
        const priceId = `price-${tariff}`;
        const priceElem = document.getElementById(priceId);
        if (priceElem) {
            priceElem.innerText = price.toLocaleString('uz-UZ') + " UZS";
        }
    });
}

// ----------------------------------------------------
// 8. Simulation Mechanics (Routing, Movements)
// ----------------------------------------------------

// Calculate total route distance along the polyline path
function getRouteDistance(pathPoints) {
    let dist = 0;
    for (let i = 1; i < pathPoints.length; i++) {
        dist += getDistance(pathPoints[i - 1], pathPoints[i]);
    }
    return dist;
}

// Linearly samples coordinate points along a polyline to ensure uniform speed step sizes
function interpolatePath(points, stepsCount) {
    if (points.length === 0) return [];
    if (points.length === 1) {
        const p = points[0];
        return Array(stepsCount + 1).fill(p);
    }

    const cumulDist = [0];
    for (let i = 1; i < points.length; i++) {
        const d = getDistance(points[i - 1], points[i]);
        cumulDist.push(cumulDist[i - 1] + d);
    }

    const totalDist = cumulDist[cumulDist.length - 1];
    if (totalDist === 0) {
        const p = points[0];
        return Array(stepsCount + 1).fill(p);
    }

    const interpolated = [];
    for (let i = 0; i <= stepsCount; i++) {
        const targetDist = (i / stepsCount) * totalDist;
        
        let idx = 0;
        while (idx < cumulDist.length - 1 && cumulDist[idx + 1] < targetDist) {
            idx++;
        }
        
        const d0 = cumulDist[idx];
        const d1 = cumulDist[idx + 1];
        const p0 = points[idx];
        const p1 = points[idx + 1];
        
        let t = 0;
        if (d1 > d0) {
            t = (targetDist - d0) / (d1 - d0);
        }
        
        const lat = p0[0] + (p1[0] - p0[0]) * t;
        const lon = p0[1] + (p1[1] - p0[1]) * t;
        interpolated.push([lat, lon]);
    }
    
    return interpolated;
}

// Interpolates points dynamically between A and B, using OSRM for actual streets
async function generateRoutePoints(coordsA, coordsB, stepsCount = 60) {
    const latA = coordsA[0];
    const lonA = coordsA[1];
    const latB = coordsB[0];
    const lonB = coordsB[1];

    // OSRM expects coordinates in [longitude, latitude] format
    const url = `https://router.project-osrm.org/route/v1/driving/${lonA},${latA};${lonB},${latB}?overview=full&geometries=geojson`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            if (data.code === 'Ok' && data.routes && data.routes.length > 0) {
                const routeCoords = data.routes[0].geometry.coordinates;
                if (routeCoords && routeCoords.length > 0) {
                    const path = routeCoords.map(coord => [coord[1], coord[0]]);
                    return interpolatePath(path, stepsCount);
                }
            }
        }
    } catch (e) {
        console.warn("OSRM routing API error, falling back to simulated straight line:", e);
    }

    // Fallback: wavy line simulation
    const points = [];
    const waveFreq = 2 + Math.random() * 2;
    const waveAmp = 0.001; // coordinate variance

    for (let i = 0; i <= stepsCount; i++) {
        const t = i / stepsCount;
        const lat = latA + (latB - latA) * t;
        const lon = lonA + (lonB - lonA) * t;

        // Apply a small sine curve distortion based on travel percentage
        const displacement = Math.sin(t * Math.PI * waveFreq) * waveAmp;
        
        // Add coordinates
        points.push([
            lat + (i === 0 || i === stepsCount ? 0 : displacement), 
            lon + (i === 0 || i === stepsCount ? 0 : displacement * 0.5)
        ]);
    }
    return points;
}

// Global animated move loop for any marker
function animateMarker(driver, routePoints, onStep, onComplete) {
    let currentStep = 0;
    
    function moveStep() {
        if (activeOrder && activeOrder.isCancelled) {
            // Cancel animation if order gets cancelled
            return;
        }

        if (currentStep < routePoints.length) {
            if (isWaitingMode) {
                // Pause animation and loop again in 500ms without incrementing step
                setTimeout(moveStep, 500);
                return;
            }
            
            // Calculate angle if there's a next point to orient the top-down car icon
            if (currentStep < routePoints.length - 1) {
                const p1 = routePoints[currentStep];
                const p2 = routePoints[currentStep + 1];
                driver.angle = getAngle(p1, p2);
            }
            
            driver.coords = routePoints[currentStep];
            updateDriverMarkers();
            
            if (onStep) {
                onStep(currentStep, routePoints.length);
            }
            
            currentStep++;
            // Delay depends on simulation controls and speed
            const timeoutVal = (simTrafficDelay / simSpeedModifier);
            setTimeout(moveStep, timeoutVal);
        } else {
            if (onComplete) {
                onComplete();
            }
        }
    }
    
    moveStep();
}

// Automated Order Generator for Simulating Incoming Orders
function startAutomatedOrderGenerator() {
    if (simulatedOrderInterval) clearInterval(simulatedOrderInterval);
    
    simulatedOrderInterval = setInterval(() => {
        // Tizimga kirgan haydovchi (yoki 1-chi haydovchi)
        const rustam = currentLoggedInDriver || drivers[0]; 
        
        // Agar haydovchi onlayn bo'lsa, band bo'lmasa, balansi > 0 bo'lsa va faol buyurtma bo'lmasa
        if (rustam && rustam.status === 'online' && (rustam.balance || 0) > 0 && !activeOrder) {
            triggerSimulatedOrder();
        }
    }, 15000); // Trigger request every 15 seconds
}

function triggerSimulatedOrder() {
    if (drivers.length === 0) return;
    
    // Select two random landmarks
    const pickupIdx = Math.floor(Math.random() * locations.length);
    let dropoffIdx = Math.floor(Math.random() * locations.length);
    while (dropoffIdx === pickupIdx) {
        dropoffIdx = Math.floor(Math.random() * locations.length);
    }

    const pickup = locations[pickupIdx];
    const dropoff = locations[dropoffIdx];
    
    const tariffs = ['start', 'comfort', 'business', 'delivery'];
    const tariff = tariffs[Math.floor(Math.random() * tariffs.length)];
    
    // Calculate fare
    const distance = getDistance(pickup.coords, dropoff.coords);
    const price = getFarePrice(tariff, distance);
    const priceText = price.toLocaleString('uz-UZ') + " UZS";

    const payments = ['cash', 'payme', 'click', 'card'];
    const payment = payments[Math.floor(Math.random() * payments.length)];

    activeOrder = {
        pickup: pickup,
        dropoff: dropoff,
        tariff: tariff,
        price: priceText,
        distancePrice: price,
        payment: payment,
        status: 'assigned',
        driver: drivers[0], // Rustam or first driver
        isCancelled: false
    };

    // If passenger view is open, update map lines
    if (document.getElementById('panel-passenger').classList.contains('active')) {
        // Redraw route on map for visual integration
        if (passengerMarker) map.removeLayer(passengerMarker);
        if (destinationMarker) map.removeLayer(destinationMarker);
        if (routeLine) map.removeLayer(routeLine);
        if (routeLineBg) map.removeLayer(routeLineBg);

        const pickupIcon = L.divIcon({
            html: pickupIconSvg,
            className: 'custom-passenger-pin',
            iconSize: [36, 36],
            iconAnchor: [18, 18]
        });

        const dropoffIcon = L.divIcon({
            html: dropoffIconSvg,
            className: 'custom-passenger-pin',
            iconSize: [36, 36],
            iconAnchor: [18, 18]
        });

        passengerMarker = L.marker(pickup.coords, { icon: pickupIcon }).addTo(map).bindPopup(pickup.name);
        destinationMarker = L.marker(dropoff.coords, { icon: dropoffIcon }).addTo(map).bindPopup(dropoff.name);

        generateRoutePoints(pickup.coords, dropoff.coords, 30).then(points => {
            if (activeOrder && activeOrder.pickup === pickup && activeOrder.dropoff === dropoff) {
                routeLineBg = L.polyline(points, { color: 'rgba(255, 193, 7, 0.25)', weight: 12, lineCap: 'round', lineJoin: 'round' }).addTo(map);
                routeLine = L.polyline(points, { color: '#FFC107', weight: 6, lineCap: 'round', lineJoin: 'round' }).addTo(map);
            }
        });
    }

    // Trigger incoming ride request popup overlay
    showDriverIncomingOrder(drivers[0]);
}

// ----------------------------------------------------
// 9. Order Management Workflow
// ----------------------------------------------------
function startSearchingDriver() {
    if (!passengerPickup || !passengerDropoff) {
        alert(currentLang === 'uz' ? "Iltimos, manzilni tanlang!" : "Пожалуйста, выберите адрес!");
        return;
    }

    // Hide Map Center Pin
    if (window.updateCenterPinVisibility) {
        window.updateCenterPinVisibility();
    }

    // Set order object
    const distance = getDistance(passengerPickup.coords, passengerDropoff.coords);
    const rates = { start: 9000, comfort: 12000, business: 20000, delivery: 7000 };
    // Get actual text price
    const priceText = document.getElementById(`price-${selectedTariff}`).innerText;

    const phoneInput = document.getElementById('input-passenger-phone');
    const passengerPhone = phoneInput ? phoneInput.value.trim() : "";

    activeOrder = {
        pickup: passengerPickup,
        dropoff: passengerDropoff,
        tariff: selectedTariff,
        price: priceText,
        distancePrice: parseInt(priceText.replace(/[^0-9]/g, '')),
        payment: selectedPayment,
        passengerPhone: passengerPhone || "+998 -- --- -- --",
        status: 'searching', // searching, assigned, pickup_arrived, active, finished, cancelled
        driver: null,
        isCancelled: false
    };

    // UI Updates
    document.getElementById('passenger-ride-status').style.display = 'flex';
    document.getElementById('passenger-driver-info').style.display = 'none';
    document.getElementById('passenger-status-title').innerText = i18n[currentLang].searching_driver;
    document.getElementById('ride-eta-display').innerText = i18n[currentLang].searching_driver_desc;
    document.getElementById('ride-progress-bar').style.width = '0%';
    document.getElementById('btn-order-taxi').style.display = 'none';

    // Map: Add markers and route polyline
    if (passengerMarker) map.removeLayer(passengerMarker);
    if (destinationMarker) map.removeLayer(destinationMarker);
    if (routeLine) map.removeLayer(routeLine);
    if (routeLineBg) map.removeLayer(routeLineBg);

    const pickupIcon = L.divIcon({
        html: pickupIconSvg,
        className: 'custom-passenger-pin',
        iconSize: [36, 36],
        iconAnchor: [18, 18]
    });

    const dropoffIcon = L.divIcon({
        html: dropoffIconSvg,
        className: 'custom-passenger-pin',
        iconSize: [36, 36],
        iconAnchor: [18, 18]
    });

    passengerMarker = L.marker(passengerPickup.coords, { icon: pickupIcon }).addTo(map)
        .bindPopup(passengerPickup.name).openPopup();
    
    destinationMarker = L.marker(passengerDropoff.coords, { icon: dropoffIcon }).addTo(map)
        .bindPopup(passengerDropoff.name);

    // Generate route visualization points
    generateRoutePoints(passengerPickup.coords, passengerDropoff.coords, 30).then(points => {
        if (activeOrder && activeOrder.status === 'searching') {
            routeLineBg = L.polyline(points, { color: 'rgba(255, 193, 7, 0.25)', weight: 12, lineCap: 'round', lineJoin: 'round' }).addTo(map);
            routeLine = L.polyline(points, { color: '#FFC107', weight: 6, lineCap: 'round', lineJoin: 'round' }).addTo(map);
            map.fitBounds(routeLine.getBounds(), { padding: [50, 50] });
        }
    });

    // Simulation: Wait 3 seconds, then trigger driver alert
    setTimeout(() => {
        if (activeOrder && activeOrder.status === 'searching') {
            findNearestDriver();
        }
    }, 3000);
}

function findNearestDriver() {
    if (drivers.length === 0) {
        cancelActiveRide();
        alert(currentLang === 'uz' ? "Kechirasiz, tizimda birorta ham faol haydovchi yo'q!" : "Извините, в системе нет ни одного активного водителя!");
        return;
    }

    // BROADCAST ORDER: Yo'lovchi buyurtma berganda u endi ma'lum bir haydovchiga bormaydi, 
    // balki umumiy barcha haydovchilar panelida (bizning holatda Driver Panelda) e'lon qilinadi.
    activeOrder.status = 'searching';
    activeOrder.driver = null; // Hali hech kim qabul qilmadi

    // Panelga yuborish (Kim kirgan bo'lsa o'sha ko'radi)
    showDriverIncomingOrder();
}

// ----------------------------------------------------
// 10. Driver Panel State Changes
// ----------------------------------------------------
let requestTimerInterval = null;

function showDriverIncomingOrder(driver) {
    const card = document.getElementById('driver-request-card');
    const waiting = document.getElementById('driver-waiting-message');
    const offline = document.getElementById('driver-offline-message');

    // Make sure driver panel is ready to show it
    waiting.style.display = 'none';
    offline.style.display = 'none';
    card.style.display = 'flex';

    // Populate data
    document.getElementById('request-tariff-name').innerText = activeOrder.tariff.toUpperCase();
    document.getElementById('request-pickup-addr').innerText = activeOrder.pickup.name;
    document.getElementById('request-dropoff-addr').innerText = activeOrder.dropoff.name;
    
    const reqPhoneEl = document.getElementById('request-passenger-phone');
    if (reqPhoneEl) reqPhoneEl.innerText = activeOrder.passengerPhone || "+998 -- --- -- --";
    document.getElementById('request-price-display').innerText = activeOrder.price;
    document.getElementById('request-payment-method').innerHTML = `<i class="fa-solid fa-wallet"></i> ${activeOrder.payment === 'cash' ? i18n[currentLang].pay_cash : activeOrder.payment.toUpperCase()}`;

    // Circular Countdown (15 seconds)
    let countdown = 15;
    const progressCircle = document.getElementById('timer-progress');
    const countdownText = document.getElementById('request-countdown');
    
    countdownText.innerText = countdown;

    if (requestTimerInterval) clearInterval(requestTimerInterval);

    requestTimerInterval = setInterval(() => {
        countdown--;
        countdownText.innerText = countdown;
        
        // Progress circle dash array (100 is full, 0 is empty)
        const pct = (countdown / 15) * 100;
        progressCircle.setAttribute('stroke-dasharray', `${pct}, 100`);

        if (countdown <= 0) {
            clearInterval(requestTimerInterval);
            // Auto accept if user is just watching or simulate action
            driverAcceptsOrder();
        }
    }, 1000);
}

function driverAcceptsOrder() {
    if (requestTimerInterval) clearInterval(requestTimerInterval);
    document.getElementById('driver-request-card').style.display = 'none';
    document.getElementById('driver-active-ride-board').style.display = 'flex';

    // Kim qabul qilishini aniqlaymiz
    if (!activeOrder.driver) {
        if (currentLoggedInDriver) {
            activeOrder.driver = currentLoggedInDriver;
        } else {
            // Agar hech kim kirmagan bo'lsa, demo uchun birinchi haydovchiga beramiz
            activeOrder.driver = drivers[0];
        }
    }
    
    const driver = activeOrder.driver;
    driver.status = 'busy';
    activeOrder.status = 'assigned';
    updateDriverMarkers();
    updateAdminStats();

    // Populate driver active ride details
    document.getElementById('driver-ride-status-badge').innerText = i18n[currentLang].going_to_pickup;
    document.getElementById('driver-passenger-name').innerText = "Dilshodbek";
    document.getElementById('driver-pickup-display').innerText = activeOrder.pickup.name;
    document.getElementById('driver-dropoff-display').innerText = activeOrder.dropoff.name;
    
    const phoneLink = document.getElementById('driver-passenger-phone-link');
    const phoneDisplay = document.getElementById('driver-passenger-phone');
    if (phoneLink && phoneDisplay) {
        const phone = activeOrder.passengerPhone || "+998 -- --- -- --";
        phoneDisplay.innerText = phone;
        phoneLink.href = `tel:${phone.replace(/\s+/g, '')}`;
    }
    document.getElementById('driver-price-display').innerText = activeOrder.price;
    document.getElementById('driver-payment-display').innerText = activeOrder.payment === 'cash' ? i18n[currentLang].pay_cash : activeOrder.payment.toUpperCase();
    document.getElementById('driver-action-btn-text').innerText = currentLang === 'uz' ? "YO'LOVCHI KELDI / BOSHLASH" : "ПАССАЖИР НА МЕСТЕ / СТАРТ";
    
    // Navigation instruction
    document.getElementById('driver-nav-instruction').innerText = i18n[currentLang].nav_turn_right;
    document.getElementById('driver-nav-distance').innerText = "Qolgan masofa: 600m • 2 min";

    // Passenger updates
    document.getElementById('passenger-driver-info').style.display = 'flex';
    document.getElementById('passenger-status-title').innerText = currentLang === 'uz' ? "Haydovchi yo'lda..." : "Водитель в пути...";
    document.getElementById('driver-name-display').innerText = driver.name;
    document.getElementById('driver-rating-display').innerText = driver.rating;
    document.getElementById('car-plate-display').innerText = driver.carPlate;
    document.getElementById('car-name-display').innerText = `${driver.carColor} ${driver.carModel}`;
    
    // Simulate navigation route from driver location to passenger pickup
    generateRoutePoints(driver.coords, activeOrder.pickup.coords, 40).then(pickupRoutePoints => {
        if (!activeOrder || activeOrder.isCancelled) return;

        // Draw driver path line
        const driverPath = L.polyline(pickupRoutePoints, { color: '#2EC4B6', weight: 4, opacity: 0.7 }).addTo(map);

        animateMarker(
            driver, 
            pickupRoutePoints, 
            (step, total) => {
                // Step callback
                const percent = (step / total) * 100;
                document.getElementById('ride-progress-bar').style.width = `${percent}%`;
                
                const remainingMeters = Math.round((total - step) * 20);
                document.getElementById('ride-eta-display').innerText = `${i18n[currentLang].driver_eta_prefix} ${remainingMeters} m`;
                document.getElementById('driver-nav-distance').innerText = `Qolgan masofa: ${remainingMeters}m • 1 min`;
            },
            () => {
                // Complete callback: driver arrived at pickup
                map.removeLayer(driverPath);
                activeOrder.status = 'pickup_arrived';
                
                document.getElementById('passenger-status-title').innerText = i18n[currentLang].driver_arrived;
                document.getElementById('passenger-status-title').style.color = '#2EC4B6';
                document.getElementById('ride-eta-display').innerText = i18n[currentLang].arrived_desc;
                
                document.getElementById('driver-ride-status-badge').innerText = currentLang === 'uz' ? "KUTISH REJIMIDA" : "В ОЖИДАНИИ";
                document.getElementById('driver-ride-status-badge').style.backgroundColor = 'rgba(255, 193, 7, 0.15)';
                document.getElementById('driver-ride-status-badge').style.color = '#FFC107';
                document.getElementById('driver-action-btn-text').innerText = currentLang === 'uz' ? "SAYOHATNI BOSHLASH" : "НАЧАТЬ ПОЕЗДКУ";
            }
        );
    });
}

function driverStartsTrip() {
    activeOrder.status = 'active';
    
    // Show wait button
    const waitBtn = document.getElementById('btn-driver-wait');
    if (waitBtn) {
        waitBtn.style.display = 'inline-flex';
        waitBtn.style.backgroundColor = 'var(--primary-light)';
        waitBtn.style.color = 'var(--primary)';
        waitBtn.style.borderColor = 'rgba(255, 193, 7, 0.3)';
        document.getElementById('btn-driver-wait-text').innerText = currentLang === 'uz' ? "Kutishni boshlash" : "Начать ожидание";
    }
    
    document.getElementById('driver-ride-status-badge').innerText = i18n[currentLang].trip_in_progress;
    document.getElementById('driver-ride-status-badge').style.backgroundColor = 'rgba(46, 196, 182, 0.15)';
    document.getElementById('driver-ride-status-badge').style.color = '#2EC4B6';
    document.getElementById('driver-action-btn-text').innerText = currentLang === 'uz' ? "SAYOHATNI YAKUNLASH" : "ЗАВЕРШИТЬ ПОЕЗДКУ";
    document.getElementById('driver-nav-instruction').innerText = i18n[currentLang].nav_straight;

    document.getElementById('passenger-status-title').innerText = i18n[currentLang].trip_in_progress;
    document.getElementById('passenger-status-title').style.color = '#FFC107';
    document.getElementById('ride-progress-bar').style.width = '0%';

    const driver = activeOrder.driver;
    const pricing = getTaximeterRates(activeOrder.tariff);
    const tv = TAXIMETER_VARIANTS[activeTaximeterVariant];
    const freeKm = pricing.freeKm || 0;
    
    // Show taximeter panel in driver board
    const taximeterPanel = document.getElementById('driver-taximeter-panel');
    const taximeterVariantLabel = document.getElementById('driver-taximeter-variant-label');
    const taximeterValue = document.getElementById('driver-taximeter-value');
    const taximeterKmCost = document.getElementById('taximeter-km-cost');
    const taximeterWaitCost = document.getElementById('taximeter-wait-cost');
    const taximeterRateRow = document.getElementById('taximeter-rate-row');
    
    if (taximeterPanel) {
        taximeterPanel.style.display = 'block';
        taximeterVariantLabel.innerText = tv.label;
        taximeterRateRow.innerHTML = `<span>Mujoz olish: <strong>${pricing.base.toLocaleString('uz-UZ')} so'm</strong></span><span>Har 1 km: <strong>${pricing.perKm.toLocaleString('uz-UZ')} so'm/km</strong></span><span>Kutish: <strong>${(tv.waitPerSec * 60).toLocaleString('uz-UZ')} so'm/min</strong></span>`;
    }
    
    // Store base price set at start
    activeOrder.distancePrice = pricing.base;
    
    // Route from pickup to dropoff
    generateRoutePoints(activeOrder.pickup.coords, activeOrder.dropoff.coords, 60).then(tripRoutePoints => {
        if (!activeOrder || activeOrder.isCancelled) return;

        animateMarker(
            driver,
            tripRoutePoints,
            (step, total) => {
                const percent = (step / total) * 100;
                document.getElementById('ride-progress-bar').style.width = `${percent}%`;
                
                // Calculate distance so far based on OSRM driving distance
                const totalDistance = getRouteDistance(tripRoutePoints);
                const distanceSoFar = (step / total) * totalDistance;
                
                // Taximeter calculation using active variant
                const waitCost = waitSeconds * tv.waitPerSec;
                let kmCost = 0;
                if (distanceSoFar > freeKm) {
                    kmCost = (distanceSoFar - freeKm) * pricing.perKm;
                }
                let currentPrice = pricing.base + kmCost + waitCost;
                currentPrice = Math.round(currentPrice / 100) * 100; // Round to nearest 100
                if (currentPrice < pricing.base) currentPrice = pricing.base;
                
                activeOrder.price = currentPrice.toLocaleString('uz-UZ') + " UZS";
                activeOrder.distancePrice = currentPrice;
                
                // Update main price display
                document.getElementById('driver-price-display').innerText = activeOrder.price;
                
                // Update taximeter live display
                if (taximeterValue) {
                    taximeterValue.innerText = activeOrder.price;
                }
                if (taximeterKmCost) {
                    taximeterKmCost.innerText = `${distanceSoFar.toFixed(2)} km • ${(pricing.base + kmCost).toLocaleString('uz-UZ')} so'm`;
                }
                if (taximeterWaitCost && waitCost > 0) {
                    taximeterWaitCost.style.display = 'flex';
                    taximeterWaitCost.innerHTML = `<i class="fa-solid fa-clock"></i> Kutish: ${waitCost.toLocaleString('uz-UZ')} so'm`;
                }
                
                const remainingMeters = Math.round((total - step) * 40);
                document.getElementById('ride-eta-display').innerText = `Yo'l haqi: ${activeOrder.price} • ${remainingMeters} m`;
                document.getElementById('driver-nav-distance').innerText = `Qolgan masofa: ${remainingMeters}m • 2 min`;
                
                if (step === Math.round(total / 2)) {
                    document.getElementById('driver-nav-instruction').innerText = i18n[currentLang].nav_turn_left;
                }
            },
            () => {
                // Trip finished
                activeOrder.status = 'finished';
                
                document.getElementById('driver-ride-status-badge').innerText = currentLang === 'uz' ? "YETIB KELDI" : "ПРИБЫЛ";
                document.getElementById('driver-nav-instruction').innerText = i18n[currentLang].nav_arrived;
                document.getElementById('driver-action-btn-text').innerText = currentLang === 'uz' ? "BALANSDAN YECHISH" : "ПОДТВЕРДИТЬ ОПЛАТУ";
            }
        );
    });
}

function driverFinishesPayment() {
    const driver = activeOrder.driver;
    
    // Add earnings & trips count
    let baseFare = parseInt(activeOrder.price.replace(/[^0-9]/g, ''));
    if (isNaN(baseFare)) baseFare = 5000;
    
    driver.completedTrips += 1;
    driver.todayEarnings += baseFare;
    
    // Tizim komissiyasi (5%)
    const commission = Math.round(baseFare * 0.05);
    driver.balance = (driver.balance || 0) - commission;
    
    driver.status = 'online'; // back to online/available
    
    saveDriversToStorage(); // Yangilangan ma'lumotlarni saqlash (daromad, buyurtmalar soni)
    updateDriverMarkers();
    syncDriverUIPanel();
    updateAdminStats();

    // Reset Driver Screen View
    document.getElementById('driver-active-ride-board').style.display = 'none';
    document.getElementById('driver-waiting-message').style.display = 'flex';

    // Show rating modal on Passenger screen
    document.getElementById('passenger-ride-status').style.display = 'none';
    document.getElementById('passenger-feedback-panel').style.display = 'flex';

    // Clear route layers
    if (routeLine) map.removeLayer(routeLine);
    if (routeLineBg) map.removeLayer(routeLineBg);
    if (passengerMarker) map.removeLayer(passengerMarker);
    if (destinationMarker) map.removeLayer(destinationMarker);

    // Clean up wait states
    isWaitingMode = false;
    if (waitInterval) {
        clearInterval(waitInterval);
        waitInterval = null;
    }
    waitSeconds = 0;
    const waitBtn = document.getElementById('btn-driver-wait');
    if (waitBtn) waitBtn.style.display = 'none';
    const passengerWaitDisplay = document.getElementById('passenger-wait-display');
    if (passengerWaitDisplay) passengerWaitDisplay.style.display = 'none';
    
    // Hide taximeter
    const taximeterPanel = document.getElementById('driver-taximeter-panel');
    if (taximeterPanel) taximeterPanel.style.display = 'none';
}

function backgroundDriverAcceptsOrder(driver) {
    driver.status = 'busy';
    updateDriverMarkers();
    updateAdminStats();

    // Passenger UI updates
    if (activeOrder) {
        activeOrder.status = 'assigned';
        document.getElementById('passenger-driver-info').style.display = 'flex';
        document.getElementById('passenger-status-title').innerText = currentLang === 'uz' ? "Haydovchi yo'lda..." : "Водитель в пути...";
        document.getElementById('driver-name-display').innerText = driver.name;
        document.getElementById('driver-rating-display').innerText = driver.rating;
        document.getElementById('car-plate-display').innerText = driver.carPlate;
        document.getElementById('car-name-display').innerText = `${driver.carColor} ${driver.carModel}`;
    }

    generateRoutePoints(driver.coords, activeOrder.pickup.coords, 40).then(pickupRoutePoints => {
        if (!activeOrder || activeOrder.isCancelled) return;
        const driverPath = L.polyline(pickupRoutePoints, { color: '#2EC4B6', weight: 4, opacity: 0.7 }).addTo(map);

        animateMarker(
            driver, 
            pickupRoutePoints, 
            (step, total) => {
                if (activeOrder && activeOrder.driver === driver && !activeOrder.isCancelled) {
                    const percent = (step / total) * 100;
                    document.getElementById('ride-progress-bar').style.width = `${percent}%`;
                    const remainingMeters = Math.round((total - step) * 20);
                    document.getElementById('ride-eta-display').innerText = `${i18n[currentLang].driver_eta_prefix} ${remainingMeters} m`;
                }
            },
            () => {
                if (driverPath) map.removeLayer(driverPath);
                if (!activeOrder || activeOrder.isCancelled) return;

                activeOrder.status = 'pickup_arrived';
                document.getElementById('passenger-status-title').innerText = i18n[currentLang].driver_arrived;
                document.getElementById('passenger-status-title').style.color = '#2EC4B6';
                document.getElementById('ride-eta-display').innerText = currentLang === 'uz' 
                    ? `Haydovchi yetib keldi. (${driver.carPlate})` 
                    : `Водитель прибыл. (${driver.carPlate})`;

                // Simulate passenger boarding and automatically start the trip
                setTimeout(() => {
                    if (!activeOrder || activeOrder.isCancelled) return;
                    backgroundDriverStartsTrip(driver);
                }, 2500);
            }
        );
    });
}

function backgroundDriverStartsTrip(driver) {
    if (!activeOrder) return;
    activeOrder.status = 'active';

    document.getElementById('passenger-status-title').innerText = i18n[currentLang].trip_in_progress;
    document.getElementById('passenger-status-title').style.color = '#FFC107';
    document.getElementById('ride-progress-bar').style.width = '0%';

    generateRoutePoints(activeOrder.pickup.coords, activeOrder.dropoff.coords, 60).then(tripRoutePoints => {
        if (!activeOrder || activeOrder.isCancelled) return;

        animateMarker(
            driver,
            tripRoutePoints,
            (step, total) => {
                if (activeOrder && activeOrder.driver === driver && !activeOrder.isCancelled) {
                    const percent = (step / total) * 100;
                    document.getElementById('ride-progress-bar').style.width = `${percent}%`;
                    
                    // Calculate distance so far based on OSRM driving distance
                    const totalDistance = getRouteDistance(tripRoutePoints);
                    const distanceSoFar = (step / total) * totalDistance;
                    
                    const rates = {
                        start: { base: 5000, perKm: 2000 },
                        comfort: { base: 8000, perKm: 1800 },
                        business: { base: 12000, perKm: 3000 },
                        delivery: { base: 5000, perKm: 1000 }
                    };
                    const pricing = rates[activeOrder.tariff] || rates.start;
                    const waitCost = waitSeconds * 10;
                    
                    let currentPrice = pricing.base + (distanceSoFar * pricing.perKm) + waitCost;
                    currentPrice = Math.round(currentPrice / 500) * 500;
                    if (currentPrice < pricing.base) currentPrice = pricing.base;
                    
                    activeOrder.price = currentPrice.toLocaleString('uz-UZ') + " UZS";
                    
                    const remainingMeters = Math.round((total - step) * 40);
                    document.getElementById('ride-eta-display').innerText = `Yo'l haqi: ${activeOrder.price} • ${remainingMeters} m`;
                }
            },
            () => {
                if (!activeOrder || activeOrder.isCancelled) return;
                activeOrder.status = 'finished';

                // Complete trip automatically
                setTimeout(() => {
                    if (!activeOrder || activeOrder.isCancelled) return;
                    
                    // Add earnings
                    let baseFare = parseInt(activeOrder.price.replace(/[^0-9]/g, ''));
                    if (isNaN(baseFare)) baseFare = 5000;

                    driver.completedTrips += 1;
                    driver.todayEarnings += baseFare;
                    
                    // Tizim komissiyasi (5%)
                    const commission = Math.round(baseFare * 0.05);
                    driver.balance = (driver.balance || 0) - commission;
                    
                    driver.status = 'online';

                    saveDriversToStorage(); // Yangilangan ma'lumotlarni saqlash
                    updateDriverMarkers();
                    updateAdminStats();

                    // Show rating modal on Passenger screen
                    document.getElementById('passenger-ride-status').style.display = 'none';
                    document.getElementById('passenger-feedback-panel').style.display = 'flex';

                    // Clear route layers
                    if (routeLine) map.removeLayer(routeLine);
                    if (passengerMarker) map.removeLayer(passengerMarker);
                    if (destinationMarker) map.removeLayer(destinationMarker);
                }, 1500);
            }
        );
    });
}

function cancelActiveRide() {
    if (!activeOrder) return;
    
    activeOrder.isCancelled = true;
    const driver = activeOrder.driver;
    
    if (driver) {
        driver.status = 'online';
    }
    
    // Clear elements
    if (routeLine) map.removeLayer(routeLine);
    if (routeLineBg) map.removeLayer(routeLineBg);
    if (passengerMarker) map.removeLayer(passengerMarker);
    if (destinationMarker) map.removeLayer(destinationMarker);

    // Hide overlays
    document.getElementById('passenger-ride-status').style.display = 'none';
    document.getElementById('driver-request-card').style.display = 'none';
    document.getElementById('driver-active-ride-board').style.display = 'none';
    
    // Reset driver panels view
    if (driver && driver.status === 'online') {
        document.getElementById('driver-waiting-message').style.display = 'flex';
    }

    document.getElementById('btn-order-taxi').style.display = 'flex';

    updateDriverMarkers();
    updateAdminStats();
    
    activeOrder = null;

    // Toggle Center Pin visibility
    if (window.updateCenterPinVisibility) {
        window.updateCenterPinVisibility();
    }

    // Clean up wait states
    isWaitingMode = false;
    if (waitInterval) {
        clearInterval(waitInterval);
        waitInterval = null;
    }
    waitSeconds = 0;
    const waitBtn = document.getElementById('btn-driver-wait');
    if (waitBtn) waitBtn.style.display = 'none';
    const passengerWaitDisplay = document.getElementById('passenger-wait-display');
    if (passengerWaitDisplay) passengerWaitDisplay.style.display = 'none';
}

function syncDriverUIPanel() {
    const emptyPlaceholder = document.getElementById('driver-empty-placeholder');
    const panelContent = document.getElementById('driver-panel-content');
    
    if (drivers.length === 0) {
        if (emptyPlaceholder) emptyPlaceholder.style.display = 'flex';
        if (panelContent) panelContent.style.display = 'none';
        return;
    }
    
    if (emptyPlaceholder) emptyPlaceholder.style.display = 'none';
    if (panelContent) panelContent.style.display = 'flex';

    const driver = drivers[0]; // Active driver is drivers[0]
    
    // Update panel name and metadata dynamically
    const panelName = document.getElementById('panel-driver-name');
    const panelMeta = document.getElementById('panel-driver-meta');
    if (panelName) panelName.innerText = driver.name;
    if (panelMeta) {
        panelMeta.innerHTML = `${driver.carColor} ${driver.carModel} • ${driver.carPlate} • <i class="fa-solid fa-star gold"></i> ${driver.rating}`;
    }
    
    document.getElementById('driver-today-earnings').innerText = driver.todayEarnings.toLocaleString('uz-UZ') + " UZS";
    document.getElementById('driver-completed-count').innerText = `${driver.completedTrips} ta`;
    
    const balanceEl = document.getElementById('driver-current-balance');
    if (balanceEl) {
        const bal = driver.balance || 0;
        balanceEl.innerText = `${bal.toLocaleString('uz-UZ')} UZS`;
        balanceEl.style.color = bal < 0 ? '#FF4A5A' : '#2EC4B6';
    }
    
    const onlineToggle = document.getElementById('driver-online-toggle');
    const badge = document.getElementById('driver-status-badge');
    const toggleLabel = document.getElementById('driver-toggle-label');
    const offlineMsg = document.getElementById('driver-offline-message');
    const waitingMsg = document.getElementById('driver-waiting-message');

    if (driver.status === 'offline') {
        onlineToggle.checked = false;
        badge.className = 'active-badge offline';
        toggleLabel.innerText = i18n[currentLang].offline;
        offlineMsg.style.display = 'flex';
        waitingMsg.style.display = 'none';
        document.getElementById('driver-request-card').style.display = 'none';
        document.getElementById('driver-active-ride-board').style.display = 'none';
    } else {
        onlineToggle.checked = true;
        badge.className = 'active-badge online';
        toggleLabel.innerText = i18n[currentLang].online;
        offlineMsg.style.display = 'none';
        
        if (activeOrder && activeOrder.driver && activeOrder.driver.id === driver.id) {
            if (activeOrder.status === 'assigned' || activeOrder.status === 'pickup_arrived' || activeOrder.status === 'active' || activeOrder.status === 'finished') {
                waitingMsg.style.display = 'none';
            } else {
                waitingMsg.style.display = 'flex';
            }
        } else {
            waitingMsg.style.display = 'flex';
        }
    }
}

function toggleDriverWaiting() {
    if (!activeOrder || activeOrder.status !== 'active') return;

    const btn = document.getElementById('btn-driver-wait');
    const btnText = document.getElementById('btn-driver-wait-text');
    const passengerWaitDisplay = document.getElementById('passenger-wait-display');
    const passengerWaitCost = document.getElementById('passenger-wait-time-cost');

    if (!isWaitingMode) {
        // Start waiting (simulate customer went to store)
        isWaitingMode = true;
        btn.style.backgroundColor = 'var(--danger-light)';
        btn.style.color = 'var(--danger)';
        btn.style.borderColor = 'rgba(255, 74, 90, 0.3)';
        btnText.innerText = currentLang === 'uz' ? "Kutishni yakunlash" : "Завершить ожидание";
        
        if (passengerWaitDisplay) passengerWaitDisplay.style.display = 'flex';
        
        const taximeterWaitCostEl = document.getElementById('taximeter-wait-cost');
        if (taximeterWaitCostEl) taximeterWaitCostEl.style.display = 'flex';
        
        const tv = TAXIMETER_VARIANTS[activeTaximeterVariant];
        const waitPerSec = tv ? tv.waitPerSec : 10;

        waitInterval = setInterval(() => {
            waitSeconds++;
            const waitCost = waitSeconds * waitPerSec;
            const totalFare = (activeOrder.distancePrice || 0) + waitCost;
            activeOrder.price = totalFare.toLocaleString('uz-UZ') + " UZS";

            // Update UI
            document.getElementById('driver-price-display').innerText = activeOrder.price;
            document.getElementById('ride-eta-display').innerText = (currentLang === 'uz' ? "Kutish narxi qo'shilmoqda... " : "Ожидание... ") + activeOrder.price;
            
            const minutes = Math.floor(waitSeconds / 60);
            const seconds = waitSeconds % 60;
            if (passengerWaitCost) {
                passengerWaitCost.innerText = `${minutes} min ${seconds} sek • ${waitCost.toLocaleString('uz-UZ')} UZS`;
            }
            
            // Update taximeter wait display
            const taximeterValue = document.getElementById('driver-taximeter-value');
            if (taximeterValue) taximeterValue.innerText = activeOrder.price;
            if (taximeterWaitCostEl) {
                taximeterWaitCostEl.innerHTML = `<i class="fa-solid fa-clock"></i> Kutish: ${waitCost.toLocaleString('uz-UZ')} so'm`;
            }
        }, 1000);
    } else {
        // End waiting, resume trip
        isWaitingMode = false;
        btn.style.backgroundColor = 'var(--primary-light)';
        btn.style.color = 'var(--primary)';
        btn.style.borderColor = 'rgba(255, 193, 7, 0.3)';
        btnText.innerText = currentLang === 'uz' ? "Kutishni boshlash" : "Начать ожидание";
        
        if (waitInterval) {
            clearInterval(waitInterval);
            waitInterval = null;
        }
    }
}

// ----------------------------------------------------
// 11. Event Listeners & Autocomplete
// ----------------------------------------------------
function setupEventListeners() {
    // Focus listeners to track active input and toggle map center pin
    const fromInput = document.getElementById('input-from');
    const toInput = document.getElementById('input-to');
    
    function enableMapPickingMode() {
        document.body.classList.add('map-picking-mode');
        if (window.updateCenterPinVisibility) window.updateCenterPinVisibility();
    }
    
    if (fromInput) {
        fromInput.addEventListener('focus', () => {
            activeInputFocus = 'from';
            enableMapPickingMode();
        });
    }
    if (toInput) {
        toInput.addEventListener('focus', () => {
            activeInputFocus = 'to';
            enableMapPickingMode();
        });
    }

    // Confirm map pin button
    document.getElementById('btn-confirm-map-pin').addEventListener('click', () => {
        document.body.classList.remove('map-picking-mode');
        if (window.updateCenterPinVisibility) window.updateCenterPinVisibility();
        
        // Auto jump to dropoff if pickup was just set
        if (activeInputFocus === 'from' && toInput && !toInput.value) {
            toInput.focus();
        }
    });

    // Role switcher
    document.getElementById('btn-role-passenger').addEventListener('click', () => switchRole('passenger'));
    document.getElementById('btn-role-driver').addEventListener('click', () => switchRole('driver'));
    document.getElementById('btn-role-admin').addEventListener('click', () => switchRole('admin'));

    // Languages selector
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            changeLanguage(e.target.getAttribute('data-lang'));
        });
    });

    // Destination Auto-complete UI (Nominatim search with local fallback)
    const destInput = document.getElementById('input-to');
    const suggestionsBox = document.getElementById('to-suggestions');
    let searchDebounceTimeout = null;

    destInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query.length < 3) {
            suggestionsBox.innerHTML = '';
            suggestionsBox.style.display = 'none';
            return;
        }
        
        if (searchDebounceTimeout) clearTimeout(searchDebounceTimeout);
        
        searchDebounceTimeout = setTimeout(() => {
            // Show loading state
            suggestionsBox.innerHTML = `<div class="suggestion-item" style="color: var(--text-muted); cursor: default;"><i class="fa-solid fa-spinner fa-spin"></i> <span>${currentLang === 'uz' ? 'Qidirilmoqda...' : 'Поиск...'}</span></div>`;
            suggestionsBox.style.display = 'block';
            
            searchPlaces(query).then(results => {
                suggestionsBox.innerHTML = '';
                
                // Fallback to local preset locations if Nominatim yields no matches
                if (results.length === 0) {
                    const filtered = locations.filter(loc => loc.name.toLowerCase().includes(query.toLowerCase()));
                    results = filtered.map(loc => ({
                        name: loc.name,
                        coords: loc.coords
                    }));
                }
                
                if (results.length > 0) {
                    suggestionsBox.style.display = 'block';
                    results.forEach(loc => {
                        const item = document.createElement('div');
                        item.className = 'suggestion-item';
                        item.innerHTML = `<i class="fa-solid fa-location-dot"></i> <span>${loc.name}</span>`;
                        item.addEventListener('click', () => {
                            destInput.value = loc.name;
                            suggestionsBox.style.display = 'none';
                            setDestinationB(loc.coords, loc.name);
                        });
                        suggestionsBox.appendChild(item);
                    });
                } else {
                    suggestionsBox.innerHTML = `<div class="suggestion-item" style="color: var(--text-muted); cursor: default;"><span>${currentLang === 'uz' ? 'Manzil topilmadi' : 'Адрес не найден'}</span></div>`;
                }
            });
        }, 400);
    });

    // Close autocomplete on click outside
    document.addEventListener('click', (e) => {
        if (e.target !== destInput && e.target !== suggestionsBox) {
            suggestionsBox.style.display = 'none';
        }
    });

    // Locate me button
    document.getElementById('btn-locate-me').addEventListener('click', () => {
        detectUserLocation(
            handleGeolocationSuccess,
            (err) => {
                // Fallback to random Kattaqo'rg'on landmark if browser geolocation fails or is denied
                const randomStart = locations[Math.floor(Math.random() * locations.length)];
                document.getElementById('input-from').value = randomStart.name;
                passengerPickup = randomStart;
                calculateFares();
                
                if (passengerPickup && map) {
                    map.setView(passengerPickup.coords, 14);
                }
                alert(currentLang === 'uz' 
                    ? "Joylashuv aniqlanmadi. Tasodifiy manzil tanlandi!" 
                    : "Не удалось определить местоположение. Выбран случайный адрес!");
            }
        );
    });

    // Tariff cards selection
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const target = e.currentTarget;
            document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
            target.classList.add('active');
            selectedTariff = target.getAttribute('data-tariff');
        });
    });

    // Payment modal popup
    const paymentModal = document.getElementById('payment-modal');
    document.getElementById('btn-payment-modal').addEventListener('click', () => {
        paymentModal.classList.add('show');
    });

    document.getElementById('btn-close-payment-modal').addEventListener('click', () => {
        paymentModal.classList.remove('show');
    });

    // Payment options select
    document.querySelectorAll('.payment-method-item').forEach(item => {
        item.addEventListener('click', (e) => {
            document.querySelectorAll('.payment-method-item').forEach(i => i.classList.remove('active'));
            const target = e.currentTarget;
            target.classList.add('active');
            selectedPayment = target.getAttribute('data-payment');
        });
    });

    document.getElementById('btn-confirm-payment').addEventListener('click', () => {
        paymentModal.classList.remove('show');
        const paymentNames = {
            cash: currentLang === 'uz' ? "Naqd pul" : "Наличные",
            click: "CLICK",
            payme: "Payme",
            card: currentLang === 'uz' ? "Karta (Uzcard/Humo)" : "Карта (Uzcard/Humo)"
        };
        document.getElementById('selected-payment-text').innerText = paymentNames[selectedPayment];
    });

    // Promo code apply listener
    const applyPromoBtn = document.getElementById('btn-apply-promo');
    if (applyPromoBtn) {
        applyPromoBtn.addEventListener('click', () => {
            const inputField = document.getElementById('input-promo');
            const code = inputField.value.trim().toUpperCase();
            if (!code) return;
            
            const matchedPromo = promoCodes.find(p => p.code === code);
            if (matchedPromo) {
                activePromoDiscount = matchedPromo.discount;
                activePromoCodeStr = matchedPromo.code;
                inputField.style.borderColor = 'var(--success)';
                inputField.style.color = 'var(--success)';
                alert(currentLang === 'uz' ? `Promo-kod qabul qilindi! ${matchedPromo.discount}% chegirma qo'llanildi.` : `Промокод принят! Скидка ${matchedPromo.discount}%.`);
                calculateFares();
            } else {
                activePromoDiscount = 0;
                activePromoCodeStr = null;
                inputField.style.borderColor = 'var(--danger)';
                alert(currentLang === 'uz' ? "Bunday promo-kod topilmadi yoki xato!" : "Промокод не найден!");
                calculateFares();
            }
        });
    }

    // Order taxi button click
    document.getElementById('btn-order-taxi').addEventListener('click', () => {
        startSearchingDriver();
    });

    // Cancel order
    document.getElementById('btn-cancel-ride').addEventListener('click', () => {
        cancelActiveRide();
    });

    // Rating star logic
    const stars = document.querySelectorAll('.star-btn');
    stars.forEach(star => {
        star.addEventListener('mouseover', (e) => {
            const val = parseInt(e.target.getAttribute('data-rating'));
            stars.forEach((s, idx) => {
                if (idx < val) s.classList.add('hovered');
                else s.classList.remove('hovered');
            });
        });
        star.addEventListener('mouseout', () => {
            stars.forEach(s => s.classList.remove('hovered'));
        });
        star.addEventListener('click', (e) => {
            const val = parseInt(e.target.getAttribute('data-rating'));
            stars.forEach((s, idx) => {
                if (idx < val) {
                    s.classList.add('selected');
                    s.classList.replace('fa-regular', 'fa-solid');
                } else {
                    s.classList.remove('selected');
                    s.classList.replace('fa-solid', 'fa-regular');
                }
            });
            // Attach rating value to container
            document.getElementById('passenger-feedback-panel').setAttribute('data-selected-rating', val);
        });
    });

    // Submit feedback
    document.getElementById('btn-submit-feedback').addEventListener('click', () => {
        const rating = parseInt(document.getElementById('passenger-feedback-panel').getAttribute('data-selected-rating') || '5');
        const driver = activeOrder ? activeOrder.driver : (drivers.length > 0 ? drivers[0] : null);
        
        if (driver) {
            // Compute new rolling average rating
            const totalRatingPoints = (driver.rating * 100) + rating;
            driver.rating = parseFloat((totalRatingPoints / 101).toFixed(2));
        }
        
        // Reset feedback form
        document.getElementById('passenger-feedback-panel').style.display = 'none';
        document.getElementById('btn-order-taxi').style.display = 'flex';
        
        // Reset stars
        stars.forEach(s => {
            s.classList.remove('selected');
            s.classList.replace('fa-solid', 'fa-regular');
        });
        document.getElementById('feedback-comment').value = '';
        
        // Reset active order
        activeOrder = null;
        updateAdminStats();

        // Show Map Center Pin again
        if (window.updateCenterPinVisibility) {
            window.updateCenterPinVisibility();
        }
    });

    // Driver screen elements
    const driverOnlineToggle = document.getElementById('driver-online-toggle');
    driverOnlineToggle.addEventListener('change', (e) => {
        if (drivers.length === 0) return;
        const driver = drivers[0]; // Active driver
        driver.status = e.target.checked ? 'online' : 'offline';
        updateDriverMarkers();
        syncDriverUIPanel();
        updateAdminStats();
    });

    // Driver buttons interaction
    document.getElementById('btn-driver-decline').addEventListener('click', () => {
        // Decline incoming order, look for another driver
        if (requestTimerInterval) clearInterval(requestTimerInterval);
        document.getElementById('driver-request-card').style.display = 'none';
        document.getElementById('driver-waiting-message').style.display = 'flex';
        
        if (!activeOrder) return;

        // Assign order to another driver in simulation background
        const currentAssigned = activeOrder.driver;
        if (currentAssigned) {
            currentAssigned.status = 'online'; // driver goes back online
        }

        // Show search status on passenger panel
        document.getElementById('passenger-status-title').innerText = currentLang === 'uz' ? "Boshqa haydovchi qidirilmoqda..." : "Поиск другого водителя...";
        document.getElementById('passenger-driver-info').style.display = 'none';
        document.getElementById('ride-eta-display').innerText = i18n[currentLang].searching_driver_desc;
        
        // Faqat onlayn va balansi musbat bo'lgan (qarz bo'lmagan) haydovchilarni tanlash
        const activeDriverId = currentLoggedInDriver ? currentLoggedInDriver.id : (drivers[0] ? drivers[0].id : -1);
        const nextDriver = drivers.find(d => d.id !== activeDriverId && d.status === 'online' && (d.balance || 0) > 0);
        if (nextDriver) {
            activeOrder.driver = nextDriver;
            activeOrder.status = 'assigned';
            
            // Background driver accepts automatically
            setTimeout(() => {
                if (activeOrder && activeOrder.driver === nextDriver && !activeOrder.isCancelled) {
                    backgroundDriverAcceptsOrder(nextDriver);
                }
            }, 1500);
        } else {
            // No online drivers available
            cancelActiveRide();
            alert(currentLang === 'uz' ? "Kechirasiz, barcha haydovchilar band!" : "Извините, все водители заняты!");
        }
    });

    document.getElementById('btn-driver-accept').addEventListener('click', () => {
        driverAcceptsOrder();
    });

    // Action button on driver trip board
    document.getElementById('btn-driver-status-action').addEventListener('click', () => {
        if (activeOrder.status === 'pickup_arrived') {
            driverStartsTrip();
        } else if (activeOrder.status === 'finished') {
            driverFinishesPayment();
        }
    });

    // Wait button on driver trip board
    document.getElementById('btn-driver-wait').addEventListener('click', () => {
        toggleDriverWaiting();
    });

    // Simulator panel slide controls
    const toggleSimBtn = document.getElementById('btn-toggle-sim-panel');
    const simPanel = document.getElementById('sim-controller');
    if (toggleSimBtn && simPanel) {
        toggleSimBtn.addEventListener('click', () => {
            simPanel.classList.toggle('collapsed');
        });
    }

    // Simulation params change
    const trafficSelect = document.getElementById('sim-traffic-select');
    trafficSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val === 'low') simTrafficDelay = 500;
        else if (val === 'medium') simTrafficDelay = 1000;
        else if (val === 'heavy') simTrafficDelay = 2000;
    });

    const speedSlider = document.getElementById('sim-speed-slider');
    const speedValText = document.getElementById('sim-speed-value');
    speedSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        simSpeedModifier = val;
        speedValText.innerText = `${val}x`;
    });

    // Add driver form in Admin Panel (Admin Only)
    const addDriverForm = document.getElementById('admin-add-driver-form');
    if (addDriverForm) {
        addDriverForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('admin-driver-name').value.trim();
            const phone = document.getElementById('admin-driver-phone').value.trim();
            const carModel = document.getElementById('admin-driver-car').value;
            const carColor = document.getElementById('admin-driver-color').value.trim();
            const carPlate = document.getElementById('admin-driver-plate').value.trim();
            const passcode = document.getElementById('admin-driver-passcode').value.trim();
            const balanceInput = document.getElementById('admin-driver-balance');
            let balance = balanceInput ? parseInt(balanceInput.value) : 0;
            if (isNaN(balance)) balance = 0;
            
            if (!name || !phone || !carColor || !carPlate || !passcode) {
                alert(currentLang === 'uz' ? "Iltimos, barcha maydonlarni to'ldiring!" : "Пожалуйста, заполните все поля!");
                return;
            }

            // Calculate new ID
            const maxId = drivers.reduce((max, d) => d.id > max ? d.id : max, 0);
            const id = maxId + 1;
            const center = [39.8978, 66.2503];
            // Random coordinate around Kattaqo'rg'on center
            const randomCoords = [
                center[0] + (Math.random() - 0.5) * 0.02,
                center[1] + (Math.random() - 0.5) * 0.02
            ];

            const newDriver = {
                id: id,
                name: name,
                phone: phone,
                carModel: carModel,
                carColor: carColor,
                carPlate: carPlate,
                passcode: passcode,
                rating: 5.0,
                status: "online",
                coords: randomCoords,
                completedTrips: 0,
                todayEarnings: 0,
                balance: balance,
                avatarColor: '#555555',
                marker: null
            };

            drivers.push(newDriver);
            saveDriversToStorage(); // localStorage ga saqlash
            updateDriverMarkers();
            updateAdminStats();
            syncDriverUIPanel();


            // Reset form fields
            addDriverForm.reset();
            document.getElementById('admin-driver-plate').value = '30 ';
            
            alert(currentLang === 'uz' ? `Yangi haydovchi muvaffaqiyatli qo'shildi: ${newDriver.name}` : `Новый водитель успешно добавлен: ${newDriver.name}`);
        });
    }

    // Add promo code form in Admin Panel
    const addPromoForm = document.getElementById('admin-add-promo-form');
    if (addPromoForm) {
        addPromoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const codeInput = document.getElementById('admin-promo-code');
            const discountInput = document.getElementById('admin-promo-discount');
            
            const code = codeInput.value.trim().toUpperCase();
            const discount = parseInt(discountInput.value);
            
            if (!code || isNaN(discount) || discount < 1 || discount > 10) {
                alert(currentLang === 'uz' ? "Chegirma 1 va 10 foiz oralig'ida bo'lishi kerak!" : "Скидка должна быть от 1 до 10%!");
                return;
            }
            
            const existing = promoCodes.find(p => p.code === code);
            if (existing) {
                alert(currentLang === 'uz' ? "Bunday promo-kod allaqachon mavjud!" : "Такой промокод уже существует!");
                return;
            }
            
            promoCodes.push({ code, discount });
            savePromosToStorage();
            renderPromoCodes();
            
            codeInput.value = '';
            discountInput.value = '';
            alert(currentLang === 'uz' ? "Yangi promo-kod qo'shildi!" : "Промокод успешно добавлен!");
        });
    }

    // Reset simulator
    document.getElementById('btn-sim-reset').addEventListener('click', () => {
        if (!confirm(currentLang === 'uz' ? "Barcha haydovchilarni o'chirib, tizimni qayta yuklashni tasdiqlaysizmi?" : "Подтверждаете сброс всех данных?")) return;
        cancelActiveRide();
        drivers = []; // Barcha haydovchilarni o'chirish
        saveDriversToStorage(); // Bo'sh ro'yxatni saqlash

        map.eachLayer(layer => {
            if (layer instanceof L.Marker || layer instanceof L.Polyline) {
                map.removeLayer(layer);
            }
        });

        userLocationMarker = null;
        // Recreate passenger live location marker (red dot)
        const userLocIcon = L.divIcon({
            html: `
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="rgba(255, 74, 90, 0.3)" />
                    <circle cx="12" cy="12" r="5" fill="#FF4A5A" stroke="#FFFFFF" stroke-width="2" />
                </svg>
            `,
            className: 'custom-user-location-marker',
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });
        userLocationMarker = L.marker(locations[0].coords, { icon: userLocIcon, zIndexOffset: 1000 }).addTo(map)
            .bindPopup(currentLang === 'uz' ? "Sizning joylashuvingiz" : "Ваше местоположение");
        
        updateDriverMarkers();
        syncDriverUIPanel();
        updateAdminStats();
        
        // Set default inputs
        document.getElementById('input-from').value = locations[0].name;
        passengerPickup = locations[0];
        document.getElementById('input-to').value = '';
        passengerDropoff = null;
        destinationMarker = null;
        activeInputFocus = 'from';

        if (window.updateCenterPinVisibility) {
            window.updateCenterPinVisibility();
        }

        alert(currentLang === 'uz' ? "Simulyator to'liq qayta yuklandi!" : "Симулятор полностью перезагружен!");
    });

    // Admin Passcode Auth Modal Listeners
    const authModal = document.getElementById('admin-auth-modal');
    const passcodeInput = document.getElementById('input-admin-passcode');
    const authErrorMsg = document.getElementById('auth-error-msg');
    
    document.getElementById('btn-close-auth-modal').addEventListener('click', () => {
        authModal.classList.remove('show');
    });

    function verifyAdminPasscode() {
        const pin = passcodeInput.value;
        if (pin === '203040') {
            isAdminAuthenticated = true;
            authModal.classList.remove('show');
            switchRole('admin');
        } else {
            authErrorMsg.style.display = 'block';
            passcodeInput.value = '';
            passcodeInput.focus();
        }
    }

    document.getElementById('btn-submit-auth').addEventListener('click', verifyAdminPasscode);
    passcodeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            verifyAdminPasscode();
        }
    });

    // --- DRIVER AUTH ---
    const driverPasscodeInput = document.getElementById('input-driver-passcode');
    const driverAuthError = document.getElementById('driver-auth-error-msg');
    
    document.getElementById('btn-close-driver-auth-modal').addEventListener('click', () => {
        document.getElementById('driver-auth-modal').classList.remove('show');
    });

    function verifyDriverPasscode() {
        const val = driverPasscodeInput.value.trim();
        // Xotiradagi eski haydovchilar yoki faqat raqamli parollar uchun mustahkam tekshiruv
        const foundDriver = drivers.find(d => (d.passcode || "").toString() === val);
        if (foundDriver) {
            currentLoggedInDriver = foundDriver;
            // Xotiraga saqlab qolamiz (yangilanganda ham bilib oladi)
            localStorage.setItem('zur_taxi_current_driver', foundDriver.id.toString());
            
            document.getElementById('driver-auth-modal').classList.remove('show');
            // Populate driver panel header
            document.getElementById('panel-driver-name').innerText = currentLoggedInDriver.name;
            document.getElementById('panel-driver-meta').innerHTML = `${currentLoggedInDriver.carModel} &bull; ${currentLoggedInDriver.carPlate} &bull; <i class="fa-solid fa-star gold"></i> ${currentLoggedInDriver.rating}`;
            
            // Switch role UI correctly
            document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
            document.getElementById('panel-driver').classList.add('active');
            document.getElementById('btn-role-driver').classList.add('active');
            document.body.classList.add('hide-map');

            if (window.updateCenterPinVisibility) window.updateCenterPinVisibility();
        } else {
            driverAuthError.style.display = 'block';
            driverPasscodeInput.value = '';
            driverPasscodeInput.focus();
        }
    }

    document.getElementById('btn-submit-driver-auth').addEventListener('click', verifyDriverPasscode);
    driverPasscodeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            verifyDriverPasscode();
        }
    });

    document.getElementById('btn-driver-logout').addEventListener('click', () => {
        currentLoggedInDriver = null;
        localStorage.removeItem('zur_taxi_current_driver');
        switchRole('passenger');
    });

    // *** TAXIMETER VARIANT SELECTOR EVENT LISTENERS (Admin Panel) ***
    const taxiVariantCards = document.querySelectorAll('.taximeter-variant-card');
    taxiVariantCards.forEach(card => {
        card.addEventListener('click', () => {
            const variant = parseInt(card.getAttribute('data-variant'));
            if (!variant || !TAXIMETER_VARIANTS[variant]) return;
            
            // Update active card styling
            taxiVariantCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            activeTaximeterVariant = variant;
            saveTaximeterVariant(variant); // localStorage ga saqlash
            
            // Update active indicator text
            const tv = TAXIMETER_VARIANTS[variant];
            const indicator = document.getElementById('taximeter-current-variant-name');
            if (indicator) {
                indicator.innerText = `${tv.name} (Variant ${variant})`;
            }
            
            // Recalculate fare prices shown to passenger with new variant rates
            calculateFares();
            
            // Visual flash effect
            card.style.transform = 'scale(1.04)';
            setTimeout(() => { card.style.transform = ''; }, 200);
        });
    });
}

// Detect user's actual location using the HTML5 Geolocation API
function detectUserLocation(onSuccess, onError) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                if (onSuccess) onSuccess(lat, lon);
            },
            (err) => {
                console.warn("Geolocation permission denied or error:", err);
                if (onError) onError(err);
            },
            { enableHighAccuracy: true, timeout: 5000 }
        );
    } else {
        console.warn("Geolocation not supported by browser.");
        if (onError) onError(new Error("Not supported"));
    }
}

// OpenStreetMap Nominatim reverse geocoding to retrieve street address
async function getAddressFromCoords(lat, lon) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`, {
            headers: {
                'User-Agent': 'ZurTaxiCloneApp/1.0'
            }
        });
        if (response.ok) {
            const data = await response.json();
            if (data && data.display_name) {
                const parts = data.display_name.split(',');
                // Take first 3 parts of the address (e.g. street, block, district) for readability
                return parts.slice(0, 3).join(',').trim();
            }
        }
    } catch (e) {
        console.warn("Reverse geocoding address fetch failed, using fallback:", e);
    }
    // Fallback: nearest landmark from preset locations list
    const closest = getClosestLocation({ lat, lng: lon });
    return closest.name;
}

// OpenStreetMap Nominatim place search inside Kattaqo'rg'on city area
async function searchPlaces(query) {
    let searchQuery = query;
    // Append Kattaqo'rg'on if the query doesn't specify it to filter/bound results cleanly
    if (!query.toLowerCase().includes('kattaqo') && !query.toLowerCase().includes('kattaqu')) {
        searchQuery += " Kattaqo'rg'on";
    }

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=6&addressdetails=1`;
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'ZurTaxiCloneApp/1.0'
            }
        });
        if (response.ok) {
            const data = await response.json();
            return data.map(item => {
                const displayName = item.display_name;
                const parts = displayName.split(',');
                // Shorten display name to first 3 elements for readability in autocomplete
                const shortName = parts.slice(0, 3).join(',').trim();
                return {
                    name: shortName,
                    fullName: displayName,
                    coords: [parseFloat(item.lat), parseFloat(item.lon)]
                };
            });
        }
    } catch (e) {
        console.warn("Place search geocoding error:", e);
    }
    return [];
}

// Handle browser geolocation success: center map, relocate active drivers, reverse geocode street name
function handleGeolocationSuccess(lat, lon) {
    if (map) {
        map.setView([lat, lon], 14);

        // Add/Update user's live location marker (pulsing red dot)
        const userLocIcon = L.divIcon({
            html: `
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="rgba(255, 74, 90, 0.3)" />
                    <circle cx="12" cy="12" r="5" fill="#FF4A5A" stroke="#FFFFFF" stroke-width="2" />
                </svg>
            `,
            className: 'custom-user-location-marker',
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });

        if (userLocationMarker) {
            userLocationMarker.setLatLng([lat, lon]);
        } else {
            userLocationMarker = L.marker([lat, lon], { icon: userLocIcon, zIndexOffset: 1000 }).addTo(map)
                .bindPopup(currentLang === 'uz' ? "Sizning joylashuvingiz" : "Ваше местоположение");
        }
    }
    
    // Set passenger pickup to initial address
    passengerPickup = {
        name: currentLang === 'uz' ? "Mening joylashuvim" : "Моё местоположение",
        coords: [lat, lon]
    };
    document.getElementById('input-from').value = passengerPickup.name;
    
    // Reverse geocode to get precise street address
    getAddressFromCoords(lat, lon).then(address => {
        passengerPickup.name = address;
        document.getElementById('input-from').value = address;
        
        // Update center pin bubble text if active
        const bubbleText = document.getElementById('pin-bubble-text');
        if (bubbleText && window.updateCenterPinVisibility) {
            bubbleText.innerText = address;
        }
    });

    // Relocate simulated drivers to surround user's position within 1-2 km radius
    drivers.forEach((driver) => {
        const offsetLat = (Math.random() - 0.5) * 0.015;
        const offsetLon = (Math.random() - 0.5) * 0.015;
        driver.coords = [lat + offsetLat, lon + offsetLon];
        driver.status = 'online'; // Ensure status is online/active
    });
    
    saveDriversToStorage();
    updateDriverMarkers();
    updateAdminStats();
    syncDriverUIPanel();
    
    // Recalculate fare estimates
    calculateFares();
    
    // Update map center pin bubble and visibility
    if (window.updateCenterPinVisibility) {
        window.updateCenterPinVisibility();
    }
}

// ----------------------------------------------------
// 12. Initialization
// ----------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
    // Tizimga avval kirgan haydovchini tiklash
    loadCurrentLoggedInDriver();

    // Agar saqlangan bo'lsa, uni paneli bilan to'g'irlash uchun 'driver' ni yuklab quyish mumkin, 
    // lekin hozircha standart bo'yicha 'passenger' yoniq turadi, uni faqat xotirada ushlab turamiz.
    
    // Taksometr variantini yuklash
    activeTaximeterVariant = loadTaximeterVariant();
    
    // Taksometr UI ni yuklangan variant bilan moslash
    const savedVariantCard = document.getElementById(`taximeter-card-${activeTaximeterVariant}`);
    if (savedVariantCard) {
        document.querySelectorAll('.taximeter-variant-card').forEach(c => c.classList.remove('active'));
        savedVariantCard.classList.add('active');
    }
    const tv = TAXIMETER_VARIANTS[activeTaximeterVariant];
    const indicator = document.getElementById('taximeter-current-variant-name');
    if (indicator && tv) indicator.innerText = `${tv.name} (Variant ${activeTaximeterVariant})`;
    
    // Initial coordinates setup
    passengerPickup = locations[0]; // Kattaqo'rg'on dehqon bozori
    
    // Init libraries
    initMap();

    // Draw initial passenger live location marker (red dot)
    const userLocIcon = L.divIcon({
        html: `
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="rgba(255, 74, 90, 0.3)" />
                <circle cx="12" cy="12" r="5" fill="#FF4A5A" stroke="#FFFFFF" stroke-width="2" />
            </svg>
        `,
        className: 'custom-user-location-marker',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });
    userLocationMarker = L.marker(passengerPickup.coords, { icon: userLocIcon, zIndexOffset: 1000 }).addTo(map)
        .bindPopup(currentLang === 'uz' ? "Sizning joylashuvingiz" : "Ваше местоположение");
    
    initAdminChart();
    
    // Bind UI actions
    setupEventListeners();
    
    // Set initial stats and driver visual syncs
    syncDriverUIPanel();
    updateAdminStats();
    
    // Default translations trigger
    changeLanguage('uz');
    
    // Proactively detect user location on load
    detectUserLocation(handleGeolocationSuccess, () => {
        console.log("Geolocation detection failed/denied. Keeping default coordinates.");
    });
    
    // Saqlangan haydovchilar borligi haqida xabar
    if (drivers.length > 0) {
        console.log(`🚕 localStorage dan ${drivers.length} ta haydovchi yuklandi.`);
    }

    // Agar tizimda allaqachon avtorizatsiyadan o'tgan haydovchi bo'lsa,
    // avtomatik ravishda uning profilini ochib berish.
    if (currentLoggedInDriver) {
        switchRole('driver');
    }
});
