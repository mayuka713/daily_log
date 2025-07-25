import React, { useState } from 'react';

const omikujiResults = [
  '大吉',
  '中吉',
  '小吉',
  '吉',
  '末吉',
  '凶',
  '大凶'
];

const App: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);
  const drawOmikuji = () => {
    const randomIndex = Math.floor(Math.random() * omikujiResults.length);
    setResult(omikujiResults[randomIndex]);
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '100px'}}>
      <h1>おみくじアプリ</h1>
      <button onClick={drawOmikuji} style={{ fontSize: '1.5rem', padding: '10px 30px'}}>
        おみくじを引く
      </button>
      {result && (
        <div style={{ marginTop: '40px', fontSize: '1.5rem'}}>
      結果: <strong>{result}</strong>
    </div>
  )}
  </div>
  );
  };

  export default App;