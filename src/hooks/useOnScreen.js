import { useEffect, useState } from "react";


export default function useOnScreen(ref, {root, rootMargin, threshold} = {}){
   const [isVisible, setIsVisible] =  useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            console.log("ENTRY", entry)
            setIsVisible(entry.isIntersecting)
        },{root, rootMargin, threshold})

        observer.observe(ref.current)
        return () => {
            observer.disconnect(ref);
        }
    },[])
   return isVisible;
}