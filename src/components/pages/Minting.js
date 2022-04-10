import React from 'react';
import styled from "styled-components";
import '../../assets/styles.css'

const ButtonContainer = styled.div`
  

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;
const Minting= () => {
    return(
        <>
        <div style={{width:"100%", height:"100vh", backgroundColor:"#202020", color: "white", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <h1>Minting will be available in the "mid-may" of 2022.</h1><br />
            <ButtonContainer>
                <a className="button-light"
                href="/" rel="noreferrer">Go Back To Home</a>
            </ButtonContainer>
        </div>
        </>
    )
}

export default Minting;