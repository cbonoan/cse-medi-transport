import { Button, ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
  variant?: "contained" | "outlined";
}

export const CustomButton = ({
  children,
  variant = "contained",
  ...props
}: CustomButtonProps) => {
  return (
    <Button
      variant={variant}
      size="large"
      sx={{
        padding: "12px 36px",
        fontSize: "1.2rem",
        borderRadius: "30px",
        textTransform: "none",
        fontWeight: 600,
        ...(variant === "contained"
          ? {
              backgroundColor: "#1976d2",
              color: "#ffffff",
              boxShadow: "0 4px 6px rgba(25,118,210,0.25)",
              "&:hover": {
                backgroundColor: "#1565c0",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 8px rgba(25,118,210,0.3)",
              },
            }
          : {
              borderColor: "#ffffff",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
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
