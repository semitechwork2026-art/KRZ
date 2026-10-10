    // ========================================
// عصير النجوم - Juice Bar Website JavaScript
// ========================================

// ========== Menu Data ==========
const menuData = [

    // ===== عصائر طازجة=====
    {
        id: 'A1',
        name: 'مانجو',
        category: 'FreshJuices',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/1-FreshJuices/1.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8 },
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'A2',
        name: 'كوكتيل',
        category: 'FreshJuices',
        image: 'imgs/1-FreshJuices/2.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8},
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'A3',
        name: 'رمان',
        category: 'FreshJuices',
        image: 'imgs/1-FreshJuices/4.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8},
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'A4',
        name: 'أناناس',
        category: 'FreshJuices',
        image: 'imgs/1-FreshJuices/4.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 10},
            { label: 'M',   short: 'M',  price: 12 },
            { label: 'L',   short: 'L',  price: 30 },
        ]
    },
    {
        id: 'A5',
        name: 'خوخ',
        category: 'FreshJuices',
        image: 'imgs/1-FreshJuices/5.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8},
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'A6',
        name: 'كيوي',
        category: 'FreshJuices',
        image: 'imgs/1-FreshJuices/6.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8},
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'A7',
        name: 'ليمون',
        category: 'FreshJuices',
        image: 'imgs/1-FreshJuices/7.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8},
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'A8',
        name: 'ليمون نعناع',
        category: 'FreshJuices',
        image: 'imgs/1-FreshJuices/8.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8},
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'A9',
        name: 'برتقال',
        category: 'FreshJuices',
        image: 'imgs/1-FreshJuices/9.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8},
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'A10',
        name: 'برتقال كبس',
        category: 'FreshJuices',
        image: 'imgs/1-FreshJuices/10.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 10},
            { label: 'M',   short: 'M',  price: 12 },
            { label: 'L',   short: 'L',  price: 30 },
        ]
    },
    {
        id: 'A11',
        name: 'توت بري',
        category: 'FreshJuices',
        image: 'imgs/1-FreshJuices/11.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 10},
            { label: 'M',   short: 'M',  price: 12 },
            { label: 'L',   short: 'L',  price: 30 },
        ]
    },
    {
        id: 'A12',
        name: 'فراولة',
        category: 'FreshJuices',
        image: 'imgs/1-FreshJuices/12.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8},
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'A13',
        name: 'جوافة',
        category: 'FreshJuices',
        image: 'imgs/1-FreshJuices/13.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8},
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'A14',
        name: 'عنب',
        category: 'FreshJuices',
        image: 'imgs/1-FreshJuices/14.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8},
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'A15',
        name: 'شمام',
        category: 'FreshJuices',
        image: 'imgs/1-FreshJuices/15.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8},
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'A16',
        name: 'بطيخ',
        category: 'FreshJuices',
        image: 'imgs/1-FreshJuices/16.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8},
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'A17',
        name: 'جزر',
        category: 'FreshJuices',
        image: 'imgs/1-FreshJuices/17.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8},
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'A18',
        name: 'كركدية',
        category: 'FreshJuices',
        image: 'imgs/1-FreshJuices/17.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8},
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },

    // ===== عصائر طازجة=====
    {
        id: 'B1',
        name: 'شمندر برتقال',
        category: 'MixedJuices',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/2-MixedJuices/1.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8 },
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'B2',
        name: 'فخفينا',
        category: 'MixedJuices',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/2-MixedJuices/2.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8 },
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'B3',
        name: 'فراولة',
        category: 'MixedJuices',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/2-MixedJuices/3.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8 },
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'B4',
        name: 'فراولة رمان',
        category: 'MixedJuices',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/2-MixedJuices/4.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8 },
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'B5',
        name: 'فراولة مانجو',
        category: 'MixedJuices',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/2-MixedJuices/5.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8 },
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'B6',
        name: 'رمان برتقال',
        category: 'MixedJuices',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/2-MixedJuices/6.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8 },
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'B7',
        name: 'اناناس خوخ',
        category: 'MixedJuices',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/2-MixedJuices/7.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8 },
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'B8',
        name: 'اناناس برتقال',
        category: 'MixedJuices',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/2-MixedJuices/8.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8 },
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'B9',
        name: 'اناناس رمان',
        category: 'MixedJuices',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/2-MixedJuices/9.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8 },
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'B10',
        name: 'اناناس',
        category: 'MixedJuices',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/2-MixedJuices/10.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 10 },
            { label: 'M',   short: 'M',  price: 12 },
            { label: 'L',   short: 'L',  price: 25 },
        ]
    },
    {
        id: 'B11',
        name: 'خوخ ومانجو',
        category: 'MixedJuices',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/2-MixedJuices/11.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8 },
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'B12',
        name: 'برتقال جزر',
        category: 'MixedJuices',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/2-MixedJuices/12.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8 },
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'B13',
        name: 'كيوي وليمون',
        category: 'MixedJuices',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/2-MixedJuices/13.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8 },
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'B14',
        name: 'موز حليب',
        category: 'MixedJuices',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/2-MixedJuices/14.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8 },
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'B15',
        name: 'شمام حليب',
        category: 'MixedJuices',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/2-MixedJuices/15.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8 },
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'B16',
        name: 'شمندر برتقال كبس',
        category: 'MixedJuices',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/2-MixedJuices/16.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8 },
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 20 },
        ]
    },
    {
        id: 'B17',
        name: 'فواكة قطع مع عصير',
        category: 'MixedJuices',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/2-MixedJuices/17.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 12 },
            { label: 'M',   short: 'M',  price: 14 },
        ]
    },
    {
        id: 'B18',
        name: 'اضافات',
        category: 'MixedJuices',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/2-MixedJuices/18.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 5 },
        ]
    },

    // ===== عصائر طازجة=====
    {
        id: 'C1',
        name: 'أينشتاين',
        category: 'JuiceBlends',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/3-JuiceBlends/1.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 10 },
            { label: 'M',   short: 'M',  price: 12 },
            { label: 'L',   short: 'L',  price: 25 },
        ]
    },
    {
        id: 'C2',
        name: 'ماتشا',
        category: 'JuiceBlends',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/3-JuiceBlends/2.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 10 },
            { label: 'M',   short: 'M',  price: 12 },
            { label: 'L',   short: 'L',  price: 25 },
        ]
    },
    {
        id: 'C3',
        name: 'سلطان',
        category: 'JuiceBlends',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/3-JuiceBlends/3.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 10 },
            { label: 'M',   short: 'M',  price: 12 },
            { label: 'L',   short: 'L',  price: 25 },
        ]
    },
    {
        id: 'C4',
        name: 'عوار قلب',
        category: 'JuiceBlends',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/3-JuiceBlends/4.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 10 },
            { label: 'M',   short: 'M',  price: 12 },
            { label: 'L',   short: 'L',  price: 25 },
        ]
    },
    {
        id: 'C5',
        name: 'عرائسي',
        category: 'JuiceBlends',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/3-JuiceBlends/5.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 10 },
            { label: 'M',   short: 'M',  price: 12 },
            { label: 'L',   short: 'L',  price: 25 },
        ]
    },
    {
        id: 'C6',
        name: 'أصفهاني',
        category: 'JuiceBlends',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/3-JuiceBlends/6.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 10 },
            { label: 'M',   short: 'M',  price: 12 },
            { label: 'L',   short: 'L',  price: 25 },
        ]
    },
    {
        id: 'C7',
        name: 'بستاشيو',
        category: 'JuiceBlends',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/3-JuiceBlends/7.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 10 },
            { label: 'M',   short: 'M',  price: 12 },
            { label: 'L',   short: 'L',  price: 25 },
        ]
    },
    {
        id: 'C8',
        name: 'فراولتي',
        category: 'JuiceBlends',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/3-JuiceBlends/8.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 10 },
            { label: 'M',   short: 'M',  price: 12 },
            { label: 'L',   short: 'L',  price: 25 },
        ]
    },
    {
        id: 'C9',
        name: 'لمسات',
        category: 'JuiceBlends',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/3-JuiceBlends/9.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 10 },
            { label: 'M',   short: 'M',  price: 12 },
            { label: 'L',   short: 'L',  price: 25 },
        ]
    },
    {
        id: 'C10',
        name: 'افكادو',
        category: 'JuiceBlends',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/3-JuiceBlends/10.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 10 },
            { label: 'M',   short: 'M',  price: 12 },
            { label: 'L',   short: 'L',  price: 25 },
        ]
    },
    {
        id: 'C11',
        name: 'افكادو مكسرات عسل',
        category: 'JuiceBlends',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/3-JuiceBlends/11.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 10 },
            { label: 'M',   short: 'M',  price: 12 },
            { label: 'L',   short: 'L',  price: 25 },
        ]
    },
    {
        id: 'C12',
        name: 'دلوني عليك',
        category: 'JuiceBlends',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/3-JuiceBlends/12.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 10 },
            { label: 'M',   short: 'M',  price: 12 },
            { label: 'L',   short: 'L',  price: 25 },
        ]
    },

     // ===== بوكسات عصائر =====
    {
        id: 'D1',
        name: 'بوكس عصائر طازجة 24 علبة',
        category: 'JuiceBoxes',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/4-JuiceBoxes/1.jpeg',
        sizes: [
            { label: '',   short: '',  price: 135 },
        ]
    },
    {
        id: 'D2',
        name: 'بوكس عصائر طازجة 20 علبة',
        category: 'JuiceBoxes',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/4-JuiceBoxes/2.jpeg',
        sizes: [
            { label: '',   short: '',  price: 120 },
        ]
    },
    {
        id: 'D3',
        name: 'بوكس عصائر طازجة 15 علبة',
        category: 'JuiceBoxes',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/4-JuiceBoxes/3.jpeg',
        sizes: [
            { label: '',   short: '',  price: 90 },
        ]
    },
    {
        id: 'D4',
        name: 'بوكس عصائر طازجة 12 علبة',
        category: 'JuiceBoxes',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/4-JuiceBoxes/4.jpeg',
        sizes: [
            { label: '',   short: '',  price: 75 },
        ]
    },
    {
        id: 'D5',
        name: 'بوكس الموهيتو 24 علبة',
        category: 'JuiceBoxes',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/4-JuiceBoxes/5.jpeg',
        sizes: [
            { label: '',   short: '',  price: 135 },
        ]
    },
    {
        id: 'D6',
        name: 'بوكس الموهيتو 20 علبة',
        category: 'JuiceBoxes',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/4-JuiceBoxes/6.jpeg',
        sizes: [
            { label: '',   short: '',  price: 120 },
        ]
    },
    {
        id: 'D7',
        name: 'بوكس الموهيتو 15 علبة',
        category: 'JuiceBoxes',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/4-JuiceBoxes/7.jpeg',
        sizes: [
            { label: '',   short: '',  price: 90 },
        ]
    },
    {
        id: 'D8',
        name: 'بوكس الموهيتو 12 علبة',
        category: 'JuiceBoxes',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/4-JuiceBoxes/8.jpeg',
        sizes: [
            { label: '',   short: '',  price: 75 },
        ]
    },
    {
        id: 'D9',
        name: 'بوكس مكس 12 علبة',
        category: 'JuiceBoxes',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/4-JuiceBoxes/9.jpeg',
        sizes: [
            { label: '',   short: '',  price: 80 },
        ]
    },
    {
        id: 'D10',
        name: 'علبة',
        category: 'JuiceBoxes',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/4-JuiceBoxes/10.jpeg',
        sizes: [
            { label: '',   short: '',  price: 5 },
        ]
    },

    // ===== ميلك شيك أكواب الكرز =====
    {
        id: 'E1',
        name: 'ميلك شيك تويكس',
        category: 'CherryMilkshakeCups',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/5-CherryMilkshakeCups/1.jpeg',
        sizes: [
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 12 },
        ]
    },
    {
        id: 'E2',
        name: 'ميلك شيك مارس',
        category: 'CherryMilkshakeCups',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/5-CherryMilkshakeCups/2.jpeg',
        sizes: [
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 12 },
        ]
    },
    {
        id: 'E3',
        name: 'ميلك شيك سنيكرز',
        category: 'CherryMilkshakeCups',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/5-CherryMilkshakeCups/3.jpeg',
        sizes: [
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 12 },
        ]
    },
    {
        id: 'E4',
        name: 'ميلك شيك كندر',
        category: 'CherryMilkshakeCups',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/5-CherryMilkshakeCups/4.jpeg',
        sizes: [
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 12 },
        ]
    },
    {
        id: 'E5',
        name: 'ميلك شيك بستاشيو',
        category: 'CherryMilkshakeCups',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/5-CherryMilkshakeCups/5.jpeg',
        sizes: [
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 12 },
        ]
    },
    {
        id: 'E6',
        name: 'ميلك شيك توفي',
        category: 'CherryMilkshakeCups',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/5-CherryMilkshakeCups/6.jpeg',
        sizes: [
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 12 },
        ]
    },
    {
        id: 'E7',
        name: 'ميلك شيك توت أزرق',
        category: 'CherryMilkshakeCups',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/5-CherryMilkshakeCups/7.jpeg',
        sizes: [
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 12 },
        ]
    },
    {
        id: 'E8',
        name: 'ميلك شيك شوكلاته',
        category: 'CherryMilkshakeCups',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/5-CherryMilkshakeCups/8.jpeg',
        sizes: [
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 12 },
        ]
    },
    {
        id: 'E9',
        name: 'ميلك شيك كتكات',
        category: 'CherryMilkshakeCups',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/5-CherryMilkshakeCups/9.jpeg',
        sizes: [
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 12 },
        ]
    },
    {
        id: 'E10',
        name: 'ميلك شيك فانيليا',
        category: 'CherryMilkshakeCups',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/5-CherryMilkshakeCups/10.jpeg',
        sizes: [
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 12 },
        ]
    },
    {
        id: 'E11',
        name: 'ميلك شيك جالكسي',
        category: 'CherryMilkshakeCups',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/5-CherryMilkshakeCups/11.jpeg',
        sizes: [
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 12 },
        ]
    },
    {
        id: 'E12',
        name: 'ميلك شيك فراولة',
        category: 'CherryMilkshakeCups',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/5-CherryMilkshakeCups/12.jpeg',
        sizes: [
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 12 },
        ]
    },
    {
        id: 'E13',
        name: 'ميلك شيك اوريو',
        category: 'CherryMilkshakeCups',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/5-CherryMilkshakeCups/13.jpeg',
        sizes: [
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 12 },
        ]
    },
    {
        id: 'E14',
        name: 'ميلك شيك سير بلاك',
        category: 'CherryMilkshakeCups',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/5-CherryMilkshakeCups/14.jpeg',
        sizes: [
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 12 },
        ]
    },
    {
        id: 'E15',
        name: 'اسلاش',
        category: 'CherryMilkshakeCups',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/5-CherryMilkshakeCups/15.jpeg',
        sizes: [
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 12 },
        ]
    },

     // ===== مشروبات مثلجة  =====
     {
        id: 'I1',
        name: 'رد بول',
        category: 'IcedDrinks',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/6-IcedDrinks/1.jpeg',
        sizes: [
            { label: 'L',   short: 'L',  price: 18 },
        ]
    },
    {
        id: 'I2',
        name: 'بور هاوس',
        category: 'IcedDrinks',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/6-IcedDrinks/2.jpeg',
        sizes: [
            { label: 'L',   short: 'L',  price: 18 },
        ]
    },
    {
        id: 'I3',
        name: 'كودرد',
        category: 'IcedDrinks',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/6-IcedDrinks/3.jpeg',
        sizes: [
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 12 },
        ]
    },
    {
        id: 'I4',
        name: 'بايسن',
        category: 'IcedDrinks',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/6-IcedDrinks/4.jpeg',
        sizes: [
            { label: 'L',   short: 'L',  price: 12 },
        ]
    },
    {
        id: 'I5',
        name: 'موهيتو ازرق',
        category: 'IcedDrinks',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/6-IcedDrinks/5.jpeg',
        sizes: [
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 12 },
        ]
    },
    {
        id: 'I6',
        name: 'موهيتو فراولة',
        category: 'IcedDrinks',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/6-IcedDrinks/6.jpeg',
        sizes: [
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 12 },
        ]
    },
    {
        id: 'I7',
        name: 'سفن',
        category: 'IcedDrinks',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/6-IcedDrinks/7.jpeg',
        sizes: [
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 12 },
        ]
    },
    {
        id: 'I8',
        name: 'ريتا',
        category: 'IcedDrinks',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/6-IcedDrinks/8.jpeg',
        sizes: [
            { label: 'M',   short: 'M',  price: 10 },
            { label: 'L',   short: 'L',  price: 12 },
        ]
    },

    // ===== سلطة فواكة  =====
    {
        id: 'S1',
        name: 'سلطة أكواب الكرز',
        category: 'FruitSalad',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/7-FruitSalad/1.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 23 },
            { label: 'M',   short: 'M',  price: 30 },
            { label: 'L',   short: 'L',  price: 45 },
        ]
    },
    {
        id: 'S2',
        name: 'سلطة فواكة',
        category: 'FruitSalad',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/7-FruitSalad/2.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 20 },
            { label: 'M',   short: 'M',  price: 25 },
            { label: 'L',   short: 'L',  price: 40 },
        ]
    },
    {
        id: 'S3',
        name: 'رمان حبه',
        category: 'FruitSalad',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/7-FruitSalad/3.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 14 },
            { label: 'M',   short: 'M',  price: 16 },
        ]
    },
    {
        id: 'S4',
        name: 'إضافات',
        category: 'FruitSalad',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/7-FruitSalad/4.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 3 }
        ]
    },

    // ===== أيس كريم  =====
    {
        id: 'IC1',
        name: 'آيس كريم جالكسي',
        category: 'IceCream',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/8-IceCream/1.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 7 },
            { label: 'M',   short: 'M',  price: 14 },
            { label: 'L',   short: 'L',  price: 21 },
        ]
    },
    {
        id: 'IC2',
        name: 'آيس كريم فانيليا',
        category: 'IceCream',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/8-IceCream/2.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 7 },
            { label: 'M',   short: 'M',  price: 14 },
            { label: 'L',   short: 'L',  price: 21 },
        ]
    },
    {
        id: 'IC3',
        name: 'آيس كريم شوكولاته',
        category: 'IceCream',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/8-IceCream/3.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 7 },
            { label: 'M',   short: 'M',  price: 14 },
            { label: 'L',   short: 'L',  price: 21 },
        ]
    },
    {
        id: 'IC4',
        name: 'آيس كريم بستاشيو',
        category: 'IceCream',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/8-IceCream/4.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 7 },
            { label: 'M',   short: 'M',  price: 14 },
            { label: 'L',   short: 'L',  price: 21 },
        ]
    },
    {
        id: 'IC5',
        name: 'آيس كريم توفي',
        category: 'IceCream',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/8-IceCream/5.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 8 },
            { label: 'M',   short: 'M',  price: 16 },
            { label: 'L',   short: 'L',  price: 24 },
        ]
    },
    {
        id: 'IC6',
        name: 'آيس كريم توت أزرق',
        category: 'IceCream',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/8-IceCream/6.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 7 },
            { label: 'M',   short: 'M',  price: 14 },
            { label: 'L',   short: 'L',  price: 21 },
        ]
    },
    {
        id: 'IC7',
        name: 'آيس كريم اوريو',
        category: 'IceCream',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/8-IceCream/7.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 7 },
            { label: 'M',   short: 'M',  price: 14 },
            { label: 'L',   short: 'L',  price: 21 },
        ]
    },
    {
        id: 'IC8',
        name: 'آيس كريم اوريو',
        category: 'IceCream',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/8-IceCream/8.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 7 },
            { label: 'M',   short: 'M',  price: 14 },
            { label: 'L',   short: 'L',  price: 21 },
        ]
    },
    {
        id: 'IC8',
        name: 'آيس كريم فراولة',
        category: 'IceCream',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/8-IceCream/8.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 7 },
            { label: 'M',   short: 'M',  price: 14 },
            { label: 'L',   short: 'L',  price: 21 },
        ]
    },
    {
        id: 'IC9',
        name: 'ايس كريم المانجو',
        category: 'IceCream',
        // categoryName: '18 Kcal',
        // description: 'Iced Coffee V60',
        image: 'imgs/8-IceCream/9.jpeg',
        sizes: [
            { label: 'S',   short: 'S',  price: 7 },
            { label: 'M',   short: 'M',  price: 14 },
            { label: 'L',   short: 'L',  price: 21 },
        ]
    },


];

