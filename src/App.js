import React, { useEffect, useState, useCallback } from 'react';
import './style.css';
import Form from './components/Form.js';

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const clickHandler = (obj) => {
    if (Object.values(obj).includes("")) {
      alert(`must fill all`);
      return;
    }
    setData([...data, obj]);
  };

  return (
    <div className="container">
      <h1>Contacts</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem, idx) => {
            return (
              <tr key={idx}>
                <td>{elem.name}</td>
                <td>{elem.email}</td>
                <td>{elem.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Form handler={clickHandler} />
    </div>
  );
}
