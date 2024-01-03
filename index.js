function acc()
       {
239         let phi= prompt("What is your name?");
240         let phill= prompt("What do you want to order?");
241         let philll= prompt("Please enter your address");
242         let philly= prompt("Please enter payment option");
243         if(phill === "spaghetti" || phill === "indomine" || phill === "coffee" )
244         {
245           let button = document.querySelector("button");
246           button.innerHTML ="🤗🤗🤗<br />Thank you  " + phi + ". You ordered for " + phill + ". your meal will be delivered to " +  philll + " shortly.";
247         }
248         else
249         {
250           let button= document.querySelector("button");
251           button.innerHTML ="😥<br />Sorry " + phi + ". We cannot proccess your order to " + philll + ".Please try again later.";
252         }
253       }
254         let accbut = document.querySelector("button");
255          accbut.addEventListener("click", acc);
