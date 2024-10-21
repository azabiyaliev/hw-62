import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as React from 'react';
import { useState } from 'react';


const AddForm = () => {

  const url = 'http://146.185.154.90:8000/messages';

  const [msg, setMsg] = useState<IMessage>({
    author: '',
    message: '',
  });

  const onSubmit = (async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new URLSearchParams();
    data.set('author', msg.author);
    data.set('message', msg.message);
    const response = await fetch(url, {
      method: 'post',
      body: data,
    });
    console.log(response)
    setMsg(
      {author: '', message: '',})
  });



  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <form onSubmit={onSubmit} className='border border-1 border-secondary rounded-3 shadow-lg'>
      <div className='d-flex align-items-center'>
        <Form.Control
          required
          className='w-75 mt-4 mx-3 me-4 mb-4'
          type="text"
          placeholder="Add author name"
          value={msg.author}
          name={'author'}
          onChange={onChange}
        />
      </div>
      <div className="d-flex align-items-center">
        <Form.Control
          required
          className='w-75 mx-3 me-4 mb-4'
          type="text" placeholder="Add message"
          value={msg.message}
          name={'message'}
          onChange={onChange}
        />
        <Button type='submit' variant="outline-secondary mb-4">Send</Button>
      </div>
    </form>
  )
  };

export default AddForm;