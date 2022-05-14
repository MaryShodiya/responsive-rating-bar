
    function star(event){
    let stars = []
    let icons = document.querySelectorAll('.star')
    let selectedStars = Array.from(icons).indexOf(event.target)
    if (stars.includes(event.target.id)){
        stars.splice(selectedStars, stars.length)
      for (let i = selectedStars; i <= icons.length-1; i++)  {
      icons[i].style.color = 'black' 
      icons[i] .className= 'fas  fa-star star'  
      }
    }else{
        stars = []
        for(let i = 0; i <= selectedStars; i++) {
        stars.push(icons[i].id)   
        icons[i].className = 'fa fa-star star'
        icons[i].style.color= 'orangered'
        }
    }
    document.querySelector('.submit').addEventListener('click',submit)
    function submit() {
    document.getElementById('rating').innerText =  'You selected ' + stars.length.toString() + ' out of five stars'
    document.getElementById('msg').innerText = 'Thank you! We appreciate you taking the time to give a rating. If you ever need more support, dont hesitate to get in touch!'
}
    }
