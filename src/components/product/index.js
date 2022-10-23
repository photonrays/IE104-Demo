import {
  Box,
  CardActions,
  Container,
  Grid,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { products } from "../../data";
import * as React from "react";
import { Favorite, AddShoppingCart } from "@mui/icons-material";

export default function Products() {
  const renderProducts = products.map((product) => (
    <Grid item key={product.id} xs={2} sm={4} md={4}>
      {/* <Card sx={{ maxWidth: 345 }}> */}
      {/* <CardMedia
          component="img"
          height="250"
          image={product.image}
          alt={product.name}
        /> */}
      {/* <CardContent>
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="body2">{product.description}</Typography>
        </CardContent> */}
      {/* <CardActions sx={{ display: "flex" }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {product.price}
          </Typography>
          <IconButton>
            <AddShoppingCart />
          </IconButton>
          <IconButton>
            <Favorite />
          </IconButton>
        </CardActions> */}
      {/* </Card> */}
    </Grid>
  ));
  return (
    <div>Products</div>
    // <Container>
    //   {/* <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
    //     <Typography variant="h4">Our Products</Typography>
    //   </Box> */}
    //   <Grid
    //   // container
    //   // spacing={{ xs: 2, md: 3 }}
    //   // justifyContent="center"
    //   // sx={{ margin: "20px 4px 10px 4px" }}
    //   // columns={{ xs: 4, sm: 8, md: 12 }}
    //   >
    //     {/* {renderProducts} */}
    //   </Grid>
    // </Container>
  );
}
