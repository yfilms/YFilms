const search_input = document.getElementById('searchInput');

let movies;

fetch('./assets/js/data.json')
  .then(response => response.json())
  .then(json => {
     movies = json
  });

document.getElementById('noResult').hidden = true;

search_input.addEventListener('keyup', function(){
    const input = search_input.value;

    const result = movies.filter(item => item.title.toLocaleLowerCase().includes(input.toLocaleLowerCase()));

    let suggestion = '';

    if(result.length <= 20){
        if(input !=''){
        result.forEach(resultItem =>
            suggestion +=`
                <div class="col mb-4">
                    <div class="card">
                        <img src="${resultItem.cover}" class="card-img-top"></img>
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold">${resultItem.title}</h5>
                            <p class="card-text"><small class="text-muted"><strong>Date de sortie : </strong>${resultItem.date}</small></p>
                            <p class="card-text mb-3"><small class="text-muted"><strong>Sous-catégories : </strong>${resultItem.gender}</small></p>
                            <div class="overflow-auto" style=" max-height: 150px;">
                                ${resultItem.synopsis}
                            </div>
                        </div>
                        <button class="btn btn-success mt-2 mb-2 ml-2 mr-2" onclick=" window.open('${resultItem.url_bandeAnnonce}','_blank')">Regarder la bande-annonce</button>
                        <p class="text-muted mx-auto pb-2" style="font-size:12px;">Bande-annonce @www.allocine.fr</p>
                        <p class="text-danger mx-auto pb-2" style="font-size:12px">Tous nos films sont en 1080p ou 4k !</p>
                    </div>
                </div>
            `
            )
        }
    }

    if(result.length == 0){
        document.getElementById('noResult').hidden = false;
    } else {
        document.getElementById('noResult').hidden = true;
    }

    document.getElementById('suggestions').innerHTML = suggestion;
})



