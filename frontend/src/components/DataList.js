import React, {useEffect, useState} from 'react';
import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE || 'https://REPLACE_WITH_API_GATEWAY';

export default function DataList(){
  const [items, setItems] = useState([]);
  const fetch = async () => {
    try {
      const res = await axios.get(`${API_BASE}/list`);
      setItems(res.data);
    } catch(err){
      console.error(err);
    }
  };
  useEffect(()=>{ fetch(); }, []);
  return (
    <div>
      <h3>Entries</h3>
      {items.length === 0 ? <div>No entries yet</div> :
        <table border="1" cellPadding="6">
          <thead><tr><th>Name</th><th>Email</th></tr></thead>
          <tbody>
            {items.map((it, i)=>(<tr key={i}><td>{it.name}</td><td>{it.email}</td></tr>))}
          </tbody>
        </table>
      }
    </div>
  );
}
