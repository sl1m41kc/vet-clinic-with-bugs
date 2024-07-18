export interface IServiceCard {
    title: string,
    services: {
        text: string,
        isLink: boolean
    }[],
    hasSVG: boolean,
    src: string
}