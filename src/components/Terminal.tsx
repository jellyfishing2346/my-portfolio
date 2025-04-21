// components/Terminal.tsx
'use client'; // 👈 Required for client-side interactivity

import { TypeAnimation } from 'react-type-animation';

export default function Terminal() {
  return (
    <div className="terminal-style">
      <TypeAnimation
        sequence={['$ npm run deploy', 1000, '$ Building awesome portfolio...']}
        speed={50}
      />
    </div>
  );
}