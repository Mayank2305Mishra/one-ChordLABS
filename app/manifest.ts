import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'ChordLABS',
        short_name: 'ChordLABS',
        description: 'ChordLABS , you end to end audio solutions.',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        icons: [
        {
            "purpose": "maskable",
            "sizes": "512x512",
            "src": "icon512_maskable.png",
            "type": "image/png"
        },
        {
            "purpose": "any",
            "sizes": "512x512",
            "src": "icon512_rounded.png",
            "type": "image/png"
        }
    ],
    orientation: "any",
    lang: "en-GB",
    dir: "auto"
    }
}