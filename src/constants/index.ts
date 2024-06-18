const production = process.env.NODE_ENV === 'production';
const URL_API = production 
    ? 'not'
    : 'http://localhost:80/api/'
const Links = [
    {
        id: 1,
        text: 'Главная',
        link: '/'
    },
    {
        id: 2,
        text: 'Коктейли',
        link: '/cocktails'
    },
    {
        id: 3,
        text: 'F.A.Q',
        link: '/faq'
    }
];

export const Constants = {
    Links,
    URL_API
}