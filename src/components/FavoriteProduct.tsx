import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { useDispatch } from "react-redux";
import { addToCart, deleteFavorite } from "@/store/nextSlice";

interface Item {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
  quantity: number;
}

interface cartProductsProps {
  item: Item;
}

const FavoriteProduct = ({ item }: cartProductsProps) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-100 rounded-lg flex flex-col md:flex-row py-2 items-center gap-4 mb-2">
      <Image src={item.image} alt="Product Image" width={150} height={150} />
      <div className="flex  items-center px-2 gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-medium">{item.title}</p>
          <p className="text-sm">{item.description}</p>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            Price:
            <span className="text-amazon_blue font-semibold">
              <FormattedPrice amount={item.price} />
            </span>
          </p>
          <button
            onClick={() => {
              dispatch(
                addToCart({
                  _id: item._id,
                  brand: item.brand,
                  category: item.category,
                  description: item.description,
                  image: item.image,
                  isNew: item.isNew,
                  oldPrice: item.oldPrice,
                  price: item.price,
                  title: item.title,
                  quantity: 1,
                })
              ) && dispatch(deleteFavorite(item._id));
            }}
            className="w-44 h-10 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow duration-300 hover:text-black mt-2">
            Add to cart
          </button>
        </div>
        <div className="text-lg font-semibold text-amazon_blue">
          <FormattedPrice amount={item.price * item.quantity} />
        </div>
      </div>
    </div>
  );
};

export default FavoriteProduct;
