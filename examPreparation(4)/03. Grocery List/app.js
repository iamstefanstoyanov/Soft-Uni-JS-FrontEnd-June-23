function list() {
  let API_URL = "http://localhost:3030/jsonstore/grocery/";

  let selectors = {
    product: document.querySelector("#product"),
    count: document.querySelector("#count"),
    price: document.querySelector("#price"),
    tBody: document.querySelector("#tbody"),
  };
  let btns = {
    addProductBtn: document.querySelector("#add-product"),
    updateProductBtn: document.querySelector("#update-product"),
    loadProductBtn: document.querySelector("#load-product"),
  };

  btns.loadProductBtn.addEventListener("click", loadAllProducts);
  btns.addProductBtn.addEventListener("click", addProduct);
  btns.updateProductBtn.addEventListener("click", updateProduct);

  async function loadAllProducts(e) {
    e.preventDefault();
    selectors.tBody.innerHTML = "";
    try {
      let data = await (await fetch(API_URL)).json();
      let list = Object.values(data);
      list.forEach((i) => {
        let name = i.product;
        let count = Number(i.count);
        let price = Number(i.price);
        let id = i._id;
        let trEl = createElement("tr", null, [], id, selectors.tBody);
        createElement("td", name, ["name"], null, trEl);
        createElement("td", count, ["count-product"], null, trEl);
        createElement("td", price, ["product-price"], null, trEl);
        let btnsTd = createElement("td", null, ["btn"], null, trEl);
        let updateProductBtn = createElement(
          "button",
          "Update",
          ["update"],
          null,
          btnsTd
        );
        updateProductBtn.addEventListener("click", editCurrentProduct);
        let deleteProductBtn = createElement(
          "button",
          "Delete",
          ["delete"],
          null,
          btnsTd
        );
        deleteProductBtn.addEventListener("click", deleteProduct);
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function addProduct(e) {
    e.preventDefault();
    try {
      let currentProduct = {
        product: selectors.product.value,
        count: selectors.count.value,
        price: selectors.price.value,
      };
      if (
        currentProduct.product == "" ||
        currentProduct.count == "" ||
        currentProduct.price == ""
      ) {
        return;
      }
      await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(currentProduct),
      });
      clear();
      loadAllProducts(e);
    } catch (error) {
      console.log(error.message);
    }
  }
  let currentProductId = "";
  function editCurrentProduct(e) {
    let id = e.target.parentElement.parentElement.id;
    currentProductId = id;
    
    let newPordName = e.target.parentElement.parentElement.children[0].textContent;
    let newPordcount = e.target.parentElement.parentElement.children[1].textContent;
    let newPordPrice = e.target.parentElement.parentElement.children[2].textContent;
   
    selectors.product.value = newPordName
    selectors.count.value = newPordcount
    selectors.price.value =  newPordPrice
   
    btns.updateProductBtn.disabled = false;
    btns.addProductBtn.disabled = true;
    
  }

  async function updateProduct(e) {
    try {
      let newProduct = {
        product: selectors.product.value,
        count: selectors.count.value,
        price: selectors.price.value,
      };
      await fetch(`${API_URL}${currentProductId}`, {
        method: "PATCH",
        body: JSON.stringify(newProduct),
      });
      btns.updateProductBtn.disabled = true;
      btns.addProductBtn.disabled = false;
      currentProductId = "";
      clear();
      loadAllProducts(e);
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteProduct(e) {
    let id = e.target.parentElement.parentElement.id;
    await fetch(`${API_URL}${id}`, {
      method: "DELETE",
    });
    loadAllProducts(e);
  }
  function createElement(type, textContent, classes, id, parent) {
    let element = document.createElement(type);
    if (textContent) {
      element.textContent = textContent;
    }
    if (classes && classes.length > 0) {
      element.classList.add(...classes);
    }
    if (id) {
      element.setAttribute("id", id);
    }
    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }
  function clear() {
    selectors.product.value = "";
    selectors.count.value = "";
    selectors.price.value = "";
  }
}
list();
