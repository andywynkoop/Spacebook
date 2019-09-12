import React from 'react';
import NavMain from '../NavMain';

export default () => (
  <div>
    <NavMain />
    <div style={{ position: 'relative', width: '100%' }}>
      <h1
        style={{
          position: 'absolute',
          top: '100px',
          left: '50px',
          fontSize: '32px',
          color: '#3c66af'
        }}
      >
        This page is not available.
      </h1>
    </div>
  </div>
);
