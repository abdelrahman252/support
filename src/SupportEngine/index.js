import React, { useEffect, useRef, useState } from "react";
import Avatar from "./Avatar";
import SupportWindow from "./supportWindow/SupportWindow";



const SupportEngine = () => {
    const ref=useRef(null);
    const [visible,setVisibile] =useState(false);
    useEffect(() => {
        function handleClickOutside(event) {
            if(ref.current && !ref.current.contains(event.target)) {
                setVisibile(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return()=>{
            document.removeEventListener("mousedown", handleClickOutside);        
        }
    })

    return (
        <div ref={ref}>
            <SupportWindow

            visible={visible}
            />

            <Avatar 
            
            onClick={() => setVisibile(true)}
            style={{
                position: 'fixed', bottom:'24px',right: '24px'

            }}
            
            />
        </div>
    )
}

export default SupportEngine;

