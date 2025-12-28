import { Link } from "react-router-dom"

const SiteMap = () => {
    return(
        <div className="container w-50 text-start">
            <h4>Liens Utiles</h4>
            <ul className="ps-0">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/Achievements">Portfolio</Link></li>
                <li><Link to="/Contact">Me contacter</Link></li>
                <li><Link to="Mentions">Mentions légales</Link></li>
            </ul>
        </div>
    )
}

export default SiteMap;