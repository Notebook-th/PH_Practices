console.log('external file')

 function makeYellow(){
            document.body.style.backgroundColor = 'yellow'
        }
        function makeWhite(){
            document.body.style.backgroundColor = 'blue'
        }
        function makeRed(){
            document.body.style.backgroundColor = 'Red'
        }

        const btnMakeViolate = document.getElementById('btn-make-violate')
        // console.log(btnMakeViolate)
        btnMakeViolate.onmouseover = function makeblue(){
            document.body.style.backgroundColor = 'gold'
        }

        const btnMakePurple = document.getElementById ('btn-make-purple')
        btnMakePurple.onclick = makepurple;
            function makepurple(){
            document.body.style.backgroundColor = 'purple'
            }

            document.getElementById('btn-make-green').addEventListener('click', function (){
            document.body.style.backgroundColor = 'green'
            })
