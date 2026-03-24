const ProductButton1 = document.getElementById("ProductPop1");
const ProductButton2 = document.getElementById("ProductPop2");
const ProductButton3 = document.getElementById("ProductPop3");
const ProductButton4 = document.getElementById("ProductPop4");
const ProductButton5 = document.getElementById("ProductSerum1");
const ProductButton6 = document.getElementById("ProductSerum2");
const ProductButton7 = document.getElementById("ProductSerum3");
const ProductButton8 = document.getElementById("ProductSerum4");

const ProductSelectedTextCheck = document.getElementById("ProductSelectedTextCheck");

let CurrentProductSelected = null;

const productList = [
  {
    ProductID: "ProductPop1",
    ProductName: "Skinly Facial",
    ProductPrice: "320.00",
    ProductCategory: "Facial",
  },
  {
    ProductID: "ProductPop2",
    ProductName: "Skinly Toner",
    ProductPrice: "250.00",
    ProductCategory: "Toner",
  },
  {
    ProductID: "ProductPop3",
    ProductName: "Skinly Serum",
    ProductPrice: "220.00",
    ProductCategory: "Serum",
  },
  {
    ProductID: "ProductPop4",
    ProductName: "Skinly cleanse",
    ProductPrice: "230.00",
    ProductCategory: "cleanse",
  },
  {
    ProductID: "ProductSerum1",
    ProductName: "Skinly Cream",
    ProductPrice: "350.00",
    ProductCategory: "Cream",
  },
  {
    ProductID: "ProductSerum2",
    ProductName: "Skinly Bright",
    ProductPrice: "299.00",
    ProductCategory: "Brightener",
  }
];

const ProductBuyLists = [
  {
    ProductSelected1: "Hydrating Face Mist",
    ProductPrice: "15.99",
    ProductImage: "../ImagesofPopularProduct/ProductFacial1.png",
  },
  {
    ProductSelected2: "Glowing Skin Toner",
    ProductPrice: "24.99",
    ProductImage: "../ImagesofPopularProduct/ProductToner2.png",
  },
  {
    ProductSelected3: "Revitalizing Serum",
    ProductPrice: "39.99",
    ProductImage: "../ImagesofPopularProduct/ProductSerum3.png",
  },
  {
    ProductSelected4: "Nourishing Moisturizer",
    ProductPrice: "29.99",
    ProductImage: "../ImagesofPopularProduct/ProductCleanser4.png",
  },
  {
    ProductSelected5: "Anti-Aging Serum",
    ProductPrice: "49.99",
    ProductImage:
      "https://cdn.shopify.com/s/files/1/0267/4328/1539/products/AntiAgingSerum_1024x1024.jpg?v=1679654416",
  },
  {
    ProductSelected6: "Brightening Serum",
    ProductPrice: "39.99",
    ProductImage:
      "https://cdn.shopify.com/s/files/1/0267/4328/1539/products/BrighteningSerum_1024x1024.jpg?v=1679654416",
  },
  {
    ProductSelected7: "Hydrating Serum",
    ProductPrice: "34.99",
    ProductImage:
      "https://cdn.shopify.com/s/files/1/0267/4328/1539/products/HydratingSerum_1024x1024.jpg?v=1679654416",
  },
  {
    ProductSelected8: "Soothing Serum",
    ProductPrice: "34.99",
    ProductImage:
      "https://cdn.shopify.com/s/files/1/0267/4328/1539/products/SoothingSerum_1024x1024.jpg?v=1679654416",
  },
];


const MainCoverALL = document.getElementById("MainCoverALL");
const ProductNamePreview = document.getElementById("MainProductOverviewName");
const ProductPricePreview = document.getElementById("MainProductOverviewPrice");
const CategoryType = document.getElementById("CategoryType");
const ProductImagePreview = document.getElementById("MainProductImageOverview");
const MainProductOverview = document.getElementById("MainProductOverview");
const AddCartButtonMain = document.getElementById("AddCartButtonMain");
const BuyButtonMain = document.getElementById("BuyButtonMain");
const MainProductDescription = document.getElementById(
  "MainProductDescription",
);

