import React from 'react';

const Editor = () => {
  const [heading, setHeading] = React.useState(null);
  const [body, setBody] = React.useState(null);

  const clickHandler = () => {
    console.log('heading: ', heading);
    console.log('body: ', body);
  };

  return (
    <div className='mx-auto w-full bg-red-200 flex flex-col'>
      <input
        className='border'
        placeholder='Title'
        value={heading !== null ? heading : ''}
        onChange={(e) => setHeading(e.target.value)}
      ></input>
      <br />
      <br />
      <textarea
        className='border'
        placeholder='Tell your story...'
        value={body !== null ? body : ''}
        onChange={(e) => setBody(e.target.value)}
      />
      <br />
      <br />
      <button className='bg-gray-200 border p-2 rounded' onClick={clickHandler}>
        Submit
      </button>
    </div>
  );
};

export default Editor;
