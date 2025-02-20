

//import showsData from "../shows-data"
//import showsData from "../shows-data"

const defaultImg = { medium: "http://via.placeholder.com/219x295?text=:( " }

function transformShow(show) {
    const transformedShow = { ...show, image: show.image || defaultImg }
    return transformedShow
}


export async function getShowByID(id) {
    const response = await fetch("https://api.tvmaze.com/shows/" + id)
    const showData = await response.json()
    return transformShow(showData)
    //    const show=showsData.find(show => show.id==id)
    //    return show
}

export async function getHomeShows() {
    const response = await fetch("https://api.tvmaze.com/schedule")
    const jsonData = await response.json()
    const homeShows = jsonData.map(episode => transformShow(episode.show))

    return homeShows
}


export async function searchForShow(text) {
    const response = await fetch("http://api.tvmaze.com/search/shows?q=" + text)
    const jsonData = await response.json()
    const showResults = jsonData.map(element => transformShow(element.show))
    return showResults

    //    return showsData.filter(show => show.name.toLowerCase().includes(text.toLowerCase()))
}