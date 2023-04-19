
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Header() {
    
    const navigate = useNavigate()

    function handleSearch (event) {
        if (!event.target.value.trim()){
            navigate("/")
        } else {
        navigate ("/search/" + event.target.value.trim() )
        }
    }

    return (
        <div className="Header">
            <div className="Logo"></div>
            
            <ul className="Navigation">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/favorites">Favorites</Link>
            </li>
            <li>
            <Link to="/upcoming">Upcoming</Link>
            </li>

            {/* <a href="/">Home</a>
            <a href="/favorites">Favorites</a>
            <a href="/Upcoming">Upcoming</a> */}

            </ul>

            <div className="Search">
                
            </div>
            <input type="text" onChange={handleSearch}/>
            
            
        </div>
    )


}



export default Header 