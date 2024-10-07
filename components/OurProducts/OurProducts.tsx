import { productsData } from "@/constants";
import { ProdCards } from "./components/ProdCards";

export const OurProducts: React.FC = () => {
  return (
    <div className="w-full bg-white flex items-center justify-center py-5">
      <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-20 text-gray-800">
        <div className="text-center flex flex-col items-center py-5 gap-5">
          <h1 className="text-xl md:text-4xl font-bold text-gray-600 w-full">
            What people are saying.
          </h1>
          <h3 className="text-xl mb-5 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
        </div>

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
    </div>
  );
};
