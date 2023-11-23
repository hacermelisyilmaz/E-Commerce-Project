import { useDispatch, useSelector } from "react-redux";
import Header from "../components/layout/Header";
import {
  clearCart,
  removeFromCart,
  setCheckStatus,
  updateCartItemQuantity,
} from "../store/actions/shoppingCartActions";

function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.shopping);

  return (
    <div className="Cart">
      <Header />

      <div className="my-10 mx-8 flex flex-col gap-4">
        <div className="px-4 flex justify-between">
          <h2 className="text-primary text-lg font-bold">{`My Cart (${cart.reduce(
            (sum, product) => {
              return product.checked ? sum + product.count : sum;
            },
            0
          )} Products)`}</h2>
          <button
            className="text-lg font-bold flex gap-2 items-baseline border border-solid rounded-lg px-2 py-2"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            <i class="fa-solid fa-trash-can text-error"></i>
            <span>Clear Cart</span>
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {cart.map((item, index) => {
            const { product, count } = item;

            return (
              <div key={index}>
                <div className="h-fit flex gap-4 justify-between items-center px-[5%] py-4 border border-solid border-info rounded-lg shadow-md">
                  <input
                    name={`${product.id}`}
                    type="checkbox"
                    defaultChecked={true}
                    onChange={(e) => {
                      dispatch(setCheckStatus(product.id, e.target.checked));
                    }}
                  />
                  <img
                    src={product.images[0].url}
                    className="h-16 object-cover"
                  />

                  <h4 className="w-[30%]">{product.name}</h4>

                  <div className="h-fit flex border border-solid rounded-md border-info">
                    <button
                      className="bg-info p-3 disabled:text-neutral"
                      disabled={parseInt(count) === 1}
                      onClick={() => {
                        dispatch(updateCartItemQuantity(product.id, false));
                      }}
                    >
                      -
                    </button>
                    <p className="p-3">{count}</p>
                    <button
                      className="bg-info p-3"
                      disabled={parseInt(count) === 10}
                      onClick={() => {
                        dispatch(updateCartItemQuantity(product.id, true));
                      }}
                    >
                      +
                    </button>
                  </div>

                  <p className="text-success text-center w-[20%]">
                    {(product.price * count).toFixed(2)} ₺
                  </p>
                  <i
                    class="fa-solid fa-trash-can text-neutral"
                    onClick={() => {
                      dispatch(removeFromCart(product.id));
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
