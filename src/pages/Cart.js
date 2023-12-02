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

  let productTotal = cart
    .reduce((sum, product) => {
      return product.checked
        ? sum + product.count * product.product.price
        : sum;
    }, 0)
    .toFixed(2);

  let productCount = cart.reduce((sum, product) => {
    return product.checked ? sum + product.count : sum;
  }, 0);

  return (
    <div className="Cart">
      <Header />

      <div className="my-10 mx-12 flex flex-col gap-4">
        <div className="px-4 flex justify-between">
          <h2 className="text-primary text-lg font-bold">{`My Cart (${productCount} Products)`}</h2>
          <button
            className="text-lg font-bold flex gap-2 items-baseline border border-solid rounded-lg px-2 py-2 hover:shadow-lg"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            <i class="fa-solid fa-trash-can text-error"></i>
            <span>Clear Cart</span>
          </button>
        </div>
        {productCount ? (
          <div className="flex flex-col gap-2">
            {cart.map((item, index) => {
              const { product, count } = item;

              return (
                <div key={index} className="flex gap-8 justify-between">
                  <div className="h-fit w-[65%] flex gap-4 justify-between items-center px-[5%] py-4 border border-solid border-info rounded-lg shadow-md">
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
                        className="bg-info p-3 disabled:text-neutral"
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
                      class="fa-solid fa-trash-can text-neutral hover:text-error"
                      onClick={() => {
                        dispatch(removeFromCart(product.id));
                      }}
                    ></i>
                  </div>
                  <div className="w-[30%] flex flex-col gap-4">
                    <button className="border border-solid border-secondary rounded-md py-3 w-full flex gap-2 justify-center font-bold bg-secondary text-white">
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
                    <button className="border border-solid border-secondary rounded-md py-3 w-full flex gap-2 justify-center font-bold bg-secondary text-white">
                      <span>Create Order</span>
                      <i className="fa-solid fa-angle-right"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="px-4">Your basket is empty.</div>
        )}
      </div>
    </div>
  );
}

export default Cart;
