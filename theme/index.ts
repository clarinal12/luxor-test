import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brandBlack: "#1F1F1F",
    grayLighter: "#484D57",
    grayLight: "#3F414B",
    gray: "#3B3E46",
    grayDark: "#2D2F36",
    grayDarker: "#1C1D1F",
    brandPrimary: "#F2C94C",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "6px",
      },
      sizes: {
        lg: {
          h: "60px",
          fontWeight: 700,
          fontSize: "18px",
        },
        size: {
          h: "30px",
          fontWeight: 600,
          fontSize: "16px",
        },
      },
      variants: {
        primary: {
          bgColor: "brandPrimary",
          color: "white",
        },
        black: {
          bgColor: "grayDark",
          color: "white",
        },
      },
      defaultProps: {
        variant: "black",
      },
    },
    Input: {
      variants: {
        filled: {
          field: {
            bgColor: "grayLight",
            color: "white",
            _focus: {
              borderColor: "brandPrimary",
              boxShadow: "none",
              bgColor: "grayLight",
            },
            _hover: {
              bgColor: "grayLight",
            },
          },
        },
      },
      sizes: {
        lg: {
          field: {
            borderRadius: "5px",
            h: "60px",
            px: "22px",
            fontSize: "18px",
            lineHeight: "25px",
            fontWeight: 600,
          },
        },
      },
      defaultProps: {
        variant: "filled",
      },
    },
  },
});

export default theme;
