import {LOCALES} from './locale';

export const messages = {
    [LOCALES.ENGLISH]: {
        price_display:
            'How {n, number, ::currency/USD} is displayed in your selected language',
        number_display:
            'This is how {n, number} is formatted in the selected locale',
        start_today: 'Start Today: {d, date}',
        // menu
        about_project: 'About the project',
        contact_us: 'Contact us',
        click_count: 'You clicked {count, plural, one {# time} other {# times}}',
        click_here: 'click here',
    },
    [LOCALES.JAPANESE]: {
        price_display:
            '選択した言語で{n, number, ::currency/USD}がどのように表示されるか',
        number_display:
            'これは、選択したロケールで{n, number}がフォーマットされる方法です。',
        start_today: '今日から始める：{d, date}',
        // menu
        about_project: 'プロジェクトについて',
        contact_us: 'お問い合わせ',
        click_count: '{count, plural, one {# 回} other {# 回}}クリックしました',
        click_here: 'ここをクリック',
    },
};

export const menu = [
    {
        key: 'about_project',
        title: 'About',
        path: '/about'
    },
    {
        key: 'product',
        title: 'Product',
        path: '/product'
    }
];
