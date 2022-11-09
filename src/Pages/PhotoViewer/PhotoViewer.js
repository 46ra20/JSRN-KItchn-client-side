import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const PhotoViewer = ({img}) => {
    console.log('call from another')
    return (
        <PhotoProvider>
            <PhotoView src="/1.jpg">
                <img src="/1-thumbnail.jpg" alt="" />
            </PhotoView>
        </PhotoProvider>
    );
};

export default PhotoViewer;