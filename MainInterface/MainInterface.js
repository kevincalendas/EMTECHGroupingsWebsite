const ProductButton1 = document.getElementById("ProductPop1");
const ProductButton2 = document.getElementById("ProductPop2");
const ProductButton3 = document.getElementById("ProductPop3");
const ProductButton4 = document.getElementById("ProductPop4");
const ProductButton5 = document.getElementById("ProductSerum1");
const ProductButton6 = document.getElementById("ProductSerum2");
const ProductButton7 = document.getElementById("ProductSerum3");
const ProductButton8 = document.getElementById("ProductSerum4");

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
    ProductName: "Skinly Cleanse",
    ProductPrice: "230.00",
    ProductCategory: "Moisturizer",
  },
  {
    ProductID: "ProductSerum1",
    ProductName: "Skinly Cream",
    ProductPrice: "350.00",
    ProductCategory: "Serum",
  },
  {
    ProductID: "ProductSerum2",
    ProductName: "Skinly Bright",
    ProductPrice: "299.00",
    ProductCategory: "Brightener",
  },
];

const ProductBuyLists = [
  {
    ProductSelected1: "Skinly Facial",
    ProductPrice: "320.00",
    ProductImage: "../ImagesofProduct/Product1A.png",
  },
  {
    ProductSelected2: "Skinly Toner",
    ProductPrice: "250.00",
    ProductImage: "../ImagesofProduct/Product2A.png",
  },
  {
    ProductSelected3: "Skinly Serum",
    ProductPrice: "220.00",
    ProductImage: "../ImagesofProduct/Product3A.png",
  },
  {
    ProductSelected4: "Skinly Cleanse",
    ProductPrice: "230.00",
    ProductImage: "../ImagesofProduct/Product4A.png",
  },
  {
    ProductSelected5: "Skinly Cream",
    ProductPrice: "350.00",
    ProductImage:
      "https://cdn.shopify.com/s/files/1/0267/4328/1539/products/AntiAgingSerum_1024x1024.jpg?v=1679654416",
  },
  {
    ProductSelected6: "Skinly Bright",
    ProductPrice: "299.00",
    ProductImage:
      "https://cdn.shopify.com/s/files/1/0267/4328/1539/products/BrighteningSerum_1024x1024.jpg?v=1679654416",
  }
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
const ProductVerifyIcon = document.getElementById("ProductVerifyIcon");

function exitProductOverview() {
  setTimeout(() => {
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
}
