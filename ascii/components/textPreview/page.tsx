// components/AsciiPreview.tsx

import React from 'react';

interface AsciiPreviewProps {
    asciiArt: string;
}

const AsciiPreview: React.FC<AsciiPreviewProps> = ({ asciiArt }) => {
    return (
        <div>
            <h2>ASCII Art Preview</h2>
            <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
                {asciiArt}
            </pre>
        </div>
    );
};

export default AsciiPreview;
