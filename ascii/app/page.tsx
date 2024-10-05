// pages/index.tsx
'use client'
import React, { useState } from 'react';
import TextInput from '../components/textInput/page';
import AsciiPreview from '../components/textPreview/page';
import { convertTextToAscii } from '../utils/asciiConverter';

const Home: React.FC = () => {
  const [asciiArt, setAsciiArt] = useState<string>(''); // State to store ASCII art

  const handleTextConvert = async (text: string) => {
      try {
          const ascii = await convertTextToAscii(text); // Await ASCII conversion
          setAsciiArt(ascii); // Update the state with the generated ASCII art
      } catch (error) {
          console.error('Error generating ASCII art:', error); // Log any errors
          alert('Failed to generate ASCII art. Please try again.'); // Notify the user
      }
  };

  return (
      <div>
          <h1>Text to ASCII Art Generator</h1>
          <TextInput onConvert={handleTextConvert} /> {/* Text input component */}
          <AsciiPreview asciiArt={asciiArt} /> {/* ASCII preview component */}
      </div>
  );
};

export default Home;


