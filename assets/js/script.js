const cardContainer = document.getElementById('card-container');

for (let i = 0; i < 6; i++) {
  axios.get('https://lanciweb.github.io/demo/api/pictures').then((res) => {
    const card = res.data
    cardContainer.innerHTML += `<div class="col-12 col-md-6 col-lg-4">
      <div div class="position-relative" >
        <div class="card p-3 rounded-0">
              <img src="${card[i].url}" class="card-img-top rounded-0" alt="...">
              <div class="card-body">  
              <p class="card-text">${card[i].date}</p>
              <p class="card-text"><strong class="fs-4">${card[i].title}</strong></p>
              </div>
            </div>
            <img src="./assets/img/pin.svg" class="position-absolute top-0 start-50 translate-middle " alt="">
          </div>
      </div>`
  })
}
