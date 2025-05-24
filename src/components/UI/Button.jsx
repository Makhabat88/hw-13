import styled, { css } from "styled-components";

const BUTTON_VARIANT = {
  Addplus: {
    width: "99px",
    height: "41px",
    background: "#8a2b06",
    padding: "10px 24px",
    color: "white",
    fontSize: "14px",
    fontWeight: "700",
    borderRadius: "20px",
    border: "none",

    hovers: {
      background: "#7e2a0a",
      color: "#ffffff",
    },

    before: {
      content: '"+ "',
      textTransform: "uppercase",
      fontWeight: "100",
      color: "#ffffff",
      paddingRight: "8px",
    },

    active: {
      background: "#993108",
      color: "#ffffff",
      transform: "scale(1.1)",
    },

    disabled: {
      border: "2px solid #cac6c4",
      color: "#cac6c4",
      background: "transparent",
      userSelect: "none",
      pointerEvents: "none",
      cursor: "not-allowed",
    },
  },
  close: {
    width: "110px",
    height: "44px",
    border: "1px solid #8a2b06",
    color: "#8a2b06",
    lineHeight: "100",
    fontWeight: "bold",
    borderRadius: "20px",

    hovers: {
      background: "#8a2b06",
      color: "#fff",
    },

    active: {
      background: "#993108",
      color: "#fff",
      transform: "scale(1.1)",
    },

    disabled: {
      border: "2px solid #cac6c4",
      color: "#cac6c4",
      userSelect: " none",
      pointerEvents: "none",
      cursor: "not-allowed",
    },
  },

  order: {
    width: "110px",
    height: "44px",
    background: "#8a2b06",
    color: "#ffffff",
    fontWeight: "500",
    lineHeight: "100",
    borderRadius: "20px",
    border: "none",

    hovers: {
      background: "#7e2a0a",
      color: "#fff",
    },
    active: {
      background: "#993108",
      color: "#fff",
      transform: "scale(1.1)",
    },

    disabled: {
      background: "#cac6c4",
      userSelect: "none",
      pointerEvents: "none",
      cursor: "not-allowed",
      lightingColor: "#ffffff",
    },
  },

  PlusMinus: {
    border: "2px solid #8a2b06",
    color: "#8a2b06",
    borderRadius: "6px",
    width: "48px",
    height: "36px",
    fontSize: "20px",

    hovers: {
      background: "#8a2b06",
      color: "#ffffff",
    },
    active: {
      background: "#993108",
      color: "#ffffff",
      transform: "scale(1.1)",
    },
    disabled: {
      border: "2px solid #cac6c4",
      color: "#cac6c4",
      userSelect: "none",
      pointerEvents: "none",
      cursor: "not-allowed",
    },
  },
};

export const Button = ({ 
  variant, 
  disabled, 
  title, 
  onClick,
type = 'text',
}) => {
  return (
    <MyButton 
    type={type} 
    variant={variant} 
    disabled={disabled} 
    onClick={onClick}>
      {title}
    </MyButton>
  );
};

const buttonVariant = ({ variant, disabled = false }) => {
  const style = BUTTON_VARIANT[variant];

  return css`
    width: ${style.width};
    height: ${style.height};
    padding: ${style.padding};
    color: ${style.color};
    background: ${style.background};
    font-size: ${style.fontSize};
    font-weight: ${style.fontWeight};
    border-radius: ${style.borderRadius};
    border: ${style.border};

    &::before {
      content: ${style.before?.content};
      font-weight: ${style.before?.fontWeight};
      color: ${style.before?.color};
      padding-right: ${style.before?.paddingRight};
      text-transform: ${style.textTransform};
    }

    &:hover {
      ${!disabled &&
      css`
        background: ${style.hovers?.background};
        color: ${style.hovers?.color};
      `}
    }

    &:active {
      ${!disabled &&
      css`
        background: ${style.active?.background};
        color: ${style.active?.color};
        transform: ${style.active?.transform};
      `}
    }

    &:disabled {
      border: ${style.disabled?.border};
      color: ${style.disabled?.color};
      background: ${style.disabled?.background};
      cursor: ${style.disabled?.cursor};
      user-select: ${style.disabled?.userSelect};
      pointer-events: ${style.disabled?.pointerEvents};
    }
  `;
};

const MyButton = styled.button`
  cursor: pointer;
  ${(props) => buttonVariant(props)};
`;