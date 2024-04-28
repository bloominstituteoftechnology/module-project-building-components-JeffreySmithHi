function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here
    let containerNav = document.createElement('nav')
      links.forEach(link => {
        let a = document.createElement('a')
        a.href = link.href
        a.title = link.title
        a.textContent = link.textContent
        containerNav.appendChild(a)
      })
    return containerNav
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    let cardDiv = document.createElement('div')
    cardDiv.classList.add('learner-card')

    let pName = document.createElement('p')
      pName.textContent = learner.fullName


      let pId = document.createElement('p')
      pId.textContent = `Learner ID: ${learner.id}`

      let pDOB = document.createElement('p')
      pDOB.textContent = `Date of Birth: ${learner.dateOfBirth}`

      let pFavLang = document.createElement('p')
      let favLang = languages.find(fav => fav.id === learner.favLanguage)
      
      pFavLang.textContent = `Favorite Language: ${favLang.name}`
    
    document.querySelector('section').appendChild(cardDiv)
    cardDiv.appendChild(pName)
    cardDiv.appendChild(pId)
    cardDiv.appendChild(pDOB)
    cardDiv.appendChild(pFavLang)

    let clickDiv = () => {
      document.querySelectorAll('.learner-card').forEach(cardDiv => {
        cardDiv.classList.remove('active')
      })
      cardDiv.classList.add('active')
    }

    cardDiv.addEventListener('click', clickDiv)

    return cardDiv

  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM
    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]

    learners.forEach(learner => {
      let card = buildLearnerCard(learner, languages)
      document.querySelector('section').appendChild(card)
    })

  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    let foot = document.createElement('footer')



    let companyInfoDiv = document.createElement('div')
    companyInfoDiv.classList.add('company-info')




    let companyName = document.createElement('p')
    let companyAddress = document.createElement('p')
    let companyContactEmail = document.createElement('p')

    companyName.classList.add('company-name')
    companyAddress.classList.add('address')
    companyContactEmail.classList.add('contact-email')

    companyName.textContent = footerData.companyName
    companyAddress.textContent = footerData.address
    companyContactEmail.innerHTML = `Email: <a href="${footerData.contactEmail}"> ${footerData.contactEmail}</a>`


    let copyrightDiv = document.createElement('div')
    let companyCopyrightName = document.createElement('p')
    let currentYear = new Date().getFullYear()
    companyCopyrightName.textContent = `© ${footerData.companyName.toUpperCase()} ${currentYear}`
    

    document.body.appendChild(foot)
    foot.appendChild(companyInfoDiv)
    companyInfoDiv.appendChild(companyName)
    companyInfoDiv.appendChild(companyAddress)
    companyInfoDiv.appendChild(companyContactEmail)
    
    copyrightDiv.appendChild(companyCopyrightName)
    

    let companySocialMediaDiv = document.createElement('div')
    companySocialMediaDiv.classList.add('social-media')
    foot.appendChild(companySocialMediaDiv)

    foot.appendChild(copyrightDiv)

    for (let platform in footerData.socialMedia) {
      if (footerData.socialMedia.hasOwnProperty(platform)) {
        let url = footerData.socialMedia[platform];
        let a = document.createElement('a');
        a.href = url;
        a.textContent = platform;
        companySocialMediaDiv.appendChild(a);
      }
    }
    return foot
  }

   //❗ DOM creation using your `buildFooter` component (do not change):
   document.body.appendChild(buildFooter({
     companyName: 'Bloom Institute of Technology',
     address: '123 Main Street, City, Country',
     contactEmail: 'info@example.com',
     socialMedia: {
       Twitter: 'https://twitter.com/example',
       Facebook: 'https://www.facebook.com/example',
       Instagram: 'https://www.instagram.com/example',
     },
   }))

   

  // 👉 TASK 4 - Clicking on the section should deactivate the active card
  let deClickDiv = (evt) => {
    if(evt.target === document.querySelector('section')) {
      let cards = document.querySelectorAll('.learner-card')
      cards.forEach(card => card.classList.remove('active'))
    }
  }

  document.body.addEventListener('click', deClickDiv)
  //  ✨ do your magic here
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()


