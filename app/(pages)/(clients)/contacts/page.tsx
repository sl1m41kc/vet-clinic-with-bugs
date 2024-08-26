import classes from './page.module.css'
import VKLogoSVG from '@/public/Svg/VK_logo.svg'
import ReceptionSVG from '@/public/Svg/Reception.svg'
import WhatsAppLogo from '@/public/Svg/Whatsapp.svg'
import ADogSVG from '@/public/Svg/aDog.svg'
import ActionCard from '@/app/components/ActionCard/ActionCard'
import clsx from 'clsx'
import { AddressCard } from '@/app/components/AddressCard/AddressCard'

export default function page() {

    const ACTION_CARD_DATA = [
        {
            title: 'Единый многоканальный телефон',
            description: "Наши клиники работают 24/7",
            phone: {
                phone: "+7 (383) 285-02-04",
                link: 'tel:+73832850204'
            },
            SVG: <ReceptionSVG width={105} height={135} />
        },
        {
            title: 'Онлайн-консультация',
            description: 'Наши специалисты ответят на все ваши вопросы',
            button: {
                text: "Перейти в VK",
                link: '/'
            },
            SVG: <VKLogoSVG width={147} height={94} />
        }
    ]
    const CONTACT_CARD_DATA = [
        {
            title: "WhatsApp",
            button: {
                text: "Написать",
                link: '/'
            },
            SVG: <WhatsAppLogo width={105} height={105} />
        },
        {
            title: "Почта",
            button: {
                text: "Написать",
                link: '/'
            },
            SVG: <ADogSVG width={105} height={105} />
        }
    ]
    const ADDRESS_CARD_DATA = [
        {
            title: "ул. Красный проспект, 169/1",
            description: "630049, г. Новосибирск,",
            twoGis: '/',
            yandexMap: '/'
        },
        {
            title: "ул. Кропоткина, 132",
            description: "630111, г. Новосибирск",
            twoGis: '/',
            yandexMap: '/'
        },
        {
            title: "ул. Зорге, 77а",
            description: "630088, г. Новосибирск",
            twoGis: "/",
            yandexMap: "/"
        }
    ]

    return (
        <section className='container'>
            <div className={classes.grid}>
                {ACTION_CARD_DATA.map((card, index) => (
                    <div key={clsx(index, card.title)} className={clsx(classes.actionCard, index === 0 && classes.first)}>
                        <ActionCard {...card} />
                    </div>
                ))}
                {CONTACT_CARD_DATA.map((card, index) => (
                    <div key={clsx(index, card.title)} className={clsx(classes.contactCard, index === 0 && classes.first)}>
                        <ActionCard {...card} />
                    </div>
                ))}
                {ADDRESS_CARD_DATA.map((card, index) => (
                    <div key={clsx(index, card.title)} className={clsx(classes.addressCard, index === 0 && classes.first)}>
                        <AddressCard {...card} />
                    </div>
                ))}
                <iframe className={classes.map} src="https://yandex.ru/map-widget/v1/?um=constructor%3A7369060039cd0e80c294a106e855a50e053215a86afca235bac488aca89e6a93&amp;source=constructor" />
            </div>
        </section>
    )
}