export interface Product {
    id: string;
    slug: string; // для URL типа /products/ec-100
    title: string;
    category: string;
    description: string;
    fullDescription: string;
    features: string[];
    galleryImage: string;
}

export const products: Product[] = [
    {
        id: '1',
        slug: 'ec-100',
        title: "Промисловий контролер EC-100",
        category: "Автоматизація",
        description: "Високопродуктивний контролер для автоматизації виробничих ліній.",
        fullDescription: "EC-100 — це надійне рішення для промислових об'єктів. Підтримує Modbus RTU/TCP та має вбудований захист від перенапруги.",
        features: ["8 дискретних входів", "4 релейних виходи", "RS-485 інтерфейс"],
        galleryImage: "/images/products/defaultImage.jpg"
    },
    {
        id: '2',
        slug: 'lora-gate',
        title: "Модуль зв'язку LoRa-Gate",
        category: "Зв'язок",
        description: "Енергоефективне рішення для передачі даних на великі відстані.",
        fullDescription: "Шлюз для побудови приватних LoRaWAN мереж. Ідеально підходить для агросектору та розумних міст.",
        features: ["Радіус до 15 км", "Підтримка 868 МГц", "IP67 захист корпусу"],
        galleryImage: "/images/products/defaultImage.jpg"
    },
    {
        id: '3',
        slug: 'smart-meter-x',
        title: "Розумний лічильник SmartMeter X",
        category: "Енергетика",
        description: "Пристрій для моніторингу електроспоживання в реальному часі.",
        fullDescription: "Професійний трифазний лічильник з Wi-Fi інтерфейсом та мобільним додатком для аналізу витрат електроенергії.",
        features: ["Точність класу 0.5S", "Підтримка DIN-рейки", "API для розробників"],
        galleryImage: "/images/products/defaultImage.jpg"
    },
    {
        id: '4',
        slug: 'sensor-hub-pro',
        title: "Датчик екологічного моніторингу",
        category: "Зв'язок",
        description: "Комплексне рішення для вимірювання якості повітря (CO2, PM2.5).",
        fullDescription: "Автономна станція моніторингу з живленням від сонячної панелі. Передає дані через NB-IoT.",
        features: ["Захист IP65", "6 місяців автономної роботи", "Вбудований GPS"],
        galleryImage: "/images/products/defaultImage.jpg"
    },
    {
        id: '5',
        slug: 'motor-drive-v3',
        title: "Драйвер безколекторних двигунів",
        category: "Автоматизація",
        description: "Потужний контролер для точного керування двигунами роботів.",
        fullDescription: "Високоточний драйвер з підтримкою FOC (Field Oriented Control). Ідеально для складних кінематичних систем.",
        features: ["Струм до 50А", "Напруга 12-48В", "Інтерфейс CAN Bus"],
        galleryImage: "/images/products/defaultImage.jpg"
    },
    {
        id: '6',
        slug: 'medical-ecg-module',
        title: "Модуль ЕКГ моніторингу",
        category: "Обчислення",
        description: "Медичний сертифікований модуль для портативних пристроїв.",
        fullDescription: "Надмалий модуль для зняття показників ЕКГ з високою роздільною здатністю та низьким рівнем шумів.",
        features: ["24-бітний АЦП", "Низьке споживання (1мкА)", "Захист від дефібриляції"],
        galleryImage: "/images/products/defaultImage.jpg"
    },
    {
        id: '7',
        slug: 'iot-gateway-mini',
        title: "Міні-шлюз IoT Core",
        category: "Зв'язок",
        description: "Центральний вузол для домашньої або офісної автоматизації.",
        fullDescription: "Компактний хаб, що об'єднує Zigbee, Bluetooth та Wi-Fi пристрої в єдину мережу.",
        features: ["До 100 підключених пристроїв", "Локальна обробка даних", "Підтримка Home Assistant"],
        galleryImage: "/images/products/defaultImage.jpg"
    },
    {
        id: '8',
        slug: 'industrial-ups',
        title: "Промисловий модуль ДБЖ",
        category: "Енергетика",
        description: "Система безперебійного живлення для критичної електроніки.",
        fullDescription: "Модуль швидкого перемикання на резервне живлення з вбудованим зарядним пристроєм для LiFePO4 акумуляторів.",
        features: ["Перемикання < 10мс", "ККД 98%", "Дистанційне керування"],
        galleryImage: "/images/products/defaultImage.jpg"
    }
];
