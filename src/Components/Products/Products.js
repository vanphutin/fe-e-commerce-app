import BrowseCategories from "./Content/BrowseCategories";
import ViewProducts from "./Content/ViewProducts";

const Product = () => {
  return (
    <div>
      <h3 className="categories  text-wrap  ">Outstanding products</h3>
      <BrowseCategories />

      <h3 className="categories">Products </h3>
      <ViewProducts />
    </div>
  );
};

export default Product;
