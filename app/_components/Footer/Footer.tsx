import { fadeIn } from "../../_lib/animation/variants";
import { FooterContainer, FooterText } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      data-testid="footer"
    >
      <FooterText>MKS sistemas © Todos os direitos reservados</FooterText>
    </FooterContainer>
  );
};

export default Footer;
