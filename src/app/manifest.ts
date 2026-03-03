import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'AlSolved Certificazioni',
        short_name: 'AlSolved',
        description: 'Il partner tecnologico per le aziende moderne. Certificazioni ISO, automazione della compliance e audit strategici.',
        start_url: '/',
        display: 'standalone',
        background_color: '#f8fafc',
        theme_color: '#f8fafc',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
