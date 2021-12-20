class Footer extends HTMLElement{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML=`
<footer>
  <div>
    <ul class="footer-list">
      <li style="font-size:20px;font-family: 'Viga', sans-serif;">Spokane Regional Emergency Communications</li>
      <li><em>Phone: 509-532-8911</em></li>
      <li><em>Fax: 509-535-6719</em></li>
      <br>
      <li><a href="#" class="fa fa-facebook fa-2x"></a>  
        <a href="#" class="fa fa-twitter fa-2x"></a>
        <a href="https://www.instagram.com/spokane.srec.911" target="blank" class="fa fa-instagram fa-2x"></a>
      </li>
      <br>
      <li><span style="font-size:10px;"><em>Copyright 	&copy; SREC911 - All Rights Reserved</em></span></li>
    </ul>
  </div>
</footer>
  `;
  }
}

customElements.define("footer-component", Footer);