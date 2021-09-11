canvas = new fabric.Canvas("my_Canvas");

var block_image_width = 30;
var block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";
var block_image_object = "";

function player_update() 
{
  
  fabric.Image.fromURL("player.png", function (Img) {
    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
      top: player_y,
      left: player_x
    });
    canvas.add(player_object);
  });
  console.log("player_upate is working");
}

function new_image(get_image) {
  fabric.Image.fromURL(get_image, function (Img) {
    block_image_object = Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
      top: player_y,
      left: player_x
    });
    canvas.add(block_image_object);
  });
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
  keypressed = e.keyCode;
  console.log(keypressed);

  if (e.shiftKey == true && keypressed == "80") {
    console.log("Shift and p pressed togather");
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
  }

  if (e.shiftKey == true && keypressed == "77") {
    console.log("Shift and m pressed togather");
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
  }

  if (keypressed == "37") {
    left();
    console.log("left");
  }

  if (keypressed == "38") {
    up();
    console.log("up");
  }

  if (keypressed == "39") {
    right();
    console.log("right");
  }

  if (keypressed == "40") {
    down();
    console.log("down");
  }

  if (keypressed == "49") {
    new_image("trunk.jpg");
    console.log("trunk");
  }

  if (keypressed == "50") {
    new_image("dark_green.png");
    console.log("leaf");
  }

  if (keypressed == "51") {
    new_image("light_green.png");
    console.log("new_leaf");
  }

  if (keypressed == "52") {
    new_image("ground.png");
    console.log("dirt with grass");
  }

  if (keypressed == "53") {
    new_image("wall.jpg");
    console.log("brick");
  }

  if (keypressed == "54") {
    new_image("yellow_wall.png");
    console.log("yellow_brick");
  }

  if (keypressed == "55") {
    new_image("roof.jpg");
    console.log("roof");
  }

  if (keypressed == "56") {
    new_image("cloud.jpg");
    console.log("cloud");
  }

  if (keypressed == "57") {
    new_image("unique.png");
    console.log("glowstone");
  }
}

function up() {
  if (player_y > 0) {
    player_y = player_y - block_image_height;
    console.log("block image height = " + block_image_height);
    console.log("when the up arrow key is pressed x =" + player_x + "y = " + player_y);
    canvas.remove(player_object);
    player_update();
  }
}

function down() {
  if (player_y < 500) {
    player_y = player_y + block_image_height;
    console.log("block image height = " + block_image_height);
    console.log("when the down arrow key is pressed x =" + player_x + "y = " + player_y);
    canvas.remove(player_object);
    player_update();
  }
}

function left() {
  if (player_x > 0) {
    player_x = player_x - block_image_width;
    console.log("block image width = " + block_image_width);
    console.log("when the left arrow key is pressed x =" + player_x + "y = " + player_y);
    canvas.remove(player_object);
    player_update();
  }
}

function right() {
  if (player_x < 900) {
    player_x = player_x + block_image_width;
    console.log("block image width = " + block_image_width);
    console.log("when the right arrow key is pressed x =" + player_x + "y = " + player_y);
    canvas.remove(player_object);
    player_update();
  }
}