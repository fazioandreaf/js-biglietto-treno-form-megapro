var generaBTN = document.getElementById('genera');
var annullaBTN = document.getElementById('annulla');
var costo = 0.21;
var costoTotale=0;
var costoScontato = 0.15
generaBTN.addEventListener('click',function(){
    var nome = document.getElementById('nome').value;
    var distanza = parseInt(document.getElementById('distanza').value);
    var eta = document.getElementById('eta').value;
    document.getElementById('nomepasseggero').innerHTML = nome;
    console.log(nome,distanza,eta)
    if (nome !== 0 && distanza>0 && eta!==''){
        costoTotale = costo *distanza;
        if (eta==1){
            document.getElementById('offerta').innerHTML= 'Offerta Minorenne'
        }else if(eta==2){
            document.getElementById('offerta').innerHTML= 'Offerta Anziani'
        }else if(eta==0){
            document.getElementById('offerta').innerHTML= ''
        }
        numerocarrozza=Math.floor(Math.random()*20)
        document.getElementById('numerocarrozza').innerHTML= numerocarrozza;
        if (eta==1 || eta==2){
            costoTotale = costoScontato *distanza;
        } else {
            console.log('Maggiorenne')
        }
        document.getElementById('costoTot').innerHTML = costoTotale;
        cp = Math.floor(Math.random()*100000);
        document.getElementById('cp').innerHTML= cp;
    }
});
annullaBTN.addEventListener('click',function(){
    var name = document.getElementById('name')
});
