import img1 from '../assets/images/blogs/newProduct/laserCutting.jpg'
import img2 from '../assets/images/blogs/newProduct/UV.jpg'

export default[
    {id: 1, comp: 'kir', title: 'New CO2 Laser Cutting Machine', image: img1, style:
        'w-full md:h-96 normshad rounded-xl flex flex-col md:grid grid-cols-3 shadow-lg overflow-hidden hover:shadow-2xl md:transBox cursor-pointer',
        name: 'Laser Cutting Machine',
        delay: 100,
        desc: 'A new CO2 Laser Cutting machine used for Cutting, Engraving, Tracing an Acrlyric material'
    },
    {id: 2, comp: 'bez', title: ' New UV Printing mAchine ', image: img2, style:
        'w-full md:h-96 normshad rounded-xl flex flex-col md:grid grid-cols-3 shadow-lg overflow-hidden hover:shadow-2xl md:transBox cursor-pointer',
        name: 'CMYK Flatbed UV Printing Machine',
        delay: 200,
        desc: 'UV flatbed printer is a high precision digital printing machine designed for personalized products'
    }
]