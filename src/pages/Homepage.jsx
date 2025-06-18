import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Home";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Six from "./Six";


const routes = [
    {path:"/", label:"home",name:"Home", element:<Home />},
    {path:"/one", label:"One",name:"첫번째 페이지", element:<One />},
    {path:"/two", label:"Two",name:"두번째 페이지", element:<Two />},
    {path:"/three", label:"Three",name:"세번째 페이지", element:<Three />},
    {path:"/four", label:"Four",name:"네번째 페이지", element:<Four />},
    {path:"/five", label:"Five",name:"다섯번째 페이지", element:<Five />},
    {path:"/Six", label:"Six",name:"여섯번째 페이지", element:<Six />},
]

function Homepage(){
    return (
        <div>
            <BrowserRouter>
                <nav>
                    {routes.map((route)=>(
                        <li key={route.path} style={{listStyle:"none"}}>
                            <Link to={route.path} label={route.label}>{route.name}</Link></li>
                    ))}
                </nav>               
                <Routes>
                    {routes.map((route)=>(
                        <Route path={route.path} element={route.element} />
                    ))}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Homepage;