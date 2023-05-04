//libraries
import { useLocation,Link } from "react-router-dom";

//components
import Arrow from "../../resourses/img/arrow.svg";

//styles
import "./Navbar.scss";

export default function Navbar(){
    const {pathname} = useLocation();
    return(
        <header className="header">
            <div className="header__wrapper">
             {pathname==="/"
             ?<Link to="news" className="header__route-pages">News</Link>
             :<Link to="/" className="header__route-back">
             <img src={Arrow} alt="arrow"/>
             <span>Back to users articles</span>
             </Link>}
             </div>
        </header>
    )
}