import { useForm } from "react-hook-form";
import {
  useCreateCategoryMutation,
  usePartialUpdateCategoryMutation,
  useGetSingleCategoryQuery,
} from "../../redux/categoriesApi";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";
import React from "react";

const AddEditCategory = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { data: categoryData } = useGetSingleCategoryQuery(categoryId, {
    skip: !categoryId,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const [addCategory] = useCreateCategoryMutation();
  const [editCategory] = usePartialUpdateCategoryMutation();

  React.useEffect(() => {
    if (categoryData) {
      reset(categoryData);
    }
  }, [categoryData, reset]);

  const onSubmit = (data) => {
    if (categoryId) {
      editCategory({ id: categoryId, ...data });
      navigate("/")
      reset();
    } else {
      addCategory(data);
    }
  };

  return (
    <div className="AddCategory">
      <h4>{categoryId ? "Edit Category" : "Add Category"}</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[A-Za-z ]+$/,
                message: "Invalid name",
              },
            })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Description"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <p className="error">{errors.description.message}</p>
          )}
        </div>

        <div className="form-group">
          <input type="submit" value={categoryId ? "Save" : "Add"} />
        </div>
      </form>
    </div>
  );
};

export default AddEditCategory;
