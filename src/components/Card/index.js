import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import moment from "moment";

import { useBasket } from "../../contexts/BasketContext";

function Card({ item }) {
  const { addToBasket, items } = useBasket();
  const findBasketItem = items.find(
    (basket_item) => basket_item._id === item._id
  );

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      width="50%"
      overflow="hidden"
      p="3"
    >
      <Link to={`/product/${item.id}`}>
        <Image src={item.image} alt="product" height="200px"/>

        <Box p="6">
          <Box d="plex" alignItems="baseline">
            {moment(item.createdAt).format("DD/MM/YYYY")}
          </Box>

          <Box mt="1" fontWeight="semibold" h="100px" as="h4" lineHeight="tight">
            {item.title}
          </Box>

          <Box>{item.price} TL</Box>
        </Box>
      </Link>

      <Button
        colorScheme={findBasketItem ? "pink" : "green"}
        variant="solid"
        onClick={() => addToBasket(item, findBasketItem)}
      >
        {findBasketItem ? "Remove from basket" : "Add to basket"}
      </Button>
    </Box>
  );
}

export default Card;
