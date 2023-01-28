import React, { useState, useCallback } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Form } from './Form';
import { AGGrid } from './AGGrid';
import { NotFound } from './NotFound';

export const Home = () => {
  const [data, setRowData] = useState([]);
  const history = useNavigate();
  const onGridReady = useCallback((params) => {
    fetch(params)
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  const handleSubmit = (e, API) => {
    e.preventDefault();
    onGridReady(API);
    history('/grid');
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Form handleSubmit={handleSubmit} />} />
        <Route path="/grid" element={<AGGrid data={data} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
