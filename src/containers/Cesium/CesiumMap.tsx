import React, { useEffect, useRef } from 'react';
import {
  Viewer,
  Cartesian3,
  Math,
  Terrain,
  createOsmBuildingsAsync,
} from "cesium";
import 'cesium/Build/Cesium/Widgets/widgets.css';

// const osmBuildingsTileset = await createOsmBuildingsAsync();

const CesiumMap: React.FC = () => {
  const cesiumContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cesiumContainerRef.current) return;

    const viewer = new Viewer(cesiumContainerRef.current, {
        terrain: Terrain.fromWorldTerrain(),
      });

    // viewer.scene.primitives.add(osmBuildingsTileset);

    viewer.camera.flyTo({
      destination: Cartesian3.fromDegrees(-122.4175, 37.655, 400),
      orientation: {
        heading: Math.toRadians(0.0),
        pitch: Math.toRadians(-15.0),
      },
    });

    return () => {
      viewer.destroy();
    };
  }, []);

  return (
    <div
      ref={cesiumContainerRef}
      style={{ width: '100%', height: '80vh' }}
    />
  );
};

export default CesiumMap;