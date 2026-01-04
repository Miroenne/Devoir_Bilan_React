import { Link } from "react-router-dom"


const FooterLink = (props) => {
    return(
        <Link to={"/" + props.path}>{props.label}</Link>
    )
}

const SiteMap = () => {
    return(
        <div className="container-fluid ">
            <div className="container text-start">
                <h4>Liens Utiles</h4>
                <ul className="ps-0">
                    <li><FooterLink path="" label="Accueil"/></li>
                    <li><FooterLink path="Services" label="Services"/></li>
                    <li><FooterLink path="Achievements" label="Portfolio"/></li>
                    <li><FooterLink path="Contact" label="Me contacter"/></li>
                    <li><FooterLink path="Mentions" label="Mentions légales"/></li>
                </ul>
            </div>           

        </div>
    )
}

export default SiteMap;