const PaymentWindow = document.getElementById("PaymentWindow");
const ProductVerifyIcon = document.getElementById("ProductVerifyIcon");

function exitProductOverview() {
  setTimeout(() => {
    ProductImagePreview.style.opacity = "1";
    MainProductOverview.style.animation =
      "FadeScaleClose 0.2s ease-out 0.7s both, ResizeWindowClose 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) 0.3s both";
    ProductImagePreview.style.animation =
      "ResizeIMGClose 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) 0.3s both";
    ProductNamePreview.style.animation =
      "FadeOut 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) both";
    ProductPricePreview.style.animation =
      "FadeOut 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) both";
    CategoryType.style.animation =
      "FadeOut 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) both";
    AddCartButtonMain.style.animation =
      "FadeOut 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) both";
    BuyButtonMain.style.animation =
      "FadeOut 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) both";
    MainCoverALL.style.animation =
      "FadeOut 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) 0.7s both";
    MainProductDescription.style.animation =
      "FadeOut 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) both";
    ProductVerifyIcon.style.animation =
      "FadeOut 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) both";
    setTimeout(() => {
      MainCoverALL.style.display = "none";
      MainProductOverview.style.display = "none";
    }, 1000);
  }, 100);

  if (PaymentWindow.style.display === "block") {
    PaymentWindow.style.animation = "ClosePaymentWindow 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) both";
    setTimeout(() => {
      PaymentWindow.style.display = "none";
    }, 800);
  }
}

function ProductClicked() {
  if (CurrentProductSelected === 1) {
    ProductNamePreview.textContent = productList[0].ProductName;
    ProductPricePreview.textContent ="₱" + productList[0].ProductPrice;
    ProductImagePreview.src = ProductBuyLists[0].ProductImage;
    CategoryType.textContent = productList[0].ProductCategory;
    ProductImagePreview.style.opacity = "1";
    CurrentProductSelected = 1;

    ShowProductOverview();
  } else if (CurrentProductSelected === 2) {
    ProductNamePreview.textContent = productList[1].ProductName;
    ProductPricePreview.textContent = "₱" + productList[1].ProductPrice;
    ProductImagePreview.src = ProductBuyLists[1].ProductImage;
    CategoryType.textContent = productList[3].ProductCategory;
    ProductImagePreview.style.opacity = "1";
    CurrentProductSelected = 2;

    ShowProductOverview();
  } else if (CurrentProductSelected === 3) {
    ProductNamePreview.textContent = productList[2].ProductName;
    ProductPricePreview.textContent = "₱" + productList[2].ProductPrice;
    ProductImagePreview.src = ProductBuyLists[2].ProductImage;
    CategoryType.textContent = productList[3].ProductCategory;
    ProductImagePreview.style.opacity = "1";
    CurrentProductSelected = 3;

    ShowProductOverview();
  } else if (CurrentProductSelected === 4) {
    ProductNamePreview.textContent = productList[3].ProductName;
    ProductPricePreview.textContent = "₱" + productList[3].ProductPrice;
    ProductImagePreview.src = ProductBuyLists[3].ProductImage;
    CategoryType.textContent = productList[3].ProductCategory;
    ProductImagePreview.style.opacity = "1";
    CurrentProductSelected = 4;

    ShowProductOverview();
  } else if (CurrentProductSelected === 5) {
    ProductNamePreview.textContent = productList[4].ProductName;
    ProductPricePreview.textContent = "₱" + productList[4].ProductPrice;
    ProductImagePreview.src = ProductBuyLists[4].ProductImage;
    CategoryType.textContent = productList[4].ProductCategory;
    ProductImagePreview.style.opacity = "1";
    CurrentProductSelected = 5;

    ShowProductOverview();
  } else if (CurrentProductSelected === 6) {
    ProductNamePreview.textContent = productList[5].ProductName;
    ProductPricePreview.textContent = "₱" + productList[5].ProductPrice;
    ProductImagePreview.src = ProductBuyLists[5].ProductImage;
    CategoryType.textContent = productList[5].ProductCategory;
    ProductImagePreview.style.opacity = "1";
    CurrentProductSelected = 6;

    ShowProductOverview();
  } else {
    console.log("Product was not available.");
  }
}

