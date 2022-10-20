import { Typography } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "./style";

export default function Banner() {
  return (
    <BannerContainer>
      <BannerImage src="/images/banner/banner3.webp" />
      <BannerContent>
        <Typography variant="h6">New Flavor</Typography>
        <BannerTitle variant="h2">CLOUDFEE</BannerTitle>

        <BannerDescription variant="subtitle">
          Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore et dolore magna
        </BannerDescription>

        <BannerShopButton color="primary">Try now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
