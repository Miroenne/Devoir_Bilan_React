import "../style/Global.css"
import banner from "../assets/images/banner.jpg"

const Services = () => {
    return(
        <main>
            <section>
                <div className="container-fluid ps-0 pe-0">   
                <img src={banner} alt="" className="bg-banner w-100"/>
           </div>           
            <div className="text-center my-6 px-3">                
                <h1 className="my-3">Mon offre de services</h1>
                <p className="fluid-text my-3">Voici les prestations sur lesquelles je peux intervenir</p>
            {/* Ajout d'une balise div pour avoir une bordure responsive indépendante et ne pas réduire l'espace du texte*/}                
                <div className="container w-35 border-bottom border-5 border-primary"></div>                            
            </div>
            </section>
           <section>
                <div className="container-fluid mb-5">
                    <div className="row mx-2 mx-sm-0 justify-content-center">
                        <div className="col-md-3 col-12 mb-3 mb-sm-0 text-center border border-2 rounded ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-brush text-primary mt-5 mb-4" viewBox="0 0 16 16">
                            <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04M4.705 11.912a1.2 1.2 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.4 3.4 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3 3 0 0 0 .126-.75zm1.44.026c.12-.04.277-.1.458-.183a5.1 5.1 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005zm3.582-3.043.002.001h-.002z"/>
                            </svg>
                            <h2 className="fluid-title">UX Design</h2>
                            <p className="fluid-text-2">L'UX Design est une discipline qui consiste à <strong className="fw-normal">concevoir des produits</strong> (<em className="fst-normal">sites web, applications mobiles, logiciels, objets connectés</em>, etc.)
                                en plaçant <em className="fst-normal">l'utilisateur au centre des préoccupations</em>. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.
                            </p>
                        </div>
                        <div className="col-md-3 col-12 mx-sm-4 mx-3 mb-3 mb-sm-0 text-center text-break border border-2 rounded ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-code-slash text-primary mt-5 mb-4" viewBox="0 0 16 16">
                            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
                            </svg>
                            <h2 className="fluid-title">Développement web</h2>
                            <p className="fluid-text-2">
                                Le développement de sites web consiste à <strong className="fw-normal">créer des sites internet</strong> en utilisant des langages de programmation (<em className="fst-normal">HTML,CSS, JavaScript, PHP</em>, etc.) 
                                et des frameworks (<em className="fst-normal">Bootstrap, React, Angular</em>, etc.).
                            </p>
                        </div>
                        <div className="col-md-3 col-12 text-center text-break border border-2 rounded ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-search text-primary mt-5 mb-4" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                            <h2 className="fluid-title">Référencement</h2>
                            <p className="fluid-text-2">Le référencement naturel (SEO) est une technique qui <strong className="fw-normal">consiste à optimiser un site web</strong> pour le faire remonter dans les résultats des moteurs de 
                                recherche (Google, Bing, Yahoo, etc.). L'objectif est d'<em className="fst-normal">attirer un maximum de visiteurs</em> qualifiés sur le site.
                            </p>
                        </div>
                    </div>                
                </div>    
           </section>
        </main>
    )
}

export default Services;