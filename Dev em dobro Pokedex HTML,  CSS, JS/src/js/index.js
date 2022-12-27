/*
Quando clicar no pokémon da listagem temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem.

Pra isso vamos precisar trabalhar com dois elementos:
- Listagem
- Cartão pokémon.

Precisamos criar duas variáveis no JS para trabalhar com os elementos da tela.

Vamos precisar trabalhar om um evento de clique feito pelo usário na listagem de pokémons.

- Remover a classe "aberto" só do cartão em aberto.

- Ao clicar em um pokémon da listagem pegamos o "id" desse pokémon para saber o cartão mostrado.

- Remover a classe "ativo" que marca o pokémon selecionado.

- Adicionar a classe "ativo" no item da lista selecionado.

*/

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon => {
    //Vamos precisar trabalhar om um evento de clique feito pelo usário na listagem de pokémons.
    pokemon.addEventListener('click', () => {
        //-Remover a classe "aberto"só do cartão em aberto.
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.class.remove ('aberto')

        //Ao clicar em um pokémon da listagem pegamos o "id" desse pokémon para saber o cartão mostrado.

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.class.add('aberto')

        //Remover a classe "ativo" que marca o pokémon selecionado.
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //Adicionar a classe "ativo" no item da lista selecionado.
        const pokemonSelecionadoNaListagem = doument.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})