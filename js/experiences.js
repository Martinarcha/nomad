
const showcase = document.querySelectorAll(".category-showcase");

fetch("./data/experiences.json")
    .then(response => response.json())
    .then(experiences => {

        function renderCategory(categoriaActual, contenedor) {
            const categoryExperiences = experiences.filter(experience => {
                return experience.category === categoriaActual;
            });

            const featuredContainer =
                contenedor.querySelector(".featured-experience");

            const secondaryContainer =
                contenedor.querySelector(".secondary-experiences");

            featuredContainer.innerHTML = "";
            secondaryContainer.innerHTML = "";


            categoryExperiences.forEach((experience, index) => {
                if (index === 0) {

                    featuredContainer.innerHTML += `

                    <div class="featured-experience-card" data-id="${experience.id}">
                        <div class="featured-experience__image">
                            <img src="${experience.image}"
                                alt="${experience.alt}">
                        </div>

                        <div class="featured-experience__content">
                            <p class="featured-experience__location">
                                ${experience.location}
                            </p>

                            <h3 class="featured-experience__title">
                                ${experience.title}
                            </h3>
                        </div>

                    </div>

                `;
                } else {
                    secondaryContainer.innerHTML += `
                    <div class="secondary-experience" data-id="${experience.id}">

                        <div class="secondary-experience__image">
                            <img src="${experience.image}"
                                alt="${experience.alt}">
                        </div>

                        <div class="secondary-experience__content">

                            <p class="secondary-experience__location">
                                ${experience.location}
                            </p>

                            <h4 class="secondary-experience__title">
                                ${experience.title}
                            </h4>

                        </div>

                    </div>
                `
                }
            });

        }
        renderCategory("mountains", showcase[0]);
        renderCategory("ocean", showcase[1]);
        renderCategory("desert", showcase[2]);
        renderCategory("forest", showcase[3]);


        const cards = document.querySelectorAll(
            ".featured-experience-card, .secondary-experience"
        );

        cards.forEach(card => {
            card.addEventListener("click", () => {
                const clickedId = card.dataset.id;
                const actualExperience = experiences.find(experience => {
                    return experience.id === Number(clickedId);
                });
                modal.classList.remove("modal-hidden")
                console.log(actualExperience);
            });
        });

        const modal = document.querySelector(".experience-modal");
        const modalContent = document.querySelector(".experience-modal__content");

    }

    );







