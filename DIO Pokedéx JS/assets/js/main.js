const pokemon_list_id = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 8;
let offset = 0;

const max_records = 151;
const max_width = 55;

function load_more_pokemons(offset, limit) {
	function convert_pokemon_to_html(pokemon) {
		return `<li class="pokemon ${pokemon.type}">
					<div class"main">
						<span class="name">${pokemon.name}</span>
						<span class="number">#${pokemon.id}</span>
					</div>
					<ol class="types">
						${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
					</ol>
					<img src="${pokemon.photo}" alt="">
					<div class="data">
						<div class="views">
							<span class="view-info ${pokemon.type}">Info</span>
							<span>Evolution</span>
							<span>Moves</span>
						</div>
						<div class="info">
							<p class="about">
								${pokemon.about}
							</p>
							<div>
								<div class="container">
									<span>HP</span>
									<span class="value">${pokemon.hp}</span>
									<span style="width: calc((${pokemon.hp} / 100) * ${max_width}%);" class="skills HP ${pokemon.type}"></span>
								</div>
								 <div class="container">
									<span>ATK</span>
									<span class="value">${pokemon.atk}</span>
									<span style="width: calc((${pokemon.atk} / 100) * ${max_width}%); "class="skills ATK ${pokemon.type}"></span>
								</div>
								  <div class="container">
									<span>DEF</span>
									<span class="value">${pokemon.def}</span>
									<span style="width: calc((${pokemon.def} / 100) * ${max_width}%);" class="skills DEF ${pokemon.type}"></span>
								</div>
								   <div class="container">
									<span>SATK</span>
									<span class="value">${pokemon.satk}</span>
									<span style="width: calc((${pokemon.satk} / 100) * ${max_width}%);"  class="skills SATK ${pokemon.type}"></span>
								</div>
									<div class="container">
									<span>SDEF</span>
									<span class="value">${pokemon.sdef}</span>
									<span style="width: calc((${pokemon.sdef} / 100) * ${max_width}%);" class="skills SDEF ${pokemon.type}"></span>
								</div>
								<div class="container">
									<span>SPD</span>
									<span class="value">${pokemon.spd}</span>
									<span style="width: calc((${pokemon.spd} / 100) * ${max_width}%);"  class="skills SPD ${pokemon.type}"></span>
								</div>
							</div>
						</div>
						<div class="weakness">
							Weak to
							<ol class="types">
								${pokemon.weakness.map((weak) => `<li class=${weak}>${weak}</li>`).join('')}
							</ol
						</div>
					</div>
				</li>`;
	}


	poke_api.get_pokemons(offset, limit).then((pokemons = []) => {
		pokemon_list_id.innerHTML += pokemons.map(convert_pokemon_to_html).join('');
	})
}

load_more_pokemons(offset, limit);

loadMoreButton.addEventListener('click', () => {
	offset += limit
	const qtdRecordsWithNexPage = offset + limit

	if (qtdRecordsWithNexPage >= max_records) {
		const newLimit = maxRecords - offset
		load_more_pokemons(offset, newLimit)

		loadMoreButton.parentElement.removeChild(loadMoreButton)
	} else {
		load_more_pokemons(offset, limit)
	}
})

var btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function () {
	window.scrollTo(0, 0);
});


var btn = document.querySelector("#to-bottom");

btn.addEventListener("click", function () {
	window.scrollTo(0, 100000);
	if(scrollTo = newlimit){
		loadMoreButton = 0;
	}
});

