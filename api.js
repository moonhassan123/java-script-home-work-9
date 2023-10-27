console.log('connected');

function loadAllData(){
    fetch ('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => Display(data))
}

function Display(userslnfo){
    console.log(userslnfo);

    const containerDiv = document.getElementById('container')
    userslnfo.forEach(user =>{
        console.log(user);
        const div = document.createElement('div')
        div.classList.add('item')
        div.innerText =` 
         USERID :  ${user.userid} 
         ID :  ${user.id} 
         TITLE :  ${user.title} 
         BODY :  ${user.body} 

        `
        containerDiv.appendChild(div)
        
    });

}