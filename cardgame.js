<html>
    <head>
            <title>html rocks!!</title>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"> </script> 
    </head>
    <body>
        <h1>My card!</h1>
        <img src="opp.jpg" id="mycardimg">
        <br>
        <h1 id="myscore">0</h1>
        <hr>
        <h1>pc card!</h1>
        <img src="opp.jpg" id="pccardimg">
        <h1 id="PCscore">0</h1>
        <br>
        <h1 id="winner">who win???</h1>
        <button onclick="draw()">draw</button>

        <script>
            var myscore = 0
            var pcscore = 0
            var cards = ["2.png" , "3.png" , "4.png" , "5.png" , "6.png" , "7.png" , "8.png" , "9.png" , "J.png" , "Q.png" , "K.png" , "A.png"]
            function draw()
            {
                if(myscore < 5 && pcscore < 5)
                {
                var mycard = Math.floor(Math.random()*13)
                var pccard = Math.floor(Math.random()*13)
                $("#mycardimg").attr("src" , cards[mycard])
                $("#pccardimg").attr("src" , cards[pccard])
                if(mycard > pccard)
                {
                  myscore++
                }
               else
                 if(mycard < pccard)
                {
                    pcscore++
                }
                $('#myscore').text(myscore)
                $('#PCscore').text(pcscore)
                }
           

            }
        </script>
    </body>
</html>
