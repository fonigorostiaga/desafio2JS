// la idea es poder elegir los articulos a comprar, ir viendo el precio parcial, que el sistema sume el precio Final, poder aplicar un cupon de descuento y elegir un medio de pago.

let nombreUsuario=prompt("Bienvenido, por favor ingresa tu nombre o apodo");
while(nombreUsuario==""){
    nombreUsuario=prompt("No ingresaste ningun nombre, nos gustaria poder llamarte como quieras, por favor ingresa tu nombre");
}
alert(`Hola ${nombreUsuario}, a continuacion veras el catalogo de productos disponibles, podes elegir hasta 10, en caso que desees mas de 10 articulos deberas hacer 2 compras.`);
let valorparcial=0
let valorfinal=0


function cupondescuento(valor){
    let tienecupon=prompt("Tiene cupon de descuento? Si/No")
    if(tienecupon=="si"||tienecupon=="Si"||tienecupon=="SI"){
        cuponvalidado=prompt("Ingrese su cupon de descuento");
        if(cuponvalidado!=""){
        valor=valorfinal*0.9
        alert("Presentaste un cupon valido por un descuento del 10%. El valor final de tu compra es de $" + valor);
    }else{
            alert("No Ingresaste un cupon valido");
        }}else{
        alert("Gracias por tu compra, el precio final es de $"+valor)
        }
}
for(i=0;i<10;i++){
    let articuloSeleccionado=prompt("Selecciona tu articulo: \n1-Remera Lisa: $1500\n2-Remera con estampa: $1900\n3-Jean Slim Fit: $4000\n4-Pantalon Gabardina: $4500\n5-Buzo Canguro: $4800\n6-Buzo Camperita: $5200\n7-Parca: $8700\n8-Borcegos: $12500\n9- Finalizar Compra\n0-Cancelar");
    if(i==9){
        valorfinal=valorparcial
        alert("Muchas gracias por tu compra, el valor de la misma es de $"+valorfinal);
        cupondescuento(valorfinal)
        break;
    
    }else if((articuloSeleccionado!=9)&&(articuloSeleccionado!=0)){
    switch(articuloSeleccionado){
        case"1": valorparcial=valorparcial+1500;
        alert("Seleccionaste Remera Lisa: $1500\nSubtotal de tu compra es: $"+valorparcial);
        break;
        case"2":valorparcial=valorparcial+1900;
        alert("Seleccionaste Remera con estampa: $1900\nSubtotal de tu compra es: $"+valorparcial);
        break;
        case"3":valorparcial=valorparcial+4000;
        alert("Seleccionaste Jean Slim Fit: $4000\nSubtotal de tu compra es: $"+valorparcial);
        break;
        case"4":valorparcial=valorparcial+4500;
        alert("Seleccionaste Pantalon Gabardina: $4500\nSubtotal de tu compra es: $"+valorparcial);
        break;
        case"5":valorparcial=valorparcial+4800;
        alert("Seleccionaste Buzo Canguro: $4800\nSubtotal de tu compra es: $"+valorparcial);
        break;
        case"6":valorparcial=valorparcial+5200;
        alert("Seleccionaste Buzo Camperita: $5200\nSubtotal de tu compra es: $"+valorparcial);
        break;
        case"7":valorparcial=valorparcial+8700;
        alert("Seleccionaste Parca: $8700\nSubtotal de tu compra es: $"+valorparcial);
        break;
        case"8":valorparcial=valorparcial+12500;
        alert("Seleccionaste Borcegos: $12500\nSubtotal de tu compra es: $"+valorparcial);
        break;
        default:
            alert("Por favor selecciona una opcion valida (0-9)\nEl subtotal de tu compra es de $"+valorparcial)
    }}else if(articuloSeleccionado==9){
        valorfinal=valorparcial;
        alert("El valor final de tu compra es $"+valorfinal);
        cupondescuento(valorfinal)
        break;
    }else if(articuloSeleccionado==0){
        alert("Muchas Gracias, Vuelva prontos");
        break;}
    }