function ShowProductOverview() {
  MainProductOverview.style.display = "block";
  MainCoverALL.style.display = "block";
  MainCoverALL.style.animation = "Fadein 0.5s ease-out both";

  ProductNamePreview.style.animation =
    "Fadein 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) 0.7s both";
  ProductPricePreview.style.animation =
    "Fadein 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) 0.7s both";
  CategoryType.style.animation =
    "Fadein 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) 0.7s both";
  AddCartButtonMain.style.animation =
    "Fadein 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) 0.7s both";
  BuyButtonMain.style.animation =
    "Fadein 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) 0.7s both";
  MainProductDescription.style.animation =
    "Fadein 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) 0.7s both";
  ProductVerifyIcon.style.animation =
    "AnimationSlideVerify 1s ease-out 0.7s both";

  MainProductOverview.style.animation =
    "FadeScale 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) both, ResizeWindow 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) 0.3s both";
  ProductImagePreview.style.animation =
    "ResizeIMGOpen 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) 0.3s both";
}

// CHECKOUT SYSTEM //

let PaymentOption = 0;
let Address = "";
let Quantity = "";
let shippingfee = 59;
let productNamee = "";

let product = null;
let currentBasePrice = 0;
let total = 0;

function BuyNowClicked() {
  const ProductSelectedTextCheck = document.getElementById("ProductSelectedTextCheck");
  const ProductCostTextCheck = document.getElementById("ProductCostTextCheck");
  const ProductShippingFeeTextCheck = document.getElementById("ProductShippingFeeTextCheck");
  const ProductTotalCostTextCheck = document.getElementById("ProductTotalCostTextCheck");

  if (CurrentProductSelected >= 1 && CurrentProductSelected <= 6) {

    product = productList[CurrentProductSelected - 1];

    currentBasePrice = parseFloat(product.ProductPrice);
    total = currentBasePrice + shippingfee;


    productName = product.ProductName;
    ProductSelectedTextCheck.textContent = "Product Selected: " + product.ProductName;
    ProductCostTextCheck.textContent = "Product Cost: ₱" + currentBasePrice.toFixed(2);
    ProductShippingFeeTextCheck.textContent = "Shipping Fee:₱$" + shippingfee;
    ProductTotalCostTextCheck.textContent = "Total Cost: ₱" + total.toFixed(2);
    HideElementsPayment();
    UpdateCheckout();
  } else {
    console.log("Invalid Product Selection");
  }
}

function UpdateCheckout() {
    const QuantityDisplayMain = document.getElementById("QuantityDisplayMain");
    let qty = parseInt(QuantityDisplayMain.innerHTML);
    
    let subtotal = currentBasePrice * qty;
    let grandTotal = subtotal + shippingfee;

    document.getElementById("ProductCostTextCheck").textContent = "Product Cost: $" + subtotal.toFixed(2);
    document.getElementById("ProductTotalCostTextCheck").textContent = "Total Cost: $" + grandTotal.toFixed(2);
}


function HideElementsPayment() {
  MainProductOverviewName.style.animation = "OpeningPaymentInfoHideElement 0.5s ease-out both";
  CategoryType.style.animation = "OpeningPaymentInfoHideElement 0.5s 0.1s ease-out both";
  ProductVerifyIcon.style.animation = "OpeningPaymentInfoHideElement 0.5s 0.2s ease-out both";
  MainProductOverviewPrice.style.animation = "OpeningPaymentInfoHideElement 0.5s 0.3s ease-out both";
  MainProductDescription.style.animation = "OpeningPaymentInfoHideElement 0.5s 0.4s ease-out both";
  AddCartButtonMain.style.animation = "OpeningPaymentInfoHideElement 0.5s 0.5s ease-out both";
  BuyButtonMain.style.animation = "OpeningPaymentInfoHideElement 0.5s 0.6s ease-out both";

  PaymentWindow.style.animation = "SlideOpenPaymentWindow 0.5s ease-out 1s both";
  PaymentWindow.style.display = "block";

  MainProductOverview.style.animation = "WidthChanges 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) both";
  ProductImagePreview.style.opacity = "0";

  
}

