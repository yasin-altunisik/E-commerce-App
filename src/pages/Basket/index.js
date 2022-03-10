import React from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Image } from "@chakra-ui/react";
import { useBasket } from "../../contexts/BasketContext";

function Basket() {
  const { items } = useBasket();

  console.log(items);

  return (
    <div>
      {items.length < 1 && (
        <Alert status="warning">you have not any item in your basket</Alert>
      )}

      {
          items.length > 0 && <>
          <ul>
              {
                  items.map((item)=> (
                      <li key={item._id}>
                          <Link to={`/product/${item._id}`}>
                              {item.title} - {item.price} TL
                              <Image htmlWidth={200} src={item.photos[0]} alt="basket item" />
                          </Link>

                          <Button mt="2" size="sm" colorScheme="pink" onClick={()=>{}}>
                              Remove from basket
                          </Button>
                      </li>
                  ))
              }
          </ul>
          </>
      }
    </div>
  );
}

export default Basket;
