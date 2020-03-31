window.onload = function() {

    let canvas = document.querySelector('#layer-2');
    console.log(canvas);

}

let r = new Rune({
    container: "#layer-2",
    width: 500,
    height: 400
  });
  
  r.rect(0, 0, 200, 200).fill(0, 0, 255);
  
  r.draw();
