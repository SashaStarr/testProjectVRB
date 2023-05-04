import { useState } from "react";
import "./CreateArticle.scss";
import { useDispatch } from "react-redux";
import {addArticle} from "../UsersArticlesSlice";
import {openModal} from "../../../sharedComponents/modal/ModalSlice";


export default function CreateArticle({user,author,id}){
    
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [imageUrl,setImageUrl] = useState("");

    const dispatch = useDispatch();
      
    return(<div className="create-article">
        <span className="create-article__title">Create Article</span>
       <div className="create-article__inputs">
        <div className="create-article__inputs__field"><span>Title</span>
        <input placeholder="title" onChange={(e)=>setTitle(e.currentTarget.value)}/></div>
        <div className="create-article__inputs__field"><span>Description</span>
        <input placeholder="description" onChange={(e)=>setDescription(e.currentTarget.value)}/></div>
        <div className="create-article__inputs__field"><span>Image Url</span>
        <input placeholder="url" onChange={(e)=>setImageUrl(e.currentTarget.value)}/></div>
       </div>
       <button className="create-article__create-button" 
       onClick={()=>{dispatch(openModal())
        dispatch(addArticle({user,author,id,title,description,urlToImage:imageUrl}))}}>Create</button>
       </div>
    )
}