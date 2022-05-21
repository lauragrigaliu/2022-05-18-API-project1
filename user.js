fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => {
      let userList= document.querySelector("#user-list")
    users.map (user =>{
        let name = user.name;
        let username =user.username;
        let email = user.email;
        let address = user.address;
        
        let fullAdress = `${address.street} ${address.suite} ${address.city} ${address.zipcode}`
        // let mapsLink = `https://www.google.com/maps/search/?api=1&query=${adress.geo.lat},${address.geo.}`
        // https://www.google.com/maps/search/?api=1&query=47.5951518%2C-122.3316393
     
        let phone = user.phone;
        let website = user.website;
        let company = user.company.name;
        let userItem =document.createElement ("div")
        let userId = user.id; 
       userItem.classList.add('user-item');
        userList.append (userItem)
        
        // let queryParams = document.location.search;
        // let urlParams = new URLSearchParams(queryParams)
        
        
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(res => res.json())
        .then(posts => {
            let userPosts=document.querySelector("#user-posts");
            let post
            posts.map(post => {

                let body = post.body;
               
                
                console.log (post.userId)

             userItem.innerHTML = `<p><strong>Name:</strong>${name}</p>
             <p><strong>Username:</strong>${username}</p>
             <p><strong>Email:</strong><a href="mailto:">${email}</a></p>
             <p><strong>Adress:</strong><a href="#">${fullAdress}</a></p>
             <p><strong>Phone:</strong><a href="tel:">${phone}</a></p>

             <p><strong>Website:</strong><a href="https://${website}"target="_blank">${website}</a></p>

             <p><strong>Company:</strong>${company}</p>
             <p><strong>Posts:</strong> ${body}</p>
             <br></br>`
            })
            
        })
            

    })  
    
  })
