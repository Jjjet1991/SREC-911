//Create header object.
class Header extends HTMLElement
{
constructor() {
super();
}

connectedCallback() {
this.innerHTML = `       
<!--Above navbar logo image-->
<div>
    <img src="./images/logo.png" alt="" style="padding:5px">
</div>
<div>
    <!--NavBar--left hand side-->
    <nav class="navbar navbar-expand-lg" style="background-color: #02537e;">
        <ul class="navbar-nav mr-auto">
            <!--Link to Home-->
            <li class="nav-item">
                <a href="./index.html" class="nav-link">Home</a>
            </li>
            <!--Link to About-->
            <li class="nav-item">
                <a href="./about.html" class="nav-link">About</a>
            </li>
            <!--Link to Careers-->
            <li class="nav-item">
                <a href="./careers.html" class="nav-link">Careers</a>
            </li>
            <!--Link for Contact-->
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>

         <!--NavBar--right hand side-->
        <ul class="nav navbar-nav navbar-right">
            <!--Link for Careers-->
          <li class="nav-item">
            <a href="#" class="nav-link">Report a Crime</a>
          </li>
        </ul>
    </nav>
</div>        
`;

}
}

customElements.define("header-component", Header);
////////////////////////////////////////////////
