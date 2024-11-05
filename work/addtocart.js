const product = [
    {
        id: 0,
        image: 'image/1.png',
        title: 'z filp Foldable mobile',
        price: 50,
    },
    {
        id: 1,
        image: 'image/2.png',
        title: 'Foldable mobile',
        price: 100,
    },
    {
        id: 2,
        image: 'image/3.png',
        title: 'Foldable mobile',
        price: 200,
    },
    {
        id: 0,
        image: 'image/4.png',
        title: 'z filp Foldable mobile',
        price: 150,
    },
    {
        id: 1,
        image: 'image/5.png',
        title: 'Foldable mobile',
        price: 180,
    },
    {
        id: 2,
        image: 'image/6.png',
        title: 'Foldable mobile',
        price: 250,
    },
];

const categories = product;
let i = 0;

document.getElementById('root').innerHTML = categories.map((item, index) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src='${image}' alt='${title}' />
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$${price}.00</h2>
                <button onclick='addtocart(${index})'>Add to cart</button>
            </div>
        </div>`
    );
}).join(' ');

var cart = [];

function addtocart(index) {
    cart.push({ ...categories[index] });
    displaycart();
}

function delElement(){
    cart.push(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total=0;
    document.getElementById('count').innerHTML =cart.length;
    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("tolal").innerHTML = "$ "+0+".00";
    } else {
        document.getElementById('cartItem').innerHTML = cart.map((item, index) => {
            var { image, title, price } = item;
            total = total + price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return (
                `<div class='cart-item'>
                    <div class='row-ing'>
                        <img class='rowimg' src='${image}' alt='${title}' />
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>`
            );
        }).join('');
    }
}

// Define the delElement function to handle item removal from cart
function delElement(index) {
    cart.splice(index, 1); // Remove the item from the cart
    displaycart(); // Update the cart display
}
