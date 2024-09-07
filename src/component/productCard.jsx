import { Heart } from "lucide-react";
import { useState } from "react";

function ProductCard(props) {
  const [isLiked, setisLiked] = useState(false);

  const handleClick = () => {
    setisLiked(!isLiked);
  };

  return (
    <div className="h-[432px] relative">
      {isLiked ? (
        <Heart
          onClick={handleClick}
          className="absolute top-4 right-4 cursor-pointer z-10 text-red-500 fill-red-500"
        />
      ) : (
        <Heart
          onClick={handleClick}
          className="absolute top-4 right-4 cursor-pointer z-10 text-red-500"
        />
      )}

      <div className={`h-64 rounded-xl bg-[#f4f8f9] relative`}>
        <img src={props.image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="mt-4">
        <div className=" flex item-center justify-between">
          <span className="block text-2xl font-semibold">{props.name}</span>
          <span className="block font-semibold">${props.price}</span>
        </div>
        <p className="text-sm">{props.description}</p>
        <div className="mt-2">
          <button className="border-2 border-black px-4 py-1 text-lg rounded-lg mt-2 font-medium hover:bg-black hover:text-white transition">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
