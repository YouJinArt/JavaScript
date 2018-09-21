let newDiv = document.querySelector(".nav")
let renderButton = document.querySelector("#render");
let removeButton = document.querySelector("#remove")

function Container() {
    this.id = '';
    this.className = '';
    this.htmlCode = '';
}

Container.prototype.render = () => {
    return this.htmlCode;
}

//********* Remove *********//

Container.prototype.remove = () => {
    document.getElementById("my_menu").innerHTML = "";
    return null
}

//********** Menu **********//

function Menu(myId, myClass, myItems) {
    Container.call(this);
    this.id = myId;
    this.className = myClass;
    this.items = myItems;
}


Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;




Menu.prototype.render = function () {
    let result = "<ul id='" + this.id + "' class='" + this.className + "'>";
    for (let item in this.items) {
        if (this.items.hasOwnProperty(item) && (this.items[item] instanceof MenuItem || this.items[item] instanceof SubMenu)) {
            result += this.items[item].render();
        }
    }
    result += "</ul>";
    return result;
}


//********* SubMenu **********//

function SubMenu(myId, myClass, myItems) {
    Menu.call(this, myId, myClass, myItems);
}

SubMenu.prototype = Object.create(Menu.prototype);
SubMenu.prototype.constructor = SubMenu;

SubMenu.prototype.render = function () {
    return "<li class='" + this.className + "'id='" + this.id + "' >" + Menu.prototype.render.call(this) + "</li>";
};

//******** MenuImems *******//

function MenuItem(myHref, myName) {
    Container.call(this);
    this.className = "menu-item";
    this.href = myHref;
    this.name = myName;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;

MenuItem.prototype.render = function () {
    return '<li><a href="' + this.href + '">' + this.name + '</a></li>';
};

let menu = new Menu("my_menu", "My_class", [
    new MenuItem("/", "Главная"),
    new MenuItem("/catalogue/", "Каталог"),
    new MenuItem("/gallery/", "Галерея"),
    new MenuItem("/about/", "О нас"),
    new SubMenu("submenu", "Подменю", [
        new MenuItem("/payment", "Оплата"),
        new MenuItem("/delivery", "Доставка")
    ]),
    new MenuItem("/contacts", "Контакты")
]);
let rend = () => {
    newDiv.innerHTML = menu.render();
}

renderButton.addEventListener("click", rend);
removeButton.addEventListener("click", menu.remove);


