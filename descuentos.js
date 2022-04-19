// const precioOriginal = 100;
// const descuentos = 15;

function calcularPrecio(precio, descuento){
  const porcentajeDescuento = 100 - descuento;
  const precioDescuento = (precio * porcentajeDescuento) / 100;
  return precioDescuento;
}

function btnPrice(){
  const inputPrice = document.getElementById("InputPrice");
  const valuePrice = parseInt(inputPrice.value);
  const inputDiscount = document.getElementById("InputDiscount");
  const valueDiscount = parseInt(inputDiscount.value);

  const precioConDescuento = calcularPrecio(valuePrice, valueDiscount)

  const textPrice = document.getElementById("textPrice");
  textPrice.innerText = "El precio es: $" + precioConDescuento;
}


const coupons = [
    "CAM_uno",
    "CAM_dos",
    "CAM_tres",
];

function btnPriceCupon1() {
  const inputPriceCupon1 = document.getElementById("InputPriceCupon1");
  const priceValue = inputPriceCupon1.value;

  const inputCupon1 = document.getElementById("InputCupon1");
  const couponValue = inputCupon1.value;

  let descuento;

  switch(couponValue) {
    case coupons[0]: // "CAM_uno"
      descuento = 15;
    break;
    case coupons[1]: // "CAM_dos"
      descuento = 30;
    break;
    case coupons[2]: // "CAM_tres"
      descuento = 50;
    break;
  }


  const precioConDescuento = calcularPrecio(priceValue, descuento);

  const resultP = document.getElementById("textPriceCupon1");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

function btnPriceCupon2() {
  const inputPriceCupon2 = document.getElementById("InputPriceCupon2");
  const priceValue = inputPriceCupon2.value;

  const inputCupon2 = document.getElementById("InputCupon2");
  const couponValue = inputCupon2.value;

  let descuento;

  if (!coupons.includes(couponValue)) {
   alert("El cupón " + couponValue + " no es válido");
    } else if (couponValue === "CAM_uno") {
      descuento = 15;
    } else if (couponValue === "CAM_dos") {
      descuento = 30;
    } else if (couponValue === "CAM_tres") {
      descuento = 50;
    }


  const precioConDescuento = calcularPrecio(priceValue, descuento);

  const resultP = document.getElementById("textPriceCupon2");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}


const coupons2 = [
    {
        name: "CAM_uno",
        discount: 15,
    },
    {
        name: "CAM_dos",
        discount: 30,
    },
    {
        name: "CAM_tres",
        discount: 25,
    },
];

function btnPriceCupon3(){
  const inputPriceCupon3 = document.getElementById("InputPriceCupon3");
  const priceValue = inputPriceCupon3.value;

  const inputCupon3 = document.getElementById("InputCupon3");
  const couponValue = inputCupon3.value;


  const isCouponValueValid = function (coupon) {
      return coupon.name === couponValue;
  };

  const userCoupon = coupons2.find(isCouponValueValid);

  if (!userCoupon) {
      alert("El cupón " + couponValue + " no es válido");
  } else {
      const descuento = userCoupon.discount;
      const precioConDescuento = calcularPrecio(priceValue, descuento);

      const resultP = document.getElementById("textPriceCupon3");
      resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
}


