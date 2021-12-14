//Create header object.
class HomeBody extends HTMLElement
{
constructor() {
super();
}

connectedCallback() {
this.innerHTML = `       
<div class="container">    
  <div>
    <img  class="largePhoto" src="./images/buildingphoto.jpg" alt="">
    <div>
      <br><br>
      <h1>Spokane Regional Emergency Communications</h1>
      <p>
        Spokane Regional Emergency Communications gets the right 
        resources to the right location with an uncompromising focus
        on responder and citizen safety.
      </p>
       <p>
        SREC is an interoperable consolidated communications center. 911 Call Receivers, Law Enforcement,
        Emergency Medical Systems, and Fire all utilize the same communications system and operational
        staff.
      </p>
    </div>
    <br> <hr class="style-two"> <br>
  </div>
</div> 

<div class="container">    
    
    <div class="card-deck">        
        <div class="card">
            <br>
            <i class="fa fa-phone fa-4x" aria-hidden="true"></i>
          <div class="card-body">
            <h5 class="card-title">Crime Check</h5>
            <p class="card-text"><p>Crime Check is our non-emergency line, used to file police report and field other
                non-emergency requests. Call Receivers and Report Technicians answer this line and complete reports.
                <br>
                (509) 456-2233 
            </p>
        </div>
        
        </div>
        <div class="card">
            <br>
            <i class="fa fa-ambulance fa-5x" aria-hidden="true"></i>
          <div class="card-body">
            <h5 class="card-title">Emergency Medical Dispatch</h5>
            <p class="card-text">Each call receiver is trained to triage medical calls prior to responder
                arrival. This means that a patient begins receiving help before paramedics have even been dispatched.
            </p>

          </div>
        </div>
        <div class="card">
            <br>
            <i class="fa fa-exclamation-triangle fa-5x"></i>
          <div class="card-body">
            <h5 class="card-title">Law and Fire</h5>
            <p class="card-text">Law and Fire dispatchers communicate with firefighters and 
                deputies via radio traffic to get information from the call receivers to the responders. They work to 
              ensure responder safety is priority.</p>
            
          </div>
        </div>
      </div>
      <br> <hr class="style-two">
   </div> 

   <div class="container">    
    <div>
      <img  class="mediumPhoto" src="./images/alwayshere.jpg" alt="">
      <div>
        <br><br>
        <h2> Be Apart of Our Team </h2>
        <p>
            As a leader in the industry SCREC is looking for adaptable individuals who thrive in a fast-paced environment and value teamwork, 
            are hungry to learn and not only succeed but exceed. Our center is every changing and will continue to grow and develop, with that comes
            new opportunities and advancement. 
        </p>
        <br>
        <!--Button to learn more about careers (needs to be made into an a-tag to connect page)-->
        <button type="button" id="careerButton" class="btn btn-lg">Learn more about career opportunities</button>
      </div>
      <br><br><br>
    </div>
  </div> 
`;

}
}

customElements.define("home-body-component", HomeBody);
////////////////////////////////////////////////
