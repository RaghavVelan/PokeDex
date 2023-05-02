import React, { useState } from 'react';
import '../App.css';
import logo from '../img/logo.svg';

export default function Head(props) {

  const [name,setName] = useState("");
  var searchName = name.toLowerCase();

 


  // var items = JSON.stringify(props.allPokemons)
  // var item = [props.allPokemons]
  // var newItem =[{name}]

  // var itemArray = item[0].map((poke,id) => {
  //   itemArray.Name = poke[id];
  // })
// for(var i=0;i<item[0].length;i++){
//   // newItem.id.push(i)
//   newItem.name.push(item[0][i].name)
// }
// console.log(newItem);
 
  // console.log(newItem[0][])
// var btnClick = document.querySelector(".search-btn")

// btnClick.addEventListener(click,SearchItem)

  function SearchItem(searchName){
    // event.preventDefault()
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
            <img src={logo} alt="PokeDex" />
            <div className="search">

            {/* dropDown */}
                {/* <select id="search-bar" className='search-bar' value={name} onChange={e=>setName(e.target.value)} onKeyDown={handleKeyPress}>
                  {props.allPokemons.map((value) => (
                    <option value={value} key={value}>{value}</option>
                  ))
                  }
                </select> */}

                {/* <ReactSearchAutocomplete className='search-bar'
                items={newItem}
                /> */}
            {/* end */}

                <input type="text" id='search-bar' placeholder='Search Pokemon' className='search-bar' value={name} onChange={e=>setName(e.target.value)} onKeyDown={handleKeyPress} />
                <button type='submit' className='search-btn' onClick={()=>SearchItem(searchName)}>Search</button>
            </div>
            <br />
        </div>
    </>
  )
}
