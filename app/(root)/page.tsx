import Productlist from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <Productlist
        data={latestProducts}
        title="Newest Arrivals"
        limit={4}
      ></Productlist>
    </>
  );
};

export default HomePage;
