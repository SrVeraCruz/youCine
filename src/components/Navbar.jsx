import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"

import style from "./Navbar.module.css"


const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  
  // function
  const submit =()=> {
    if(search){
      navigate(`/search?q=${search}`)
    }
    setSearch("");
  }
  
  ////////////

  const handleSubmit = (e) => {
    e.preventDefault();
    
    submit();
  }

  const handleKeyDown = (e) => {
    if(e.key === "Enter"){
      submit();
    }
  }

  return (
    <div>
      <nav id={style.navbar}>
          <h2>
            <Link to="/">
              <BiCameraMovie /> MoviesLib
            </Link>
          </h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search a film" 
            onChange={(e)=> {setSearch(e.target.value)}} 
            value={search}
            onKeyDown={handleKeyDown}
            />
            <button type="submit"><BiSearchAlt2 /></button>
          </form>
        </nav>
    </div>
  )
}

export default Navbar
