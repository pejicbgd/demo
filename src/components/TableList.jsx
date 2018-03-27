import React from 'react';

const TableList = ({ items }) => {
  const headers = items.length ?
    Object.keys(items.pop()) :
    items;

  return (
    <table>
      <tbody>

        <tr>
          { headers.map((entry, i) => 
            <th key={ i }>{ entry }</th>
          ) }
        </tr>

        { items.map((item, ind) =>
          <tr key={ ind }>
            { Object.keys(item).map((key, index) =>
              <td key={ index }>{ typeof item[key] === 'object' ? '' : item[key] }</td>
            ) }
          </tr>
        ) }

      </tbody>
    </table>
  )
};

export default TableList;
