import Productlist from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

const HomePage = () => {
  return (
    <>
      <Productlist
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      ></Productlist>
    </>
  );
};

export default HomePage;
