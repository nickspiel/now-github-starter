const template = document.getElementById('my-paragraph');
const templateContent = template.content;
document.body.appendChild(templateContent);

customElements.define('my-paragraph',
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById('my-paragraph');
      let templateContent = template.content;

      this.attachShadow({mode: 'open'})
        .appendChild(templateContent.cloneNode(true));
  }
})