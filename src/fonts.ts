import { Font } from '@react-pdf/renderer';

Font.register({
  family: 'Poppins',
  fonts: [
    {
      fontWeight: 300,
      fontStyle: 'normal',
      src: './assets/fonts/Poppins-Light.ttf',
    },
    {
      fontWeight: 400,
      fontStyle: 'normal',
      src: './assets/fonts/Poppins-Regular.ttf',
    },
    {
      fontWeight: 700,
      fontStyle: 'normal',
      src: './assets/fonts/Poppins-Bold.ttf',
    },
  ],
});

// Disable hyphenation so whole words wrap to a new line instead of being split.
Font.registerHyphenationCallback((word) => [word]);
