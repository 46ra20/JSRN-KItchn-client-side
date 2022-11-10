import React, { useContext, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import { AuthProvider } from "./UserContext/UserContext";
function App() {
  const {imageURL, viewImage, setViewImage} = useContext(AuthProvider)
  const [view, setView] = useState(false)
  const handle =() =>{
    setView(!view)
    setViewImage(!viewImage)
  }
  return (
    <div className={`${view?'none':'block'}`}>
      {
        viewImage?
          <PhotoProvider>
            <PhotoView>
              {
                <img src={imageURL} style={{ objectFit: 'cover', width: '100vw', height: '100vh', padding: '7%' }} className={` ${view ? 'none' : 'block'}bg-gray-400`} alt="" onClick={() => handle(!view)}></img>

              }
            </PhotoView>
          </PhotoProvider>
          :''
      }
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
