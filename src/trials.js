const possibleChoice = document.querySelectorAll('.color-button');
const input = document.getElementById('function');

let answer;

function getColor() {
    if (answer === "IndianRed") {
        return"indianred";
    } else if (answer === "LightCoral") {
        return"lightcoral";
    } else if (answer === "Salmon") {
        return"salmon";
    } else if (answer === "DarkSalmon") {
        return"darksalmon";
    } else if (answer === "LightSalmon") {
        return"lightsalmon";
    } else if (answer === "Red") {
        return"red";
    } else if (answer === "Crimson") {
        return"crimson";
    } else if (answer === "FireBrick") {
        return"firebrick";
    } else if (answer === "DarkRed") {
        return"darkred";
    } else if (answer === "Coral") {
        return"coral";
    } else if (answer === "Tomato") {
        return"tomato";
    } else if (answer === "OrangeRed") {
        return"orangered";
    } else if (answer === "DarkOrange") {
        return"darkorange";
    } else if (answer === "Orange") {
        return"orange";
    } else if (answer === "Gold") {
        return"gold";
    } else if (answer === "Yellow") {
        return"yellow";
    } else if (answer === "LightYellow") {
        return "lightyellow";
    } else if (answer === "LemonChiffon") {
        return "lemonchiffon";
    } else if (answer === "LightGoldenrodYellow") {
        return "lightgoldenrodyellow";
    } else if (answer === "PapayaWhip") {
        return "papayawhip";
    } else if (answer === "Moccasin") {
        return "moccasin";
    } else if (answer === "PeachPuff") {
        return "peachpuff";
    } else if (answer === "PaleGoldenrod") {
        return "palegoldenrod";
    } else if (answer === "Khaki") {
        return "khaki";
    } else if (answer === "DarkKhaki") {
        return "darkkhaki";
    } else if (answer === "GreenYellow") {
        return "greenyellow";
    } else if (answer === "Chartreuse") {
        return "chartreuse";
    } else if (answer === "LawnGreen") {
        return "lawngreen";
    } else if (answer === "Lime") {
        return "lime";
    } else if (answer === "LimeGreen") {
        return "limegreen";
    } else if (answer === "PaleGreen") {
        return "palegreen";
    } else if (answer === "LightGreen") {
        return "lightgreen";
    } else if (answer === "MediumSpringGreen") {
        return "mediumspringgreen";
    } else if (answer === "SpringGreen") {
        return "springgreen";
    } else if (answer === "MediumSeaGreen") {
        return "mediumseagreen";
    } else if (answer === "SeaGreen") {
        return "seagreen";
    } else if (answer === "ForestGreen") {
        return "forestgreen";
    } else if (answer === "Green") {
        return "green";
    } else if (answer === "DarkGreen") {
        return "darkgreen";
    } else if (answer === "YellowGreen") {
        return "yellowgreen";
    } else if (answer === "OliveDrab") {
        return "olivedrab";
    } else if (answer === "Olive") {
        return"olive";
    } else if (answer === "DarkOliveGreen") {
        return"darkolivegreen";
    } else if (answer === "MediumAquamarine") {
        return"mediumaquamarine";
    } else if (answer === "DarkSeaGreen") {
        return"darkseagreen";
    } else if (answer === "LightSeaGreen") {
        return"lightseagreen";
    } else if (answer === "DarkCyan") {
        return"darkcyan";
    } else if (answer === "Teal") {
        return"teal";
    } else if (answer === "Aqua") {
        return"aqua";
    } else if (answer === "Cyan") {
        return"cyan";
    } else if (answer === "LightCyan") {
        return"lightcyan";
    } else if (answer === "PaleTurquoise") {
        return"paleturquoise";
    } else if (answer === "Aquamarine") {
        return "aquamarine";
    } else if (answer === "Turquoise") {
        return "turquoise";
    } else if (answer === "MediumTurquoise") {
        return "mediumturquoise";
    } else if (answer === "DarkTurquoise") {
        return "darkturquoise";
    } else if (answer === "CadetBlue") {
        return "cadetblue";
    } else if (answer === "SteelBlue") {
        return "steelblue";
    } else if (answer === "LightSteelBlue") {
        return "lightsteelblue";
    } else if (answer === "PowderBlue") {
        return "powderblue";
    } else if (answer === "LightBlue") {
        return "lightblue";
    } else if (answer === "SkyBlue") {
        return "skyblue";
    } else if (answer === "LightSkyBlue") {
        return "lightskyblue";
    } else if (answer === "DeepSkyBlue") {
        return "deepskyblue";
    } else if (answer === "DodgerBlue") {
        return "dodgerblue";
    } else if (answer === "CornflowerBlue") {
        return "cornflowerblue";
    } else if (answer === "RoyalBlue") {
        return "royalblue";
    } else if (answer === "Blue") {
        return "blue";
    } else if (answer === "MediumBlue") {
        return "mediumblue";
    } else if (answer === "DarkBlue") {
        return "darkblue";
    } else if (answer === "Navy") {
        return "navy";
    } else if (answer === "MidnightBlue") {
        return "midnightblue";
    } else if (answer === "Lavender") {
        return "lavender";
    } else if (answer === "Thistle") {
        return "thistle";
    } else if (answer === "Plum") {
        return "plum";
    } else if (answer === "Violet") {
        return "violet";
    } else if (answer === "Orchid") {
        return "orchid";
    } else if (answer === "MediumOrchid") {
        return "mediumorchid";
    } else if (answer === "DarkOrchid") {
        return "darkorchid";
    } else if (answer === "DarkViolet") {
        return "darkviolet";
    } else if (answer === "BlueViolet") {
        return "blueviolet";
    } else if (answer === "MediumPurple") {
        return "mediumpurple";
    } else if (answer === "MediumSlateBlue") {
        return "mediumslateblue";
    } else if (answer === "SlateBlue") {
        return "slateblue";
    } else if (answer === "DarkSlateBlue") {
        return "darkslateblue";
    } else if (answer === "RebeccaPurple") {
        return "rebeccapurple";
    } else if (answer === "Indigo") {
        return "indigo";
    } else if (answer === "White") {
        return "white";
    } else if (answer === "Snow") {
        return "snow";
    } else if (answer === "Honeydew") {
        return "honeydew";
    } else if (answer === "MintCream") {
        return "mintcream";
    } else if (answer === "Azure") {
        return "azure";
    } else if (answer === "AliceBlue") {
        return "aliceblue";
    } else if (answer === "GhostWhite") {
        return "ghostwhite";
    } else if (answer === "WhiteSmoke") {
        return "whitesmoke";
    } else if (answer === "Seashell") {
        return "seashell";
    } else if (answer === "Beige") {
        return "beige";
    } else if (answer === "OldLace") {
        return "oldlace";
    } else if (answer === "FloralWhite") {
        return "floralwhite";
    } else if (answer === "Ivory") {
        return "ivory";
    } else if (answer === "AntiqueWhite") {
        return "antiquewhite";
    } else if (answer === "Linen") {
        return "linen";
    } else if (answer === "LavenderBlush") {
        return "lavenderblush";
    } else if (answer === "MistyRose") {
        return "mistyrose";
    } else if (answer === "Gainsboro") {
        return "gainsboro";
    } else if (answer === "LightGray") {
        return "lightgray";
    } else if (answer === "Silver") {
        return "silver";
    } else if (answer === "DarkGray") {
        return "darkgray";
    } else if (answer === "Gray") {
        return "gray";
    } else if (answer === "DimGray") {
        return "dimgray";
    } else if (answer === "LightSlateGray") {
        return "lightslategrey";
    } else if (answer === "SlateGray") {
        return "slategrey";
    } else if (answer === "DarkSlateGray") {
        return "darkslategrey";
    } else if (answer === "Black") {
        return "black";
    } else if (answer === "Practice") {
        return "#43B";
    }


}

for (let i = 0; i < possibleChoice.length; i++) {
    possibleChoice[i].onclick = function () {
        answer = possibleChoice[i].getAttribute("title");
        input.innerHTML = answer;
        const color = getColor();
        document.getElementById('function').style.color = color;
    }
}
