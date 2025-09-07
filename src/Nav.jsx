import './Nav.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark custom-navbar fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#sobre-mi">Portafolio</a>

        <ul className="nav nav-pills flex-column flex-sm-row">
          <li className="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" >
            <a className="flex-sm-fill text-sm-center nav-link" href="#habilidades">Habilidades</a>
          </li>
          <li className="nav-item d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2 mx-2">
            <a className="nav-link" href="./proyectos">Proyectos</a>
          </li>
          <li className="nav-item d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2 mx-2">
            <a className="nav-link" href="#herramientas">Herramientas</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
