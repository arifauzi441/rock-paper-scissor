const boxes = document.querySelectorAll(`.box`);
const boxPlayer = document.querySelector(`.pilihan-player`);
const boxKomputer = document.querySelector(`.pilihan-komputer`);
const boxHasil = document.querySelector(`.box-hasil`);
const skorPlayer = document.querySelector(`.box1 .skor`);
const skorKomputer = document.querySelector(`.box2 .skor`);

function pilKompt(){
    let pil = Math.random();
    if(pil <= 0.34) return 'batu';
    if(pil > 0.34 && pil <= 0.67) return 'gunting';
    return 'kertas';
}

function aturan(pilPlayer, pilKomp){
    if(pilPlayer == pilKomp) return 'seri';
    if(pilPlayer == 'batu'){
        if(pilKomp == 'gunting') return 'menang';
        return 'kalah';
    }
    if(pilPlayer == 'gunting'){
        if(pilKomp == 'kertas') return 'menang';
        return 'kalah';
    }
    if(pilPlayer == 'kertas'){
        if(pilKomp == 'batu') return 'menang';
        return 'kalah';
    }
}

function acak(){
    let gambarKomp = [`batu`, `gunting`, `kertas`];
    let i = 0;
    let counter = 0;
    let ulang = setInterval(function(){
        boxKomputer.innerHTML = `<img src="foto/${gambarKomp[i]}.png">`;
        if(i == gambarKomp.length - 1) i = 0;
        i++;
        counter++
        if(counter == 20) clearInterval(ulang);
    },100)
}

let playerMenang = 0; 
let kompMenang = 0; 
function skor(hasil){
    if(hasil != 'seri'){
        if(hasil == 'menang'){
            playerMenang++;
            skorPlayer.innerHTML = playerMenang;
            return false;
        } 
        kompMenang++;
        skorKomputer.innerHTML = kompMenang;
    }
    
}

boxes.forEach(box => {
    box.addEventListener(`click`, function(){
        let pilPlayer = box.classList[2];
        let pilKomp = pilKompt();
        let hasil = aturan(pilPlayer, pilKomp);

        boxPlayer.innerHTML = `<img src="foto/${pilPlayer}.png">`
        acak();

        setTimeout(function(){
            boxKomputer.innerHTML = `<img src="foto/${pilKomp}.png">`;
            boxHasil.innerHTML = hasil;
            skor(hasil);
        }, 2000)


    })
})