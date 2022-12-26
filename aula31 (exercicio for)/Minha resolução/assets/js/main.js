function criaElemento() {
    const container = document.querySelector('.container');
    const elementos = [
        { tag: 'p', texto: 'Frase 1' },
        { tag: 'div', texto: 'Frase 2' },
        { tag: 'footer', texto: 'Frase 3' },
        { tag: 'section', texto: 'Frase 4' }
    ];

    const [tag1, tag2, tag3, tag4] = elementos;
    function criaDivPrincipal() {
        const principal = document.createElement('div');
        container.appendChild(principal);

        function criaP() {
            const p = document.createElement(tag1.tag);
            p.innerHTML = `${tag1.texto}`;
            principal.appendChild(p);
        }

        function criaDiv() {
            const div = document.createElement(tag2.tag);
            div.innerHTML = `${tag2.texto}`;
            principal.appendChild(div);
        }

        function criaFooter() {
            const footer = document.createElement(tag3.tag);
            footer.innerHTML = `${tag3.texto}`;
            principal.appendChild(footer);
        }

        function criaSection() {
            const section = document.createElement(tag4.tag);
            section.innerHTML = `${tag4.texto}`;
            principal.appendChild(section);
        }
        criaP();
        criaDiv();
        criaFooter();
        criaSection();
    }
    criaDivPrincipal();
}
criaElemento();


