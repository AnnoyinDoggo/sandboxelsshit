elements.heatsink = {
    color: "#0000ff",
    behavior: behaviors.WALL,
    tick: function(pixel) {
        pixel.temp = -273; 
    },
    category: "machines",
    insulate: true,
    state: "solid"
};

addElement("heatsink", elements.heatsink);
