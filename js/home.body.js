//Create header object.
class HomeBody extends HTMLElement
{
constructor() {
super();
}

connectedCallback() {
this.innerHTML = `       

`;

}
}

customElements.define("home-body-component", HomeBody);
////////////////////////////////////////////////
