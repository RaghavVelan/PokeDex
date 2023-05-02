import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import pokeball from './img/pokeball.png'
import Card from './components/Card';
import Head from './components/Head';
import Pagination from './components/Pagination';
import PokeModel from './components/PokeModel';


const baseUrl = 'https://pokeapi.co/api/v2/pokemon'


function App() {

  const [pokemons ,setPokemons] = useState([]);
  const [allPokemons,setAllPokemons] = useState([]);
  const [pokeSearch,setPokeSearch] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState([baseUrl]);
  const [nextPageUrl, setNextPageUrl] = useState([]);
  const [prevPageUrl, setPrevPageUrl] = useState([]);
  const [loading, setLoading] = useState(true)
  const [pokeDex,setPokeDex] = useState([])
  // const [pokeDexId,setPokeDexId] = useState()
  // const [modelName, setModelName] = useState(true)

  const arrpokesearch = [pokeSearch]

  const fetchAllPokemons = () => {
    axios.get(baseUrl + '?limit=9999')
    .then((response) => {
      setAllPokemons(response.data.results);
    })
  }

  // fetchAllPokemons()
  // console.log(pokeDex)
  // console.log(pokeDexId)


  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {cancelToken: new axios.CancelToken(c => cancel = c)})
    .then((response) => {
      setLoading(false)
      fetchAllPokemons()
      setNextPageUrl(response.data.next)
      setPrevPageUrl(response.data.previous)
      setPokemons(response.data.results);
    })

    return () => cancel();
   }, [currentPageUrl])

   function gotoNextPage(){
    setCurrentPageUrl(nextPageUrl)
   }

   function gotoPrevPage(){
    setCurrentPageUrl(prevPageUrl)
   }

   function SearchPokemon(pokename){
    var poke = pokename.toLowerCase()
    const searchResult = allPokemons.find(pokemon=> pokemon.name === poke
    )
    setPokeSearch(searchResult)
  }

  function HandleBack(){
    if(arrpokesearch[0].name){
      setPokeSearch("")
    }
  }
  
  function HandleHome(){
    if(prevPageUrl){
      setCurrentPageUrl(baseUrl)
    }
  }

  // function HandlePoke(){
  //  if(pokeDex.name === ""){
  //   setModelName(false)
  //  }
  //  else setModelName(true)
  // }

  if(loading) return (
    <div className="loading">
      <img src={pokeball} alt="" />
      Loading...
    </div>
    )

  return (
    <div className="App" id='App'>
      <Head SearchPokemon={SearchPokemon} allPokemons={allPokemons} />
      {!arrpokesearch[0].name ? <Pagination
       gotoNextPage={nextPageUrl ? gotoNextPage : null}
       gotoPrevPage={prevPageUrl ? gotoPrevPage : null} 
       HandleHome={HandleHome}/> :  <button className='btn' onClick={HandleBack}>Back</button> }
      {prevPageUrl ? <button className='btn' onClick={HandleHome} >Home</button>: null}
      <br />
      <div className='cards'>
      <Card pokemons={pokemons} baseUrl={baseUrl} pokeSearch={pokeSearch} infoPokemon={poke=>setPokeDex(poke)} infoPokemonId={poke=>setPokeDexId(poke)} />
      </div>
      {
      pokeDex.length === 0 ? null
      : <PokeModel  name={pokeDex.name} url={pokeDex.url} pokeDex={setPokeDex}/> 
      }
    </div>
  );
}

export default App;
