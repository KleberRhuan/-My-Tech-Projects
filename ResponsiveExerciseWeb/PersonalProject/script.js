let countries = [];
countries.push('Brasil', 'Alemanha', 'Russia', 'Eua', 'Polonia');

window.onload = () => {
  let listHtml = document.getElementById('list-country');
  countries.splice(5, 0, 'Uruguai');
  countries.splice(3, 1);
  listHtml.innerHTML +="<br>" + "Tamanho do Array: " + countries.length + "<br> <br>";
  countries.splice(2, 1, 'Egito')
  countries.pop()
  countries.push('Canada')
  countries.shift()
  countries.forEach((country) => {
    listHtml.innerHTML += '<li>' + country + '</li>'
  })
}