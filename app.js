let main = document.querySelector("#main");

document.querySelector("#experience").addEventListener("click", (e)=> {
       e.preventDefault();
       main.innerHTML = `
             <div class="row">
                    <div class="col-12">
                        <div class="container my-5">
                            <h4 class="text-dark fs-2">COMPÉTENCES</h4>
                            <hr class="border-3">
                            <div class="row mt-4">
                              <h4><i class="fa-solid fa-right-to-bracket me-2 mb-4"></i>Langage de programmation</h4>
                              <div class="col-md-2 d-flex flex-column align-items-center">
                                <i class="fa-brands fa-html5 fs-1"></i>
                                <span class="fs-3">HTML5</span>
                              </div>
                              <div class="col-md-2 d-flex flex-column align-items-center">
                                <i class="fa-brands fa-css3-alt fs-3 mt-1"></i>
                                <span class="fs-3">CSS</span>
                              </div>
                              <div class="col-md-2 d-flex flex-column align-items-center">
                                <i class="fa-brands fa-bootstrap fs-3 mt-1"></i>
                                <span class="fs-3">BOOTSTRAP</span>
                              </div>
                              <div class="col-md-2 d-flex flex-column align-items-center">
                                <i class="fa-brands fa-square-js fs-3 mt-1"></i>
                                <span class="fs-3">JAVASCRIPRT</span>
                              </div>
                              <div class="col-md-2 d-flex flex-column align-items-center">
                                <i class="fa-solid fa-database fs-3 mt-1"></i>
                                <span class="fs-3">SQL</span>
                              </div>
                              <div class="col-md-2 d-flex flex-column align-items-center">
                                <i class="fa-brands fa-java fs-3 mt-1"></i>
                                <span class="fs-3">JAVA</span>
                              </div>
                              <div class="col-md-2 d-flex flex-column align-items-center">
                                <i class="fa-brands fa-php fs-3 mt-1"></i>
                                <span class="fs-3">PHP</span>
                              </div>
                            </div>
                            <div class="row mt-4">
                              <h4><i class="fa-solid fa-right-to-bracket me-2 mb-4"></i>Outils de développement</h4>
                              <div class="col-md-2 d-flex flex-column align-items-center">
                                <i class="fa-brands fa-square-github fs-3"></i>
                                <span class="fs-3">GITHUB</span>
                              </div>
                              <div class="col-md-2 d-flex flex-column align-items-center">
                                <i class="fa-solid fa-cloud-arrow-up fs-3"></i>
                                <span class="fs-3">Firebase</span>
                              </div>
                              <div class="col-md-2 d-flex flex-column align-items-center">
                                <i class="fa-solid fa-code fs-3"></i>
                                <span class="fs-3">VS Code</span>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
        `
})


document.querySelector("#education").addEventListener("click", (e)=> {
    e.preventDefault();
    main.innerHTML = `
          <div class="container my-5">
                    <h4 class="text-dark fs-2">ÉDUCATION</h4>
                    <h6> <hr class="border-3"> </h6>
                    <div class="row">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-6 display-4">2023 - 2024</div>
                                <div class="col-6">
                                    <h4>Bakeli School of Technologies</h4>
                                    <h6>Programation</h6>
                                    <p class="fw-light fs-5"><i class="fa-regular fa-bookmark me-1"></i></i>Formation spécialisée en développement front-end</p>
                                </div>
                            </div>
                        </div>
                         <div class="col-12">
                            <div class="row">
                                <div class="col-6 display-4">2018 - 2021</div>
                                <div class="col-6">
                                    <h4>Université Alioune Diop de Bambey</h4>
                                    <h6>Science Appliquées et Technologies de l'information et de la communication (SATIC)</h6>
                                    <p class="fw-light fs-5"><i class="fa-regular fa-bookmark me-1"></i>Licence en Développement et Administration des Applications Web</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    `
})

document.querySelector("#projets").addEventListener("click", (e)=> {
    e.preventDefault();
    main.innerHTML = `
            <div class="container my-4">
                    <h4 class="text-dark fs-2">PROJETS</h4>
                    <hr class="border-3">
                    <div class="row">
                        <div class="col-md-4 mb-2">
                            <div class="card">
                                <img src="image/site1.PNG" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <p class="card-text">Conception et développement d'un prototype personnalisé.</p>
                                  <a href="https://houmadi12.github.io/t9Bootstrap-mini-projet/">Demo</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-2">
                            <div class="card h-100">
                                <img src="image/Site2.PNG" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <p class="card-text">Reproduction d'un prototype <br> en ligne.</p>
                                  <a href="https://houmadi12.github.io/t7BootstrapPrototyp2/">Demo</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-2">
                            <div class="card h-100">
                                <img src="image/Site3.PNG" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <p class="card-text">Reproduction d'un prototype <br> en ligne.</p>
                                  <a href="https://houmadi12.github.io/bootstrap-tache1/">Demo</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <img src="image/Site4.PNG" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <p class="card-text">Reproduction d'un prototype <br> en ligne.</p>
                                  <a href="https://houmadi12.github.io/t8BootstrapPrototype3/">Demo</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <img src="image/Site5.PNG" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <p class="card-text">Reproduction d'un prototype <br> en ligne.</p>
                                  <a href="https://houmadi12.github.io/bootstrap-tache2/">Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
    `
}) 

document.querySelector("#interets").addEventListener("click", (e)=> {
 e.preventDefault();
 main.innerHTML = `
            <div class="container my-4">
                    <h4 class="text-dark fs-2">INTÉRÊTS</h4>
                    <hr class="border-3">
                    <div class="row">
                        
                    </div>
            </div> 
    `
})