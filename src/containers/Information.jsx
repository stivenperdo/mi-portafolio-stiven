import React from 'react';
import '../styles/Information.css';

function Information({children}) {
  return (
    <section className='information'>
      {children}
    </section>
  )
}

export { Information };