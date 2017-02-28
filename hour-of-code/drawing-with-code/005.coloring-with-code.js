//drawing is done in order, so backround needs to go first
background(115, 117, 117); // RGB
noStroke();

// face
fill(179, 179, 179);
ellipse(202, 208, 300, 300);

// eyes
fill(0, 0, 0);
ellipse(157, 151, 40, 40);
ellipse(304, 142, 40, 40);

// mouth
fill(255, 255, 255);
ellipse(257, 240, 120, 136);

// headband
strokeWeight(33);
stroke(79, 77, 79);
line(83, 116, 271, 74);
