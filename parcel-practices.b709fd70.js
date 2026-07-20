const $app=document.getElementById("app"),API="https://api.escuelajs.co/api/v1/products?offset=0&limit=10",main=async()=>{let t=await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10"),a=await t.json;a?.map(t=>`
            <article class="Card">
                <img href="${t?.images[0]}"/>
                <h2>
                    ${t.title} <small>${t.price}</small>
                </h2>
            </article>
        `).join("");let e=document.createElement("section");e.classList.add("Items"),$app.appendChild(e)};
//# sourceMappingURL=parcel-practices.b709fd70.js.map
