const userLogIn = prompt("Username:");
localStorage.setItem("username", userLogIn);

const newEl = (el) => document.createElement(el);



const headerEl= newEl('header');
const footerEl= newEl('footer');
 const usernameEl = newEl("h2");
 const usernameEl2 = newEl("h2")
const mostAvailable = newEl ("section");

headerEl.classNames = "header";
footerEl.classNames= "footer";
usernameEl.classNames = "username";
usernameEl2.classNames = "username";

usernameEl.textContent = userLogIn;
usernameEl2.textContent = userLogIn;
headerEl.appendChild(usernameEl);
footerEl.appendChild(usernameEl2);


document.body.append(headerEl,mostAvailable, footerEl);



const createCard = (parent, imgLink, title, price) => {
  const wrapperEl = newEl('div');
  const titleEl = newEl('h3');
  const priceEl = newEl('p');
  const imgEl = newEl('img');


  wrapperEl.classNames = "wrapper"
  titleEl.classNames = "title"
  priceEl.classNames = "price"
  imgEl.classNames = "img"

  imgEl.setAttribute('alt', title);
  imgEl.setAttribute('src', imgLink)

  titleEl.textContent = title
  priceEl.textContent = price

  wrapperEl.append(imgEl, titleEl, priceEl);
  parent.appendChild(wrapperEl);
}


fetch("https://fakestoreapi.com/products")
.then((res) => res.json())
  .then((data) => {
    data
      .filter((product) => product.rating.count > 200)
      .map((product) =>
        createCard(mostAvailable, product.image, product.title, product.price)
      );
  })

try {
  if (!localStorage.getItem("username")) {
  
    throw new Error("no name found");
  }
} catch (error) {
  console.log(error);
  localStorage.setItem('username', userName);
}

