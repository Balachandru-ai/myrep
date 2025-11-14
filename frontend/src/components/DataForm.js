import React, {useState} from 'react';
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE || 'https://REPLACE_WITH_API_GATEWAY';

export default function DataForm(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE}/add`, { name, email });
      alert('Saved');
      setName(''); setEmail('');
    } catch(err){
      alert('Error: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label><br/>
        <input value={name} onChange={e=>setName(e.target.value)} required />
      </div>
      <div>
        <label>Email</label><br/>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
      </div>
      <button type="submit" style={{marginTop:10}}>Submit</button>
    </form>
  );
}
