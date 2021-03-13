import React from 'react';
import './CensorModuleOutput.css';

const reactStringReplace = require('react-string-replace');

const poemKeyWordsStyle = {
  color: '#5200D7',
  fontWeight: '700',
}

function CensorModuleOutput ({ selectedValue }) {

  const poem = selectedValue.text;
  const keyWords = selectedValue.keyWords;

  return (
    <div className="censor__output-container">
      <p className="censor__output-output-author">
        {selectedValue.author}
      </p>
      <p className="censor__output-output-text">
        {reactStringReplace(poem, keyWords, (match, i) => (
          <span key={i} style={poemKeyWordsStyle}>{match}</span>
        ))}
      </p>
    </div>
  )
}

export default CensorModuleOutput;
