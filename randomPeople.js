//Random Customers

function fetchData() {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(res => {
      var people = [
        res.results[0],
      ]
  
      for (let i = 0; i < people.length; i++) {
        var image = document.createElement("img")
        image.src = people[i].picture.medium
        random.appendChild(image)
  
        var name = document.createElement("div")
        name.innerHTML = people[i].name.title + " " + people[i].name.first + " " + people[i].name.last
        random.appendChild(name)
        
        var phone = document.createElement("div")
        phone.innerHTML = people[i].phone
        random.appendChild(phone)
  
        var age = document.createElement("div")
        age.innerHTML = people[i].dob.age
        random.appendChild(age)
        
        var email = document.createElement("div")
        email.innerHTML = people[i].email
        random.appendChild(email)
        
        var gender = document.createElement("div")
        email.innerHTML = people[i].gender
        random.appendChild(gender)
        
        var city = document.createElement("div")
        city.innerHTML = people[i].location.city
        random.appendChild(city)
        
        var country = document.createElement("div")
        country.innerHTML = people[i].location.country
        random.appendChild(country)
      }
    })
  }
  
  for(let i = 0; i < 5; i++) {
    fetchData()
  }
  
  
  