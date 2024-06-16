import BrowseCategories from "./Content/BrowseCategories";
import { ProductProvider } from "./Content/ContextProduct";
import ViewProducts from "./Content/ViewProducts";

const Product = (props) => {
  return (
    <ProductProvider>
      <div>
        <h3 className="categories  text-wrap  ">Outstanding products</h3>
        <BrowseCategories />

        <h3 className="categories">Products </h3>
        <ViewProducts />
      </div>
    </ProductProvider>
  );
};

export default Product;
