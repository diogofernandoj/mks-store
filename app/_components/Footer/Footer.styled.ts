import { motion } from "framer-motion";
import styled from "styled-components";

export const FooterContainer = styled(motion.footer)`
  background-color: #eee;
  height: 2.1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  inset: auto 0 0 0;
`;

export const FooterText = styled.p`
  text-align: center;
  font-size: 0.75rem;
  line-height: 0.91rem;
  color: #000;
`;
