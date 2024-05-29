import React from 'react';
import CesiumMap from './CesiumMap';

const Cesium: React.FC = () => {
    return (
        <>
            <h1 className="text-3xl font-bold my-4">Cesium</h1>
            <CesiumMap />
        </>
    );
};

export default Cesium;