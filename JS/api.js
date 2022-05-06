function api() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            var list = JSON.parse(this.responseText);
            console.log(list);

            var output = "";
            output += `<tr>`
            output += `<th>Tasks To Be Completed</th>`;
            output += `<th>STATUS</th>`;
            output += `<tr>`

            for (i = 0; i < list.length; i++)
             {
                
                if (list[i].completed == true)
                 {
                    output +=
                 
                `<tr> 
                <td>${list[i].title}</td>
                <td><input type="checkbox" checked class="Checkbox" disabled ></td>
                </tr>`;

                } 

                else

                 { output +=
                 
                `<tr> 
                <td>${list[i].title}</td>
                <td><input id="check" type="checkbox" class="Checkbox" ></td>
                 </tr>`; }

            }
           
            document.getElementById("tbody").innerHTML = output;

            var count = 0;
            
           $(function() {

                $("#tbody").on("change",
                    ":checkbox",
                    function() {

                        var tick = this.checked;
                        var promise = new Promise(function(resolve, reject) {
                            
                            if (tick === true) {    
                                count++;
                            }
                            if (count == 5) {
                                resolve();
                            }
                        });

                        promise.then(function() {     
                             alert("Congrats! 5 Tasks have been completed successfully!");
                        });


                    });
                // $("table").on("load", function() {
                //     $("#spin").hide();
                // });

            })
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}

