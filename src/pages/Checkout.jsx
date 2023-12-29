import React, { useEffect, useState } from "react";
import Container from "../components/layouts/Container";
import Breadcrumb from "../components/layouts/Breadcrumb";
import Flex from "../components/layouts/Flex";
import Input from "../components/layouts/Input";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartData = useSelector((state) => state.cart.cartData);
  let [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [couponShow, setCouponShow] = useState(false);
  const [inputValues, setInputValues] = useState({
    fName: "",
    lName: "",
    country: "",
    address: "",
    city: "",
    postCode: "",
    phone: "",
    email: "",
  });
  const [error, setError] = useState({
    fName: "",
    lName: "",
    country: "",
    address: "",
    city: "",
    postCode: "",
    phone: "",
    email: "",
  });
  const handleInputValues = (e) => {
    const { name, value } = e.target;
    setInputValues({... inputValues,[name]: value });
    setError({...error,[name]:""})
  };
  const handleSubmit = () => {
    if (!inputValues.fName) {
      setError({fName:"name daw nai"});
    }
    if (!inputValues.lName) {
   setError((preValue) => ({...preValue,lName:"last name daw nai"}))
    }
    if (!inputValues.address) {
      setError((preValue) => ({...preValue,address:"address daw nai"}))
       }
       
  };
  useEffect(() => {
    let total = 0;
    let subTotal = 0;
    cartData.map((product) => {
      total +=
        product.qun *
        Math.ceil(
          product.price - (product.price * product.discountPercentage) / 100
        );
      subTotal += Math.ceil(product.qun * product.price);
    });
    setTotal(total);
    setSubTotal(subTotal);
  }, [cartData]);
  return (
    <section>
      <Container>
        <Breadcrumb
          pathName={window.location.pathname.split("/")[1]}
          name={window.location.pathname.split("/")[1]}
          path={window.location.pathname}
        />
        <div>
          Have a coupon?
          <span
            className="font-bold"
            onClick={() => setCouponShow(!couponShow)}
          >
            Click here to enter your code
          </span>
          {couponShow && (
            <form action="" className="mt-3">
              <input
                type="text"
                className="w-[255px] border border-[#F0F0F0] px-5 py-3 outline-[#F0F0F0] "
              />
              <button className="font-bold ml-6">Apply Coupon</button>
            </form>
          )}
        </div>
        <h2 className="font-semibold text-2xl">Billing Details</h2>
        <Flex className={"flex-col w-[1055px] gap-y-6"}>
          <Flex className={"justify-between"}>
            <div>
              <Input
                placeholder={"First Name"}
                label={"First Name *"}
                className={"w-[508px] mt-6"}
                inputclassName={
                  "w-full outline-transparent border-b border-[#F0F0F0] py-4"
                }
                isRequired={true}
                type={"text"}
                value={inputValues.fName}
                onChange={handleInputValues}
                name="fName"
              />
              <p className="text-red-500">{error.fName}</p>
            </div>
            <div>
              <Input
                placeholder={"Last Name"}
                label={"Last Name *"}
                className={"w-[508px] mt-6"}
                inputclassName={
                  "w-full outline-transparent border-b border-[#F0F0F0] py-4"
                }
                isRequired={true}
                type={"text"}
                value={inputValues.lName}
                onChange={handleInputValues}
                name="lName"
              />
              <p className="text-red-500">{error.lName}</p>
            </div>
          </Flex>
          <div>
            <label htmlFor="" className="block">
              Country *
            </label>
            <select
              name="country"
              id=""
              className="w-full outline-transparent border-b border-[#F0F0F0] py-4"
              value={inputValues.country}
              onChange={handleInputValues}
            >
              <option value="">Please select</option>
            </select>
          </div>

          <Input
            placeholder={"Companye Name (optional)"}
            label={"Companye Name *"}
            className={""}
            inputclassName={
              "w-full outline-transparent border-b border-[#F0F0F0] py-4"
            }
            type={"text"}
          />
         <div>
         <Input
            placeholder={"House number and street name"}
            label={"Street Address *"}
            className={""}
            inputclassName={
              "w-full outline-transparent border-b border-[#F0F0F0] py-4"
            }
            type={"text"}
            value={inputValues.address}
            onChange={handleInputValues}
            name="address"
          />
          <p className="text-red-500">{error.address}</p>
         </div>
          <Input
            placeholder={"Apartment, suite, unit etc. (optional)"}
            label={""}
            className={""}
            inputclassName={
              "w-full outline-transparent border-b border-[#F0F0F0] py-4"
            }
            type={"text"}
          />
         <div>
         <Input
            placeholder={"Town/City"}
            label={"Town/City *"}
            className={""}
            inputclassName={
              "w-full outline-transparent border-b border-[#F0F0F0] py-4"
            }
            type={"text"}
            value={inputValues.city}
            onChange={handleInputValues}
            name="city"
          />
            <p className="text-red-500">{error.city}</p>
         </div>
         <div>
         <Input
            placeholder={"Post Code"}
            label={"Post Code *"}
            className={""}
            inputclassName={
              "w-full outline-transparent border-b border-[#F0F0F0] py-4"
            }
            type={"text"}
            value={inputValues.postCode}
            onChange={handleInputValues}
            name="postCode"
          />
            <p className="text-red-500">{error.postCode}</p>
         </div>
          <div>
          <Input
            placeholder={"Phone"}
            label={"Phone *"}
            className={""}
            inputclassName={
              "w-full outline-transparent border-b border-[#F0F0F0] py-4"
            }
            type={"tel"}
            value={inputValues.phone}
            onChange={handleInputValues}
            name="phone"
          />
            <p className="text-red-500">{error.phone}</p>
          </div>
         <div>
         <Input
            placeholder={"Email"}
            label={"Email Address *"}
            className={""}
            inputclassName={
              "w-full outline-transparent border-b border-[#F0F0F0] py-4"
            }
            type={"email"}
            value={inputValues.email}
            onChange={handleInputValues}
            name="email"
          />
          <p className="text-red-500">{error.email}</p>
         </div>
          <h2 className="text-4xl">Additional Information</h2>
          <textarea
            name=""
            id=""
            placeholder="Notes about your order, e.g. special notes for delivery."
            className="w-full h-[138px] resize-none border-b border-[#F0F0F0]"
          ></textarea>
          <h2 className="text-4xl mt-[129px]">Your Order</h2>
          <Flex
            className={"w-[644px] border border-[#F0F0F0] text-start flex-wrap"}
          >
            <div className="w-1/2 px-5 py-3 border-r  border-[#F0F0F0]">
              Product
            </div>
            <div className="w-1/2 px-5 py-3">Total</div>
            {cartData.map((product) => (
              <>
                <div className="w-1/2 px-5 py-3 border-r border-t border-[#F0F0F0]">
                  {product.title}x {product.qun}
                </div>
                <div className="w-1/2 px-5 py-3 border-t border-[#F0F0F0]">
                  {Math.ceil(product.qun * product.price)} $
                </div>
              </>
            ))}

            <div className="w-1/2 px-5 py-3 border-r border-t border-[#F0F0F0]">
              Subtotal
            </div>
            <div className="w-1/2 px-5 py-3 border-t border-[#F0F0F0]">
              {subTotal}$
            </div>
            <div className="w-1/2 px-5 py-3 border-r border-t border-[#F0F0F0]">
              Total
            </div>
            <div className="w-1/2 px-5 py-3 border-t border-[#F0F0F0]">
              {total}$
            </div>
          </Flex>
          <div>
            <input type="radio" className="mr-2" name="payment" />
            <label htmlFor="">Bank</label>
            <p>
              Pay via Bank; you can pay with your credit card if you don’t have
              a Bank account.
            </p>
          </div>
          <div>
            <input type="radio" className="mr-2" name="payment" checked />
            <label htmlFor="">Bank 2</label>
            <p>
              Pay via Bank; you can pay with your credit card if you don’t have
              a Bank account.
            </p>
          </div>
          <h6>
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </h6>
        </Flex>
        <button
          className="bg-black text-white px-6 py-4 inline-block mt-12"
          onClick={handleSubmit}
        >
          Proceed to Bank
        </button>
      </Container>
    </section>
  );
};

export default Checkout;