// ========== Initialize AOS ==========
AOS.init({ duration: 1000, once: true, offset: 100 });

// ========== Navbar Scroll Effect ==========
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    // On desktop always keep scrolled (dark), on mobile toggle
    if (window.innerWidth >= 992) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.toggle('scrolled', window.scrollY > 100);
    }
});

// Also set on resize
window.addEventListener('resize', function() {
    const navbar = document.getElementById('mainNav');
    if (window.innerWidth >= 992) {
        navbar.classList.add('scrolled');
    }
});

// ========== Active Navigation Link ==========
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.pageYOffset >= section.offsetTop - 200) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) link.classList.add('active');
    });
});

// ========== Smooth Scrolling ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.offsetTop - document.querySelector('.navbar').offsetHeight, behavior: 'smooth' });
            const nc = document.querySelector('.navbar-collapse');
            if (nc.classList.contains('show')) nc.classList.remove('show');
        }
    });
});

// ========== Render Menu Items ==========
function renderMenuItems(items) {
    const menuGrid  = document.getElementById('menuGrid');
    const noResults = document.getElementById('noResults');
    menuGrid.innerHTML = '';

    if (items.length === 0) { noResults.style.display = 'block'; return; }
    noResults.style.display = 'none';

    items.forEach((item, index) => {
        const el = document.createElement('div');
        el.className = 'menu-item';
        el.setAttribute('data-aos', 'fade-up');
        el.setAttribute('data-aos-delay', (index % 6) * 100);

        const sizeCells = item.sizes.map((s, i) =>
            `<div class="size-cell ${i === 0 ? 'selected' : ''}" data-item-id="${item.id}" data-size-index="${i}" title="${s.label}" onclick="selectDesktopSize(this, '${item.id}', ${i})">
                <span class="sc-short">${s.short || s.label}</span>
                <span class="sc-price">${s.price}<span class="sc-unit">﷼</span></span>
             </div>`
        ).join('');

        // Cheapest size = the price shown on the mobile card
        const cheapest = item.sizes.reduce((min, s) => s.price < min.price ? s : min, item.sizes[0]);

        // Show just the code number (use item id, stripping any "كود" prefix just in case)
        const codeOnly = String(item.id).replace(/كود\s*:?\s*/g, '').trim();

        el.innerHTML = `
            <div class="menu-item-image" onclick="openSizePicker('${item.id}')" role="button" aria-label="عرض تفاصيل ${item.name}">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <span class="menu-item-category">${codeOnly}</span>
                
            </div>
            <div class="menu-item-content">
                <div class="menu-item-badges-row">
                    
                    <span class="badge-code">${codeOnly}</span>
                </div>
                <h4 class="menu-item-title">${item.name}</h4>
                <div class="sizes-grid ${item.sizes.length === 1 ? 'single-size' : ''}" id="sizes-${item.id}">${sizeCells}</div>
                <button class="menu-item-order-btn" id="order-btn-${item.id}" onclick="desktopAddToCart('${item.id}')">
                    <i class="fas fa-bag-shopping"></i> اطلب الآن
                </button>
                <div class="menu-item-price-row">
                
                    <span class="menu-item-price">${cheapest.price}<span class="price-unit">﷼ </span></span>
                    <button class="menu-item-add-btn" onclick="openSizePicker('${item.id}')" aria-label="أضف للسلة">

                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>`;

        menuGrid.appendChild(el);
    });

    AOS.refresh();
}


