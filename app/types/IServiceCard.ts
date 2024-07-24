import React from "react"

export interface IServiceCard {
    title: string,
    services: {
        text: string,
        isLink: boolean
    }[],
    SVG?: React.ReactElement
}