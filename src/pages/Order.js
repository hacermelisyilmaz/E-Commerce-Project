import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/layout/Header";
import {
  clearCart,
  removeFromCart,
  setCheckStatus,
  updateCartItemQuantity,
} from "../store/actions/shoppingCartActions";

function Order() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.shopping);

  let productTotal = cart
    .reduce((sum, product) => {
      return product.checked
        ? sum + product.count * product.product.price.toFixed(2)
        : sum;
    }, 0)
    .toFixed(2);

  let productCount = cart.reduce((sum, product) => {
    return product.checked ? sum + product.count : sum;
  }, 0);

  return (
    <div className="Order">
      <Header />

      <div className="my-10 mx-12 flex flex-col gap-4">
        {productCount ? (
          <div className="flex justify-between gap-4">
            <div className="flex flex-col gap-2 w-[65%]">
              <div className="w-full flex">
                <button className="w-1/2 border border-solid border-neutral rounded-l-md">
                  <h2 className="text-lg">Address Information</h2>
                  <p></p>
                </button>
                <button className="w-1/2 py-4 border border-solid border-neutral rounded-r-md">
                  <h2 className="text-lg">Payment Options</h2>
                  <p className="text-sm">
                    You can safely pay using your debit or credit card.
                  </p>
                </button>
              </div>
              <div></div>
            </div>
            <div className="w-[30%] flex flex-col gap-4">
              <button
                className="border border-solid border-secondary rounded-md py-3 w-full flex gap-2 justify-center font-bold bg-secondary text-white"
                onClick={(e) => {
                  history.push("/order");
                }}
              >
                <span>Create Order</span>
                <i className="fa-solid fa-angle-right"></i>
              </button>
              <div className="border border-solid border-neutral rounded-md p-5 flex flex-col gap-4">
                <h3 className="font-bold text-lg mb-4">Order Summary</h3>
                <div className="flex justify-between gap-2">
                  <p>Items: </p>
                  <p className="font-bold">{productTotal}₺</p>
                </div>
                <div className="flex justify-between gap-2">
                  <p>Shipping: </p>
                  <p className="font-bold">29.99₺</p>
                </div>
                {productTotal >= 500 && (
                  <div className="flex justify-between gap-2">
                    <p>Free Shipping for Orders 500₺ or Above</p>
                    <p className="font-bold text-secondary">-29.99₺</p>
                  </div>
                )}
                <hr />
                <div className="flex justify-between gap-2">
                  <p>Order Total: </p>
                  <p className="font-bold text-success">
                    {productTotal >= 500
                      ? productTotal
                      : (parseFloat(productTotal) + 29.99).toFixed(2)}
                    ₺
                  </p>
                </div>
              </div>
              <button className="border border-solid border-secondary rounded-md py-3 w-full flex gap-2 justify-center">
                <i className="fa-solid fa-plus text-secondary"></i>
                <span>ENTER COUPON CODE</span>
              </button>
              <button
                className="border border-solid border-secondary rounded-md py-3 w-full flex gap-2 justify-center font-bold bg-secondary text-white"
                onClick={(e) => {
                  history.push("/order");
                }}
              >
                <span>Create Order</span>
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        ) : (
          <div className="px-4">Your basket is empty.</div>
        )}
      </div>
    </div>
  );
}

export default Order;
