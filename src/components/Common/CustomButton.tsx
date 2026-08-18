import { Button, ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
  variant?: "contained" | "outlined";
}

export const CustomButton = ({
  children,
  variant = "contained",
  size = "large",
  ...props
}: CustomButtonProps) => {
  return (
    <Button
      variant={variant}
      size={size}
      sx={{
        padding: size === "large" ? "12px 36px" : "8px 20px",
        fontSize: size === "large" ? "1.2rem" : "1rem",
        borderRadius: "30px",
        textTransform: "none",
        fontWeight: 600,
        whiteSpace: "nowrap",
        width: "fit-content",
        ...(variant === "contained"
          ? {
              backgroundColor: "primary.main",
              color: "primary.contrastText",
              boxShadow: "0 4px 6px rgba(214,50,31,0.25)",
              "&:hover": {
                backgroundColor: "primary.dark",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 8px rgba(214,50,31,0.3)",
              },
            }
          : {
              borderColor: "#ffffff",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                transform: "translateY(-2px)",
                borderColor: "#ffffff",
              },
            }),
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
