let cart = [];

function addToCart(button) {
    let product = button.parentElement;
    let productName = product.querySelector("h3").innerText;
    let productPrice = parseInt(product.getAttribute("data-price"));

    cart.push({ name: productName, price: productPrice });
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let totalPrice = 0;
    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        totalPrice += item.price;
        let li = document.createElement("li");
        li.innerText = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(li);
    });

    document.getElementById("total-price").innerText = totalPrice;
}

function proceedPayment() {
    document.getElementById("payment-modal").style.display = "flex";
}

function sendOTP() {
    let mobileNumber = document.getElementById("mobile-number").value;
    if (mobileNumber.length === 10) {
        alert("OTP sent to " + mobileNumber);
        document.getElementById("otp-section").style.display = "block";
    } else {
        alert("Enter a valid mobile number.");
    }
}

function verifyOTP() {
    let otp = document.getElementById("otp").value;
    if (otp === "1234") {
        alert("OTP Verified!");
        document.getElementById("address-section").style.display = "block";
    } else {
        alert("Invalid OTP! Try Again.");
    }
}

function confirmOrder() {
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;

    if (address && pincode) {
        alert("Order Confirmed! Your pickles will be delivered soon.");
        document.getElementById("payment-modal").style.display = "none";
        cart = [];
        updateCart();
    } else {
        alert("Enter valid address and pincode.");
    }
}

function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}
