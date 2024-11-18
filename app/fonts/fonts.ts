import localFont from 'next/font/local';

export const montserrat = localFont({
    src: [
        {
            path: './Montserrat-VariableFont_wght.woff2',
            style: 'normal',
        },
    ],
    variable: '--font-montserrat',
});