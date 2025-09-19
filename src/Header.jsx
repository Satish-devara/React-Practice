import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import { useContext } from "react";
import DataContext from "./context/DataContext";


function Header({ title }) {
    const { width} = useContext(DataContext);

  return (
    <header className="Header">
      <h1>{title}</h1>
      {width < 768 ? <FaMobileAlt /> : width < 992 ? <FaTabletAlt /> : <FaLaptop />}
      <div className="icons">
        
        
        
      </div>
    </header>
  );
}

export default Header;
