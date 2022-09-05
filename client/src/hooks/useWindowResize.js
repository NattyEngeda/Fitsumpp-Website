import { useState, useEffect } from "react";

const useWindowResize = () =>{
    const [width, setWidth] = useState();

    useEffect(() => {
    function handleResize() {
        // console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
        setWidth(window.innerWidth);
    }
    window.addEventListener('resize',handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
},[]);
return width;
}
export default useWindowResize;