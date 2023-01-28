import React from 'react';
import liff from '@line/liff';

await liff.init({
  liffId: '1657855491-8GAwNwaX',
});

export const App: React.FC = () => {
  return (
    <div className="mx-auto max-w-screen-md px-4 py-10">
      <article className="prose">
        <h1>react-app</h1>
        <p>This is a React application template.</p>
        <p>with Vite, TypeScript, TailwindCSS and daisyUI</p>
        <pre>logged in? {liff.isLoggedIn() ? 'yes' : 'no'}</pre>
        <button className="btn" onClick={() => liff.login()}>
          Login
        </button>
      </article>
    </div>
  );
};
