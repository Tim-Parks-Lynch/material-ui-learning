import React from 'react';
import { Box, Stack, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

const MuiImageList = () => {
  return (
    <Stack spacing={4}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
            {/* Adds a text image overlay, check out the MuiPage to explore more props */}
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>

      {/* woven variant creates different container sizes to make a cool varied layout */}
      <ImageList variant="woven" sx={{ width: 500, height: 450 }} cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* masonry variant best used for images that are varied in height/width/aspect ration */}
      <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};

export default MuiImageList;

// put your own data in here, this won't load
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d25',
    title: 'Random Image',
  },
  {
    img: 'https://images.unsplash.com/random',
    title: 'Random Image',
  },
  {
    img: 'https://images.unsplash.com/random',
    title: 'Random Image',
  },
  {
    img: 'https://images.unsplash.com/random',
    title: 'Random Image',
  },
  {
    img: 'https://images.unsplash.com/random',
    title: 'Random Image',
  },
  {
    img: 'https://images.unsplash.com/random',
    title: 'Random Image',
  },
  {
    img: 'https://images.unsplash.com/random',
    title: 'Random Image',
  },
  {
    img: 'https://images.unsplash.com/random',
    title: 'Random Image',
  },
];
