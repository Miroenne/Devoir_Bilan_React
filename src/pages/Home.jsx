
import "../style/Home.css"
import "../style/Global.css"
import about from "../assets/images/john-doe-about.jpg"
import Modal from "../components/Modal"

const Home = () => {

    return( 
        <main>
            <section className="container-fluid d-flex bg-hero justify-content-center text-center align-items-center"> 
                <div className="">
                    <h1 className="mb-5">Bonjour, je suis John Doe</h1>
                    <h2 className="mt-5 mb-5">Développeur web full stack</h2>
                    <button type="button" class="btn btn-danger mt-4" data-bs-toggle="modal" data-bs-target="#myModal">En savoir plus</button>                                       
                </div>     
                <Modal/>
            </section>
            <section className="mt-4 ps-3 pe-3">            
                <div className="container-fluid bg-light text-dark shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div className="row ">
            {/*Partie A propos // About section*/}
                        <div className="col-md-6 col-sm-12 ">
                            <h3 className="border-bottom border-3 pb-3 border-primary">A propos</h3>
                            <img src={about} alt="" className="w-100" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida metus accumsan lobortis tincidunt. 
                                Curabitur egestas ultricies sem id porttitor. Donec dictum sollicitudin blandit. Etiam et commodo neque. 
                                Cras id hendrerit dui. Quisque eleifend tellus sem. Maecenas efficitur nulla ac sapien lobortis, 
                                eu iaculis lorem pretium. Morbi condimentum pulvinar eros eget faucibus. Fusce ac ex arcu.
                            </p>
                            <p>
                                Ut tempus augue vel pharetra tristique. Duis lacus turpis, maximus eget urna eget, pharetra ullamcorper dui. 
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque quis 
                                sollicitudin tortor. Nam sit amet suscipit leo, eget tincidunt est. Morbi venenatis dapibus tortor, 
                                quis sagittis massa volutpat a. Nullam porta lacus eget turpis congue vehicula. 
                                Duis sed nibh nec urna lacinia tristique.
                            </p>
                            <p> Aliquam maximus volutpat ante, vel euismod arcu posuere consequat. Nunc interdum id justo nec finibus. 
                                Vivamus rhoncus ligula at nisi molestie faucibus. Aliquam tincidunt fermentum ipsum, a tristique turpis pretium a. 
                                Suspendisse mattis augue ex, in consequat ipsum malesuada eget. Aliquam euismod ex quis venenatis placerat. 
                                Etiam feugiat purus nibh, sit amet porttitor felis imperdiet sed. Nunc dignissim nisi sed urna laoreet, 
                                non cursus libero condimentum. Praesent et sem risus. Nam massa eros, viverra a rhoncus non, 
                                pellentesque vitae magna. Sed sit amet ornare dui.
                            </p>
                        </div>
            {/*Partie Compétences // Skills section*/}    
                        <div className="col-md-6 col-sm-12 ">
                            <h3 className="border-bottom border-3 pb-3 border-primary">Mes Compétences</h3>
                            <h4>HTML5 90%</h4>
                            <div class="progress" role="progressbar" aria-label="html" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar bg-danger" id="html"></div>
                            </div>
                            <h4>CSS3 80%</h4>
                            <div class="progress" role="progressbar" aria-label="css" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar bg-info" id="css"></div>
                            </div>
                            <h4>JAVASCRIPT 70%</h4>
                            <div class="progress" role="progressbar" aria-label="javascript" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar bg-warning" id="js"></div>
                            </div>
                            <h4>PHP 60%</h4>
                            <div class="progress" role="progressbar" aria-label="php" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar bg-success" id="php"></div>
                            </div>
                            <h4>REACT 50%</h4>
                            <div class="progress mb-5" role="progressbar" aria-label="react" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar bg-primary" id="react"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>       
       
    );
}

export default Home;