import { LICENSES_DATA } from "@/app/data/licenseData"
import classes from "./page.module.css"
import Image from "next/image"
import { notFound } from "next/navigation"

interface IProps {
    params: { licensePath: string }
}

export default function page({ params: { licensePath } }: IProps) {
    const activeLicense = LICENSES_DATA.find(license => license.path === licensePath)
    if (!activeLicense) { notFound() }
    return (
        <section className="container">
            <div className={classes.wrapper}>
                <h1 className={classes.title}>Лицензия</h1>
                <div className={classes.license}>
                    <Image
                        className={classes.image}
                        src={activeLicense.image.path}
                        alt={activeLicense.image.alt}
                        width={1050}
                        quality={100}
                        height={750}
                    />
                </div>
            </div>
        </section>
    )
}