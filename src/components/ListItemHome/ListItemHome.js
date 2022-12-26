import {Link} from "react-router-dom";

export default function ListItemHome ({dato,infoPath}){
  


    return(
        <li  className="nav-item" >
            <Link className="nav-link active m-2 p-3 botones" to={infoPath}>{dato}</Link>
        </li>
    )
} 