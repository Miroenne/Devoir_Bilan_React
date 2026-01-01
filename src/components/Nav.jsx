import {NavLink} from "react-router-dom";
import '../components/Nav.css';

const MyLink = (props) => {
    return(
        <NavLink className={({isActive}) => isActive? "nav-link active" : "nav-link"} to={"/" + props.path}>{props.label}</NavLink>
    )
}

const Nav = ()=>{
    return(
        <header>            
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">                    
                    <div>
                        <span className="navbar-brand mb-0">John Doe</span>
                    </div>
                    <div className="d-flex">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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