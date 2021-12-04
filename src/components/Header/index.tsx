import React, { useState } from "react";
import { Container } from "./styles";
import logo from "../../assets/logo.jpeg";

interface Props {
	openModal: () => void
}

export function Header({ openModal }: Props) {
  
	   return (
        <Container>
            <div className="logo">
                <img src={logo} />
                <strong>Lucas Beppler</strong>
            </div>

            <button onClick={openModal} >
                <svg viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                </svg>
            </button>


            
        </Container>
    );
}