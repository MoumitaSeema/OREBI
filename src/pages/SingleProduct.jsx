import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/layouts/Container";
import Breadcrumb from "../components/layouts/Breadcrumb";
import Flex from "../components/layouts/Flex";
import Img from "../components/layouts/Img";
import { useDispatch } from "react-redux";
import { addToCart } from "../app/slices/cartSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();

  let { productId } = useParams();
  const [product, setProduct] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let ProductData = async () => {
      await fetch(`https://dummyjson.com/products/${productId}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((error) => error)
        .finally(() => setLoading(false));
    };
    ProductData();
  }, [product]);
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, qun: 1 }));
  };
  return (
    <Container>
      <Breadcrumb
        pathName={window.location.pathname.split("/")[1]}
        name={window.location.pathname.split("/")[1]}
        path={window.location.pathname}
      />
      {loading ? (
        <Flex
          className={
            "justify-center items-center text-red-500 text-5xl tracking-[15px]"
          }
        >
          <iframe
            src="https://giphy.com/embed/ZO9b1ntYVJmjZlsWlm"
            width="200"
            height="200"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </Flex>
      ) : (
        <Flex className={"flex-wrap"}>
          {product.images.map((img) => (
            <Img
              src={img}
              className={"w-[48%]"}
              imgClassName={"w-full h-full object-cover"}
            />
          ))}
        </Flex>
      )}
      <h2>{product.title}</h2>
      <Flex className={"gap-x-2"}>
        <strike>
          <h6>{`$ ${product.price}`}</h6>
        </strike>
        <h6>
          {Math.ceil(
            product.price - (product.price * product.discountPercentage) / 100
          )}
        </h6>
      </Flex>
      <h6>{product.stock != 0 ? "in stock" : "out of stock"}</h6>
      <button>add to wishlist </button>
      <button
        className="bg-black py-4 px-5 text-white"
        onClick={handleAddToCart}
      >
        add to Cart
      </button>
    </Container>
  );
};

export default SingleProduct;
