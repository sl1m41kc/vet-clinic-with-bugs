import { ReactElement } from "react"

export interface IServiceGroup {
    title: string,
    image: string,
    pathName: string, // название группы в стороке URL
    services: {
        id: number,
        text: string,
        isLink: boolean, // есть ли у услуги подробное описание. Если да - она будет ссылкой в списке услуг на главной
        description?: ReactElement[]
        notes?: string[]
    }[],
    SVG?: ReactElement // У некоторых групп услуг есть в отображении на главной SVG на фоне
}