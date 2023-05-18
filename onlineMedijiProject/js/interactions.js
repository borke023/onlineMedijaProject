function prikaziDugme() {
    const dugmeZaKlik = document.getElementById("dugme1");
    const dugmeZaPrikazati1 = document.getElementById("dugme2");
    const dugmeZaPrikazati2 = document.getElementById("dugme3");
    const dugmeZaPrikazati3 = document.getElementById("dugme4");

    dugmeZaPrikazati1.classList.remove("pomereno")
    dugmeZaPrikazati2.classList.remove("pomereno")
    dugmeZaPrikazati3.classList.remove("pomereno")

    dugmeZaKlik.addEventListener("click",() => {
        if(dugmeZaPrikazati1.classList.contains("pomereno") && dugmeZaPrikazati2.classList.contains("pomereno") && dugmeZaPrikazati3.classList.contains("pomereno") )
        {
            dugmeZaPrikazati1.classList.remove("pomereno")
            dugmeZaPrikazati2.classList.remove("pomereno")
            dugmeZaPrikazati3.classList.remove("pomereno")
        }    
        else
        {
            dugmeZaPrikazati1.classList.add("pomereno")
            dugmeZaPrikazati2.classList.add("pomereno")
            dugmeZaPrikazati3.classList.add("pomereno")
        }
    });
}