// ========== Speed Dial ==========
function toggleSpeedDial() {
    document.getElementById('speedDial').classList.toggle('open');
}

document.addEventListener('click', function(e) {
    const dial = document.getElementById('speedDial');
    if (dial && !dial.contains(e.target)) {
        dial.classList.remove('open');
    }
});

// ========== Filter & Search ==========
let currentFilter = 'all';

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        currentFilter = this.getAttribute('data-filter');
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        applyFilterAndSearch();

        const menuSection = document.getElementById('menu');
        if (menuSection) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const top = menuSection.getBoundingClientRect().top + window.pageYOffset - navHeight - 10;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

document.getElementById('menuSearch').addEventListener('input', applyFilterAndSearch);

function applyFilterAndSearch() {
    const term = document.getElementById('menuSearch').value.toLowerCase();
    let filtered = currentFilter === 'all' ? menuData : menuData.filter(i => i.category === currentFilter);
    if (term) filtered = filtered.filter(i => i.name.toLowerCase().includes(term) || i.description.toLowerCase().includes(term));
    renderMenuItems(filtered);
}

// ========== Back to Top ==========
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => backToTopBtn.classList.toggle('show', window.pageYOffset > 300));
backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ========== Init ==========
document.addEventListener('DOMContentLoaded', function() {
    renderMenuItems(menuData);
    new bootstrap.Carousel(document.getElementById('heroCarousel'), { interval: 5000, pause: 'hover' });
});

