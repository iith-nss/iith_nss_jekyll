---
layout: default
title: Home
---
<style>
.col-12
  {
    max-width: 85%;
  }
  
/* Events - Cards section in the main page */
  
.Event-cards1 {
  overflow-x: auto;
}
.imgbox1 {
    display: flex;
    flex-wrap: nowrap;
}
.image-wrapper1 {
    position: relative;
    margin-right: 14px;
}
.image-wrapper1 img {
    width: 670px;
    height: 360px;
    border-radius: 20px;
    border: 2px solid rgb(138, 138, 128);
    filter: blur(3.5px); /* Apply blur to the images */
    transition: filter 0.3s ease;
}
.image-wrapper1:hover img {
    filter: none; /* Remove blur when hovering */
}
.overlay-text1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
    pointer-events: none; /* Ensure text does not interfere with hover */
}

.image-wrapper1:hover .overlay-text1 {
    display: none; /* Hide the text on hover (optional) */
}
/*EVENT STYLING ENDS*/

</style>

<div id="home-desktop" class="home large" style="padding-top: -24px">
  <div class="text-vcenter">
    <h1 class="animated typing-effect-desktop mb-3">
      <span id="typing-text-desktop"></span>
    </h1>
    <a href="#about" style="text-decoration: none;">
      <div class="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </a>
  </div>
</div>

<div id="home-mobile" class="home small" style="padding-top: -24px">
  <div class="text-vcenter">
    <h1 class="animated typing-effect-mobile mb-3">
      <span id="typing-text-mobile"></span>
    </h1>
    <a href="#about" style="text-decoration: none;">
      <div class="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </a>
  </div>
</div>
 
<!-- /first section -->

