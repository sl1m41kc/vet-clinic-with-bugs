import { ReactElement } from "react"

export interface IServiceCard {
    title: string,
    image: string,
    pathName: string,
    services: {
        id: number,
        text: string,
        isLink: boolean,
        description?: ReactElement[]
        notes?: string[]
    }[],
    SVG?: ReactElement
}