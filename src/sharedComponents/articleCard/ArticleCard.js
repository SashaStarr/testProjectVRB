
import {deleteArticle,lockArticle,unlockArticle} from "../../components/usersArticles/UsersArticlesSlice";
import { useSelector,useDispatch} from "react-redux";
import "./ArticleCard.scss";

export default function ArticleCard({user,id,author,urlToImage,description,title}){
    const {userData,lockArticleActive} = useSelector(state=>state.articlesInfo);
    const dispatch = useDispatch();

    const onLock = lock => {
        if(lock){
            dispatch(lockArticle({user,id,author,urlToImage,description,title}))
        }else{
            dispatch(unlockArticle())
        }
    }
    

    return(
        <div className="article-card">
            <img src={urlToImage} alt={title}/>
            <div className="article-card__info">
                <span className="article-card__info__title">{title}</span>
                <span className="article-card__info__author">{author}</span>
                <span className="article-card__info__description">{description}</span>
                <div className="article-card__info__buttons">
                    {(id && (!lockArticleActive || lockArticleActive.id === id))
                     && <button className="article-card__info__buttons__lock"
                    onClick={()=>onLock(lockArticleActive.id !== id)}>
                        {lockArticleActive.id === id?"Unlock":"Lock"}
                    </button>}
                {userData.id === user &&
                <button
                className="article-card__info__buttons__delete"
                onClick={()=>dispatch(deleteArticle(id))}>Delete</button>}
                </div>
            </div>
        </div>
    )
}