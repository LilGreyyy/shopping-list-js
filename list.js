const POP_UP = document.getElementById('t');
let preces = [];

window.addEventListener('load', () => {
    preces = JSON.parse(localStorage.getItem("preces") || "[]");
    console.log(preces)
    render();
});

document.getElementById('jaunaPrece').addEventListener('click', () => {
    POP_UP.style.display = 'block';

})

document.getElementById('pievienotPreci').addEventListener('click', () => {
    POP_UP.style.display = 'none';

    let prece = {prece: prece.value};

    prece.value = "";

    gramatas.push(prece);

    render();
})

function render() {
    let ps = document.getElementById('ps');
    ps.innerHTML = "";

    for(let i = 0; i < preces.length; i++) {
        let prece = `
        <div class="prece">
            <h3>Prece: ${preces[i].nosaukums}</h3>
        </div>`;

        ps.innerHTML += prece;
    }

    localStorage.setItem("preces", JSON.stringify(preces))
}