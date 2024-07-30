"use client"
import React from 'react'
import { useColor } from 'color-thief-react'
import { colord } from 'colord'

const cards = [
    {
        Image1: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D",
        Image2: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        Image3: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8fDA%3D",
        Category: "Food",
    },
    {
        Image1: "https://plus.unsplash.com/premium_photo-1661964074409-dfa736a88357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmlnaHRlciUyMGpldHxlbnwwfHwwfHx8MA%3D%3D",
        Image2: "https://images.unsplash.com/photo-1621632361333-4649f0b59adc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBsYW5lc3xlbnwwfHwwfHx8MA%3D%3D",
        Image3: "https://images.unsplash.com/photo-1684627539737-2cf0198b5482?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZpZ2h0ZXIlMjBqZXR8ZW58MHx8MHx8fDA%3D",
        Category: "Planes",
    },
    {
        Image1: "https://images.unsplash.com/photo-1484704324500-528d0ae4dc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpcmRzfGVufDB8fDB8fHww",
        Image2: "https://media.istockphoto.com/id/1657845011/photo/the-bald-eagle-is-a-bird-of-prey-found-in-north-america-a-sea-eagle-prince-william-sound.webp?b=1&s=170667a&w=0&k=20&c=Airjr2-NEM5fgjhLC0Nl8_gZq_8gz5Gfwkl55X_ZApQ=",
        Image3: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlyZHN8ZW58MHx8MHx8fDA%3D",
        Category: "Birds",
    },
    {
        Image1: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww",
        Image2: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        Image3: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww",
        Category: "Nature",
    },
    {
        Image1: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
        Image2: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
        Image3: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
        Category: "Technology",
    }
];

const CategoryCard = ({ Image1, Image2, Image3, Category }) => {
    const { data: color } = useColor(Image1, 'hex', { crossOrigin: 'anonymous' })
    
    const bgColor = React.useMemo(() => {
      if (color) {
        return colord(color)
          .desaturate(0.1)
            
          .toHex()
      }
      return '#A9A9A9   '
    }, [color])
  
    return (
      <div className="overflow-hidden rounded-lg m-1 mt-2 w-72 h-32 group " style={{ backgroundColor: bgColor }}>
        <div className="px-4 py-5 sm:p-6 opacity-80 bg-gray-100">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-24 h-24 z-30 opacity-100">
              <img src={Image1} alt={Category} className='w-16 h-20 rounded-xl absolute opacity-100 -translate-x-3 -rotate-6 group-hover:-rotate-[10deg] group-hover:-translate-x-4 transition-all duration-300 object-cover' />
              <img src={Image2} alt={Category} className='w-16 h-20 rounded-xl absolute opacity-100 group-hover:-translate-y-2 transition-all duration-300 object-cover' />
              <img src={Image3} alt={Category} className='w-16 h-20 rounded-xl absolute opacity-100 translate-x-3 rotate-6 group-hover:rotate-[10deg] group-hover:translate-x-4 transition-all duration-300 object-cover' />
            </div>
            <div className="flex-grow">
              <p className="text-xs text-gray-700 opacity-100">More ideas for</p>
              <h3 className="text-lg font-semibold text-gray-900 opacity-100">{Category}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export const Categories = () => { 
    return (
      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <CategoryCard key={index} {...card} />
        ))}
      </div>
    )
  }