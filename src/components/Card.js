import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import { useState } from "react";
const Card = ({ Course }) => {
  const [liked, setLiked] = useState(false);

 function clickHandler() {
   if (liked) {
     setLiked(false); // Unset liked state
     toast.warning("Liked removed");
   } else {
     setLiked(true); // Set liked state
     toast.success("Liked Successfully");
   }
 }

  return (
    <div className="bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden">
      <div className="relative ">
        <img src={Course.image.url} />
        <div className="rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center">
          <button onClick={clickHandler}>
            {liked ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white text-lg font-semibold leading-6">
          {Course.title}
        </p>
        <p className="mt-2 text-white">
          {Course.description.length > 100
            ? Course.description.substring(0, 100) + "...."
            : Course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
