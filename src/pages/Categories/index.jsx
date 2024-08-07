import Table from "../../componenets/Table";
import { useGetAllCategoriesQuery } from "../../redux/categoriesApi";


const Categories = () => {
  const { data:categories } = useGetAllCategoriesQuery();
  return (
    <div className="Categories">
      <Table data={categories} />
    </div>
  );
};

export default Categories;
