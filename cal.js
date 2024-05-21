            let form = document.getElementById("form")
            let outputscreen = document.getElementById('output-screen');
            function display(num) {
                outputscreen.value += num;
            }
            
                form.addEventListener("submit", function (e) {
                    e.preventDefault();
                    calculator();
                })

            function calculator() {
                try {
                    outputscreen.value = eval(outputscreen.value);
                }
                catch (error) {
                    alert('ERROR')
                }
            }

            function wipeOut() {
                outputscreen.value = "";
            }
            function del() {
                outputscreen.value = outputscreen.value.slice(0, -1);
            }

