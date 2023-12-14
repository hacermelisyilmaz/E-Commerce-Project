import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Header from "../components/layout/Header";
import axiosWithAuth from "../api/axiosWithAuth";
import useLocalStorage from "../hooks/useLocalStorage";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

function Order() {
  const history = useHistory();
  const [addresses, setAddresses] = useState([]);
  const [clickedAdd, setClickedAdd] = useState(false);
  const [token, setToken] = useLocalStorage("token", "");
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
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      title: "",
      name: "",
      surname: "",
      phone: "",
      city: "",
      district: "",
      neigh: "",
      details: "",
      storeiban: "",
    },
    mode: "all",
  });

  const onSubmit = (formData) => {
    console.log(formData);
    axiosWithAuth()
      .post("/user/address", formData)
      .then((response) => {
        console.log("submit successfull");
        toast.warning("Address added.");
      })
      .catch((error) => {
        toast.error("Something went wrong. Try again later.");
      });
  };

  useEffect(() => {
    if (token) {
      axiosWithAuth()
        .get("/user/address")
        .then((response) => {
          setAddresses(...addresses, response.data);
        })
        .catch((error) => {
          console.log("No address.");
        });
    }
  }, []);

  return (
    <div className="Order">
      <Header />

      <div className="my-10 mx-12 flex flex-col gap-4">
        {productCount ? (
          <div className="flex justify-between gap-4">
            <div className="flex flex-col gap-2 w-[65%]">
              <div className="w-full flex">
                <button className="w-1/2 py-4 border border-solid border-neutral rounded-l-md border-b-4 focus:border-b-secondary">
                  <h2 className="text-lg font-bold">Address Information</h2>
                  <p></p>
                </button>
                <button className="w-1/2 py-4 border border-solid border-neutral rounded-r-md border-b-4 focus:border-b-secondary">
                  <h2 className="text-lg font-bold">Payment Options</h2>
                  <p className="text-sm">
                    You can safely pay using your debit or credit card.
                  </p>
                </button>
              </div>
              <div className="p-4 flex flex-wrap gap-2 border border-solid border-neutral rounded-md">
                <div className="w-full flex justify-between">
                  <h3 className="text-lg font-bold">Delivery Address</h3>
                  <div>
                    <input type="checkbox" name="sameforbill" />
                    <label htmlFor="sameforbill">
                      Send the bill to the same address
                    </label>
                  </div>
                </div>
                <button
                  className="w-[48%] py-10 border border-solid border-neutral rounded-md bg-info"
                  onClick={() => {
                    setClickedAdd(true);
                  }}
                >
                  <i className="fa-solid fa-plus text-secondary text-lg"></i>
                  <p>Add a New Address</p>
                </button>

                {addresses.map((address) => {
                  return (
                    <div>
                      <input type="radio" name="address" />
                      <label></label>
                    </div>
                  );
                })}
              </div>
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
        {clickedAdd && (
          <div className="AddressForm p-8 border border-solid border-info rounded-md bg-info">
            <form
              className="flex justify-between items-baseline flex-wrap gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-group w-[48%]">
                <label htmlFor="title" className="form-label pl-2">
                  Address Title
                </label>
                <input
                  id="title"
                  className="form-input"
                  placeholder="Address Title *"
                  {...register("title", {
                    required: "Please set an address title.",
                  })}
                />
                {errors.title ? (
                  <p className="form-footnote text-red-600">
                    {errors.title.message}
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
                  {...register("name", {
                    required: "Name cannot be blank.",
                  })}
                />
                {errors.name ? (
                  <p className="form-footnote text-red-600">
                    {errors.name.message}
                  </p>
                ) : (
                  <p className="form-footnote"> </p>
                )}
              </div>

              <div className="form-group w-[48%]">
                <label htmlFor="surname" className="form-label pl-2">
                  Surname
                </label>
                <input
                  id="surname"
                  className="form-input"
                  placeholder="Surname *"
                  {...register("surname", {
                    required: "Surname cannot be blank.",
                  })}
                />
                {errors.surname ? (
                  <p className="form-footnote text-red-600">
                    {errors.surname.message}
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
                  {...register("phone", {
                    required: "Phone number cannot be blank.",
                    minLength: {
                      value: 10,
                      message:
                        "Your phone number must be in the following format: 5xx xxx xxxx",
                    },
                  })}
                />
                {errors.phone ? (
                  <p className="form-footnote text-red-600">
                    {errors.phone.message}
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
                  {...register("city", {
                    required: "City cannot be blank.",
                  })}
                />
                {errors.city ? (
                  <p className="form-footnote text-red-600">
                    {errors.city.message}
                  </p>
                ) : (
                  <p className="form-footnote"> </p>
                )}
              </div>

              <div className="form-group w-[48%]">
                <label htmlFor="district" className="form-label pl-2">
                  District
                </label>
                <input
                  id="district"
                  className="form-input"
                  placeholder="District *"
                  {...register("district", {
                    required: "District cannot be blank.",
                  })}
                />
                {errors.district ? (
                  <p className="form-footnote text-red-600">
                    {errors.district.message}
                  </p>
                ) : (
                  <p className="form-footnote"> </p>
                )}
              </div>

              <div className="form-group w-[48%]">
                <label htmlFor="neigh" className="form-label pl-2">
                  Neigborhood
                </label>
                <input
                  id="neigh"
                  className="form-input"
                  placeholder="Neigborhood *"
                  {...register("neigh", {
                    required: "Neigborhood cannot be blank.",
                  })}
                />
                {errors.neigh ? (
                  <p className="form-footnote text-red-600">
                    {errors.neigh.message}
                  </p>
                ) : (
                  <p className="form-footnote"> </p>
                )}
              </div>

              <div className="form-group w-[48%]">
                <label htmlFor="details" className="form-label pl-2">
                  Address Details
                </label>
                <input
                  id="details"
                  className="form-input"
                  placeholder="Street, building and door number *"
                  {...register("details", {
                    required: "Address Details cannot be blank.",
                  })}
                />
                {errors.details ? (
                  <p className="form-footnote text-red-600">
                    {errors.details.message}
                  </p>
                ) : (
                  <p className="form-footnote"> </p>
                )}
              </div>

              <div className="w-full flex justify-center gap-4">
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
                  disabled={!isValid || isSubmitting}
                  className={
                    !isSubmitting && isValid
                      ? "blue-button"
                      : "blue-button bg-secondary-focus"
                  }
                >
                  <span>
                    {isSubmitting && <Spinner className="text-white" />}
                  </span>
                  <span>Add Address</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Order;
