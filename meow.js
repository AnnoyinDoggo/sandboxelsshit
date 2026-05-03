elements.invincible_cooler = {
    color: "#a0e0ff",
    behavior: behaviors.WALL,
    category: "solids",
    temp: 20,
    insulate: true,
    hardness: 1,
    tick: function(pixel) {
        pixel.temp = 20; 
    }
};
