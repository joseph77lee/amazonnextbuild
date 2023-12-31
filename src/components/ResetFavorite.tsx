import { resetFavorite } from "@/store/nextSlice";
import { useDispatch } from "react-redux";

const ResetFavorite = () => {
  const dispatch = useDispatch();

  const handleResetCart = () => {
    const confirmReset = window.confirm(
      "Are you sure to reset your favorite items?"
    );
    if (confirmReset) {
      dispatch(resetFavorite());
    }
  };

  return (
    <button
      onClick={handleResetCart}
      className="w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300">
      Reset favorite items
    </button>
  );
};

export default ResetFavorite;
