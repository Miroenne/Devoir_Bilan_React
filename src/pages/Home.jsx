import "../style/Home.css"
import picture from "../assets/images/profil-picture.png"
import about from "../assets/images/john-doe-about.jpg"

const Home = () => {

    return( 
        <main>
            <section className="container-fluid d-flex bg-hero justify-content-center text-center align-items-center"> 
                <div className="">
                    <h1 className="mb-5">Bonjour, je suis John Doe</h1>
                    <h2 className="mt-5 mb-5">Développeur web full stack</h2>
                    <button type="button" class="btn btn-danger mt-4" data-bs-toggle="modal" data-bs-target="#myModal">En savoir plus</button>
                    <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog me-auto ms-auto modal-dialog-centered">
                            <div class="modal-content  text-bg-dark">
                            <div class="modal-header">
                                <h3 class="modal-title fs-5" id="myModalLabel">Mon Profil GitHub</h3>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body container ps-0 pe-0">
                                <div className="container-fluid bg-dark">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6">
                                            <img className="w-230 h-270" src={picture} alt="Profil-picture" />
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div className="pb-1 border-bottom border-light-subtle">                                                
                                                <a className="modal-link justify-self-start text-start" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person not-link me-2" viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                                                </svg>John Doe</a>    
                                            </div>
                                            <div className="pb-1 pt-1 align-items-start border-bottom border-light-subtle">
                                                <p className="text-start mb-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                                    </svg>
                                                </p>
                                            </div>
                                            <div className="pb-1 pt-1 align-items-start text-start border-bottom border-light-subtle">                                                
                                                <p className="fs-7 mb-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text me-2" viewBox="0 0 16 16">
                                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                                <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
                                                </svg>
                                                As we all know, John Doe's identity is unknown. I just wanted to contribute without being known.</p>
                                            </div>
                                            <div className="pb-1 pt-1 align-items-start border-bottom border-light-subtle">
                                                <p className="text-start mb-0 fs-7">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box me-2" viewBox="0 0 16 16">
                                                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
                                                    </svg>Repository : 1
                                                </p>
                                            </div>
                                            <div className="pb-1 pt-1 align-items-center border-bottom border-light-subtle">
                                                <p className="text-start mb-0 fs-7">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                                                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                                                    </svg> Followers : 16
                                                </p>
                                            </div>
                                            <div className="pb-1 pt-1 align-items-center border-bottom border-light-subtle">
                                                <p className="text-start mb-0 fs-7">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                                                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                                                    </svg> Following : 0
                                                </p>
                                            </div>
                                        </div>
                                    </div>                                
                                </div>
                                
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                            </div>
                            </div>
                        </div>
                    </div>    
                </div>     
            </section>
            <section className="mt-4 ps-3 pe-3">
                <div className="container-fluid bg-light text-dark shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                    <div className="row ">
                        <div className="col-md-6 col-sm-12 ">
                            <h3 className="border-bottom border-3 pb-3 border-primary">A propos</h3>
                            <img src={about} alt="" className="w-100" />
                        </div>
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