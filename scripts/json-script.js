'use strict';

 // Make a new XMLHttpRequest object
 const req = new XMLHttpRequest();

 // Set the request parameters
 req.open("GET", "copyright.json");
 req.responseType = "json";
 
 req.addEventListener("readystatechange", () => {
   if (req.readyState === XMLHttpRequest.DONE) {
     switch (req.status) {
       case 200:
         // const ul = document.getElementById("list");
         const hhh = document.getElementById("hhh");
 
         for (let copyright of req.response) {
           hhh.innerHTML = `${copyright.content}`;
         }
         break;
       case 404:
         console.error("Not found");
     }
   }
 });
 
 req.send(); 
