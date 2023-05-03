import showsData from "../shows-data"
import showData from "../shows-data"

const defaultImg = { medium: "http://via.placeholder.com/219x295?text=:( "}

function transformShow(show) {
    const transformedShow ={...show, image: show.image || defaultImg}
    return transformedShow
}


export function getShowByID (id) {
    const show=showsData.find(show => show.id==id)
    return show
}

export function getHomeShows() {
    return showsData
}

export async function searchForShow(text){
    const response = await fetch("http://api.tvmaze.com/search/show?q=" + text)
    const jsonData = await response.json()
    const showResults = jsonData.map( element => transformShow(element.show))
    return showResults

//    return showsData.filter(show => show.name.toLowerCase().includes(text.toLowerCase()))
}