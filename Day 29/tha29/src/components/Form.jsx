import { useDispatch,useSelector } from "react-redux";
import { UpdateLocation,UpdateLocationData } from "../actions"; 

const Form = ()=>{
    const location=useSelector(state=>state.location);
    const theme = useSelector(state=>state.theme);
    const dispatch=useDispatch();
    return(
        <div className="container">
            <div className="row">
            <div className={theme?"col-12 location-form dark":"col-12 location-form"}>
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => {
                dispatch(UpdateLocation(e.target.value))
              }}
            ></input>
            <button
              className={theme?"btn btn-outline-light":"btn btn-outline-info"}
              onClick={() => {
                dispatch(UpdateLocationData(location))
              }}
            >
              Search
            </button>
          </div>
            </div>
        </div>
    )
}

export default Form;