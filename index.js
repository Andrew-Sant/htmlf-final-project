function createFooter(name, year = new Date().getFullYear()){
    return `
      <p>&copy ; ${year} ${name}. All right reserved.</p>
      <p>Some Address</p>
    `;
}

document.getElementById("addToCart").addEventListener("click", function() {
    alert("Vinyl record added to cart!");
});