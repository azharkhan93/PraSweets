import { Product } from "@/constants";
import Image from "next/image";

interface ProductCardsProps {
  product: Product;
}

export const ProductCards: React.FC<ProductCardsProps> = ({ product }) => {
  return (
    <div className="relative">
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={400}
        className="relative w-[170px] h-[190px] md:w-[300px] md:h-[200px] rounded-md"
      />
      <div className="absolute inset-0 flex items-center justify-center top-[142px] md:top-[160px] w-full">
        <div className="bg-black bg-opacity-50 p-2 rounded w-full">
          <p className="text-white text-center">{product.title}</p>
        </div>
      </div>
    </div>
  );
};
