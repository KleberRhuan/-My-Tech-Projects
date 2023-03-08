import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase';
import './typography.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './images/bikcraft.svg';
import './images/dec.svg';
import './images/fotos/introducao.jpg';
import './images/bicicleta/nimbus1.jpg';
import { createProducts } from './products.js';


window.addEventListener('load', () => {
    createProducts();
  });


  document.querySelector('#bttn-intro').addEventListener('click', () => {
    window.location = '#title-choose';
  });