import React, { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import { AuthProvider } from "./UserContext/UserContext";
function App() {
  const {imageURL} = useContext(AuthProvider)
  return (
    <>
      <PhotoProvider>
        <PhotoView src="/1.jpg">
          <img src={imageURL} style={{ objectFit: 'cover' }} alt="" ></img> 
        </PhotoView>
      </PhotoProvider>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
