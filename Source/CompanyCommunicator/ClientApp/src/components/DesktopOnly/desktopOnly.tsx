import React from 'react'
import "./desktopOnly.scss";
import imgPlaceholder from "./placeholder-desktop.png";


function DesktopOnly() {
    return (
        <div className='desktop-view-placeholder'>
            <img src={imgPlaceholder} alt="" />
            <h1 className='placeholder-text'>This tab is only available on desktop</h1>
        </div>
    )
}

export default DesktopOnly
