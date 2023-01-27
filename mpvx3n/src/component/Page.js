import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: linear-gradient(
    90deg,
    rgba(2, 175, 63, 1) 0%,
    rgba(30, 121, 9, 0.8687850140056023) 50%,
    rgba(241, 255, 0, 1) 100%
  );
  /* робимо фон на всю ширину */
  width: 100%;
`;
