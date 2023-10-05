const nav = document.querySelector('nav')
const navToggle = document.querySelector('.mobile-nav-toggle')

// HAMBURGER MENU
navToggle.addEventListener('click', ()=>{
    const visibility = nav.getAttribute('data-visible')


    if(visibility === "false"){
        nav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else if(visibility === "true"){
        nav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }

    console.log(visibility)
})


// JSON FETCH
fetch('data.json')
    .then(results => results.json())
    .then((obj)=>{
        let galleryObj = obj.gallery
        let uxObj = obj.portfolio
// UX PORT
        for (const key in uxObj) {
            let output = ''
            for(let item of uxObj){
                output += `
                        <div class="products">
                            <img aria-label="hidden" src="${item.imageLink}">
                            <h3 class="title">${item.title}</h3>    
                        </div>
                        `
                    }
            document.querySelector(".portfolio-container").innerHTML = output
        }

//  GALLERY
        for (const key in galleryObj) {
            let output = ''
            for(let item of galleryObj){
                output += `
                        <div class="products">
                            <div>
                                <img aria-label="hidden" src="${item.imageLink}">
                            </div>
                        </div>
                        `
                    }
            document.querySelector(".gallery-container").innerHTML = output
        }

    })
    .catch((err)=>{
        console.error(err)
    })
    