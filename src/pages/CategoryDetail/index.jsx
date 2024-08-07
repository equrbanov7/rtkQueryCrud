import { useParams } from "react-router-dom";
import { useGetSingleCategoryQuery } from "../../redux/categoriesApi";

import "./index.scss"

const CategoryDetail = () => {
  const { categoryId } = useParams();
  const { data } = useGetSingleCategoryQuery(categoryId);
  return (
    <div className="CategoryDetail">
      {data && (
        <>
          <h1>{data.name}</h1>
          <p>{data.description} </p>
        </>
      )}
    </div>
  );
};

export default CategoryDetail;
