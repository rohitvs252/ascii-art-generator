// components/TextInput.tsx

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface TextInputProps {
    onConvert: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ onConvert }) => {
    const [inputText, setInputText] = useState('');

    const handleConvert = () => {
        if (inputText.trim()) {
            onConvert(inputText.trim()); // Call the function with the trimmed input
        } else {
            alert('Please enter some text.'); // Alert if the input is empty
        }
    };

    return (
        <div>
            <TextField
                label="Enter text"
                variant="outlined"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)} // Update state on input change
                fullWidth
            />
            <Button onClick={handleConvert} variant="contained" style={{ marginTop: '10px' }}>
                Convert to ASCII
            </Button>
        </div>
    );
};

export default TextInput;
