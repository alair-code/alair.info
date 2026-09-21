import {StrictMode, useLayoutEffect} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {initReveal} from './utils/reveal';
import './index.css';

function Root() {
  // useLayoutEffect: roda após o DOM estar montado, antes da pintura —
  // evita flash de conteúdo e garante que nada fique invisível por engano.
  useLayoutEffect(() => {
    const html = document.documentElement;
    html.classList.add('reveal-ready');
    const disconnect = initReveal();
    return () => {
      html.classList.remove('reveal-ready');
      disconnect();
    };
  }, []);

  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);

