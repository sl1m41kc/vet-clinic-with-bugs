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
                link: 'https://vk.com/vetlekar',
                isBlank: true
            },
            SVG: <VKLogoSVG width={147} height={94} />
        }
    ]
    const CONTACT_CARD_DATA = [
        {
            title: "WhatsApp",
            button: {
                text: "Написать",
                link: 'https://wa.me/73832850204?text=Здравствуйте',
                isBlank: true
            },
            SVG: <WhatsAppLogo width={105} height={105} />
        },
        {
            title: "Почта",
            button: {
                text: "Написать",
                link: 'mailto:vet-lekar@mail.ru',
                isBlank: true
            },
            SVG: <ADogSVG width={105} height={105} />
        }
    ]
    const ADDRESS_CARD_DATA = [
        {
            title: "ул. Красный проспект, 169/1",
            description: "630049, г. Новосибирск,",
            twoGis: {
                desktop: 'https://2gis.ru/novosibirsk/search/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%20169%2F1/firm/70000001007443382/82.908351%2C55.064944?m=82.913496%2C55.062791%2F14.99',
                mobile: 'dgis://2gis.ru/routeSearch/rsType/car/to/82.908351,55.064944'
            },
            yandexMap: {
                desktop: 'https://yandex.ru/maps/65/novosibirsk/?ll=82.908321%2C55.065860&mode=poi&poi%5Bpoint%5D=82.908340%2C55.064933&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1723349770&z=16',
                mobile: 'yandexnavi://build_route_on_map?lat_to=55.064973&lon_to=82.908284'
            }
        },
        {
            title: "ул. Кропоткина, 132",
            description: "630111, г. Новосибирск",
            twoGis: {
                desktop: 'https://2gis.ru/novosibirsk/firm/141266769547745/82.944743%2C55.058203?m=82.94472%2C55.057734%2F18.13',
                mobile: 'dgis://2gis.ru/routeSearch/rsType/car/to/82.944743,55.058203'
            },
            yandexMap: {
                desktop: 'https://yandex.ru/maps/65/novosibirsk/?ll=82.944628%2C55.057987&mode=poi&poi%5Bpoint%5D=82.944751%2C55.058213&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1162092808&z=18.6',
                mobile: 'yandexnavi://build_route_on_map?lat_to=55.058203&lon_to=82.944743'
            }
        },
        {
            title: "ул. Зорге, 77а",
            description: "630088, г. Новосибирск",
            twoGis: {
                desktop: "https://2gis.ru/novosibirsk/inside/141373143535577/firm/70000001043879123/82.913397%2C54.937667?m=82.913982%2C54.937551%2F19.24",
                mobile: "dgis://2gis.ru/routeSearch/rsType/car/to/82.913397,54.937667"
            },
            yandexMap: {
                desktop: "https://yandex.ru/maps/65/novosibirsk/?ll=82.913689%2C54.937650&mode=poi&poi%5Bpoint%5D=82.913420%2C54.937600&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D88866932522&z=19.16",
                mobile: "yandexnavi://build_route_on_map?lat_to=54.937650&lon_to=82.913420"
            }
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