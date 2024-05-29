import React from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Pokemons from "./containers/Pokemons/Pokemons";
import Home from "./containers/Home/Home";
import Cesium from "./containers/Cesium/Cesium";

export default function App() {
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cesium" element={<Cesium />} />
          <Route path="pokemons" element={<Pokemons />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
}