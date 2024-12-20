import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";


export default function BookCard({ book }) {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

  return (
    <div className=" rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <Link to={`/book/${book?._id}`}>
            <img
              src={`${getImgUrl(book?.coverImage)}`}
              alt=""
              className="w-full w-200 h-300 overflow-hidden flex justify-center bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200 size-50"
            />
          </Link>
        </div>

        <div>
          <Link to={`/book/${book?._id}`}>
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
              {book.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-5">{book?.description}</p>
          <p className="font-medium mb-5">
            {book?.newPrice}<span className="line-through font-normal ml-2">{book?.oldPrice}</span>
          </p>
          <button
            onClick={() => handleAddToCart(book)}
          className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
            <FiShoppingCart className="size-8" />
            <span className="bg-purple-400  px-12 py-2 rounded-md text-base font-secondary font-bold hover:bg-slate-400 hover:text-white transition-all duration-200 cursor-pointer">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
