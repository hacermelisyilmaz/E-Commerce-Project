import { useDispatch, useSelector } from "react-redux";
import Header from "../components/layout/Header";
import {
  removeFromCart,
  updateCartItemQuantity,
} from "../store/actions/shoppingCartActions";

function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.shopping);

  return (
    <div className="Cart">
      <Header />

      <div className="my-10 mx-8 flex flex-col gap-4">
        <h2 className="text-primary text-lg font-bold">{`My Cart (${cart.reduce(
          (sum, product) => {
            return sum + product.count;
          },
          0
        )} Products)`}</h2>

        <div>
          {cart.map((item, index) => {
            const { product, count } = item;

            return (
              <div key={index}>
                <h3 className="text-neutral">
                  Store ID:{" "}
                  <span className="font-bold text-primary">
                    {parseInt(product["store_id"])}
                  </span>
                </h3>

                <div className="h-fit flex gap-4 justify-between">
                  <input type="checkbox" defaultValue={true} />
                  <img
                    src="/img/product/bestseller/p1.png"
                    className="h-16 object-cover"
                  />

                  <h4>{product.name}</h4>

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
                      onClick={() => {
                        dispatch(updateCartItemQuantity(product.id, true));
                      }}
                    >
                      +
                    </button>
                  </div>

                  <p className="text-success">{product.price * count} ₺</p>
                  <i
                    class="fa-solid fa-trash-can text-neutral"
                    onClick={() => {
                      dispatch(removeFromCart(product.id));
                    }}
                  ></i>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
