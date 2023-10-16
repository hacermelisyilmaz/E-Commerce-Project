import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";

import axiosInstance from "../api/axiosInstance";
import Spinner from "../components/Spinner";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function SignUp({ data }) {
  const {
    header,
    name,
    email,
    password,
    passmatch,
    role,
    store,
    button,
    submission,
  } = data.signup;
  const [isLoading, setLoading] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [isStore, setStore] = useState(false);
  const [roles, setRoles] = useState();
  const history = useHistory();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role_id: "",
      storename: "",
      storetaxid: "",
      storeiban: "",
    },
    mode: "all",
  });

  const onSubmit = (formData) => {
    setSubmitting(true);
    const { name, email, password, role_id, storename, storetaxid, storeiban } =
      formData;
    const signUpData = {
      name,
      email,
      password,
      role_id,
      store: { name: storename, tax_no: storetaxid, bank_account: storeiban },
    };
    console.log(signUpData);

    axiosInstance
      .post("/signup", signUpData)
      .then((response) => {
        setSubmitting(false);
        window.confirm(`${response.message}\n${submission.success}`) &&
          history.goBack();
      })
      .catch((error) => {
        setSubmitting(false);
        toast.error(`${submission.fail}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  useEffect(() => {
    axiosInstance
      .get("/roles")
      .then((response) => {
        setRoles(response.data);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="SignUp bg-info min-h-screen py-10 px-80 sm:p-10">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {isLoading ? (
        <div>
          <div className="p-12 font-bold flex flex-col gap-4 items-center text-center sm:text-center">
            <h2 className="text-base text-accent sm:text-sm">
              {header.subtitle}
            </h2>
            <h1 className="text-6xl leading-[5rem] sm:text-4xl">
              {header.title}
            </h1>
            <p className="font-normal text-xl text-accent sm:text-base">
              {header.description}
            </p>
          </div>
          <form
            className="flex flex-col gap-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                {name.label}
              </label>
              <input
                id="name"
                className="form-input"
                placeholder={name.placeholder}
                {...register("name", {
                  required: `${name.errorMsg.required}`,
                  minLength: {
                    value: 3,
                    message: `${name.errorMsg.length}`,
                  },
                })}
              />
              {errors.name ? (
                <p className="form-footnote text-red-600">
                  {errors.name.message}
                </p>
              ) : (
                <p className="form-footnote">{name.footnote}</p>
              )}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                {email.label}
              </label>
              <input
                id="email"
                className="form-input"
                placeholder={email.placeholder}
                type="email"
                {...register("email", {
                  required: `${email.errorMsg.required}`,
                  validate: {
                    matchPattern: (v) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                      "Email address must be a valid address",
                  },
                })}
              />
              {errors.email ? (
                <p className="form-footnote text-red-600">
                  {errors.email.message}
                </p>
              ) : (
                <p className="form-footnote">{email.footnote}</p>
              )}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                {password.label}
              </label>
              <input
                id="password"
                className="form-input"
                placeholder={password.placeholder}
                type="password"
                {...register("password", {
                  required: `${password.errorMsg.required}`,
                  minLength: {
                    value: 8,
                    message: `${password.errorMsg.length}`,
                  },
                  validate: {
                    upperCase: (v) => {
                      let isUpperCase = false;
                      for (let char of v) {
                        if (char >= "A" && char <= "Z") {
                          isUpperCase = true;
                          break;
                        }
                      }
                      return isUpperCase
                        ? isUpperCase
                        : `${password.errorMsg.upper}`;
                    },
                    lowerCase: (v) => {
                      let isLowerCase = false;
                      for (let char of v) {
                        if (char >= "a" && char <= "z") {
                          isLowerCase = true;
                          break;
                        }
                      }
                      return isLowerCase
                        ? isLowerCase
                        : `${password.errorMsg.lower}`;
                    },
                    specialCase: (v) => {
                      let isSpecialCase = false;
                      const specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
                      for (let char of v) {
                        if (specialChars.includes(char)) {
                          isSpecialCase = true;
                          break;
                        }
                      }
                      return isSpecialCase
                        ? isSpecialCase
                        : `${password.errorMsg.special}`;
                    },
                  },
                })}
              />
              {errors.password ? (
                <p className="form-footnote text-red-600">
                  {errors.password.message}
                </p>
              ) : (
                <p className="form-footnote">{password.footnote}</p>
              )}{" "}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="passmatch">
                {passmatch.label}
              </label>
              <input
                id="passmatch"
                className="form-input"
                placeholder={passmatch.placeholder}
                type="password"
                {...register("passmatch", {
                  required: `${passmatch.errorMsg.required}`,
                  validate: {
                    matchesPass: (v) => {
                      if (watch("password") !== v) {
                        return `${passmatch.errorMsg.match}`;
                      }
                    },
                  },
                })}
              />
              {errors.passmatch ? (
                <p className="form-footnote text-red-600">
                  {errors.passmatch.message}
                </p>
              ) : (
                <p className="form-footnote">{passmatch.footnote}</p>
              )}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="role">
                {role.label}
              </label>
              <select
                id="role"
                className="form-input"
                defaultValue={roles[2].id}
                {...register("role_id", {
                  onChange: (e) => {
                    if (e.target.value == roles[1].id) setStore(true);
                    else setStore(false);
                  },
                })}
              >
                <option value={roles[2].id}>{role.customer}</option>
                <option value={roles[0].id}>{role.admin}</option>
                <option value={roles[1].id}>{role.store}</option>
              </select>
              <p className="form-footnote">{role.footnote}</p>
            </div>

            {isStore && (
              <div className="flex flex-col gap-4 px-8">
                <div className="form-group">
                  <label className="form-label" htmlFor="storename">
                    {store.name.label}
                  </label>
                  <input
                    id="storename"
                    className="form-input"
                    placeholder={store.name.placeholder}
                    {...register("storename", {
                      required: `${store.name.errorMsg.required}`,
                      minLength: {
                        value: 3,
                        message: `${store.name.errorMsg.length}`,
                      },
                    })}
                  />
                  {errors.storename ? (
                    <p className="form-footnote text-red-600">
                      {errors.storename.message}
                    </p>
                  ) : (
                    <p className="form-footnote">{store.name.footnote}</p>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="storetaxid">
                    {store.taxid.label}
                  </label>
                  <input
                    id="storetaxid"
                    className="form-input"
                    placeholder={store.taxid.placeholder}
                    {...register("storetaxid", {
                      onChange: (event) => {
                        let { value, selectionStart } = event.target;
                        const numericValue = value.replace(/[^\d]/g, "");
                        const truncatedValue = numericValue.slice(0, 10);

                        let cursorPosition;

                        if (selectionStart <= 1) {
                          cursorPosition = 2;
                        } else if (selectionStart <= 5) {
                          cursorPosition = selectionStart;
                        } else {
                          cursorPosition = selectionStart + 1;
                        }

                        const formattedValue = `T${truncatedValue.slice(
                          0,
                          4
                        )}V${truncatedValue.slice(4)}`;

                        event.target.value = formattedValue;
                        event.target.setSelectionRange(
                          cursorPosition,
                          cursorPosition
                        );
                      },
                      required: `${store.taxid.errorMsg.required}`,
                      minLength: {
                        value: 12,
                        message: `${store.taxid.errorMsg.length}`,
                      },
                    })}
                  />
                  {errors.storetaxid ? (
                    <p className="form-footnote text-red-600">
                      {errors.storetaxid.message}
                    </p>
                  ) : (
                    <p className="form-footnote">{store.taxid.footnote}</p>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="storeiban">
                    {store.bank.label}
                  </label>
                  <input
                    className="form-input"
                    placeholder={store.bank.placeholder}
                    {...register("storeiban", {
                      required: `${store.bank.errorMsg.required}`,
                      minLength: {
                        value: 26,
                        message: `${store.bank.errorMsg.minlength}`,
                      },
                      maxLength: {
                        value: 26,
                        message: `${store.bank.errorMsg.maxlength}`,
                      },
                      onChange: (event) => {
                        let inputValue = event.target.value;

                        if (!inputValue.startsWith("TR")) {
                          inputValue = "TR";
                        }
                        const numericValue = inputValue.replace(/[^\d]/g, "");

                        const formattedValue = `TR${numericValue}`;

                        event.target.value = formattedValue;
                      },
                    })}
                  />
                  {errors.storeiban ? (
                    <p className="form-footnote text-red-600">
                      {errors.storeiban.message}
                    </p>
                  ) : (
                    <p className="form-footnote">{store.bank.footnote}</p>
                  )}
                </div>
              </div>
            )}
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className={
                !isSubmitting && isValid
                  ? "blue-button mx-auto flex gap-4 items-center"
                  : "blue-button mx-auto flex gap-4 items-center bg-secondary-focus"
              }
            >
              <span>{button}</span>
              <span>{isSubmitting && <Spinner className="text-white" />}</span>
            </button>
          </form>
        </div>
      ) : (
        <Spinner page={true} />
      )}
    </div>
  );
}

export default SignUp;
