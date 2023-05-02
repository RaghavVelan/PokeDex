import React, { useState } from 'react';
import axios from 'axios'
import '../App.css';
import pokeball from '../img/pokeball.png'


export default function Card({pokemons, baseUrl, pokeSearch, infoPokemon, infoPokemonId}) {

    

    const arrpokesearch = [pokeSearch]

    // const fetchPokemon = async (pokeid) => {
    //     const { data } = await axios.get(baseUrl + `pokemon/${pokeid}`)
      
    //     return {
    //       sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`,
    //       data: data
    //     }

    //   }

   


  return (
    <>

        { !arrpokesearch[0].name ? pokemons.map((pokemon,pokeid) => {
          
            let text = pokemon.url;
            const chars = text.split("/");
            let pokeid1 = chars[6]
            // console.log()
            return (
              <div className='card' key={pokeid} onClick={()=>infoPokemon(pokemon)} >
              {pokeid1 < 650 ? 
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeid1}.svg`} className='pokemonImg' alt=""  /> : 
              <img src={pokeball} className='pokemonImg' alt="" />}
                <h3 className='pokemonName'>{pokemon.name}</h3>
              </div>
            )
        })  :arrpokesearch.map((pokemon,pokeid) => {
          let text = pokemon.url;
          const chars = text.split("/");
          let pokeid1 = chars[6]
          return (
            <div className='card' key={pokeid} onClick={()=>infoPokemon(pokemon)}>
            {pokeid1 < 650 ? 
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeid1}.svg`} className='pokemonImg' alt="" /> : 
            <img src={pokeball} className='pokemonImg' alt="" />}
              <h3 className='pokemonName'>{pokemon.name}</h3>
            </div>
          )
      })
           
    }
    

      

      
    </>
  )
}
