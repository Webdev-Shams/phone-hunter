const searchPhone = () => {
    const searchField =  document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';

    // Load data
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data));
}




const displaySearchResult = phones => {
    console.log(phones);
    const searchResult = document.getElementById('search-result');
    
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card cardBg pt-3">
            <img src="${phone.image}" class="card-img-top img-thumbnail rounded w-75 mx-auto" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <h6 class="card-title">${phone.brand}</h6>
                <p id="pGraph" class="card-text fst-italic">${phone.slug}</p>

                <button type="button" onclick="loadPhoneDetail(document.getElementById('pGraph').innerHTML)" class="btn btn-secondary btn-sm">Small button</button>
                
        </div>
        `;
        searchResult.appendChild(div);
    })
}

const loadPhoneDetail = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetail(data.data));
}

const displayPhoneDetail = phone => {
    console.log(phone);

    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card', 'cardBg', 'mx-auto');
    div.innerHTML = `
                <img class="card-img-top" src="${phone.image}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${phone.name}</h5>
                <h6 class="card-title">${phone.brand}</h6>
                <p class="card-text">${phone.releaseDate}</p>
                <p class="card-text">${phone.releaseDate}</p>
                <p class="card-text">${phone.releaseDate}</p>
                <p class="card-text">${phone.releaseDate}</p>
                </div>
              </div>
    `;

    phoneDetails.appendChild(div);
}




