import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    en: {
        translation: {
            //navbar
            contacts: 'Contacts',
            search: 'Search',
            saved: 'Saved',
            profile: 'Profile',
            categories: 'Categories',
            aboutUs: 'About us',
            payment: 'Payment & Delivery',
            order: 'Order',
            faq: 'F.A.Q',
            cooparation: 'Cooparation',
            brands: 'Brands',
            privacy_and_rules: 'Privace and rules',
            termsOfUse: 'Terms of Use',
            privacyPolicy: 'Pivacy policy',
            help: 'Help',
            support: 'Help & Support',
            e_mail: 'E-mail us',
            telephone: 'Hotline:',
            programs: 'Mobile appliсations:',
            NewProducts: 'New Products:',
            manat: 'manat',
            addToCart: 'Add to Cart',
            cartItems: 'Cart Items',
            empty: 'Empty',
            total: 'Total:',
            clear: 'Clear',

        },
    },
    ru: {
        translation: {
            //navbar
            contacts: 'Контакты',
            search: 'Поиск',
            saved: 'Oтложенные',
            profile: 'Профиль',
            aboutUs: 'О нас',
            payment: 'Доставка и оплата',
            order: 'Заказать',
            faq: 'Вопросы-Ответы',
            cooparation: 'Сотрудничество',
            brands: 'Бренды',
            privacy_and_rules: 'Условия Обслуживания',
            termsOfUse: 'Правила пользования',
            privacyPolicy: 'Конфиденциальность',
            help: 'Помощь',
            support: 'Помощь и поддержка',
            e_mail: 'Эл. адрес',
            telephone: 'Горячая линия:',
            programs: 'Мобильные приложения:',
            categories: "Категория",
            NewProducts: 'Новые продукты:',
            manat: 'манат',
            addToCart: 'В корзину',
            cartItems: 'Товары в корзине',
            empty: 'Пустой',
            total: 'Всего товаров:',
            clear: 'Очистить',

        },
    },
    tm: {
        //navbar
        translation: {
            contacts: 'Habarlaşmak',
            search: 'Gözleg',
            saved: 'Halananlar',
            profile: 'Profil',
            aboutUs: 'Biz barada',
            payment: 'Eltip bermek we tölemek',
            order: 'Sargyt etmek',
            faq: 'Sorag-Jogap',
            cooparation: 'Hyzmatdaşlyk',
            brands: 'Markalar',
            privacy_and_rules: 'Ulanyş düzgünleri',
            termsOfUse: 'Ulanyş düzgünleri',
            privacyPolicy: 'Gizlinlik ýörelgesi',
            help: 'Kömek',
            support: 'Kömek we goldaw',
            e_mail: 'E poçtalarymyz',
            telephone: 'Telefon belgimiz:',
            programs: 'Telefon üçin programmalar:',
            categories: 'Kategoriýalar',
            NewProducts: 'Täze harytlar:',
            manat: 'manat',
            addToCart: 'Sebede goş',
            cartItems: 'Sebetdäki harytlar',
            empty: 'Boş',
            total: 'Jemi:',
            clear: 'Pozmak'


        }
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem('lng'),
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;