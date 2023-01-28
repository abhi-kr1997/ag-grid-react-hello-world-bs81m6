import React, { useState } from 'react';

export const Form = ({ ...props }) => {
  const [tempData, setData] = useState(
    'https://www.ag-grid.com/example-assets/olympic-winners.json'
  );

  const handleChange = (e) => {
    const { value } = e.target;
    setData(value);
  };

  return (
    <form onSubmit={(e) => props.handleSubmit(e, tempData)}>
      <label>Select a option:</label>
      <br />
      <select name="options" id="options" onChange={handleChange}>
        <option value="https://www.ag-grid.com/example-assets/olympic-winners.json">
          AG Option 1
        </option>
        <option value="https://www.ag-grid.com/example-assets/olympic-winners.json">
          AG Option 2
        </option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};
