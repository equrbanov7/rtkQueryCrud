/* eslint-disable react/prop-types */
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteCategoryMutation } from "../../redux/categoriesApi";
import { useDispatch, useSelector } from "react-redux";
import {
  addAndDeleteFromFavorite,
  addBasket,
} from "../../redux/categoryReducer";

const Table = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { favorites } = useSelector((state) => state.category);
  const [deleteCategory] = useDeleteCategoryMutation();

  const handleDeleteCategory = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      deleteCategory(id);
    }
  };

  const handleAddBasket = (item) => {
    // console.log(item)
    dispatch(addBasket(item));
  };

  const handleEditCategory = (item) => {
    // console.log(item)
    navigate(`editCategory/${item.id}`)
  };

  const handleToggleFavorite = (item) => {
    // console.log(item)
    dispatch(addAndDeleteFromFavorite(item));
  };

  const isFavorite = (item) => {
    return favorites.some((fav) => fav.id === item.id);
  };
  return (
    <div className="Table">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <Link to={`categories/${item.id}`}>
                  <InfoIcon className="icon info" />
                </Link>

                <DeleteIcon
                  className="icon delete"
                  onClick={() => handleDeleteCategory(item.id)}
                />
                <EditIcon className="icon edit" 
                onClick={() => handleEditCategory(item)}
                />
                <ShoppingCartIcon
                  className="icon cart"
                  onClick={() => handleAddBasket(item)}
                />

                {isFavorite(item) ? (
                  <FavoriteIcon
                    className="icon like"
                    onClick={() => handleToggleFavorite(item)}
                  />
                ) : (
                  <FavoriteBorderIcon
                    className="icon like"
                    onClick={() => handleToggleFavorite(item)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
