// utils/asciiTextConverter.ts

import figlet from 'figlet';

const convertTextToAscii = (text: string): Promise<string> => {
    console.log("Input Text:", text); // Log the input text
    return new Promise((resolve, reject) => {
        figlet.text(text, { font: 'Standard' }, (err, data) => {
            if (err) {
                console.error('Figlet error:', err); // Log the error from figlet
                reject(new Error('Failed to generate ASCII art')); // Reject on error
                return;
            }
            resolve(data || ''); // Resolve with ASCII art or an empty string
        });
    });
};

export { convertTextToAscii };
