import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Header from "../components/layout/Header";
import axiosWithAuth from "../api/axiosWithAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

function Order() {
  const history = useHistory();

  const [clickedAdd, setClickedAdd] = useState(false);
  const [address, setAddress] = useState([]);
  const [tab, setTab] = useState("address");

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

  const {
    register: registerAddress,
    handleSubmit: handleSubmitAddress,
    formState: formStateAddress,
  } = useForm({
    defaultValues: {
      title: "",
      name: "",
      surname: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
      address: "",
    },
    mode: "all",
  });
  const {
    register: registerPayment,
    handleSubmit: handleSubmitPayment,
    formState: formStatePayment,
  } = useForm({
    defaultValues: {
      cardno: "",
      expdate: "",
      cvv: "",
    },
    mode: "all",
  });

  const onSubmit = (formData) => {
    axiosWithAuth()
      .post("/user/address", formData)
      .then((response) => {
        toast.success("Address added.");
        setAddress([...address, response.data[0]]);
        setClickedAdd(false);
      })
      .catch((error) => {
        toast.error("Something went wrong. Try again later.");
      });
  };

  useEffect(() => {
    axiosWithAuth()
      .get("/user/address")
      .then((response) => {
        setAddress(response.data);
      })
      .catch((error) => {
        history.push("/login");
      });
  }, []);

  return (
    <div className="Order">
      <Header />

      <div className="my-10 mx-12">
        {productCount ? (
          <div className="flex flex-col gap-8">
            <div className="flex justify-between gap-4">
              <div className="flex flex-col gap-2 w-[65%]">
                <div className="w-full flex text-center">
                  <input
                    type="radio"
                    name="order"
                    id="address"
                    className="invisible h-0 w-0"
                    onClick={(e) => {
                      setClickedAdd(false);
                      setTab(e.target.id);
                    }}
                  />
                  <label
                    htmlFor="address"
                    className="w-1/2 p-4 border border-solid border-neutral rounded-l-md border-b-4 checked:border-b-secondary"
                    defaultChecked
                  >
                    <h2 className="text-lg font-bold">Address Information</h2>
                    <p className="text-sm"></p>
                  </label>
                  <input
                    type="radio"
                    name="order"
                    id="payment"
                    className="invisible h-0 w-0"
                    onClick={(e) => {
                      setClickedAdd(false);
                      setTab(e.target.id);
                    }}
                  />
                  <label
                    htmlFor="payment"
                    className="w-1/2 p-4 border border-solid border-neutral rounded-r-md border-b-4 checked:border-b-secondary"
                  >
                    <h2 className="text-lg font-bold">Payment Options</h2>
                    <p className="text-sm">
                      You can safely pay using your debit or credit card.
                    </p>
                  </label>
                </div>
                {tab === "address" ? (
                  <div className="flex flex-col gap-4">
                    <div className="p-4 flex flex-wrap justify-between items-end gap-4 border border-solid border-neutral rounded-md">
                      <div className="w-full flex justify-between">
                        <h3 className="text-lg font-bold">Delivery Address</h3>
                        <div className="flex gap-2 items-baseline">
                          <input
                            type="checkbox"
                            name="sameforbill"
                            defaultChecked
                          />
                          <label htmlFor="sameforbill">
                            Send the bill to the same address
                          </label>
                        </div>
                      </div>
                      <button
                        className="w-[48%] h-28 border border-solid border-neutral rounded-md bg-info"
                        onClick={() => {
                          setClickedAdd(true);
                        }}
                      >
                        <i className="fa-solid fa-plus text-secondary text-lg"></i>
                        <p>Add a New Address</p>
                      </button>

                      {address.map((address, index) => {
                        return (
                          <div
                            key={index}
                            className="w-[48%] flex flex-col gap-2"
                          >
                            <div className="flex justify-between">
                              <div className="flex gap-2">
                                <input type="radio" name="address" />
                                <label>{address.title}</label>
                              </div>
                              <button className="hover:text-secondary">
                                Edit
                              </button>
                            </div>
                            <div className="h-28 p-5 flex flex-col justify-between border border-solid border-neutral rounded-md bg-info">
                              <div className="flex justify-between">
                                <div className="flex gap-2 items-baseline">
                                  <i className="fa-solid fa-user text-secondary"></i>
                                  {address.name + " " + address.surname}
                                </div>
                                <div className="flex gap-2 items-baseline">
                                  <i className="fa-solid fa-phone text-secondary"></i>
                                  {"(" +
                                    address.phone.slice(0, 3) +
                                    ") *** ** " +
                                    address.phone.slice(8)}
                                </div>
                              </div>
                              <p>{address.address}</p>
                              <p>{address.district + "/" + address.city}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {clickedAdd && (
                      <div className="AddressForm p-8 border border-solid border-neutral rounded-md bg-info">
                        <form
                          className="flex justify-between items-baseline flex-wrap gap-6"
                          onSubmit={handleSubmitAddress(onSubmit)}
                        >
                          <div className="form-group w-[48%]">
                            <label htmlFor="title" className="form-label pl-2">
                              Address Title
                            </label>
                            <input
                              id="title"
                              className="form-input"
                              placeholder="Address Title *"
                              {...registerAddress("title", {
                                required: "Please set an address title.",
                              })}
                            />
                            {formStateAddress.errors.title ? (
                              <p className="form-footnote text-red-600">
                                {formStateAddress.errors.title.message}
                              </p>
                            ) : (
                              <p className="form-footnote"> </p>
                            )}
                          </div>

                          <div className="form-group w-[48%]">
                            <label htmlFor="name" className="form-label pl-2">
                              Name
                            </label>
                            <input
                              id="name"
                              className="form-input"
                              placeholder="Name *"
                              {...registerAddress("name", {
                                required: "Name cannot be blank.",
                              })}
                            />
                            {formStateAddress.errors.name ? (
                              <p className="form-footnote text-red-600">
                                {formStateAddress.errors.name.message}
                              </p>
                            ) : (
                              <p className="form-footnote"> </p>
                            )}
                          </div>

                          <div className="form-group w-[48%]">
                            <label
                              htmlFor="surname"
                              className="form-label pl-2"
                            >
                              Surname
                            </label>
                            <input
                              id="surname"
                              className="form-input"
                              placeholder="Surname *"
                              {...registerAddress("surname", {
                                required: "Surname cannot be blank.",
                              })}
                            />
                            {formStateAddress.errors.surname ? (
                              <p className="form-footnote text-red-600">
                                {formStateAddress.errors.surname.message}
                              </p>
                            ) : (
                              <p className="form-footnote"> </p>
                            )}
                          </div>

                          <div className="form-group w-[48%]">
                            <label htmlFor="phone" className="form-label pl-2">
                              Phone Number
                            </label>
                            <input
                              id="phone"
                              className="form-input"
                              placeholder="Phone Number *"
                              {...registerAddress("phone", {
                                required: "Phone number cannot be blank.",
                                minLength: {
                                  value: 10,
                                  message:
                                    "Your phone number must be in the following format: 5xx xxx xxxx",
                                },
                              })}
                            />
                            {formStateAddress.errors.phone ? (
                              <p className="form-footnote text-red-600">
                                {formStateAddress.errors.phone.message}
                              </p>
                            ) : (
                              <p className="form-footnote"> </p>
                            )}
                          </div>

                          <div className="form-group w-[48%]">
                            <label htmlFor="city" className="form-label pl-2">
                              City
                            </label>
                            <input
                              id="city"
                              className="form-input"
                              placeholder="City *"
                              {...registerAddress("city", {
                                required: "City cannot be blank.",
                              })}
                            />
                            {formStateAddress.errors.city ? (
                              <p className="form-footnote text-red-600">
                                {formStateAddress.errors.city.message}
                              </p>
                            ) : (
                              <p className="form-footnote"> </p>
                            )}
                          </div>

                          <div className="form-group w-[48%]">
                            <label
                              htmlFor="district"
                              className="form-label pl-2"
                            >
                              District
                            </label>
                            <input
                              id="district"
                              className="form-input"
                              placeholder="District *"
                              {...registerAddress("district", {
                                required: "District cannot be blank.",
                              })}
                            />
                            {formStateAddress.errors.district ? (
                              <p className="form-footnote text-red-600">
                                {formStateAddress.errors.district.message}
                              </p>
                            ) : (
                              <p className="form-footnote"> </p>
                            )}
                          </div>

                          <div className="form-group w-[48%]">
                            <label
                              htmlFor="neighborhood"
                              className="form-label pl-2"
                            >
                              Neigborhood
                            </label>
                            <input
                              id="neighborhood"
                              className="form-input"
                              placeholder="Neigborhood *"
                              {...registerAddress("neighborhood", {
                                required: "Neigborhood cannot be blank.",
                              })}
                            />
                            {formStateAddress.errors.neighborhood ? (
                              <p className="form-footnote text-red-600">
                                {formStateAddress.errors.neighborhood.message}
                              </p>
                            ) : (
                              <p className="form-footnote"> </p>
                            )}
                          </div>

                          <div className="form-group w-[48%]">
                            <label
                              htmlFor="address"
                              className="form-label pl-2"
                            >
                              Address Details
                            </label>
                            <input
                              id="address"
                              className="form-input"
                              placeholder="Street, building and door number *"
                              {...registerAddress("address", {
                                required: "Address Details cannot be blank.",
                              })}
                            />
                            {formStateAddress.errors.address ? (
                              <p className="form-footnote text-red-600">
                                {formStateAddress.errors.address.message}
                              </p>
                            ) : (
                              <p className="form-footnote"> </p>
                            )}
                          </div>

                          <button
                            className="blue-button bg-white text-secondary"
                            onClick={() => {
                              setClickedAdd(false);
                            }}
                          >
                            Cancel
                          </button>

                          <button
                            type="submit"
                            disabled={
                              !formStateAddress.isValid ||
                              formStateAddress.isSubmitting
                            }
                            className={
                              !formStateAddress.isSubmitting &&
                              formStateAddress.isValid
                                ? "blue-button"
                                : "blue-button bg-secondary-focus"
                            }
                          >
                            <span>
                              {formStateAddress.isSubmitting && (
                                <Spinner className="text-white" />
                              )}
                            </span>
                            <span>Add Address</span>
                          </button>
                        </form>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col border border-solid border-neutral rounded-md">
                    <h3 className="font-bold text-lg p-4 border border-solid border-transparent border-b-neutral">
                      Payment with Card
                    </h3>
                    <div className="p-4 flex flex-col gap-4">
                      <div className="flex justify-between">
                        <h4 className="text-lg">Card Information</h4>
                        {clickedAdd ? (
                          <button
                            className="text-sm hover:text-secondary"
                            onClick={() => setClickedAdd(false)}
                          >
                            Pay with a Registered Card
                          </button>
                        ) : (
                          <button
                            className="text-sm hover:text-secondary"
                            onClick={() => setClickedAdd(true)}
                          >
                            Pay with Another Card
                          </button>
                        )}
                      </div>
                      {clickedAdd ? (
                        <div className="flex">
                          <form className="pr-4 flex flex-col w-1/2 border border-solid border-transparent border-r-neutral">
                            <div className="form-group">
                              <label
                                htmlFor="cardno"
                                className="form-label text-sm pl-2"
                              >
                                Card Number
                              </label>
                              <input
                                id="cardno"
                                className="form-input"
                                placeholder="Card Number"
                                {...registerPayment("cardno", {
                                  required: "Please set a card number.",
                                })}
                              />
                              {formStatePayment.errors.cardno && (
                                <p className="form-footnote text-red-600">
                                  {formStatePayment.errors.cardno.message}
                                </p>
                              )}
                            </div>
                            <div className="flex justify-between">
                              <div className="form-group w-[48%]">
                                <label
                                  htmlFor="expdate"
                                  className="form-label text-sm pl-2"
                                >
                                  Expiration Date
                                </label>
                                <input
                                  id="expdate"
                                  className="form-input"
                                  placeholder="Expiration Date"
                                  {...registerPayment("expdate", {
                                    required: "Please set a card number.",
                                  })}
                                />
                                {formStatePayment.errors.expdate && (
                                  <p className="form-footnote text-red-600">
                                    {formStatePayment.errors.expdate.message}
                                  </p>
                                )}
                              </div>

                              <div className="form-group w-[48%]">
                                <label
                                  htmlFor="expdate"
                                  className="form-label text-sm pl-2"
                                >
                                  CVV
                                </label>
                                <input
                                  id="cvv"
                                  className="form-input"
                                  placeholder="CVV"
                                  {...registerPayment("cvv", {
                                    required: "Please set a card number.",
                                  })}
                                />
                                {formStatePayment.errors.cvv && (
                                  <p className="form-footnote text-red-600">
                                    {formStatePayment.errors.cvv.message}
                                  </p>
                                )}
                              </div>
                            </div>
                          </form>
                          <div className="pl-4">
                            <h4 className="text-lg">Installment Plan</h4>
                            <p>No installment plan available.</p>
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="w-[30%] flex flex-col gap-4">
                <button
                  className="border border-solid border-transparent rounded-md py-3 w-full flex gap-2 justify-center font-bold bg-secondary-focus text-white"
                  disabled={true}
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
                  className="border border-solid border-transparent rounded-md py-3 w-full flex gap-2 justify-center font-bold bg-secondary-focus text-white"
                  disabled={true}
                  onClick={(e) => {
                    history.push("/order");
                  }}
                >
                  <span>Create Order</span>
                  <i className="fa-solid fa-angle-right"></i>
                </button>
              </div>
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
