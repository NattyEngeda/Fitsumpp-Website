import { useState, useEffect } from "react";
const useWorkTiles = () => {
    const checkWindow = () => {
        if (window.innerWidth >= 1280) {
            return 3;
        } else if (window.innerWidth >= 768) {
            return 2;
        } else if (window.innerWidth >= 640) {
            return 1;
        }
    }
    const [tiles, setTiles] = useState(checkWindow());
    useEffect(() => {
        function handleTiles() {
            if (window.innerWidth >= 1280) {
                setTiles(3);
            } else if (window.innerWidth >= 768) {
                setTiles(2);
            } else if (window.innerWidth >= 640) {
                setTiles(1);
            }
        }
        window.addEventListener('resize', handleTiles);
        handleTiles();
        return () => window.removeEventListener('resize', handleTiles);
    }, []);
    return tiles;
}
export default useWorkTiles;