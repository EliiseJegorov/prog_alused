let valik = prompt("Kas soovite istekohta valida ise või loosiga?");

if(valik === "ise"){
    console.log("Valisite ise");
    let koht = prompt("Kas soovite istuda akna ääres või mitte?");
    if(koht === "aken"){
        console.log("Aknakoht");
    } else {
        console.log("Vahekäigukoht");
    }
}
else{
    console.log("Istekoht loositi");
    let toenaosus = Math.trunc(Math.ceil(Math.random()*3));
    if(toenaosus === 1){
        console.log("Aknakoht");
    } else {
        console.log("Vahekäigukoht");
    }
}