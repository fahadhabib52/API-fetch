let Api = "https://fahadhabib52.github.io/random-image-of-API/index.json"

async function getApi(url) {

    let responsive = await fetch(url)
    let data = await responsive.json()

    console.log(data)


    let img = ""

    data.forEach(element => {

        img += `

            <div class="card fade-in delay-1" tabindex="0" aria-describedby="desc1">
                <img src="${element.image_url}" alt="Laptop and code on screen" />
                <div class="card-body">
                <div class="card-id">${element.image_id}</div>
                <div class="card-category">${element.image_category}</div>
                <p class="card-description" id="desc1">${element.image_description}</p>
                <a href="${element.image_url}" target="_blank"><button class="card-button" aria-label="Explore Development API">Explore</button></a>
                </div>
            </div>
        `

        document.getElementById("cards-section").innerHTML = img
    });
}


getApi(Api)