const actu = document.getElementById('actu');
const ImageSrc = "/assets/imgTmp/download.jpg"

const path = "/"
const Elemnt = `

  <div class="news-section">
      <!-- Hero Image -->
      <div class="hero-container " id="heroContainer">
            <img src="${ImageSrc}" alt="Actualités Mayotte" class="hero-image">
            <div class="hero-overlay">
            <div class="click-indicator">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="28" stroke="white" stroke-width="2" opacity="0.8"/>
                  <path d="M30 20v20M30 40l-8-8M30 40l8-8" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
            <p>Cliquez pour lire l'actualité</p>
      </div>
                  <h1 class="hero-title">Titre</h1>
                  <p class="hero-text">Lorem ipsium dolor, sit amet, consectetue adipsicing elit
                        Quae facere eauqe .</p>
            </div>
      </div>
    <section class="car" >
            <div class="container" id="containerDetails">
                    <div class="content-details" id="contentDetails">
                        <div class="content-grid">

                              <div class="left-column">
                                    <img src="${ImageSrc}"  alt="Actualités Madagascar" class="featured-image">

                                    <h2 class="main-title">Titre</h2>

                                    <div class="content-block bloc1">
                                          <a href="" class="source-link">Mayotte</a>
                                          <p class="content-description" style="margin-top: 15px;">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae facere
                                                eaque quod
                                                magni ipsa quam tempore aspernatur recusandae aut. Nostrum consequuntur
                                                debitis
                                                reprehenderit nihil? Alias esse ut ipsam voluptatum sed!
                                          </p>
                                    </div>
                              </div>

                              <!-- Colonne droite (2/3) -->








                              <div class="right-column">
                                    <div class="content-block ">
                                          <h2 class="section-title" style="font-size:1.2rem">Actualite </h2>
                                         
                                          <p class="content-description  bloc2" style="margin-top: 15px;">
                                                Retrouvez toute l'actualité de Madagascar en continu, partout et à tout
                                                moment, avec Orange actu Madagascar.
                                                Une application mobile est également disponible.
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum a
                                                aliquid, quam facere cum labore porro officia pariatur? Blanditiis
                                                praesentium modi ea dolor odio quibusdam molestias et nisi libero aut!
                                                
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam facilis sint quo dolore at quisquam ullam excepturi, dolores id eum. Doloremque dolor laudantium natus? Nesciunt unde consectetur nostrum explicabo!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, pariatur? Ipsa adipisci aliquid eveniet odit commodi quae sint ea unde culpa voluptate inventore repellendus accusantium incidunt, deleniti consequatur dignissimos. Rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facilis maxime quod perferendis debitis rerum ratione? Ipsa reprehenderit perferendis ab porro consequatur similique cumque! Commodi maxime ad quibusdam optio voluptate
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquam facilis sint quo dolore at quisquam ullam excepturi, dolores id eum. Doloremque dolor laudantium natus? Nesciunt unde consectetur nostrum explicabo!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, pariatur? Ipsa adipisci aliquid eveniet odit commodi quae sint ea unde culpa voluptate inventore repellendus accusantium incidunt, deleniti consequatur dignissimos. Rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facilis maxime quod perferendis debitis rerum ratione? Ipsa reprehenderit perferendis ab porro consequatur similique cumque! Commodi maxime ad quibusdam optio voluptate?</p>                
                       <a href="" class="reference-link">source  Facebook</a>
                                    </div>
                              </div>
                        </div>
                  </div>



                  <!--  Popup -->
                  <div class="popup_overlay_car" id="popup_car">
                        <div class="popup_content_car">
                              <span class="popup_close_car" onclick="closePopupCar()"></span>
                              <h3 id="popup_title_car"></h3>
                              <p id="popup_date_car"></p>
                              <p id="popup_description_car"></p>
                        </div>
                  </div>
            </div>

      </section>





      <!-- Bouton de fermeture -->
      <div class="close-indicator" id="closeBtn"><a href="#heroContainer">Réduire </a></div>
</div>`;

actu.insertAdjacentHTML('beforeend', Elemnt);

