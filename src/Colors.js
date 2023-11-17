import React, { useState, useEffect } from 'react';
function getColor(answer) {
    const colorMap = {
      IndianRed: "indianred",
      LightCoral: "lightcoral",
      Salmon: "salmon",
      DarkSalmon: "darksalmon",
      LightSalmon: "lightsalmon",
      Red: "red",
      Crimson: "crimson",
      FireBrick: "firebrick",
      DarkRed: "darkred",
      Coral: "coral",
      Tomato: "tomato",
      OrangeRed: "orangered",
      DarkOrange: "darkorange",
      Orange: "orange",
      Gold: "gold",
      Yellow: "yellow",
      LightYellow: "lightyellow",
      LemonChiffon: "lemonchiffon",
      LightGoldenrodYellow: "lightgoldenrodyellow",
      PapayaWhip: "papayawhip",
      Moccasin: "moccasin",
      PeachPuff: "peachpuff",
      PaleGoldenrod: "palegoldenrod",
      Khaki: "khaki",
      DarkKhaki: "darkkhaki",
      GreenYellow: "greenyellow",
      Chartreuse: "chartreuse",
      LawnGreen: "lawngreen",
      Lime: "lime",
      LimeGreen: "limegreen",
      PaleGreen: "palegreen",
      LightGreen: "lightgreen",
      MediumSpringGreen: "mediumspringgreen",
      SpringGreen: "springgreen",
      MediumSeaGreen: "mediumseagreen",
      SeaGreen: "seagreen",
      ForestGreen: "forestgreen",
      Green: "green",
      DarkGreen: "darkgreen",
      YellowGreen: "yellowgreen",
      OliveDrab: "olivedrab",
      Olive: "olive",
      DarkOliveGreen: "darkolivegreen",
      MediumAquamarine: "mediumaquamarine",
      DarkSeaGreen: "darkseagreen",
      LightSeaGreen: "lightseagreen",
      DarkCyan: "darkcyan",
      Teal: "teal",
      Aqua: "aqua",
      Cyan: "cyan",
      LightCyan: "lightcyan",
      PaleTurquoise: "paleturquoise",
      Aquamarine: "aquamarine",
      Turquoise: "turquoise",
      MediumTurquoise: "mediumturquoise",
      DarkTurquoise: "darkturquoise",
      CadetBlue: "cadetblue",
      SteelBlue: "steelblue",
      LightSteelBlue: "lightsteelblue",
      PowderBlue: "powderblue",
      LightBlue: "lightblue",
      SkyBlue: "skyblue",
      LightSkyBlue: "lightskyblue",
      DeepSkyBlue: "deepskyblue",
      DodgerBlue: "dodgerblue",
      CornflowerBlue: "cornflowerblue",
      RoyalBlue: "royalblue",
      Blue: "blue",
      MediumBlue: "mediumblue",
      DarkBlue: "darkblue",
      Navy: "navy",
      MidnightBlue: "midnightblue",
      Lavender: "lavender",
      Thistle: "thistle",
      Plum: "plum",
      Violet: "violet",
      Orchid: "orchid",
      MediumOrchid: "mediumorchid",
      DarkOrchid: "darkorchid",
      DarkViolet: "darkviolet",
      BlueViolet: "blueviolet",
      MediumPurple: "mediumpurple",
      MediumSlateBlue: "mediumslateblue",
      SlateBlue: "slateblue",
      DarkSlateBlue: "darkslateblue",
      RebeccaPurple: "rebeccapurple",
      Indigo: "indigo",
      White: "white",
      Snow: "snow",
      Honeydew: "honeydew",
      MintCream: "mintcream",
      Azure: "azure",
      AliceBlue: "aliceblue",
      GhostWhite: "ghostwhite",
      WhiteSmoke: "whitesmoke",
      Seashell: "seashell",
      Beige: "beige",
      OldLace: "oldlace",
      FloralWhite: "floralwhite",
      Ivory: "ivory",
      AntiqueWhite: "antiquewhite",
      Linen: "linen",
      LavenderBlush: "lavenderblush",
      MistyRose: "mistyrose",
      Gainsboro: "gainsboro",
      LightGray: "lightgray",
      Silver: "silver",
      DarkGray: "darkgray",
      Gray: "gray",
      DimGray: "dimgray",
      LightSlateGray: "lightslategrey",
      SlateGray: "slategrey",
      DarkSlateGray: "darkslategrey",
      Black: "black",
      Practice: "#43B",
    };
  
    return colorMap[answer] || "defaultColor";
  }
  
