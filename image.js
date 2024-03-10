const AccessKey = 'y5KUzpoHlBMxZZt-3vrKddZ_oS2Ibu8tnKZc2cA6PUs';

  const form = document.querySelector('form');
  const InputSearch = document.getElementById('search-input');
  const SearchResults = document.querySelector('.search-results');
  //  const SearchResult = document.querySelector('.search-result');
  const ShowMore = document.getElementById('show-more-button');

  let inputData = "";
  let page = 1;

 async function SearchImage(){
    inputData = InputSearch.value ;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${AccessKey};`

    const response = await fetch(url);
     const data = await response.json();

     const results = data.results;
     console.log(results);

     if(page === 1){
      SearchResults.innerHTML = "";
     }
  

  results.map( (result) => {
    const imagediv = document.createElement('div');
    imagediv.classList.add('search-result')
    const image = document.createElement('img')
    image.src = result.urls.small;
    const imagelink =document.createElement('a')
    imagelink.href = result.links.html
    imagelink.target = 'blank'
    imagelink.textContent = result.alt_description

    console.log(imagediv)
    console.log(image)
    console.log(imagelink);

    imagediv.appendChild(image);
    imagediv.appendChild(imagelink);
    SearchResults.appendChild(imagediv);
  });

  page++
  if(page > 1){
    ShowMore.style.display = 'block';
  }

 }

 form.addEventListener( "submit", (event) => {
  event.preventDefault();
  page = 1;
  SearchImage()
 })

 ShowMore.addEventListener( "click", () => {
  SearchImage()
 })




  