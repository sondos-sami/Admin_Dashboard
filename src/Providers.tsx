import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";
import { ThemeProvider } from "./Context/ThemeContext";
 
 

export default function Providers() {
  return (
   <ThemeProvider>
<RouterProvider router={router}/>
   </ThemeProvider>

   
   )
}
