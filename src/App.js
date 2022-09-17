import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { defaultValue } from './data';

function App() {
  const [markdown, setMarkdown] = useState(defaultValue);
  return (
    <>
      <h2 className='section-title'>Markdow preview</h2>
      <section className='markdown'>
        <textarea
          className='input'
          onChange={(e) => setMarkdown(e.target.value)}
          value={markdown}
        ></textarea>
        <article className='result'>
          {<ReactMarkdown>{markdown}</ReactMarkdown>}
        </article>
      </section>
    </>
  );
}

export default App;
