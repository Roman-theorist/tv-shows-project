import {useParams} from "react-router-dom"
import {getShowByID} from "../helpers/showsHelper" 
import NotFound from "./NotFound"

function ShowPage () {
    const params = useParams()
    const show = getShowByID(params.showID)
    
    if (!show) {
        return (<NotFound/>)
    }
    
    return (
        <div className="ShowPage">
            <h1> { show.name } </h1>
            <img src={show.image.medium} ></img>
            <h2> Language: {show.language}</h2>
            <h3>Raiting: {show.rating.average}</h3>
            <h3>Ganres: {show.genres.join(', ')}</h3>
        </div>
    )
}
export default ShowPage