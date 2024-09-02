import './App.css';
import Card from './Card';
import { exportComponentAsPNG } from 'react-component-export-image';
import { createRef, useMemo, useRef, useState } from 'react';
import { read, utils } from 'xlsx';
import cards from './cards.json';

function App() {
  const refs = useRef([]);
  const [selectedType, setSelectedType] = useState(null);
  refs.current = cards.map((element, i) => refs.current[i] ?? createRef());

  const handleExport = () => {
    for (const i in refs.current) {
      const card = cards[i];
      if (card?.Type === selectedType) {
        const ref = refs.current[i];
        const fileName = cards[i]?.Filename;
        exportComponentAsPNG(ref, { fileName });
      }
    }
  }

  const handleChange=  e => {
    setSelectedType(e.currentTarget.value)
  }

  return (
    <div className='cards-container'>
      <select onChange={handleChange}>
        <option value={'cash-virtual'}>cash virtual</option>
        <option value={'cash-attended'}>cash attended </option>
        <option value={'cash-attended-us'}>cash attended us</option>
        <option value={'gift-virtual'}>gift virtual</option>
        <option value={'gift-attended'}>gift attended </option>
        <option value={'gift-attended-us'}>gift attended us</option>
      </select>
      <button onClick={handleExport}>Export all</button>

      {cards && cards.map((card, i) =>
        <Card
          to={card.To}
          type={card.Type}
          gift={card.Gift}
          ref={refs.current[i]}
        />
      )}
    </div>
  );
}

export default App;
