class tituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = "";

        //base do componente 
        const componentRoot = document.createElement('h1');
        componentRoot.textContent = this.getAttribute("title");

        //estilizando 
        const style = document.createElement('style');
        style.textContent = `
        h1 {
          color: blue;
        } 
      `;

        //envio para shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
};

customElements.define("titulo-dinamico", tituloDinamico);
