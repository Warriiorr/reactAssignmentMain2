import React from 'react';
import { PuffLoader } from 'react-spinners';

const FullScreenLoader = ({ loading }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: loading ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
      }}
    >
      <PuffLoader color={'#36d7b7'} loading={loading} size={500} />
    </div>
  );
};

export default FullScreenLoader;
