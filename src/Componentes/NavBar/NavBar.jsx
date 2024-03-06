import "./NavBar.css"
import CardWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="containerNavbar">
        <div className="navbarPrincipal">
          <img className="imagenQueGaucho" src="/img/Que_Gaucho-removebg-preview.png" alt="Imagen de que gaucho" />
          <NavLink to={"/"} className="enlaceNavbar">Inicio</NavLink>
          <NavLink className="enlaceNavbar" to={"/categoria/Hamburguesa"}>
            <p>Hamburguesa</p>
          </NavLink>
          <NavLink className="enlaceNavbar" to={"/categoria/Papas_Fritas"}>
            <p>Papas</p>
          </NavLink>
          <NavLink className="enlaceNavbar" to={"/categoria/Bebidas"}>
            <p>Bebidas</p>
          </NavLink>
          <Link to={"/cart"}>
          <CardWidget />
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;