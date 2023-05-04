import { useDispatch, useSelector } from "react-redux";
import "./NewsArticles.scss";
import {useState} from "react";
import ArticleCard from "../../sharedComponents/articleCard/ArticleCard";
import { useEffect } from "react";
import {fetchData} from "./NewsArticlesSlice";
import DropDown from "../../sharedComponents/dropDown/DropDown";

export default function NewsArticles(){

    //data for dropdown
    const dropdownData = ["name","description"]

    const [limit,setLimit] = useState(10);
    const [currentSearchType,setCurrentSearchType] = useState(dropdownData[0]);
    const [currentSearchText,setCurrentSearchText] = useState("");
    const posts = useSelector(state=>state.newsArticles.posts)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchData({limit}))
    }, [dispatch,limit])


    const onChangeSearchType = (data) => {
        setCurrentSearchType(data)
    }

    //search filter 
    const filteredPosts = posts.filter(item=>{
        if(item.title && currentSearchType==="name"){
            return item.title.indexOf(currentSearchText) !== -1
        }
        if(item.description && currentSearchType==="description"){
            return item.description.indexOf(currentSearchText) !== -1
        }
        else{
            return false
        }
    })

    return(
        <div className="news-articles">
            <div className="users-articles__options">
                <div className="users-articles__options__search">Search by: <DropDown
            onSelect={(data)=>onChangeSearchType(data)} data={dropdownData} currentType={currentSearchType}/>
            <input placeholder={`type ${currentSearchType}`} 
            value={currentSearchText} onChange={(e)=>setCurrentSearchText(e.currentTarget.value)}/>
            </div></div>
        <div className="news-articles__cards">
            {
                posts && filteredPosts
                .map((post,index)=>
                   <ArticleCard {...post} key={index}/>)
            }
            </div>
            <div className="news-articles__load-more">
                <button onClick={()=>setLimit(state=>state+10)}>Load more...</button>
            </div>
        </div>
    )
}