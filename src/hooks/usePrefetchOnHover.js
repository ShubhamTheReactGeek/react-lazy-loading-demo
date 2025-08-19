import { useCallback } from "react";

export default function usePrefetchOnHover(importer, delay=100){
    let timer = null;
    return useCallback(() => {
        console.log("CALLIGN THIS ", timer)
        if(timer) return
        timer = setTimeout(() => {
            importer?.();
            timer =null;
        },delay)
    },[importer,delay])
}