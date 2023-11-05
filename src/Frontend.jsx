import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const Frontend = ({ data }) => {
  const consumerKey = "ck_e048bbc305db5bdd742b62a82535df4f5d2af612";
  const consumerSecret = "cs_9e6ec810cf9cdb513e449a2c412e5a997e788b52";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postcode, setPostcode] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const basicAuth = btoa(`${consumerKey}:${consumerSecret}`);
  const headers = {
    Authorization: `Basic ${basicAuth}`,
    "Content-Type": "application/json",
  };

  const createProductHandler = async (event) => {
    event.preventDefault();
    // if (!name || !price || quantity) return;
    try {
      const response = await axios.post(
        "/wp-json/wc/v3/products",
        {
          // Add the data for the product here
          name: name,
          regular_price: price,
          // Add other properties as needed
        },
        { headers }
      );
      console.log(response.data);
      getNonce(response?.data?.id);
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };

  const getNonce = async (id) => {
    try {
      const response = await axios.get("/wp-json/b2b-woocommerce/v1/get-nonce");
      console.log(response.data);
      addToCart(id, response.data); // Handle the response data
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };

  const addToCart = async (id, wcnonce) => {
    console.log(wcnonce);
    try {
      const response = await axios.post(
        "/wp-json/wc/store/cart/add-item",
        {
          // Add the data for the product here
          id: id,
          quantity: quantity,
          nonce: wcnonce,
          // Add other properties as needed
        },
        {
          headers: {
            "X-WP-Nonce": wcnonce,
            "X-WC-Store-API-Nonce": data?.wc_nonce,
          },
        }
      );
      window.location.href = "/checkout";
      // setFormHide(true);
      // showForm();

      console.log(response.data); // Handle the response data
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };

  const [formhide, setFormHide] = useState(false);

  const hideForm = () => {
    const checkoutForm = document.querySelector(".woocommerce");
    const customerDetails = document.querySelector("#customer_details");
    const coupon = document.querySelector(".woocommerce-form-coupon-toggle");
    if (checkoutForm) {
      checkoutForm.style.display = "none";
    }
    if (customerDetails) {
      customerDetails.style.display = "none";
    }

    if (coupon) {
      coupon.style.display = "none";
    }
  };
  const showForm = () => {
    const checkoutForm = document.querySelector(".woocommerce");
    checkoutForm.style.display = "block";
  };

  useEffect(() => {
    hideForm();
  }, []);
  return (
    !formhide && (
      <div className="w-full bg-white p-6">
        <div>
          <h3 className="text-2xl text-center">Order Now</h3>
          <form onSubmit={createProductHandler}>
            <div className="grid grid-cols-1 gap-4">
              <div className="w-full grid grid-cols-2 gap-2">
                <div className="flex flex-col justify-start">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    id="first_name"
                    placeholder="First Name"
                    value={firstName}
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    id="last_name"
                    placeholder="Last Name"
                    value={lastName}
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full grid grid-cols-2 gap-2">
                <div className="flex flex-col justify-start">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Address"
                    value={address}
                    required
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    placeholder="City"
                    value={city}
                    required
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    placeholder="State"
                    value={state}
                    required
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <label htmlFor="postcode">Post code</label>
                  <input
                    type="text"
                    id="postcode"
                    placeholder="Postcode"
                    value={postcode}
                    required
                    onChange={(e) => setPostcode(e.target.value)}
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    placeholder="Country"
                    value={country}
                    required
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone"
                    value={phone}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-start">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col justify-start">
                <label htmlFor="product_name">Product Name</label>
                <input
                  type="text"
                  id="product_name"
                  placeholder="Product Name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col justify-start">
                <label htmlFor="price">Product Price</label>
                <input
                  type="number"
                  step={1}
                  min={0}
                  id="price"
                  placeholder="Product Price"
                  value={price}
                  required
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="flex flex-col justify-start">
                <label htmlFor="quantity">Product Quantity</label>
                <input
                  type="number"
                  step={1}
                  min={0}
                  id="quantity"
                  placeholder="Product Quantity"
                  value={quantity}
                  required
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                className="px-6 py-2 bg-green-500 text-white"
              >
                {" "}
                Order Now{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Frontend;
