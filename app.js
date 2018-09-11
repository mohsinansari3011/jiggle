function commit() {

    

    var pro = new Promise((resolve, reject) => {

        var imge = document.getElementById('img');

        var timer = 0;
        var timeinter = setInterval(() => {

            var rand = Math.ceil(Math.random() * 3);
            imge.src = "images/" + rand + ".png";

            
            imge.setAttribute('onClick', `randm('${rand}')`);
            

            //imge.setAttribute('imgdata', `randm(this)`);
               var data = document.getElementById('imgdata').value;
                // alert(data);
               if (data !== undefined && data.length > 0 ){
                    clearInterval(timeinter);
    
                    //var pr = +prompt(rand + " please insert a number 1 to 3");
                    if (data == rand) { alert("you won!!"); }
                    else { alert("you Loss!!"); }
    
                    window.location.reload();
               }
                

          
            
        }, 200)


        // setTimeout(()=> {
        //     console.log("this is arrow function");
        // },2000)

    });


    return pro;
}


function randm(El){
    document.getElementById('imgdata').value = El;
}

commit().then(function (obj) {
    console.log(obj);
}).catch(function (obj) {
    console.log(obj);
})



//commit().then(mesg=> console.log(' Message ', mesg)).catch(mesg=> console.error(' Message', mesg))




