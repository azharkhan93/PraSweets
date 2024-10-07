import { productData } from "@/constants";
import { ProductCards } from "./ProductCards";


export const OurPicks = () => {
  return (
    <div className=" w-full bg-white flex items-center justify-center flex-row md:flex-col flex-wrap gap-6 py-10 ">
      <div className="flex justify-center items-start md:items-center text-heading font-bold flex-col gap-4 w-full px-4">
        <h1 className="text-secondaryColor text-start md:text-center text-heading">
          Why PraSweets?
        </h1>
        
        <p className="text-paragraph text-start md:text-center text-secondaryColor md:w-[600px]">
      At PraSweets, we are passionate about crafting delicious, high-quality sweets that satisfy your cravings and bring joy to every occasion. Our selection is made from the finest ingredients,
  
        </p>
      </div>
      <div className="w-full flex items-center justify-center flex-row gap-8 md:gap-6 flex-wrap py-10">
        {productData.map((product) => (
          <ProductCards key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
