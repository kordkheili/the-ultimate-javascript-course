const newArticle = `
    <article class="style3">
        <span class="image">
        <img src="../../../sources/phantom/images/pic01.jpg" alt="" />
        </span>
        <a href="generic.html">
        <h2>NEW ITEM</h2>
        <div class="content">
            <p>
                some description...
            </p>
        </div>
        </a>
    </article>
`;
const tilesEl = document.querySelector(".tiles");
tilesEl.insertAdjacentHTML("afterbegin", newArticle);
tilesEl.insertAdjacentHTML("beforeend", newArticle);