const Colors = ({setEasterEgg})=> {
    const [selectedColor, setSelectedColor] = useState(""); 
  const [textColor, setTextColor] = useState(""); 
  const handleButtonClick = (selectedAnswer) => {
    setSelectedColor(getColor(selectedAnswer));
  };
  const handleTextColorButtonClick = (color) => {
    setTextColor(color);
  };

  useEffect(() => {
    document.body.style.background = selectedColor || "white";
    document.body.style.color = textColor || "black";
  }, [selectedColor, textColor]);


  // const [selectedColors, setSelectedColors] = useState([]);

  // const handleButtonClick = (selectedAnswer) => {
  //   const newColors = [...selectedColors, getColor(selectedAnswer)];
  //   setSelectedColors(newColors);
  // };

  // useEffect(() => {
  //   const gradientString = selectedColors.map((color, index) => {
  //     // Adding a space before the comma to create the gradient effect
  //     const separator = index < selectedColors.length - 1 ? ', ' : '';
  //     return `${color}${separator}`;
  //   }).join('');
  
  //   document.body.style.background = `linear-gradient(45deg, ${gradientString})`;
  // }, [selectedColors]);
  const colorButtons = [
    "IndianRed", "LightCoral", "Salmon", "DarkSalmon", "LightSalmon", "Red", "Crimson", "FireBrick",
    "DarkRed", "Coral", "Tomato", "OrangeRed", "DarkOrange", "Orange", "Gold", "Yellow", "LightYellow",
    "LemonChiffon", "LightGoldenrodYellow", "PapayaWhip", "Moccasin", "PeachPuff", "PaleGoldenrod",
    "Khaki", "DarkKhaki", "GreenYellow", "Chartreuse", "LawnGreen", "Lime", "LimeGreen", "PaleGreen",
    "LightGreen", "MediumSpringGreen", "SpringGreen", "MediumSeaGreen", "SeaGreen", "ForestGreen",
    "Green", "DarkGreen", "YellowGreen", "OliveDrab", "Olive", "DarkOliveGreen", "MediumAquamarine",
    "DarkSeaGreen", "LightSeaGreen", "DarkCyan", "Teal", "Aqua", "Cyan", "LightCyan", "PaleTurquoise",
    "Aquamarine", "Turquoise", "MediumTurquoise", "DarkTurquoise", "CadetBlue", "SteelBlue",
    "LightSteelBlue", "PowderBlue", "LightBlue", "SkyBlue", "LightSkyBlue", "DeepSkyBlue", "DodgerBlue",
    "CornflowerBlue", "RoyalBlue", "Blue", "MediumBlue", "DarkBlue", "Navy", "MidnightBlue", "Lavender",
    "Thistle", "Plum", "Violet", "Orchid", "MediumOrchid", "DarkOrchid", "DarkViolet", "BlueViolet",
    "MediumPurple", "MediumSlateBlue", "SlateBlue", "DarkSlateBlue", "RebeccaPurple", "Indigo",
    "White", "Snow", "Honeydew", "MintCream", "Azure", "AliceBlue", "GhostWhite", "WhiteSmoke",
    "Seashell", "Beige", "OldLace", "FloralWhite", "Ivory", "AntiqueWhite", "Linen", "LavenderBlush",
    "MistyRose", "Gainsboro", "LightGray", "Silver", "DarkGray", "Gray", "DimGray", "LightSlateGray",
    "SlateGray", "DarkSlateGray", "Black", "Practice"
  ];
  const textColorButtons = [
    "IndianRed", "LightCoral", "Salmon", "DarkSalmon", "LightSalmon", "Red", "Crimson", "FireBrick",
    "DarkRed", "Coral", "Tomato", "OrangeRed", "DarkOrange", "Orange", "Gold", "Yellow", "LightYellow",
    "LemonChiffon", "LightGoldenrodYellow", "PapayaWhip", "Moccasin", "PeachPuff", "PaleGoldenrod",
    "Khaki", "DarkKhaki", "GreenYellow", "Chartreuse", "LawnGreen", "Lime", "LimeGreen", "PaleGreen",
    "LightGreen", "MediumSpringGreen", "SpringGreen", "MediumSeaGreen", "SeaGreen", "ForestGreen",
    "Green", "DarkGreen", "YellowGreen", "OliveDrab", "Olive", "DarkOliveGreen", "MediumAquamarine",
    "DarkSeaGreen", "LightSeaGreen", "DarkCyan", "Teal", "Aqua", "Cyan", "LightCyan", "PaleTurquoise",
    "Aquamarine", "Turquoise", "MediumTurquoise", "DarkTurquoise", "CadetBlue", "SteelBlue",
    "LightSteelBlue", "PowderBlue", "LightBlue", "SkyBlue", "LightSkyBlue", "DeepSkyBlue", "DodgerBlue",
    "CornflowerBlue", "RoyalBlue", "Blue", "MediumBlue", "DarkBlue", "Navy", "MidnightBlue", "Lavender",
    "Thistle", "Plum", "Violet", "Orchid", "MediumOrchid", "DarkOrchid", "DarkViolet", "BlueViolet",
    "MediumPurple", "MediumSlateBlue", "SlateBlue", "DarkSlateBlue", "RebeccaPurple", "Indigo",
    "White", "Snow", "Honeydew", "MintCream", "Azure", "AliceBlue", "GhostWhite", "WhiteSmoke",
    "Seashell", "Beige", "OldLace", "FloralWhite", "Ivory", "AntiqueWhite", "Linen", "LavenderBlush",
    "MistyRose", "Gainsboro", "LightGray", "Silver", "DarkGray", "Gray", "DimGray", "LightSlateGray",
    "SlateGray", "DarkSlateGray", "Black", "Practice"
  ];
  useEffect(() => {
    if (selectedColor === "#43B" && textColor === "#43B") {
      setEasterEgg(true);
    } else {
      setEasterEgg(false);
    }
  }, [selectedColor, textColor, setEasterEgg]);
  
  return (
    <div  className='all'>
      <h2>Color Design</h2>
      <div className="body buttons all">
   
   <h4>Background Color: </h4>
   <h4>
     <span className="function" id="function" style={{ backgroundColor: selectedColor, color: textColor }}>
         {selectedColor}
     </span>
   </h4>
   <div>
     {colorButtons.map((color) => (
       <button
         key={color}
         className={`colorButton ${color}`}
         title={color}
         style={{
           backgroundColor: getColor(color),
           color: getColor(color),
         }}
         onClick={() => handleButtonClick(color)}
         onMouseOver={(e) => (e.target.style.color = 'black')} // Change text color on hover
         onMouseOut={(e) => (e.target.style.color = getColor(color))} // Restore text color on hover out
       >
       </button>
     ))}
   </div>
   <h4>Text Color: </h4>
   <h4>
     <span className="function" id="function" style={{ color: textColor}}>
         {textColor}
     </span>
   </h4>
     <div>
       {textColorButtons.map((color) => (
         <button
           key={color}
           className={`colorButton ${color}`}
           title={color}
           style={{
             backgroundColor: getColor(color),
             color: getColor(color),
           }}
           onClick={() => handleTextColorButtonClick(getColor(color))}
           onMouseOver={(e) => (e.target.style.color = 'black')} // Change text color on hover
           onMouseOut={(e) => (e.target.style.color = getColor(color))} // Restore text color on hover out
         >
         </button>
       ))}
     </div>
 </div>
    </div>
  );
};

export default Colors;
