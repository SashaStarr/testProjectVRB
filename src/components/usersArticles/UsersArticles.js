import { useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import ArticleCard from "../../sharedComponents/articleCard/ArticleCard";
import Modal from "../../sharedComponents/modal/Modal";
import {openModal} from "../../sharedComponents/modal/ModalSlice";
import DropDown from "../../sharedComponents/dropDown/DropDown";
import "./UsersArticles.scss";
import CreateArticle from "./createArticle/CreateArticle";

export default function UserArticles(){
    //data for dropdown
    const dropdownData = ["name","description"]

    const [currentSearchType,setCurrentSearchType] = useState(dropdownData[0]);
    const [currentSearchText,setCurrentSearchText] = useState("");

    const {articles,lockArticleActive,userData} = useSelector(state=>state.articlesInfo);
    const dispatch = useDispatch();

    //add lock item
    const dataArticles = !lockArticleActive 
    ? articles.filter(item=>item.id !== lockArticleActive.id)
    : [lockArticleActive,...articles.filter(item=>item.id !== lockArticleActive.id)]
    //search filter 
    const filteredArticle = dataArticles.filter(item=>{
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

    const onChangeSearchType = (data) => {
        setCurrentSearchType(data)
    }

    return(
        <>
        <Modal>
           <CreateArticle id={articles.length} author={userData.name} user={userData.id}/>
        </Modal>
        <div className="users-articles">
            <div className="users-articles__options">
                <div className="users-articles__options__search">Search by: <DropDown
            onSelect={(data)=>onChangeSearchType(data)} data={dropdownData} currentType={currentSearchType}/>
            <input placeholder={`type ${currentSearchType}`} 
            value={currentSearchText} onChange={(e)=>setCurrentSearchText(e.currentTarget.value)}/>
            </div>
            <button onClick={()=>dispatch(openModal())} className="users-articles__options__create">
                Create</button></div>
            <div className="users-articles__cards">
            {
                articles && filteredArticle
                .map(article=>
                   <ArticleCard {...article} key={article.id}/>)
            }
            </div>
        </div>
        </>
    )
}