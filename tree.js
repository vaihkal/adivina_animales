var animales = [
                    {question:"Es ovíparo?", answer:""},
                    {question:"Es grande?", answer:""},
                    {question:"Es de casa?", answer:""},
                    {question:"Aulla?", answer:""},
                    {question:"Es roedor?", answer:""},
                    {question:"", answer:"Armadillo", url:"http://images.clipartpanda.com/armadillo-20clip-20art-14402-armadillo-design.png"},
                    {question:"Salta?", answer:""},
                    {question:"Vive en árboles?", answer:""},
                    {question:"", answer:"Ratón", url:"http://www.adisney.com/personajes/ratatouille/img/remi2.gif"},
                    {question:"", answer:"Ardilla", url:"https://www.misskatecuttables.com/uploads/shopping_cart/8305/large_fall-squirrel.png"},
                    {question:"", answer:"Conejo/Liebre", url:"http://www.clipartlord.com/wp-content/uploads/2013/11/bunny10.png"},
                    {question:"", answer:"Lobo/Coyote", url:"http://img2.wikia.nocookie.net/__cb20130308224914/thelegend-of-zelda-fanon/es/images/3/3c/Lobo_Feroz.png"},
                    {question:"Ladra?", answer:""},
                    {question:"", answer:"Gato", url:"http://catswallpaperhd.us/wp-content/uploads/2014/05/cute-cat-and-dog-clipart-png-wqugtbtb.png"},
                    {question:"", answer:"Perro", url:"http://www.tenvinilo.com/img/vinilo/png/vinilo%20infantil%20perro%20comic.png"},
                    {question:"Vive en las selvas de África?", answer:""},
                    {question:"Es acuático?", answer:""},
                    {question:"", answer:"Asno/Caballo", url:"http://www.waece.org/sabemos/imagenesanimales/ima_caballo.gif"},
                    {question:"Es color blanco y negro?", answer:""},
                    {question:"", answer:"Ballena", url:"http://3.bp.blogspot.com/_MB6RIZ5mRDQ/ScE2r-MMO8I/AAAAAAAAABw/3XI6u_HMVvc/s320/ballena.gif"},
                    {question:"", answer:"Orca", url:"http://home.comcast.net/~macbrides//pwpimages/.__100_100_orca1(1).png"},
                    {question:"Tiene melena?", answer:""},
                    {question:"Tiene trompa larga?", answer:""},
                    {question:"", answer:"Jirafa", url:"http://www.jungleworld.es/subido/animales/jirafa.png"},
                    {question:"", answer:"Elefante", url:"http://content.mycutegraphics.com/graphics/animal/cute-elephant.png"},
                    {question:"", answer:"León", url:"http://www.clipartlord.com/wp-content/uploads/2013/06/lion5.png"},
                    {question:"Vuela?", answer:""},
                    {question:"Es de granja?", answer:""},
                    {question:"Tiene aletas?", answer:""},
                    {question:"Se arrastra?", answer:""},
                    {question:"Salta?", answer:""},
                    {question:"", answer:"Salamandra", url:"http://www.colorearya.com/upload/2012/11/24/20121124214208-8192a6fd.gif"},
                    {question:"", answer:"Rana", url:"http://contarcuentos.com/wp-content/uploads/2011/08/rana3.gif"},
                    {question:"Tiene patas?", answer:""},
                    {question:"", answer:"Serpiente", url:"http://www.auburn.edu/~mes0022/snake.gif"},
                    {question:"Tiene Caparazón?", answer:""},
                    {question:"", answer:"Cocodrilo/Lagarto", url:"http://www.gifsanimados.org/data/media/210/cocodrilo-imagen-animada-0030.gif"},
                    {question:"", answer:"Tortuga", url:"http://upload.wikimedia.org/wikipedia/en/a/af/Turtle-logo.png"},
                    {question:"Tiene huesos?", answer:""},
                    {question:"", answer:"Tiburon", url:"http://www.clipartlord.com/wp-content/uploads/2014/02/shark8.png"},
                    {question:"Tiene Caparazón?", answer:""},
                    {question:"", answer:"Pez (cualquiera)", url:"http://img1.wikia.nocookie.net/__cb20110311073119/humongous/images/f/fa/Freddi_Fish_2.png"},
                    {question:"", answer:"Tortuga de mar", url:"http://www.juegosdedeletrear.com/data/images/tortuga-marina,-tortuga-de-mar,-reptil-acu%C3%A1tico_5179681170393-thumb.jpg"},
                    {question:"", answer:"Gallina/Pollo", url:"http://champyschicken.com/wp-content/themes/Custom-Champys/images/Champys-Chicken-FullBody.png"},
                    {question:"Tiene Garras?", answer:""},
                    {question:"", answer:"Ave (cualquiera)", url:"http://i53.tinypic.com/b49tzl.jpg"},
                    {question:"", answer:"Águila", url:"http://www.footstep.org/images/Eagle.gif"},
                ];
