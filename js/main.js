var bookModal = document.getElementById("bookModal");
var contentBook = document.getElementById("contentBook");
var imgBook = document.getElementById("imgBook");

// Abre o livro.
function bookOpen() {
  imgBook.style.display = "block";  
  bookModal.style.display = "block";
  contentBook.appendChild(imgBook);
};

// Fecha o livro.
var close = document.getElementsByClassName("close")[0];
close.onclick = function() { 
  bookModal.style.display = "none";
  imgBook.style.display = "none";
};

var pageIndex = 0;
var maxIndex = 1; // Número de slides (-1)
var minIndex = 0; 
var bookPage = document.getElementsByClassName("slide");

// Botão de próximo.
function nextBook() {
    pageIndex++;
    if (pageIndex > maxIndex) {
      pageIndex = maxIndex;
    }
    bookPage[pageIndex - 1].style.display = "none";
    bookPage[pageIndex].style.display = "block";
};

// Botão de anterior.
function previousBook() {
    pageIndex--;
    if (pageIndex < minIndex) {
      pageIndex = minIndex;
    }
    bookPage[pageIndex].style.display = "block";
    bookPage[pageIndex + 1].style.display = "none";
};