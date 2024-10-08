import React from 'react'
import '../App.css';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Back from '../img/Back.svg';

export default function PokeModel({name,url,pokeDex}) {

  const [abilities,setAbilities] = useState([])
  const [types,setTypes] = useState([])
  const [stats,setStats] = useState([])
  const [height,setHeight] = useState()
  const [weight,setWeight]= useState()
  const [id, setId] = useState(0)
  const baseurl = `https://pokeapi.co/api/v2/pokemon/${name}`
  

  useEffect(() => {
    axios.get(baseurl)
    .then((response) => {
      setAbilities(response.data.abilities)
      setTypes(response.data.types)
      setStats(response.data.stats)
      setHeight(response.data.height)
      setWeight(response.data.weight)
      setId(response.data.id)
      document.body.style.overflow = 'hidden';
    })
    return() => document.body.style.overflow = 'auto';
   }, [baseurl])

  return (
    <div className='model'>
      <span className='close'><img src={Back} alt="Back" onClick={()=>pokeDex([])} /></span>
        <div className="modelCard">
          <h2>{name}</h2>
         <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} className='pokemonImg' alt={name}  />
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
                    <span className='progress'>
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
