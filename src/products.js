import {
  collection,
  getDocs,
  query,
  doc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";

const productsCollection = collection(db, "produtos");

// Function for create productDiv

async function createProducts() {
  const products = await getProducts();
  
  products.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const productsDiv = document.querySelector("#container-products");

  products.forEach((product) => {
    if (product.stock) {
      const div = document.createElement("div");
      div.classList.add("choose-product");

      const img = document.createElement("img");
      img.setAttribute("src", product.photo);
      div.appendChild(img);

      const nameParagraph = document.createElement("p");
      nameParagraph.textContent = product.name;
      div.appendChild(nameParagraph);

      const priceParagraph = document.createElement("p");
      priceParagraph.textContent = `R$ ${product.price}`;
      div.appendChild(priceParagraph);

      productsDiv.appendChild(div);
    }
  });
}

//function who return an array with the elements in database

async function getProducts() {
  const products = await getDocs(productsCollection);
  const productsList = [];

  products.forEach((doc) => {
    const product = doc.data();
    if (product.quantity >= 1) {
      productsList.push({
        name: product.name,
        photo: product.photo,
        price: product.price,
        stock: product.stock,
        quantity: product.quantity,
      });
    }
  });
  return productsList;
}

export { createProducts, getProducts, productsCollection };
