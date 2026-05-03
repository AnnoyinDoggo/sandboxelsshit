elements.heatsink = {
    color: "#0000ff",
    behavior: behaviors.WALL,
    tick: function(pixel) {
        if (pixel.temp < -258) {
            pixel.temp = -273;
        } else {
            pixel.temp -= 15;
        }
    },
    category: "machines",
    insulate: true,
    state: "solid"
};

addElement("heatsink", elements.heatsink);
