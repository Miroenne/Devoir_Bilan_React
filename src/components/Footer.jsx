import "../style/Footer.css";
import SiteMap from "./SiteMap";


const Footer = () => {
    return(
        <footer>
            <div className="container-fluid text-center pt-3 pb-2 ps-0 pe-0" data-bs-theme="dark">
                <div className="row container-fluid justify-content-around">
                   <div className="col-lg">
                    <address className="container-fluid justify-content-center">
                        <div className="container w-50 text-start">
                            <h4>John Doe</h4>
                            <p className="mb-0 mt-2 ">40 rue Laurie Diebold </p>
                            <p className="mb-0">69009 Lyon, France</p>
                            <a href="tel:10 20 30 40 50">10 20 30 40 50</a>
                            <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                        </div>
                        
                    </address>
                   </div>
                   <div className="col-lg">
                        <SiteMap/>
                   </div>
                   <div className="col-lg">test</div>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;