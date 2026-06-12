
const showcase = document.querySelectorAll(".category-showcase");

fetch("./data/experiences.json")
    .then(response => response.json())
    .then(experiences => {

        const journey = [];
        let currentExperience;

        const addToJourneyButton = document.querySelector(".add-to-journey-button");

        function renderCategory(actualCategory, container) {
            const categoryExperiences = experiences.filter(experience => {
                return experience.category === actualCategory;
            });

            const featuredContainer =
                container.querySelector(".featured-experience");

            const secondaryContainer =
                container.querySelector(".secondary-experiences");

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
                currentExperience = actualExperience;
                modal.classList.remove("modal-hidden");



                const modalTitle = document.querySelector(".modal-info__title");
                const modalLocation = document.querySelector(".modal-info__location");
                const modalDescription = document.querySelector(".modal-info__description");
                const modalImage = document.querySelector(".modal-image img");
                const modalMetaDifficulty = document.querySelector(".modal-meta__difficulty");
                const modalMetaDuration = document.querySelector(".modal-meta__duration");
                const modalPrice = document.querySelector(".modal-price");


                modalTitle.textContent = actualExperience.title;
                modalLocation.textContent = actualExperience.location;
                modalDescription.textContent = actualExperience.description;

                modalImage.src = `${actualExperience.image}`;

                modalImage.alt = `${actualExperience.alt}`;

                modalMetaDifficulty.textContent = actualExperience.difficulty;

                modalMetaDuration.textContent = `${actualExperience.duration} Days`;

                modalPrice.textContent = `$ ${actualExperience.price}`;


            });
        });

        addToJourneyButton.addEventListener("click", () => {
            const exist = journey.some(experience => experience.id === currentExperience.id);
            if (exist) {
                console.log("Experience already added to the journey.")
            } else {
                journey.push(currentExperience);
                console.log(`Added: ${currentExperience.title}`)
                console.log(journey);
            }
        });

        const modal = document.querySelector(".experience-modal");
        const modalContent = document.querySelector(".experience-modal__content");

        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.classList.add("modal-hidden");
            }
        });

        const closeButton = document.querySelector(".modal-close-button");

        closeButton.addEventListener("click", () => {
            modal.classList.add("modal-hidden");
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                modal.classList.add("modal-hidden");
            }
        });






    }

    );







