import { useSelector,useDispatch } from "react-redux";
import {ToggleTheme} from "../actions/index"

const ToggleThemeComp=()=>{

    const dispatch=useDispatch();
    const theme=useSelector(state=>state.theme);



    return (
        <div className="toggle-theme">
            <button className={theme?"btn btn-outline-light":"btn btn-outline-dark"} onClick={()=>{console.log("ok");dispatch(ToggleTheme());console.log(theme)}}>{theme?"Light":"Dark"}</button>
        </div>
    )
}

export default ToggleThemeComp;