import React, { useState } from 'react';
import imageLinks from './imageLinks';

// Setting up the state and options in mid.jsx
export const useAppState = () => {
  const [selectedOption, setSelectedOption] = useState('home');

  // Images and descriptions for each option
  const options = {
    home: {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiSWf2fFh46s1ETv5T7rb5elZnEJp5hprOLA&s', // replace with actual image URLs
      description: 'Welcome to our home page! Here we provide an overview of our app.',
      heading: "Career development center",
    },
    about: {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqXUWHhvgS_uCZR1vCu0jYrGiSS_5OahAeA&s', // replace with actual image URLs
      description: 'Learn more about our company, its mission, and our values.',
      heading: "About CADEC",
    },
    organisation: {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJDx2rgz5O2J26_fzWpRxRIHyKbg_uOfsUQ&s', // replace with actual image URLs
      description: 'Find out about our organizational structure and team.',
      heading: "Organisation Structure",
    },
    events: {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwsAn_T3aA0ZWjVoysDInUL7Aj0n3TZUamsQ&s', // replace with actual image URLs
      description: 'Browse through the events and activities we organize.',
      heading: "Our Events",
    },
    startup: {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_G9U9095poYEIvtg8fnA2Ef3dcjLEebptQ&s', // replace with actual image URLs
      description: 'Discover the startups we work with and the opportunities available.',
      heading: "Our Startups",
    },
  };

  return { selectedOption, setSelectedOption, options };
};
