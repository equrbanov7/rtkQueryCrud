import { Link } from "react-router-dom";
import "./index.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const { favorites, basket } = useSelector((state) => state.category);

  return (
    <div className="Header">
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Categories</Link>
          </li>
          <li>
            <Link to={"/addCategory"}>Add Category</Link>
          </li>
          <li>
            <Link> Favorites</Link>

            <span>{favorites?.length}</span>
          </li>
          <li>
            <Link>Basket</Link>

            <span>{basket?.length} </span>
          </li>
        </ul>
      </nav>

      {/*   <input type="text" placeholder="Write name"  className="searchInput"/> */}
    </div>
  );
};

export default Header;
