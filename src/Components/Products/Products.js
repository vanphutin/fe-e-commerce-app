import BrowseCategories from "./Content/BrowseCategories";
import { ProductsProvider } from "./Content/ContextProduct";
import ViewProducts from "./Content/ViewProducts";

const Product = (props) => {
  return (
    <div>
      <h3 className="categories  text-wrap  ">Outstanding products</h3>
      <BrowseCategories />

      <h3 className="categories" id="products">
        Products{" "}
      </h3>
      <ViewProducts />
    </div>
  );
};

export default Product;
