import { useState, useEffect } from "react";
const useWindowResize = () =>{
    const [width, setWidth] = useState();
    useEffect(() => {
    function handleResize() {
        setWidth(window.innerWidth);
    }
    window.addEventListener('resize',handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
},[]);
return width;
}
export default useWindowResize;