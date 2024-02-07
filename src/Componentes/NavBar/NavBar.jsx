import "./NavBar.css"
import CardWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="containerNavbar">
        <navbar className="navbarPrincipal">
          <img className="imagenQueGaucho" src="/public/img/Que_Gaucho-removebg-preview.png" alt="Imagen de que gaucho" />
          <a className="enlaceNavbar" href="/">Inicio</a>
          <NavLink to={"/categoria/Hamburguesa"}>
            <p>Hamburguesa</p>
          </NavLink>
          <NavLink to={"/categoria/Papas_Fritas"}>
            <p>Papas</p>
          </NavLink>
          <NavLink to={"/categoria/Bebidas"}>
            <p>Bebidas</p>
          </NavLink>
          <CardWidget />
        </navbar>
      </div>
    </>
  );
}

export default NavBar;