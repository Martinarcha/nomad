fetch("./data/experiences.json")
    .then(response => response.json())
    .then(experiences => {
        console.log(experiences)
    })

console.log(experiences);