import React, { useState } from 'react';
import '../App.css';
import logo from '../img/logo.svg';

export default function Head(props) {

  const [name,setName] = useState("");
  var searchName = name.toLowerCase();

  function SearchItem(searchName){
    const value = document.querySelector(".search-bar").value
    if(value===""){
      alert("Enter a pokemon name to search")
      return
    }

    const check = (arr, str) => JSON.stringify(arr).includes(str);
    
      
    if(name === "") return
    
    if(check(props.allPokemons,searchName)){
      props.SearchPokemon(searchName)
      setName("")
    }
    else{
      alert("Pokemon does not exists")
    }
}

function handleKeyPress(event){
  if(event.key === 'Enter'){
    if(event.target.value !== ""){
      SearchItem(searchName)
    }
    else{
      alert("Enter a pokemon name to search")
    }
  }
}


  return (
    <>
        <div className="head">
            <img src={logo} alt="PokeDex" onClick={props.HandleBack} />
            <div className="search">
                <input type="text" id='search-bar' placeholder='Search Pokemon' className='search-bar' value={name} onChange={e=>setName(e.target.value)} onKeyDown={handleKeyPress} />
                <button type='submit' className='search-btn' onClick={()=>SearchItem(searchName)}>Search</button>
            </div>
            <br />
        </div>
    </>
  )
}
