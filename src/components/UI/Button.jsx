import React from "react";
import styled, { css } from "styled-components";

const BUTTON_VARIANTS = {
  btnPlus: {
    width: "48px",
    height: "36px",
    fontSize: "20px",
    borderRadius: "8px",
    border: "1px solid #8A2B06",
    color: "#8A2B06",
    hovers: {
      background: "#8A2B06",
      color: "#FFFFFF",
    },
    active: {
      background: "#993108",
      transform: "scale(1.1)",
    },
    disabled: {
      background: "#CAC6C4",
      color: "#FFFFFF",
      cursor: "not-allowed",
    },
  },

  btnMinus: {
    width: "48px",
    height: "36px",
    fontSize: "20px",
    borderRadius: "8px",
    border: "1px solid #8A2B06",
    color: "#8A2B06",
    hovers: {
      background: "#8A2B06",
      color: "#FFFFFF",
    },
    active: {
      background: "#993108",
      transform: "scale(1.1)",
    },
    disabled: {
      background: "#CAC6C4",
      color: "#FFFFFF",
      cursor: "not-allowed",
    },
  },

  btnAdd: {
    width: "99px",
    height: "41px",
    background: "#8A2B06",
    color: "#FFFFFF",
    fontWeight: "bold",
    borderRadius: "20px",
    border: "none",
    fontSize: "14px",
    hovers: {
      background: "#7E2A0A",
    },
    active: {
      background: "#993108",
      transform: "scale(1.1)",
    },
    disabled: {
      background: "#CAC6C4",
    },
  },

  btnClose: {
    width: "110px",
    height: "44px",
    border: "1px solid #8A2B06",
    color: "#8A2B06",
    fontSize: "16px",
    borderRadius: "20px",
    hovers: {
      background: "#8A2B06",
      color: "#FFFFFF",
    },
    active: {
      background: "#993108",
      color: "#FFFFFF",
      transform: "scale(1.1)",
    },
    disabled: {
      border: "1px solid #CAC6C4",
      color: "#CAC6C4",
    },
  },

  btnOrder: {
    width: "110px",
    height: "44px",
    background: "#8A2B06",
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "20px",
    border: "none",
    hovers: {
      background: "#7E2A0A",
    },
    active: {
      background: "#993108",
      transform: "scale(1.1)",
    },
    disabled: {
      background: "#CAC6C4",
      color: "#FFFFFF",
    },
  },
};

export const Button = ({ title, type, disabled, onClick }) => {
  const variant = BUTTON_VARIANTS[type];

  if (!variant) {
    console.error(`Button variant "${type}" not found.`);
    return null;
  }

  return (
    <StyledButton variant={variant} disabled={disabled} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  ${(props) =>
    props.variant &&
    css`
      width: ${props.variant.width};
      height: ${props.variant.height};
      background: ${props.variant.background || "transparent"};
      color: ${props.variant.color};
      font-size: ${props.variant.fontSize};
      font-weight: ${props.variant.fontWeight};
      border-radius: ${props.variant.borderRadius};
      border: ${props.variant.border};

      &:hover {
        background: ${!props.disabled && props.variant.hovers?.background};
        color: ${!props.disabled && props.variant.hovers?.color};
      }

      &:active {
        background: ${!props.disabled && props.variant.active?.background};
        color: ${!props.disabled && props.variant.active?.color};
        transform: ${!props.disabled && props.variant.active?.transform};
      }

      &:disabled {
        background: ${props.variant.disabled?.background};
        color: ${props.variant.disabled?.color};
        border: ${props.variant.disabled?.border};
        cursor: ${props.variant.disabled?.cursor || "not-allowed"};
      }
    `}
`;
