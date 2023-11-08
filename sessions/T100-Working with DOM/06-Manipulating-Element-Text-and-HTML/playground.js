const wrapperEl = document.getElementById("wrapper");

//! innerText
console.log(wrapperEl.innerText);
wrapperEl.innerText = "Hello World!1";
console.log(wrapperEl.innerText);
wrapperEl.innerText = "Hello World!2";
console.log(wrapperEl.innerText);
wrapperEl.innerText = "Hello World!3";
console.log(wrapperEl.innerText);

//! innerHTML
const myHTML = `
    <h1 style='background:red;'>
        Salam
    </h1>
    <div class="logo">
        <img src="#" alt="description" />
    </div>
    <div>
        <span style="background-color:#000;color:#FFF;">
            some other stuff
        </span>
    </div>
`;
wrapperEl.innerHTML = myHTML;
console.dir(wrapperEl);