// ========== Lazy Load ==========
if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    document.querySelectorAll('img[loading="lazy"]').forEach(img => obs.observe(img));
}

console.log('%c🍹 مرحباً بك في عصير النجوم! 🍹', 'color: #2ea84f; font-size: 20px; font-weight: bold;');

// ========== Fix Filter Sticky Top ==========
function fixFilterStickyTop() {
    const navbar = document.getElementById('mainNav');
    const filterSection = document.querySelector('.menu-filter-section');
    if (navbar && filterSection) {
        const navHeight = navbar.offsetHeight;
        filterSection.style.top = navHeight + 'px';
    }
}
window.addEventListener('load', fixFilterStickyTop);
window.addEventListener('resize', fixFilterStickyTop);

// ========================================
// ========== Cart & Size Picker ==========
// ========================================

const WHATSAPP_NUMBER = '201010610674';

// Cart state: array of { itemId, name, image, sizeLabel, price, qty }
let cart = [];

// Size picker state (current item being configured)
let spCurrentItem = null;
let spSelectedSizeIndex = 0;
let spQty = 1;

function findMenuItem(itemId) {
    return menuData.find(i => i.id === itemId);
}

// ---------- Size Picker ----------
// ========== Desktop Size Selection ==========
// Map to track selected size index per item on desktop
const desktopSelectedSize = {};

