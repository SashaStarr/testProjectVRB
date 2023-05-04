//libraries
import { BrowserRouter,Routes,Route } from "react-router-dom";

//components
import Navbar from "../navbar/Navbar.js";
import UserArticles from "../usersArticles/UsersArticles.js";
import NewsArticles from "../newsArticles/NewsArticles.js";

//styles
import "./AppRoutes.scss";

export default function App(){

    return(
        <BrowserRouter>
        <Navbar/>
        <main className="main">
            <div className="main__wrapper">
          <Routes>
            <Route path="/" element={<UserArticles/>}/>
            <Route path="/news" element={<NewsArticles/>}/>
          </Routes>
          </div>
            </main>
        </BrowserRouter>
    )
}