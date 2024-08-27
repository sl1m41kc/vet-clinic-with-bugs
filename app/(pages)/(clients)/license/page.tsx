import { LICENSES_DATA } from '@/app/data/licenseData'
import classes from './page.module.css'
import Image from 'next/image'
import clsx from 'clsx'
import Link from 'next/link'

export default function page() {
    return (
        <section className='container'>
            <div className={classes.wrapper}>
                <h1 className={classes.title}>Лицензии</h1>
                <div className={classes.licenseList}>
                    {LICENSES_DATA.map((license, index) => (
                        <Link key={clsx(index, license.path)} className={classes.license} href={'/license/' + license.path}>
                            <Image
                                className={classes.image}
                                src={license.image.path}
                                alt={license.image.alt}
                                width={280}
                                height={400}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}