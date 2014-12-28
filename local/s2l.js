var a = 0;
//现在是空的 XD,local部分就交给了,bb君
function newLevel() {
    //ModPE.showTipMessage("Try To Connect The Server");
    address = Server.getAddress();
    ModPE.showTipMessage("Try To Connect The Server\n" + address);
    
}	

function modTick() {
    a++
    if(a>=20) {
        a=0;
        address = Server.getAddress();
        ModPE.showTipMessage("Try To Connect The Server : " + address);
    }
}
 