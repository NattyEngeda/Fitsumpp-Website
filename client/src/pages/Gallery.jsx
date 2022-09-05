import React from 'react'
import { useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

// Data
import GalleryImages from '../data/GalleryImages';
// Aos Library
import aos from 'aos';
import "aos/dist/aos.css"

// Function
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}
export default function Gallery() {
  // Use Effect to scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <section 
    data-aos='fade-up'
    className='w-full'>
      <div className='py-10 lg:py-5 flex flex-col gap-10'>
        <div className='flex flex-col items-center gap-3'>
          <h1 className='text-3xl text-four-500'>Gallery</h1>
          <hr className='w-[5%] border-2 border-four-500 bg-four-500 rounded-full' />
        </div>
        <div className='px-1 md:px-5'>
          <ImageList
            sx={{
              width: "100%",
              height: "100%"
            }}
            variant="quilted"
            cols={4}
            rowHeight={300}
          >
            {GalleryImages.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 350, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </section>
  )
}
