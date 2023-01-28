import React, { useState, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid/src/styles/ag-theme-material';

export const AGGrid = ({ ...props }) => {
  const [columnDefs, setColumnDefs] = useState([
    {
      field: 'athlete',
      filter: 'agTextColumnFilter',
      sortingOrder: ['asc', 'desc'],
    },
    {
      field: 'age',
      filter: 'agNumberColumnFilter',
      maxWidth: 100,
      width: 100,
      sortingOrder: ['desc', 'asc'],
    },
    {
      field: 'country',
      filter: 'agTextColumnFilter',
      sortingOrder: ['desc', null],
    },
    { field: 'year', width: 100, sortingOrder: ['asc'] },
    { field: 'date', filter: 'agDateColumnFilter', width: 100 },
    { field: 'sport', filter: 'agTextColumnFilter' },
    { field: 'gold', filter: 'agNumberColumnFilter' },
    { field: 'silver', filter: 'agNumberColumnFilter' },
    { field: 'bronze', filter: 'agNumberColumnFilter' },
    { field: 'total', filter: 'agNumberColumnFilter' },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      width: 170,
      sortable: true,
    };
  }, []);

  const sortingOrder = useMemo(() => {
    return ['desc', 'asc', null];
  }, []);

  var filterParams = {
    comparator: (filterLocalDateAtMidnight, cellValue) => {
      var dateAsString = cellValue;
      if (dateAsString == null) return -1;
      var dateParts = dateAsString.split('/');
      var cellDate = new Date(
        Number(dateParts[2]),
        Number(dateParts[1]) - 1,
        Number(dateParts[0])
      );
      if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
        return 0;
      }
      if (cellDate < filterLocalDateAtMidnight) {
        return -1;
      }
      if (cellDate > filterLocalDateAtMidnight) {
        return 1;
      }
      return 0;
    },
    browserDatePicker: true,
  };

  return (
    <div className="ag-theme-material" style={{ height: 400, width: 600 }}>
      <AgGridReact
        rowData={props.data}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        animateRows={true}
        sortingOrder={sortingOrder}
        pagination={true}
        paginationPageSize={20}
      ></AgGridReact>
    </div>
  );
};
