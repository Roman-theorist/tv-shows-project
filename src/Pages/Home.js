import ShowList from '../components/ShowList';
import showsData from  '../shows-data';


function Home() {
    return (
        <div className="HomePage">
        <h1>The Best TV Shows App</h1>
        <ShowList shows={showsData}/>
        </div>
    )
}
export default Home