import { searchForShow } from "../helpers/showsHelper"

function Search(){
    return(
        <>
        <h1>Search</h1>
        <input type="text" onChange={searchShows}/>
        </>
    )


    function searchShows(event){
        const searchText= event.target.value
        return searchForShow(searchText)
    }
}

export default Search