<!--ABOUT NSS-->
<section class="container-fluid bg-body" id="about" style="padding-top: 80px;">
  <div class="row justify-content-center">
    <div class="col-xl-2 col-lg-1 col-md-1"></div>
      <div class="col-xl-8 col-lg-10 col-md-10 col-sm-12">
          <div class="text-center justify-content-center">
              <h2 class="about_heading display-5 text-light">About NSS</h2>
              <hr class="accent-2 mb-4 mt-0 mx-auto" style="width: 80px; background-color: #ff5e5e; height: 3px;">
              <p class="text-light">
                National Service Scheme is a social service program sponsored by the Indian Government that sprang from the belief of the Mahatma that the difference between 
                what we do and what we are capable of doing would solve most of our problems. IIT Hyderabad has had its unit of NSS since 2008, the founding year of the institute.
              </p>
          </div>
      </div>
      <div class="col-xl-2 col-lg-1 col-md-1"></div>
  </div>

  <div class="row justify-content-center">
      <div class="col-xl-2 col-lg-1 col-md-1"></div>
      <div class="col-xl-8 col-lg-10 col-md-10 col-sm-12">
          <div class="text-center my-3">
              <h2 class="about_heading display-5 text-light">What we do?</h2>
              <hr class="accent-2 mb-4 mt-0 mx-auto" style="width: 80px; background-color: #ff5e5e; height: 3px;">
              <p class="text-light">
                NSS at IIT Hyderabad is aimed at providing each student with a significant context in which he/she can reach a deeper understanding of social reality in India today. 
                NSS encourages the meaning of the life through service in today's changing world.The volunteers of this organisation have the motto “Not me, but you”. 
                This is the showcase for the belief in selflessness and is reflected in their work to ensure everyone in need gets help making true the words that we rise by uplifting others. 
                The activities taken up by the volunteers from IITH include Vidyadaan, Cloth Donation, Blood donation camps, Walkathons and orphanage visits.
              </p>
          </div>
      </div>
      <div class="col-xl-2 col-lg-1 col-md-1"></div>
  </div>

  <!--Events Section-->
  <div id="events_section">
    
    <div class="text-center" > 
      <h2 style="color: white; text-align: center; padding-top: 40px;">EVENTS</h2>
      <hr class="accent-2 mb-4 mt-0 mx-auto" style="width: 80px; background-color: #ff5e5e; height: 3px;">
    </div>
    
    <div class = "Event-cards1">
        <div class="imgbox1">
            <div class="image-wrapper1">
                <a href="/events/swachh-bharat.html" ><img src="/assets/images/Swatch Bharat-2.jpg" width="670" height="360" alt="Img1"></a>
                <div class="overlay-text1">Swachh Bharat</div>
            </div>
            <div class="image-wrapper1">
                <a href="/events/plantation-drive.html" ><img src="/assets/images/Plantation Drive-4.JPG" width="670" height="360" alt="Img1"></a>
                <div class="overlay-text1">Plantation Drive</div>
            </div>
            <div class="image-wrapper1">
                <a href="/events/vidyadaan.html" ><img src="/assets/images/Vidyadaan-2.JPG" width="670" height="360" alt="Img1"></a>
                <div class="overlay-text1">Vidyadaan</div>
            </div>
            <div class="image-wrapper1">
                <img src="/assets/images/events/Udaan/DSC_0023.JPG" width="670" height="360" alt="Img1">
                <div class="overlay-text1">Udaan</div>
            </div>
            <div class="image-wrapper1">
                <a href="/events/blood-donation.html" ><img src="/assets/images/Blood donation-2.jpg" width="670" height="360" alt="Img1"></a>
                <div class="overlay-text1">Blood Donation</div>
            </div>
            <div class="image-wrapper1">
                <img src="/assets/images/Orphanage Visit-3.JPG" width="670" height="360" alt="Img1">
                <div class="overlay-text1">Orphanage and Old Age home Visit</div>
            </div>
            <div class="image-wrapper1">
                <a href="/events/walkathon.html" ><img src="/assets/images/Walkathon-1.jpg" width="670" height="360" alt="Img1"></a>
                <div class="overlay-text1">Walkathon</div>
            </div>
            <div class="image-wrapper1">
                <a href="/events/book-donation.html" ><img src="/assets/images/events/Book Donation/IMG_0056.JPG" width="670" height="360" alt="Img1"></a>
                <div class="overlay-text1">Book Donation</div>
            </div>
            <div class="image-wrapper1">
                <img src="/assets/images/Cleanliness Drive-1.jpg" width="670" height="360" alt="Img1">
                <div class="overlay-text1">Clean India Drive</div>
            </div>
            <div class="image-wrapper1">
                <img src="/assets/images/events/Mattress Donation/20211206_154418.jpg" width="670" height="360" alt="Img1">
                <div class="overlay-text1">Mattress Donation</div>
            </div>
            <div class="image-wrapper1">
                <img src="/assets/images/Cloth Sorting-1.jpg" width="670" height="360" alt="Img1">
                <div class="overlay-text1">Cloth Donation and Sorting</div>
            </div>
            <div class="image-wrapper1">
                <img src="/assets/images/events/OnlineEvents/73rd Independence Day/CS17BTECH11044.jpg" width="670" height="360" alt="Img1">
                <div class="overlay-text1">Online Events</div>
            </div>
        </div>
    </div> 
    
  </div>
  <!--Events Section End-->
  
  <div class="home" id="contact">
    <div class="container" style="padding-top: 70px">
      <h2 style="color: white; text-align: center;">CONTACT US</h2>
      <hr class="accent-2 mb-4 mt-0 mx-auto" style="width: 80px; background-color: #ff5e5e; height: 3px;">
    </div>
  </div>
  
  </div>
  <div class="container contact">
    <div class="row align-items-center d-flex justify-content-center">
      <div class="col-12 col-lg-5 col-md-7 mb-4">
        <div class="mb-4">
          <h4 class="text-light">NATIONAL SERVICE SCHEME</h4>
        </div>
        <p class="text-light">Indian Institute of Technology, Hyderabad</p>
        <p class="text-light">Near NH-65, Sangareddy, Kandi</p>
        <p class="text-light">Telangana, India 502285</p>
        <p class="text-light">Email ID :
        <a href="mailto:office.nss@iith.ac.in"> office.nss@iith.ac.in</a>
        </p>
        <text class="text-light">Phone: </text>
        <a href="tel:+91 81254 45396">+91 81254 45396</a>
      </div>

      <div class="col-11 col-lg-5 mb-4 d-flex justify-content-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.1691113313636!2d78.12085141482896!3d17.594702687954694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbefdc136bffbb%3A0x73414ff6594c9191!2sIndian%20Institute%20of%20Technology%20(IIT%20Hyderabad)!5e0!3m2!1sen!2sin!4v1628961801388!5m2!1sen!2sin"
          width="300" height="300" style="border: 0" allowfullscreen="" loading="lazy">
        </iframe>
      </div>
    </div>
  </div>
</section>