function AddQuantity() {
  const QuantityDisplayMain = document.getElementById("QuantityDisplayMain");
  const QuantityWindowMain = document.getElementById("QuantityWindowMain");

  let currentNumber = parseInt(QuantityDisplayMain.innerHTML);

  if (currentNumber >= 10) {
    QuantityWindowMain.style.boxShadow = "0 0 5px rgba(255, 0, 0, 0.7)";
    QuantityWindowMain.style.transition = "all 0.3s ease-out";
    setTimeout(() => {
      QuantityWindowMain.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.5)";
    }, 1000);
  } else {
    QuantityDisplayMain.innerHTML = currentNumber + 1;
    UpdateCheckout();

    QuantityWindowMain.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.5)";
  }
}

function DecreaseQuantity() {
  const QuantityDisplayMain = document.getElementById("QuantityDisplayMain");
  const QuantityWindowMain = document.getElementById("QuantityWindowMain");

  let currentNumber = parseInt(QuantityDisplayMain.innerHTML);

  if (currentNumber <= 1) {
    QuantityWindowMain.style.boxShadow = "0 0 5px rgba(255, 0, 0, 0.7)";
    QuantityWindowMain.style.transition = "all 0.3s ease-out";
    setTimeout(() => {
      QuantityWindowMain.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.5)";
    }, 1000);
  } else {
    QuantityDisplayMain.innerHTML = currentNumber - 1;
    UpdateCheckout();

    QuantityWindowMain.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.5)";
  }
}

function GcashSelected() {
  const PaymentOptionsMainSel = document.getElementById(
    "PaymentOptionsMainSel",
  );

  PaymentOption = 1;

  PaymentOptionsMainSel.style.animation = "ClosePaymentDown 0.3s both";
  console.log("GcashSelected");
}

function BankSelected() {
  const PaymentOptionsMainSel = document.getElementById(
    "PaymentOptionsMainSel",
  );

  PaymentOption = 2;

  PaymentOptionsMainSel.style.animation = "ClosePaymentDown 0.3s both";
  console.log("GcashSelected");
}

function CashSelected() {
  const PaymentOptionsMainSel = document.getElementById(
    "PaymentOptionsMainSel",
  );

  PaymentOption = 3;

  PaymentOptionsMainSel.style.animation = "ClosePaymentDown 0.3s both";
  console.log("GcashSelected");
}

function getPaymentName(option) {
  if (option === 1) return "GCash";
  if (option === 2) return "Bank";
  if (option === 3) return "Cash on Delivery";
  return "Not Selected";
}

function OpenPaymentMethod() {
  const PaymentOptionsMainSel = document.getElementById(
    "PaymentOptionsMainSel",
  );

  PaymentOptionsMainSel.style.animation = "OpenPaymentUp 0.3s both";
  console.log("OpenPaymentClicked ");
}

