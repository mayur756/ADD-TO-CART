let items = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "price": "₹21,998",
        images: "./img/1.png",
        button:` <button class="btn" role="button" onclick="cart()" >Add to cart</button>`
    },
    {
      id: 2,
      title: "Bedside Table African Cherry ",
      description:
        "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
        "price": "₹21,998",
        images: "./img/5.png",
        button:` <button class="button-55" role="button" onclick="cart()" >Add to cart</button>`
    }, 
    {
        id: 3,
        title: "Knoll Saarinen Executive Conference Chair ",
        description:
          "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design",
          "price": "₹35000",
          images: "./img/2.png",
          button:` <button class="button-55" role="button" onclick="cart()" >Add to cart</button>`
      },

      {
        id: 4,
        title: "Wooden Bathroom Sink With Mirror ",
        description:
          "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror",
          "price": "₹35000",
          images: "./img/3.png",
          button:` <button class="button-55" role="button" onclick="cart()" >Add to cart</button>`
      },

    
  ];
  
  items.forEach((val , index) => {
      let cart_title = document.getElementById("additems");
      let div = document.createElement("div");
      
      let img = document.createElement("img");
      let title = document.createElement("h4");
      let des = document.createElement("p");
      let price = document.createElement("price");
      let btn = document.createElement("button");
  
  
      div.classList = "grid-item" , "gird-text";
      img.src = val.images;
      img.classList = "grid-img";
  
      title.innerHTML = val.title;
      title.classList = "add-title";
  
      des.innerHTML = val.description;
      des.classList = "grid-p";
  
      price.innerHTML = val.price;
      price.className = "cart-h4";
  
      btn.innerHTML = val.button;
      btn.classList = "btn btn-primary add-to-cart";
      btn.setAttribute("data-index", index);
  
    
      div.append(img);
      div.append(title);
      div.append(des);
      div.append(price);
      div.append(btn);
      cart_title.append(div);

      document.querySelectorAll(".add-to-cart").forEach(btn => {
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            let index = this.getAttribute("data-index");
            localStorage.setItem("cartItem", JSON.stringify(items[index]));
            window.location.href = "add.html";
        });
    });

  })