function selectDesktopSize(el, itemId, sizeIndex) {
    // Update selection tracking
    desktopSelectedSize[itemId] = sizeIndex;

    // Update visual selection
    const grid = document.getElementById('sizes-' + itemId);
    if (!grid) return;
    grid.querySelectorAll('.size-cell').forEach(cell => cell.classList.remove('selected'));
    el.classList.add('selected');

    // Update every calories badge for this item (image overlay + mobile row) to match the newly selected size
    const item = findMenuItem(itemId);
    if (item) {
        const cal = item.sizes[sizeIndex].cal ?? '—';
        document.querySelectorAll('[data-cal-for="' + itemId + '"] .cal-value').forEach(el => {
            el.textContent = cal;
        });
    }
}

function desktopAddToCart(itemId) {
    const item = findMenuItem(itemId);
    if (!item) return;

    const sizeIndex = desktopSelectedSize[itemId] !== undefined ? desktopSelectedSize[itemId] : 0;
    const size = item.sizes[sizeIndex];

    addToCart(item, size, 1);

    // Quick bounce feedback on the cart icon
    const cartBtn = document.getElementById('cartIconBtn');
    if (cartBtn) {
        cartBtn.classList.add('shake');
        setTimeout(() => cartBtn.classList.remove('shake'), 400);
    }

    // Visual feedback on the button
    const btn = document.getElementById('order-btn-' + itemId);
    if (btn) {
        const orig = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> تمت الإضافة!';
        btn.style.background = '#4caf50';
        setTimeout(() => {
            btn.innerHTML = orig;
            btn.style.background = '';
        }, 1200);
    }
}