var i=0;
localStorage['animales'] = JSON.stringify(animales);


        function arbol(valor){
            var lm = 0;
            var cad1 = "";
            var cad2 = "";
            var nodos = {pregunta:cad1, respuesta:cad2, no:null, si:null, url:""};
            var k = [];

            if(animales[i]['question']!=""){
                nodos['pregunta'] = animales[i]['question'];
                lm=1;
            }
            else{
                nodos['respuesta'] = animales[i]['answer'];
                nodos['url'] = animales[i]['url'];
            }

            i=i+1;

            if(lm==1){
                nodos['no'] = arbol(0);
                nodos['si'] = arbol(0);
            }

            return nodos;
        }

        var jugada = arbol(0);
        var adivinado;

        function jugar(valor){
            if(valor==0){
                jugada = jugada['no'];
            }
            else jugada = jugada['si'];

            if(jugada['pregunta']!="") $('#pregunta-text').html(jugada['pregunta']);
            else{
                adivinado = jugada['respuesta'];
                $('#pregunta-text').html('El animal en que pensaste es ' + adivinado);
                $('#animal').html('<img src="' + jugada['url'] + '" />');
                document.getElementById('no').setAttribute( "onClick", "agregar();" );
                document.getElementById('si').setAttribute( "onClick", "again();" );
            }
        }

        function again(){
            i=0;
            jugada = arbol(0);
            console.log(jugada);
            console.log(i);
            $('#pregunta-text').html(jugada['pregunta']);
                document.getElementById('si').innerHTML = 'SI';
                document.getElementById("no").disabled = false;
                document.getElementById('no').setAttribute( "onClick", "jugar(0);" );
                document.getElementById('si').setAttribute( "onClick", "jugar(1);" );
                $('#animal').html('');
        }

    var otra = [];
        function noEs(){
            var u = 0;
            for (var k = 0; k < animales.length; k++) {
                if(animales[k]['answer'] == adivinado){
                    u=k;
                    break;
                }
            };
            animales.splice(u,1,{question:otra['question'], answer:""},animales[u]);
            animales.splice(u+2,1,{question:"", answer:otra['answer'], url:otra['url']},animales[u+2]);
            localStorage['animales'] = JSON.stringify(animales);
            i=0;
            jugada = arbol(0);
            console.log(jugada);
            console.log(i);
            $('#pregunta-text').html(jugada['pregunta']);
                document.getElementById('si').innerHTML = 'SI';
                document.getElementById("no").disabled = false;
                document.getElementById('no').setAttribute( "onClick", "jugar(0);" );
                document.getElementById('si').setAttribute( "onClick", "jugar(1);" );
                $('#animal').html('');
        }

        function agregar(){
            $('#pregunta-text').html('¿Qué lo hace diferente?');
            $('#animal').html('<p><input type="text" id="otro" /></p>');
            document.getElementById("no").disabled = true;
            document.getElementById('si').innerHTML = 'Guardar';
            document.getElementById('si').setAttribute( "onClick", "guardar();" );

        }

        function guardar(){
            $('#pregunta-text').html('¿Qué animal es?');
            otra['question'] = document.getElementById('otro').value + '?';
            var an = $('#animal').html()
            $('#animal').html( an + '<p><input type="text" id="url" placeholder="Especifica una url de imagen" /></p>');
            document.getElementById('si').setAttribute( "onClick", "guardara();" );
        }

        function guardara(){
            otra['answer'] = document.getElementById('otro').value;
            otra['url'] = document.getElementById('url').value;
            $('#animal').html('');
            noEs();
        }