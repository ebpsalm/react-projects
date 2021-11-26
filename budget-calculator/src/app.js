import React from 'react';
import { useGlobalContext } from './context';
import Form from './form';
import List from './list';
const App = () => {
  const { isAlert, total } = useGlobalContext();
  const { state, type, msg } = isAlert;

  return (
    <main>
      <section className='section'>
        <h1>budget calculator</h1>

        {state && <p className={`alert alert-${type}`}>{msg}</p>}

        <article className='section-center'>
          <Form />
          <List />
        </article>
        <h2>
          total spending: <span> ${total}</span>
        </h2>
      </section>
    </main>
  );
};
export default App;