function openSizePicker(itemId) {
    const item = findMenuItem(itemId);
    if (!item) return;

    spCurrentItem = item;
    spSelectedSizeIndex = 0;
    spQty = 1;

    document.getElementById('spImg').src = item.image;
    document.getElementById('spImg').alt = item.name;
    document.getElementById('spName').innerHTML = item.name;
    document.getElementById('spCode').textContent = item.id;
    document.getElementById('spIngredients').textContent = item.description || '';

    renderSpOptions();
    updateSpHeroCal();
    updateSpQtyDisplay();
    updateSpTotalPrice();

    document.getElementById('sizePickerOverlay').classList.add('active');
    document.getElementById('sizePickerSheet').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeSizePicker() {
    document.getElementById('sizePickerOverlay').classList.remove('active');
    document.getElementById('sizePickerSheet').classList.remove('open');
    document.body.style.overflow = '';
    spCurrentItem = null;
}

function renderSpOptions() {
    const wrap = document.getElementById('spOptions');
    if (!spCurrentItem) { wrap.innerHTML = ''; return; }

    wrap.innerHTML = spCurrentItem.sizes.map((s, i) => `
        <div class="size-picker-option ${i === spSelectedSizeIndex ? 'selected' : ''}" onclick="selectSpSize(${i})">
            <span class="size-picker-option-label">${s.short || s.label}</span>
            <span class="size-picker-option-price">${s.price} ﷼</span>
        </div>
    `).join('');
}

function updateSpHeroCal() {
    if (!spCurrentItem) return;
    const size = spCurrentItem.sizes[spSelectedSizeIndex];
    const calEl = document.getElementById('spHeroCalValue');
    if (calEl) calEl.textContent = size?.cal ?? '—';
}

function selectSpSize(index) {
    spSelectedSizeIndex = index;
    renderSpOptions();
    updateSpTotalPrice();
    updateSpHeroCal();
}

function changeSpQty(delta) {
    spQty = Math.max(1, spQty + delta);
    updateSpQtyDisplay();
    updateSpTotalPrice();
}

function updateSpQtyDisplay() {
    document.getElementById('spQty').textContent = spQty;
}

function updateSpTotalPrice() {
    if (!spCurrentItem) return;
    const size = spCurrentItem.sizes[spSelectedSizeIndex];
    document.getElementById('spTotalPrice').textContent = size.price * spQty;
}

function confirmAddToCart() {
    if (!spCurrentItem) return;
    const size = spCurrentItem.sizes[spSelectedSizeIndex];
    addToCart(spCurrentItem, size, spQty);
    closeSizePicker();

    // Quick bounce feedback on the cart icon
    const cartBtn = document.getElementById('cartIconBtn');
    if (cartBtn) {
        cartBtn.classList.add('shake');
        setTimeout(() => cartBtn.classList.remove('shake'), 400);
    }
}

// ---------- Cart Logic ----------
// ========== Offers - Add to Cart ==========
function addOfferToCart(name, price, image, btnEl) {
    const fakeItem = { id: 'offer_' + name, name: name, image: image };
    const fakeSize = { short: 'عرض', label: 'عرض', price: price };
    addToCart(fakeItem, fakeSize, 1);

    // Shake cart icon
    const cartBtn = document.getElementById('cartIconBtn');
    if (cartBtn) {
        cartBtn.classList.add('shake');
        setTimeout(() => cartBtn.classList.remove('shake'), 400);
    }

    // Visual feedback on button
    if (btnEl) {
        const orig = btnEl.innerHTML;
        btnEl.innerHTML = '<i class="fas fa-check"></i> تمت الإضافة!';
        btnEl.style.background = '#4caf50';
        btnEl.disabled = true;
        setTimeout(() => {
            btnEl.innerHTML = orig;
            btnEl.style.background = '';
            btnEl.disabled = false;
        }, 1200);
    }
}

function addToCart(item, size, qty) {
    const sizeLabel = size.short || size.label;
    const existing = cart.find(c => c.itemId === item.id && c.sizeLabel === sizeLabel);

    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({
            itemId: item.id,
            name: item.name,
            image: item.image,
            sizeLabel: sizeLabel,
            price: size.price,
            qty: qty
        });
    }
    renderCart();
}

