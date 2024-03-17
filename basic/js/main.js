import style from '../../asset/css/style.scss';
import cssStyle from '../../asset/css/style.css';
console.log(style);
console.log(cssStyle);
import image from '../../asset/image/webpack-detail.png';
// As webpack generates IIFC, binding the function directly in html will cause an issue

const showWebpackDetails = function () {
    const containerEl = document.getElementById("webpack-list-container");
    const ulEl = document.createElement("ul");
    const webPackUse = new Set();
    webPackUse.add("Module Bundling");
    webPackUse.add("Code Splitting");
    webPackUse.add("Loaders");
    webPackUse.add("Plugins");
    webPackUse.add("Development Server");
    webPackUse.add("Code Splitting and Dynamic Imports");
    webPackUse.add("Asset Management");
    webPackUse.forEach((item)=>{
        const li = document.createElement("li");
        li.innerHTML = item;
        ulEl.append(li);
    })
    containerEl.append(ulEl);
    containerEl.style.display = 'block';
}

// it is always good to use as below
const showWebpackDetailBtn = document.getElementById("showWebpackDetailBtn");
if(showWebpackDetailBtn){
    showWebpackDetailBtn.addEventListener("click", showWebpackDetails.bind(showWebpackDetailBtn));

    //add class
    showWebpackDetailBtn.classList.add(cssStyle["btn"],cssStyle["btn-1"])
}



//add style to the button

const aniButton = document.getElementsByClassName("ani-button");

console.log(aniButton);

if(aniButton.length > 0 && style["ani-button"]){
    for(let item of aniButton){
        item.classList.add(style["ani-button"]);
    }
}


//update image url

const imgEl = document.getElementById("webpack-detail-img");
if(imgEl){
    imgEl.setAttribute("src",image);
}