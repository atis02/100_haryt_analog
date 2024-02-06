import { useState } from "react";
import { Button, Stack } from "@mui/material";

const ScroolToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };
  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <Stack sx={{ width: "100%", display: "flex", alignItems: "end" }}>
      <Button
        onClick={scrolltoTop}
        sx={{
          pt: "8px",
          position: "fixed",
          bottom: "55px",
          right: { lg: "100px", md: "100px", xs: '20px' },
          "&:hover": { backgroundColor: "#00B252" },
          backgroundColor: "#00B252",
          display: visible ? "inline" : "none",
          minWidth: "35px",
          height: "35px",
          borderRadius: "50%",
          color: "#fff",
          zIndex: '10'
        }}
      >
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="double-right"
          width="17px"
          height="17px"
          fill="currentColor"
          aria-hidden="true"
          style={{ transform: "rotate(-90deg)" }}
        >
          <path d="M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"></path>
        </svg>
      </Button>
    </Stack>
  );
};
export default ScroolToTop;
