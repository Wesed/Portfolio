import React from "react";

// E responsavel por receber um hexadecimal e converter pra RGBA
const UseHex = (hex, opacity) => {
  const [rgba, setRgba] = React.useState(null);
  React.useEffect(() => {
    function hexToRgba(hex) {
      var c;
      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split("");
        if (c.length === 3) {
          c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = "0x" + c.join("");
        return (
          setRgba("rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ", " + opacity + ")")
        );
      }
      throw new Error("Bad Hex");
    }
    hexToRgba(hex);
  }, [rgba, hex, opacity]);

  return rgba;
};

export default UseHex;
