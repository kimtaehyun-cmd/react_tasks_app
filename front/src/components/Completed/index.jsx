import React from 'react';
import Navbar from '../Navbar';
import ItemPanel from '../ItemPanel';

const index = () => {
  return (
    <div className="page_section">
      <Navbar menuIdx={1} />
      <ItemPanel pageTitle="completed Items" filterCompleted={true} />
    </div>
  );
};

export default index;
