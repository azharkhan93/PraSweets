import { productsData } from "@/constants";
import { ProdCards } from "./components/ProdCards";

export const OurProducts: React.FC = () => {
  return (
    <div className="w-full bg-white flex items-center justify-center flex-col gap-8 py-10">
      
      <div className="flex justify-center items-start md:items-center text-heading font-bold flex-col gap-4 w-full px-4">
        <h1 className="text-secondaryColor text-start md:text-center text-heading">
        Craving For Authentic
        BARFI
        </h1>

        <p className="text-paragraph text-start md:text-center text-secondaryColor md:w-[500px]">
         {`Whether you prefer classic flavors or adventurous combinations, we have something for everyone. Celebrate life’s moments with our delightful Barfi!`}
        </p>
      </div>
       
        <h1 className=" text-subHeading md:text-heading text-secondaryColor bg-black w-[200px] text-center rounded-md cursor-pointer">Barfi</h1>

        <div className="flex items-center justify-center flex-row gap-3 md:gap-11 flex-wrap">
          {productsData.map((product, index) => (
            <ProdCards
              key={index}
              imageSrc={product.imageSrc}
              altText={product.altText}
              buttonText={product.buttonText}
            />
          ))}
        </div>
      </div>
  
  );
};
