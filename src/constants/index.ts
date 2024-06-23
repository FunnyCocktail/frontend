import homeSvg from '@/assets/svgs/home.svg'
import cocktailSvg from '@/assets/svgs/cocktail.svg'
import faqSvg from '@/assets/svgs/faq.svg'

const production = process.env.NODE_ENV === 'production';
const URL_API = production 
    ? 'not'
    : 'http://localhost:80/api/'
const Links = [
    {
        id: 1,
        text: 'Главная',
        link: '/',
        svg: homeSvg
    },
    {
        id: 2,
        text: 'Коктейли',
        link: '/cocktails',
        svg: cocktailSvg
    },
    {
        id: 3,
        text: 'F.A.Q',
        link: '/faq',
        svg: faqSvg
    }
];

export const Constants = {
    Links,
    URL_API
}