import { createRoot } from 'react-dom/client';

import { App } from './app/App';

const rootElement = document.getElementById('root') as HTMLElement;
createRoot(rootElement).render(<App />);
