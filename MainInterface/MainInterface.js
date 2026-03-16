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
    { ProductID: "ProductPop1", ProductName: "Hydrating Face Mist", ProductPrice: "$15.99", ProductCategory: "Cream" },
    { ProductID: "ProductPop2", ProductName: "Glowing Skin Toner", ProductPrice: "$24.99", ProductCategory: "Toner"},
    { ProductID: "ProductPop3", ProductName: "Revitalizing Serum", ProductPrice: "$39.99", ProductCategory: "Serum" },
    { ProductID: "ProductPop4", ProductName: "Nourishing Moisturizer", ProductPrice: "$29.99", ProductCategory: "Moisturizer" },
    { ProductID: "ProductSerum1", ProductName: "Anti-Aging Serum", ProductPrice: "$49.99", ProductCategory: "Serum" },
    { ProductID: "ProductSerum2", ProductName: "Brightening Serum", ProductPrice: "$39.99", ProductCategory: "Serum" },
    { ProductID: "ProductSerum3", ProductName: "Hydrating Serum", ProductPrice: "$34.99", ProductCategory: "Serum" },
    { ProductID: "ProductSerum4", ProductName: "Soothing Serum", ProductPrice: "$34.99", ProductCategory: "Serum" }
];

const ProductBuyLists = [
    {ProductSelected1: "Hydrating Face Mist", ProductPrice: "$15.99", ProductImage: "../ImagesofProduct/Product1A.png"},
    {ProductSelected2: "Glowing Skin Toner", ProductPrice: "$24.99", ProductImage: "../ImagesofProduct/Product2A.png"},
    {ProductSelected3: "Revitalizing Serum", ProductPrice: "$39.99", ProductImage: "../ImagesofProduct/Product3A.png"},
    {ProductSelected4: "Nourishing Moisturizer", ProductPrice: "$29.99", ProductImage: "../ImagesofProduct/Product4A.png"},
    {ProductSelected5: "Anti-Aging Serum", ProductPrice: "$49.99", ProductImage: "https://cdn.shopify.com/s/files/1/0267/4328/1539/products/AntiAgingSerum_1024x1024.jpg?v=1679654416"},
    {ProductSelected6: "Brightening Serum", ProductPrice: "$39.99", ProductImage: "https://cdn.shopify.com/s/files/1/0267/4328/1539/products/BrighteningSerum_1024x1024.jpg?v=1679654416"},
    {ProductSelected7: "Hydrating Serum", ProductPrice: "$34.99", ProductImage: "https://cdn.shopify.com/s/files/1/0267/4328/1539/products/HydratingSerum_1024x1024.jpg?v=1679654416"},
    {ProductSelected8: "Soothing Serum", ProductPrice: "$34.99", ProductImage: "https://cdn.shopify.com/s/files/1/0267/4328/1539/products/SoothingSerum_1024x1024.jpg?v=1679654416"}
];

    const MainCoverALL = document.getElementById("MainCoverALL");
    const ProductNamePreview = document.getElementById("MainProductOverviewName");
    const ProductPricePreview = document.getElementById("MainProductOverviewPrice");
    const CategoryType = document.getElementById("CategoryType");
    const ProductImagePreview = document.getElementById("MainProductImageOverview");
    const MainProductOverview = document.getElementById("MainProductOverview");
    const AddCartButtonMain = document.getElementById("AddCartButtonMain");
    const BuyButtonMain = document.getElementById("BuyButtonMain");
    const MainProductDescription = document.getElementById("MainProductDescription");
    const ProductVerifyIcon = document.getElementById("ProductVerifyIcon");

function exitProductOverview() {
    setTimeout(() => {
        MainProductOverview.style.animation = "FadeScaleClose 0.2s ease-out 0.7s both, ResizeWindowClose 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) 0.3s both";
        ProductImagePreview.style.animation = "ResizeIMGClose 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) 0.3s both";
        ProductNamePreview.style.animation = "FadeOut 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) both";
        ProductPricePreview.style.animation = "FadeOut 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) both";
        CategoryType.style.animation = "FadeOut 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) both";
        AddCartButtonMain.style.animation = "FadeOut 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) both";
        BuyButtonMain.style.animation = "FadeOut 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) both";
        MainCoverALL.style.animation = "FadeOut 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) 0.7s both";
        MainProductDescription.style.animation = "FadeOut 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) both";
        ProductVerifyIcon.style.animation = "FadeOut 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) both";
        setTimeout(() => {
            MainCoverALL.style.display = "none";
            MainProductOverview.style.display = "none";
        }, 1000);
    }, 100);
}

function ProductClicked() {
    if (CurrentProductSelected === 1) {
        ProductNamePreview.textContent = productList[0].ProductName;
        ProductPricePreview.textContent = productList[0].ProductPrice;
        ProductImagePreview.src = ProductBuyLists[0].ProductImage;
        CategoryType.textContent = productList[0].ProductCategory;
        CurrentProductSelected = 1;

        ShowProductOverview();
    } else if (CurrentProductSelected === 2) {
        ProductNamePreview.textContent = productList[1].ProductName;
        ProductPricePreview.textContent = productList[1].ProductPrice;
        ProductImagePreview.src = ProductBuyLists[1].ProductImage;
        CategoryType.textContent = productList[3].ProductCategory;
        CurrentProductSelected = 2;

        ShowProductOverview();

    } else if (CurrentProductSelected === 3) {
        ProductNamePreview.textContent = productList[2].ProductName;
        ProductPricePreview.textContent = productList[2].ProductPrice;
        ProductImagePreview.src = ProductBuyLists[2].ProductImage;
        CategoryType.textContent = productList[3].ProductCategory;
        CurrentProductSelected = 3;

        ShowProductOverview();
    } else if (CurrentProductSelected === 4) {
        ProductNamePreview.textContent = productList[3].ProductName;
        ProductPricePreview.textContent = productList[3].ProductPrice;
        ProductImagePreview.src = ProductBuyLists[3].ProductImage;
        CategoryType.textContent = productList[3].ProductCategory;
        CurrentProductSelected = 4;

        ShowProductOverview();
    } else { 
        console.log("Product was not available."); 
    }
}   

function ShowProductOverview() {
        MainProductOverview.style.display = "block";
        MainCoverALL.style.display = "block";
        MainCoverALL.style.animation = "Fadein 0.5s ease-out both"

        ProductNamePreview.style.animation = "Fadein 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) 0.7s both";
        ProductPricePreview.style.animation = "Fadein 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) 0.7s both";
        CategoryType.style.animation = "Fadein 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) 0.7s both";
        AddCartButtonMain.style.animation = "Fadein 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) 0.7s both";
        BuyButtonMain.style.animation = "Fadein 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) 0.7s both";
        MainProductDescription.style.animation = "Fadein 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) 0.7s both";
        ProductVerifyIcon.style.animation = "AnimationSlideVerify 1s ease-out 0.7s both";

        MainProductOverview.style.animation = "FadeScale 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) both, ResizeWindow 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) 0.3s both";
        ProductImagePreview.style.animation = "ResizeIMGOpen 0.5s cubic-bezier(0.5, 0.82, 0.165, 1) 0.3s both";
}



// Checkout SYSTEM //