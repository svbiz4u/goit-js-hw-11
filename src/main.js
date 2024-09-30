// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


import { fetchData } from './js/pixabay-api';


const form = document.querySelector('.form');
const queryInput = document.querySelector('input[name="query"]');
const gallery = document.querySelector('.gallery');