function updateCartQty(index, delta) {
    if (!cart[index]) return;
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    renderCart();
}

function removeCartItem(index) {
    cart.splice(index, 1);
    renderCart();
}

function clearCart() {
    cart = [];
    renderCart();
}

function getCartTotal() {
    return cart.reduce((sum, c) => sum + (c.price * c.qty), 0);
}

function getCartCount() {
    return cart.reduce((sum, c) => sum + c.qty, 0);
}

function getCartDisplayLabel(c) {
    const stripped = String(c.sizeLabel || '').replace(/ـ/g, '').trim();
    if (stripped === 'السعر') {
        return `${c.price} ﷼`;
    }
    return c.sizeLabel;
}

function renderCart() {
    const body = document.getElementById('cartBody');
    const footer = document.getElementById('cartFooter');
    const badge = document.getElementById('cartBadge');

    const count = getCartCount();
    if (count > 0) {
        badge.textContent = count;
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }

    if (cart.length === 0) {
        body.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-basket"></i>
                <p>سلتك فاضية</p>
                <span>أضف منتجات من المنيو</span>
            </div>`;
        footer.style.display = 'none';
        return;
    }

    footer.style.display = 'flex';
    body.innerHTML = cart.map((c, i) => `
        <div class="cart-item">
            <img src="${c.image}" alt="${c.name}" class="cart-item-img">
            <div class="cart-item-info">
                <div class="cart-item-name-row">
                    <span class="cart-item-name">${c.name}</span>
                    ${!String(c.itemId).startsWith('offer_') ? `<span class="cart-item-code">${c.itemId}</span>` : ''}
                </div>
                <div class="cart-item-size">${getCartDisplayLabel(c)}</div>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateCartQty(${i}, -1)" aria-label="تقليل"><i class="fas fa-minus"></i></button>
                <span class="qty-count">${c.qty}</span>
                <button class="qty-btn" onclick="updateCartQty(${i}, 1)" aria-label="زيادة"><i class="fas fa-plus"></i></button>
            </div>
            <div class="cart-item-price">${c.price * c.qty} ﷼</div>
            <button class="cart-item-delete" onclick="removeCartItem(${i})" aria-label="حذف"><i class="fas fa-trash-alt"></i></button>
        </div>
    `).join('');

    document.getElementById('cartTotalAmount').textContent = getCartTotal() + ' ﷼';
}

function openCart() {
    document.getElementById('cartOverlay').classList.add('active');
    document.getElementById('cartDrawer').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartOverlay').classList.remove('active');
    document.getElementById('cartDrawer').classList.remove('open');
    document.body.style.overflow = '';
}

function sendWhatsAppOrder() {
    if (cart.length === 0) return;

    let message = 'مرحباً  كافيه مالو، اود بطلب التالي :%0A%0A';
    cart.forEach((c, i) => {
        const codeText = !String(c.itemId).startsWith('offer_') ? ` [${c.itemId}]` : '';
        message += `${i + 1}. ${c.name}${codeText} (${getCartDisplayLabel(c)}) × ${c.qty} = ${c.price * c.qty} ﷼%0A`;
    });
    message += `%0Aالإجمالي: ${getCartTotal()} ﷼`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
}
