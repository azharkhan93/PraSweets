import { productData } from "@/constants";
import { ProductCards } from "./ProductCards";


export const OurPicks = () => {
  return (
    <div className=" w-full flex items-center justify-center flex-row md:flex-col flex-wrap gap-6 ">
      <div className="flex items-center justify-center flex-col py-11 gap-6">
        <h1 className="text-4xl text-center text-black">Our Picks</h1>
        <p className="text-lg text-center text-black">Check out our favorite items!</p>
      </div>
      <div className="w-full flex items-center justify-center flex-row gap-8 md:gap-6 flex-wrap py-10">
        {productData.map((product) => (
          <ProductCards key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
