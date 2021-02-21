import React from 'react';
import Editor from './Editor';

const App = () => {
  const darkModeToggleClick = () => {
    let element = document.getElementById('darkModeToggle');
    let text = element.innerText;
    const htmlElement = document.querySelector('html');
    if (text === 'dark') {
      console.log('turning the page dark');
      !htmlElement.classList.contains('dark') &&
        htmlElement.classList.add('dark');
      element.innerText = 'bright';
      text = 'bright';
      element.classList.add('text-white');
      return;
    }
    console.log('turning the page bright');
    htmlElement.classList.contains('dark') &&
      htmlElement.classList.remove('dark');
    element.innerText = 'dark';
    text = 'dark';
    element.classList.remove('text-white');
  };

  return (
    <div className='grid grid-col-1 md:grid-cols-12 gap-4'>
      <button
        className='absolute top-10 right-10 focus:outline-none border border-red-800 dark:border-white p-2'
        id='darkModeToggle'
        onClick={darkModeToggleClick}
      >
        dark
      </button>
      <div className='md:col-start-3 md:col-end-11 p-2'>
        <Editor />
      </div>
    </div>
  );
};

export default App;
