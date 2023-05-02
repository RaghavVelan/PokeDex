import React from 'react'
import '../App.css';
import pokeball from '../img/pokeball.png'
import axios from 'axios';
import { useEffect,useState } from 'react';
import { json } from 'react-router-dom';

export default function PokeModel({name,url,pokeDex}) {

  const [abilities,setAbilities] = useState([])
  const [types,setTypes] = useState([])
  const [stats,setStats] = useState([])
  const [height,setHeight] = useState()
  const [weight,setWeight]= useState()
  // console.log(name,url)
  const baseurl = `https://pokeapi.co/api/v2/pokemon/${name}`
  

  useEffect(() => {
    // setLoading(true)
    let cancel
    axios.get(baseurl)
    .then((response) => {
      // setLoading(false)
      // fetchAllPokemons()
      // setNextPageUrl(response.data.next)
      // setPrevPageUrl(response.data.previous)
      // setPokemons(response.data.results);
      // console.log(response.data)
      setAbilities(response.data.abilities)
      setTypes(response.data.types)
      setStats(response.data.stats)
      setHeight(response.data.height)
      setWeight(response.data.weight)

    })

    // return () => cancel();
   }, [baseurl])

   let text = url ? url : "undefined";
  // let text = url;
  const chars = text.split("/");
  let pokeid1 = chars[6];
  // let pokeid1 = 1

  return (
    <div className='model'>
      <span className='close' onClick={()=>pokeDex([])} ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
viewBox="0 0 30 30">
    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
</svg></span>
        <div className="modelCard">
          <h2>{name}</h2>
         <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeid1}.svg`} className='pokemonImg' alt={name}  />
         <div className="pokeWH">
         <span className='height'>HEIGHT: {height}</span>
         <span className="weight">WEIGHT: {weight}</span>
         </div>

         <div className="type">
          <h3>TYPE :&nbsp;</h3>
            {
              types.map((type)=>{
                return (
                  <span key={type.type.name}>{type.type.name.toUpperCase()} &nbsp;</span>
                )
              })
            }
          </div>

          <div className="ability">
            <h3>ABILITIES</h3>
            {
              abilities.map((ability)=>{
                return (
                  <span key={ability.ability.name}>{ability.ability.name.toUpperCase()}</span>
                )
              })
            }
          </div>         

          <div className="stat">
            <h3>STATS</h3>
            {
              stats.map((stat)=>{
                return (
                  <div className='IndividualStat' key={stat.stat.name}>
                    <span>
                    {stat.stat.name.toUpperCase()}  &nbsp;
                    </span>
                    <span>
                      :&nbsp;{stat.base_stat} / 255
                    </span>
                    </div>
                )
              })
            }
          </div>

        </div>
    </div>
  )
}
