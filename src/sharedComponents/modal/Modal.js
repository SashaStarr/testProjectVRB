import { useDispatch, useSelector } from "react-redux";
import {openModal} from "./ModalSlice";
import "./Modal.scss";



export default function Modal({children}){
    const {active} = useSelector(state=>state.openModal) 
    const dispatch = useDispatch();
    return(<>
        {active && <div className="modal" onClick={()=>dispatch(openModal())}>
            <div className="modal__wrapper" onClick={(e) => e.stopPropagation()}>
            {children}
            </div>
        </div>}
        </>
    )
}