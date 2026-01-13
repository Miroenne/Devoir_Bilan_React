import {NavLink} from "react-router-dom";
import '../style/Nav.css';
import '../style/Global.css';

/* Fonction pour rendre le style des éléments <NavLink> dynamique en fonction de l'éléments sélectionné grâce à la classe "active" */
const MyLink = (props) => {
    return(
        <NavLink className={({isActive}) => isActive? "nav-link active" : "nav-link"} to={"/" + props.path}>{props.label}</NavLink>
    )
}

const Nav = ()=>{
    return(
        <header>            
            <nav className="navbar navbar-expand-md bg-body-tertiary fs-5" data-bs-theme="dark">
                <div className="container-fluid pe-4 ps-5">                    
                    <div>
                        <span className="navbar-brand mt-0">John Doe</span>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon mt-1 mb-1 me-0"></span>
                    </button>  
                    <div className="d-flex ps-0 container-md me-0">                                               
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <MyLink label="Home" path=""/>
                                </li>
                                <li className="nav-item">
                                    <MyLink label="Services" path="Services"/>
                                </li>
                                <li className="nav-item">                                    
                                    <MyLink label="Portfolio" path="Achievements"/>
                                </li>
                                <li className="nav-item">
                                    <MyLink label="Contact" path="Contact"/>
                                </li>
                                <li className="nav-item">
                                    <MyLink label="Mentions légales" path="Mentions"/>
                                </li>
                            </ul>
                        </div>
                    </div>   
                                                         
                </div>     
            </nav>
            
        </header>             
    );
};

export default Nav;