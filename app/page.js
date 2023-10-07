import Home_1 from "./(home)/home-1/page";
import Wrapper from "./layout/wrapper";

export const metadata = {
  
  title: "Home | Carportal - Automotive & Car Dealer",
  description: `Carportal - Automotive & Car Dealer `,
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home_1 />
    </Wrapper>
  );
}
