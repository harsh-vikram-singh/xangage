import React from 'react';

const Editor = () => {
  const [heading, setHeading] = React.useState(null);
  const [body, setBody] = React.useState(null);

  const clickHandler = () => {
    console.log('heading: ', heading);
    console.log('body: ', body);
  };

  return (
    <>
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
    </>
  );
};

export default Editor;
