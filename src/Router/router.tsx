import { createBrowserRouter } from "react-router-dom";
 
import Layout from "../Components/Layout";
import Contact from "../Pages/contact";
import Dashboard from "../Pages/dashboard";
import Calendar from "../Pages/calendar";
import Bar from "../Pages/Charts/bar";
import Pie from "../Pages/Charts/pie";
import Line from "../Pages/Charts/line";
import Invoices from "../Pages/invoices";
import Team from "../Pages/team";
import Form from "../Pages/form";
import FAQ from "../Pages/FAQ";
import Scatter from "../Pages/Charts/scatter";
import NotFound from "../Pages/NotFound";

export const router=createBrowserRouter([
    {path:"/",element:<Layout/>,children:[
        {index:true,element:<Dashboard/>},
        {path:"/contact",element:<Contact/>},
                {path:"/calendar",element:<Calendar/>},
                  {path:"/faq",element:<FAQ/>},
        {path:"/bar",element:<Bar/>},
        {path:"/pie",element:<Pie/>},
        {path:"/line",element:<Line/>},
        {path:"/geography",element:<Scatter/>},
        {path:"/invoices",element:<Invoices/>},
        {path:"/team",element:<Team/>},
                {path:"/form",element:<Form/>},
                 {path:"*",element:<NotFound/>},

    ]}
])
 