function PlaceOrder() {
  const AddedtoBagShineIMG = document.getElementById('AddedtoBagShineIMG');
  const AddedtoBagIMG = document.getElementById('AddedtoBagIMG');
  const AddedtoBagH1 = document.getElementById('AddedtoBagH1');
  const AddedtoCartCheckWindow = document.getElementById('AddedtoCartCheckWindow');
  const ShopBagButton = document.getElementById('ShopBagButton');

  AddedtoCartCheckWindow.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  AddedtoCartCheckWindow.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
  AddedtoCartCheckWindow.style.transition = "all 0.3s ease-out";
  AddedtoBagH1.style.transition = "all 0.3s ease-out";
  AddedtoBagH1.style.color = "rgba(0, 0, 0, 1)";
  AddedtoBagIMG.style.opacity = "1";
  exitProductOverview();
  AddedtoBagH1.innerHTML = "Processing Payment";
  setTimeout(() => {
    AddedtoCartCheckWindow.style.display = "block";
    AddedtoCartCheckWindow.style.opacity = "1";
  
    setTimeout(() => {
        AddedtoBagH1.innerHTML = "Thank you for purchasing!";
        AddedtoBagIMG.style.animation = "animationCompleteBuy2 1s ease-out forwards";
        AddedtoBagShineIMG.style.animation = "MovetoDown 0.5s ease-out forwards";
    }, 3000);


    setTimeout(() => {
        AddedtoCartCheckWindow.style.backgroundColor = "rgba(255, 255, 255, 0)";
        AddedtoBagIMG.style.opacity = "0";
        AddedtoCartCheckWindow.style.boxShadow = "none";
        setTimeout(() => {
          AddedtoCartCheckWindow.style.display = "none";
          ShopBagButton.style.animation = "animationCompleteBuy3 0.5s ease-out both";
        }, 500);
        AddedtoBagH1.style.color = "rgba(0, 0, 0, 0)";
    }, 4500);
  }, 1500);

}


//FOR CHECKOUT SYSTEM SECOND VIRSYON BURAT //

function checkoutVer2() {
  const ProductTotalCostTextCheck = document.getElementById("ProductTotalCostTextCheck");
    
  let productNamee = document.getElementById("ProductSelectedTextCheck").textContent;
  let quantityoftheProduct = parseInt(document.getElementById("QuantityDisplayMain").textContent);
  let TotalMainCostProd = document.getElementById("ProductTotalCostTextCheck").textContent;

  let paymentName = getPaymentName(PaymentOption);

  if (PaymentOption === 0) {  
    alert("Please Select a payment method!");
    return;
  } else if (PaymentOption > 1) {
    PlaceOrder();
    let order = {
      name: productNamee,
      quantity: quantityoftheProduct,
      totalcost: TotalMainCostProd,
      payment: PaymentOption,
      image: ProductImagePreview.src,
      date: new Date().toLocaleString()
    }

    let purchased = JSON.parse(localStorage.getItem("purchased")) || [];
    let existing = purchased.find(item => item.name === order.name);

    if (existing) {
      existing.quantity += order.quantity;
      existing.totalcost += order.totalcost;
    } else {
      purchased.push(order);
    }

    localStorage.setItem("purchased", JSON.stringify(purchased));
    }

}

function showOrders() {
    let list = document.getElementById("PurchasedListDisplay"); 
    let data = JSON.parse(localStorage.getItem("purchased")) || [];
    
    list.innerHTML = ""; 

    data.forEach((item, index) => {
        list.innerHTML += `
            <div class="OrderSideCard">
                <div class="ItemSmallFrame">
                    <img src="${item.image}" class="ItemThumb">
                </div>
                <div class="ItemInfo">
                    <p class="ItemNameText"><b>${item.name}</b></p>
                    <p class="ItemDetailsText">Qty: ${item.quantity} | <span class="GoldPrice">${item.totalcost}</span></p>
                    <p class="ItemDateText">${item.date}</p>
                    <button onclick="cancelOrder(${index}, this)" class="CancelBtn">Cancel Order</button>
                </div>
            </div>
        `;
    });
}

function openPurchased() {
    document.getElementById("PurchasedWindow").classList.add("active");
    showOrders(); 
}
function closePurchased() {
    document.getElementById("PurchasedWindow").classList.remove("active");
}

function cancelOrder(index, button) {
  let purchased = JSON.parse(localStorage.getItem("purchased")) || [];

  const card = button.closest(".OrderSideCard");

  if (confirm("Are you sure you want to cancel this order?")) {
      
    card.style.animation = "ScaleDown 0.3s ease-out forwards";

      setTimeout(() => {
        purchased.splice(index, 1);

        localStorage.setItem("purchased", JSON.stringify(purchased));

        showOrders();
      }, 500);
    }
}
