let exit = false;
let sumProducts = 0;
let menuPrincipal = "Seleccione una opcion\n";
menuPrincipal += "1. Agregar un producto\n";
menuPrincipal += "2. Realizar pago\n";
menuPrincipal += "3. Salir\n";

let menuProductos = "Seleccione un producto\n";
menuProductos += "1. Megamare 50 ml. -- 150 USD \n";
menuProductos += "2. Acqua di Gio 100 ml. -- 120 USD\n";
menuProductos += "3. Cedrat Boise 120 ml. -- 160 USD\n";
menuProductos += "4. Eros 100 ml. -- 125 USD\n";
menuProductos += "Digite cualquier tecla para regresar";

const discount = (total, porcentage)=>total - (porcentage*100)/total

do {
  let userPrincipalSelection = parseInt(prompt(menuPrincipal));
  console.log(userPrincipalSelection);

  switch (userPrincipalSelection) {
    case 1:
      let userProductSelection = parseInt(prompt(menuProductos));
      switch (userProductSelection) {
        case 1:
          sumProducts = sumProducts + 150;
          alert("Producto agregado")
          break;
        case 2:
          sumProducts = sumProducts + 120;
          alert("Producto agregado")
          break;
        case 3:
          sumProducts = sumProducts + 160;
          alert("Producto agregado")
          break;
        case 4:
          sumProducts = sumProducts + 125;
          alert("Producto agregado")
          break;
        default:
            break
      }
      break;
    case 2:
     let userBuySelection=  prompt("Total: " + sumProducts + "\n 1. Comprar\n 2. Ingresar cupon\n Digite cualquier tecla para regresar");
     if(userBuySelection == 1 ){
        alert("Gracias por su compra")
        exit = true
     }else if(userBuySelection == 2){
        prompt("Ingrese su cupon")
        sumProducts = discount(sumProducts, 20)
        alert("Descuento realizado")
     }
     break;

    case 3:
      exit = true;
      break;

    default:
      break;
  }
} while (exit != true);