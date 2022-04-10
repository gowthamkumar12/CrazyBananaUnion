import React from "react";
import styled from "styled-components";
import "../../assets/styles.css"

const Section = styled.section`
  min-height: 20vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  & > *:first-child {
    animation-duration: 20s;

    @media (max-width: 30em) {
      animation-duration: 15s;
    }
  }
  & > *:last-child {
    animation-duration: 15s;

    @media (max-width: 30em) {
      animation-duration: 10s;
    }
  }
`;

const Showcase = () => {
  return (
    <Section id="showcase">
        {/*<a className="button-light"
              href="/gallery" rel="noreferrer">View Gallery</a>*/}
    </Section>
  );
};

export default Showcase;
