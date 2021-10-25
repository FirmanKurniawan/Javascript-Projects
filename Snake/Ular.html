<!DOCTYPE html>
<html>
    <head>
 
        //menghubungkan html dengan jquery
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <title>Membuat Game Snake Dengan HTML5 dan JQuery</title>    
 
    </head>
 
    <body>
 
 
        <canvas id="ruang" width="500" height="500"></canvas>
 
 
        <script type="text/javascript">
            $(document).ready(function() {
 
              // deklarasi
              var ruang = $("#ruang")[0];
              var ctx = ruang.getContext("2d");
              var lebar = $("#ruang").width();
              var tinggi = $("#ruang").height();
 
              var cw = 10;
              var tekan ;
              var makanan;
              var nilai;
 
              //membuat cell aray untuk membuat ular
              var array_ular; 
 
              function init() {
                tekan = "right"; //default direction
                create_snake();
                create_makanan(); //membuat makanan untuk ular
                //nilai game
                nilai = 0;
 
                if (typeof game_loop != "undefined") clearInterval(game_loop);
                game_loop = setInterval(paint, 60);
            }
 
            init();
 
              // membuat ular
              function create_snake() {
                // menetapkan jumlah panjang awal ular
                var length = 5; //panjang ular default
                array_ular = [];
                for (var i = length - 1; i >= 0; i--) {
                  //membuat ular horizontal mulai dari arah kiri
                  array_ular.push({ x: i, y: 0 });
              }
            }
 
              //membuat makanan untuk ular
              function create_makanan() {
                makanan = {
                  x: Math.round(Math.random() * (lebar - cw) / cw),
                  y: Math.round(Math.random() * (tinggi - cw) / cw)
              };
            }
 
              //pengaturan
              function paint() {
                // warna background
                ctx.fillStyle = "#ecf0f1";
                ctx.fillRect(0, 0, lebar, tinggi);    
                ctx.strokeStyle = "#2c3e50";
                ctx.strokeRect(0, 0, lebar, tinggi);
 
                //membuat pergerakan untuk ular
                var nx = array_ular[0].x;
                var ny = array_ular[0].y;
                if (tekan == "right") nx++;
                else if (tekan == "left") nx--;
                else if (tekan == "up") ny--;
                else if (tekan == "down") ny++;
 
                //memeriksa tabrakan
                if (
                  nx == -1 ||
                  nx == lebar / cw ||
                  ny == -1 ||
                  ny == tinggi / cw ||
                  cek_tabrakan(nx, ny, array_ular)
                  ){
 
                //restart game
            init();
            return;
            }
 
                //cek jika ular kena makanan/memakan makanan
                if(nx == makanan.x && ny == makanan.y){
 
                  var ekor = { x: nx, y: ny };
                  nilai++;
                  
                  //membuat makanan yang baru
                  create_makanan();
                  
              } else {
                  var ekor = array_ular.pop();
                  ekor.x = nx;
                  ekor.y = ny;
              }
 
              array_ular.unshift(ekor);
 
              for (var i = 0; i < array_ular.length; i++) {
                  var c = array_ular[i];
                  paint_cell(c.x, c.y);
              }
 
              paint_cell(makanan.x, makanan.y);    
 
                //membuat penilaian skor
                var nilai_text = "nilai: " + nilai;
                ctx.fillText(nilai_text, 5, tinggi - 5);
            }
 
            function paint_cell(x, y) {
                ctx.fillStyle = "#1abc9c";
                ctx.fillRect(x * cw, y * cw, cw, cw);
                ctx.strokeStyle = "#ecf0f1";
                ctx.strokeRect(x * cw, y * cw, cw, cw);
            }
 
            function cek_tabrakan(x, y, array) {
                for (var i = 0; i < array.length; i++) {
                  if (array[i].x == x && array[i].y == y) return true;
              }
              return false;
            }
 
              //kontrol ular dengan keyboard
              $(document).keydown(function(e) {
                var key = e.which;
                if (key == "37" && tekan != "right") tekan = "left";
                else if (key == "38" && tekan != "down") tekan = "up";
                else if (key == "39" && tekan != "left") tekan = "right";
                else if (key == "40" && tekan != "up") tekan = "down";
            });
            });
 
            </script>
 
 
        </body>
</html>
