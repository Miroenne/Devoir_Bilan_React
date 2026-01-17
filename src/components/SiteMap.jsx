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
                    <li className="fw-bold-hover"><FooterLink path="" label="Accueil"/></li>
                    <li className="fw-bold-hover"><FooterLink path="Services" label="Services"/></li>
                    <li className="fw-bold-hover"><FooterLink path="Achievements" label="Portfolio"/></li>
                    <li className="fw-bold-hover"><FooterLink path="Contact" label="Me contacter"/></li>
                    <li className="fw-bold-hover"><FooterLink path="Mentions" label="Mentions légales"/></li>
                </ul>
            </div>           

        </div>
    )
}

export default SiteMap;