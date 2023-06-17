const bigScreen = window.matchMedia("(min-width: 768px)");
const nav = document.getElementById("nav");
const list = document.getElementById("list");
const bar = document.getElementById("bar");

// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#000000", "#FCBC0F", "#F85F36", "#64fdf4", "#FFFFFF"];

let numStars;
const stars = [];

let prevScrollpos = window.pageYOffset;

myFunction(bigScreen);
bigScreen.addListener(myFunction);

countStars(bigScreen);
bigScreen.addListener(countStars);

bar.addEventListener("click", showList);

window.onscroll = function(){scrollShowNav()};

for (let i = 0; i < numStars; i++){
    let star = document.createElement("span");
    star.classList.add("star");
    star.innerHTML = "*";
    star.style.color = colors[Math.floor(Math.random() * colors.length)];
    star.style.left = `${Math.floor(Math.random() * 100)}vw`;
    star.style.top = `${Math.floor(Math.random() * 100)}vh`;
    star.style.transform = `scale(${Math.random()})`;
  
    stars.push(star);
    document.body.append(star);
}
  
  // Keyframes
stars.forEach((el, i, ra) => {
    let to = {
      x: Math.random() * (i % 2 === 0 ? -21 : 21),
      y: Math.random() * 12
    };
  
    let anim = el.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${to.x}rem, ${to.y}rem)` }
      ],
      {
        duration: (Math.random() + 1) * 3000, // random duration
        direction: "alternate",
        iterations: Infinity,
        easing: "ease-in-out"
      }
    );
});

function countStars(bigScreen){
    if(bigScreen.matches){
        numStars = 100;
    }else{
        numStars = 50;
    }
}

function myFunction(bigScreen){
    if(bigScreen.matches){
        listVisible();
        nav.style.background = "transparent";
        list.style.background = "transparent";
    }else{
        listHidden();
    }
}

function showList(){
    if(list.style.visibility == 'hidden'){
        listVisible();
        nav.style.backgroundColor = "#000000";
        list.style.backgroundColor = "#000000";
    }else{
        listHidden();
        if(document.body.scrollTop > 65 || document.documentElement.scrollTop > 65){
            nav.style.backgroundColor = "#000000";
        }else{
            nav.style.background = "transparent";
        }
    }
}

function listVisible(){
    list.style.visibility = "visible";
    bar.className = "change";
}

function listHidden(){
    list.style.visibility = "hidden";
    bar.className = "";
}

function scrollShowNav(){
    let currentScrollPos = window.pageYOffset;
    if(prevScrollpos > currentScrollPos){
        nav.style.top = "0";
        if(bigScreen.matches){
            listVisible();
        }else{
            listHidden();
        }
        if(document.body.scrollTop > 65 || document.documentElement.scrollTop > 65){
            nav.style.backgroundColor = "#000000";
        }else{
            nav.style.background = "transparent";
        }
    }else{
        nav.style.top = "-62px";
        if(bigScreen.matches){
            listVisible();
        }else{
            listHidden();
        }
    }
    prevScrollpos = currentScrollPos;
}

function sendMail() {
    var params = {
      name: document.getElementById("formName").value,
      email: document.getElementById("formEmail").value,
      message: document.getElementById("formMessage").value,
    };
  
    const serviceID = "service_4vfts4c";
    const templateID = "template_wwpybww";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("formName").value = "";
          document.getElementById("formEmail").value = "";
          document.getElementById("formMessage").value = "";
          console.log(res);
          alert("Your message was sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
}
