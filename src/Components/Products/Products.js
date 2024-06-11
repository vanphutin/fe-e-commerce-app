import BrowseCategories from "./Content/BrowseCategories";
import ViewProducts from "./Content/ViewProducts";

const Product = (props) => {
  const mess = "lan";
  return (
    <div>
      <h3 className="categories  text-wrap  ">Outstanding products</h3>
      <BrowseCategories />

      <h3 className="categories">Products </h3>
      <ViewProducts mess={mess} />
    </div>
  );
};

export default Product;
