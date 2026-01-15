import banner from "../assets/images/banner.jpg"
import "../style/Global.css"
import Fresh_Food from "../assets/images/portfolio/fresh-food.jpg"
import Akira from "../assets/images/portfolio/restaurant-japonais.jpg"
import Health from "../assets/images/portfolio/espace-bien-etre.jpg"
import Seo from "../assets/images/portfolio/seo.jpg"
import Api from "../assets/images/portfolio/coder.jpg"
import Screens from "../assets/images/portfolio/screens.jpg"


const Achievements = () => {
    return(
        <main>
            <div className="container-fluid justify-content-center px-0">
                <div className="container-fluid ps-0 pe-0">   
                    <img src={banner} alt="" className="bg-banner w-100"/>
                </div>
                <div className="container-fluid text-center mt-5">
                    <h1>Portfolio</h1>
                    <p className="fluid-text-2">Voici quelques-une de mes réalisations</p>
                </div>
                
                {/* Ajout d'une balise div pour avoir une bordure responsive indépendante et ne pas réduire l'espace du texte*/}                
                <div className="container w-35 border-bottom border-5 border-primary mb-4 mb-md-5"></div>
            {/*1ere ligne de progjets*/}    
                <div className="row px-5 px-md-0 justify-content-center mt-md-5 mb-2 mb-md-4">
                    <div className="col-12 col-md-3 text-center">
                        <div class="card card-hover h-100">
                            <img src={Fresh_Food} class="card-img-top" alt="Panier de légumes"/>
                            <div class="card-body">
                                <h5 class="card-title">Fresh Food</h5>
                                <p class="card-text">Site de vente de produits frais en ligne</p>
                                <a href="#" class="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="bg-body-secondary border border-2">
                                <em className="fst-normal">Site réalisé avec PHP et MySQL</em>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 my-2 my-md-0 text-center">
                        <div class="card card-hover h-100">
                            <img src={Akira} class="card-img-top" alt="Plateau de Sushi"/>
                            <div class="card-body">
                                <h5 class="card-title">Restaurant Akira</h5>
                                <p class="card-text">Site de vente de produits frais en ligne</p>
                                <a href="#" class="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="bg-body-secondary border border-2">
                                <em className="fst-normal">Site réalisé avec WordPress</em>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 text-center">
                        <div class="card card-hover h-100">
                            <img src={Health} class="card-img-top" alt="Image Zen"/>
                            <div class="card-body">
                                <h5 class="card-title">Espace bien-être</h5>
                                <p class="card-text">Site de vente de produits frais en ligne</p>
                                <a href="#" class="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="bg-body-secondary border border-2">
                                <em className="fst-normal">Site réalisé avec LARAVEL</em>
                            </div>
                        </div>
                    </div>
                </div>
            {/*2eme ligne de progjets*/}    
                <div className="row mb-5 px-5 px-md-0 justify-content-center">
                    <div className="col-12 col-md-3  text-center">
                        <div class="card card-hover h-100">
                            <img src={Seo} class="card-img-top" alt="Image mots-clés SEO"/>
                            <div class="card-body">
                                <h5 class="card-title">SEO</h5>
                                <p class="card-text">Amélioration du référencement d'un site e-commerce</p>
                                <a href="#" class="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="bg-body-secondary border border-2">
                                <em className="fst-normal">Utilisation des outils SEO</em>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 my-2 my-md-0 text-center">
                        <div class="card card-hover h-100 ">
                            <img src={Api} class="card-img-top" alt="Lignes de codes"/>
                            <div class="card-body">
                                <h5 class="card-title">Création d'une API</h5>
                                <p class="card-text">Création d'une API RESTFULL publique</p>
                                <a href="#" class="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="bg-body-secondary border border-2">
                                <em className="fst-normal">PHP - SYMFONY</em>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 text-center">
                        <div class="card card-hover h-100">
                            <img src={Screens} class="card-img-top" alt="Ordinateurs sur bureau"/>
                            <div class="card-body">
                                <h5 class="card-title">Maquette d'un site web</h5>
                                <p class="card-text">Création du prototype d'un site</p>
                                <a href="#" class="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="bg-body-secondary border border-2">
                                <em className="fst-normal">Réalisé avec Figma</em>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </main>
    )
}

export default Achievements;