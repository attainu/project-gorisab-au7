import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/actions/product-actions/fetchProductsAction";
import ProductsCarousel from "./ProductsCarousel";
import DealsOfTheDay from "./DealsOfTheDay";
import ExploreMore from "./ExploreMore";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container fluid>
      <ProductsCarousel title='Fresh and from Farm to Home' productsNumber='4' />
      <ProductsCarousel title='Season Specials' productsNumber='4' />
      <DealsOfTheDay productsNumber='3' />
      <ExploreMore />
    </Container>
  );
}

export default HomePage;
