import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
   const { pathname } = useLocation()

   useEffect(() => {
      //this doesn't work consistently on Firefox, not sure why
      window.scrollTo(0, 0);
   }, [pathname])

   return null
}