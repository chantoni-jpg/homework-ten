var homeContent = `
<div class="hero">
<div class="hero-content">
        <h1>travel-fly</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat aliquid minus nemo sed est.</p>
        <button id="read" onclick="document.location.href='http://127.0.0.1:5502/about.html'" class="button">READ MORE</button>
    </div>
</div>
<div id="home">
<section class="promo-tours">
    <div class="promo-one">
        <h1>ISRAEL</h1>
        <h2>from $1000</h2>
        <button onclick="document.location.href='http://127.0.0.1:5502/index.html'" class="promo-button">LEARN MORE</button>
    </div>
    <div class="promo-two">
        <h1>USA</h1>
        <h2>from $1500</h2>
        <button onclick="document.location.href='http://127.0.0.1:5502/tour-two.html'" class="promo-button">LEARN MORE</button>
    </div>
    <div class="promo-three">
        <h1>AUSTRALIA</h1>
        <h2>from $1800</h2>
        <button onclick="document.location.href='http://127.0.0.1:5502/tour-three.html'" class="promo-button">LEARN MORE</button>
    </div>
</section>
<section class="booking-form">
    <h1>Booking Form</h1>
    <table>
        <tr>
        </tr>
        <tr>
            <td><input type="text" value="Name..."></td>
            <td><input type="text" value="Email..."></td>
        </tr>
        <tr>
            <td><input type="text" value="Country..."></td>
            <td><input type="text" value="Hotel..."></td>
        </tr>
    </table>
    <label for="check">Check-In:</label><br>
    <input type="check" id="check" value="05/10/2020"><br><br>
      <label for="check">Check-Out:</label><br>
      <input type="check" id="check" value="05/20/2020"><br><br>
      <div class="people">
          <table>
              <tr></tr>
              <tr>
                <td>Adult<input type="amount" id="amount" value="2"></td>
                <td>Children<input type="amount" id="amount" value="0"></td>
                <td>Rooms<input type="amount" id="amount" value="1"></td>
              </tr>
          </table>
          <textarea id="message" name="message" placeholder="message..."></textarea>
          <input type="submit" value="Submit">
      </div>
    </section>
</div>`
var aboutContent = `
<div class="about">
    <div class="top-section">
        <h1>About:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    </div>
    <div class="bottom-section">
        <h3>Client Quotes:</h3>
        <div class="client">
        <div class="client-image client-one"></div>
        <div class="client-quote">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            <div class="client-name">
            - Miranda Brown
        </div>
        </div>
    </div>
    <div class="client">
        <div class="client-image client-two"></div>
        <div class="client-quote">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            <div class="client-name">
                - Johnathan Wes
        </div>
        </div>
    </div>
</div>  
</div>`
var specialContent = `<div class="specials" id="specials">
<div class="h1">
<h1>Special Offers:</h1>
</div>
<div class="special-offers">
<div class="special-image special-one"></div> 
<div class="spain"> 
  <div class="percentage">
    (20% off)
    </div>
    <h2>Barcelona, Spain</h2>

<div class="quote">
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    <button class="promo-button">Learn More</button>
</div>
</div>
</div>
<div class="special-offers">
<div class="special-image special-two"></div> 
 <div class="spain">          
 <div class="percentage">
      (10% off)
      </div>
      <h2>Bangkok, Thailand</h2>

  <div class="quote">
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      <button class="promo-button">Learn More</button>
  </div>
</div>
</div>
</div>`
var blogContent = `<div class="blog" id="blog">
<h1>Blog:</h1>
<div class="blog-post">
<div class="blog-image blog-one"></div>
<div class="blog-title">
    <h1>Sed et persipiatis unde omnis iste natus</h1>
</div>
<div class="blog-quote"> <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p></div>
</div>
<div class="blog-post">
<div class="blog-image blog-one"></div>
<div class="blog-title">
    <h1>Sed et persipiatis unde omnis iste natus</h1>
</div>
<div class="blog-quote"> <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> </div>
</div>
</div>`
var contactContent = `<div class="contact" id="contact">
<h1>Contact Us:</h1>
<div class="map map-one"></div>
<div class="text">
<p>travel-fly Inc.<br>
8901 Marmora Road,<br>
Glasgow, D04 89GR.<br>
Freephone:+1 800 559 6580<br>
Telephone:+1 800 603 6035<br>
FAX:+1 800 889 9898<br>
E-mail: mail@travelfly.org</p> 
</div>
<form action="/action_page.php">
    <input type="text" id="fname" name="firstname" placeholder="Your name...">
    <input type="text" id="lname" name="lastname" placeholder="Email Address...">
    <input type="text" id="lname" name="lastname" placeholder="Country...">
    <textarea id="subject" name="subject" placeholder="Message..." style="height:170px"></textarea>
    <button class="promo-button">Send Message</button>
</div>`
var tourOne = `<div id="tour-one">
<div class="tour">
<header>
    <h1>Israel tour package:</h1>
    <h2>STARTING FROM $1000 (prices may vary)</h2>
</header>
<div class="tours">
    <div class="tour-promo" id="israel">
        <div class="promo-one">
        </div>
    </div>
    <div class="tour-promo" id="israel">
        <div class="promo-two">
        </div>
    </div>
    <div class="tour-promo" id="israel">
        <div class="promo-three">
        </div>
    </div>
</div>
</div>
<div class="paragraphs">
<div class="p-one">
    <h1>Day #1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="p-two">
  <h1>Day #2:</h1>  
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="p-three">
    <h1>Day #3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <button onclick="document.location.href='http://127.0.0.1:5502/index.html'" class="promo-button">LEARN MORE</button>
</div>
</div>
</div>
</div>`
var toursContent = ` <div id="tours" class="tour-page">
<header >
    <span>Tours:</span>
</header>
<div class="tours">
<div class="tour-promo" id="israel">
    <div class="promo-one">
        <h1>ISRAEL</h1>
        <h2>from $1000</h2>
        <button onclick="document.location.href='http://127.0.0.1:5502/index.html'" class="promo-button">LEARN MORE</button>
    </div>
</div>
<div class="tour-promo" id="usa">
    <div class="promo-two">
        <h1>USA</h1>
        <h2>from $1000</h2>
        <button onclick="document.location.href='http://127.0.0.1:5502/tour-two.html'" class="promo-button">LEARN MORE</button>
</div>
</div>
<div class="tour-promo" id="austrailia">
    <div class="promo-three">
        <h1>Austrailia</h1>
        <h2>from $1000</h2>
        <button onclick="document.location.href='http://127.0.0.1:5502/tour-three.html'" class="promo-button">LEARN MORE</button>
</div>
</div>
<div class="tour-promo" id="new-zeland">
    <div class="promo-four">
        <h1>New Zeland</h1>
        <h2>from $1000</h2>
                    <button onclick="document.location.href='http://127.0.0.1:5502/tour-four.html'" class="promo-button">LEARN MORE</button>
</div>
</div>
<div class="tour-promo" id="france">
    <div class="promo-five">
        <h1>France</h1>
        <h2>from $1000</h2>
        <button onclick="document.location.href='http://127.0.0.1:5502/tour-five.html'" class="promo-button">LEARN MORE</button>
    </div>
</div>
<div class="tour-promo" id="egypt">
    <div class="promo-six">
        <h1>Egypt</h1>
        <h2>from $1000</h2>
        <button onclick="document.location.href='http://127.0.0.1:5502/tour-six.html'" class="promo-button">LEARN MORE</button>
    </div>
</div>
<div class="tour-promo" id="japan">
    <div class="promo-seven">
        <h1>Japan</h1>
        <h2>from $1000</h2>
        <button onclick="document.location.href='http://127.0.0.1:5502/tour-seven.html'" class="promo-button">LEARN MORE</button>
    </div>
</div>
<div class="tour-promo" id="canada">
    <div class="promo-eight">
        <h1>Canada</h1>
        <h2>from $1000</h2>
        <button onclick="document.location.href='http://127.0.0.1:5502/tour-eight.html'" class="promo-button">LEARN MORE</button>
    </div>
</div>
<div class="tour-promo" id="uae">
    <div class="promo-nine">
        <h1>U.A.E</h1>
        <h2>from $1000</h2>
        <button onclick="document.location.href='http://127.0.0.1:5502/tour-nine.html'" class="promo-button">LEARN MORE</button>
    </div>
</div>
</div>
</div>
</div>`
var tourTwo = `<div id="tour_two">
<div class="tour-two">
<header>
    <h1>USA tour package:</h1>
    <h2>STARTING FROM $1500 (prices may vary)</h2>
</header>
<div class="tours">
    <div class="tour-promo">
        <div class="promo-four">
        </div>
    </div>
    <div class="tour-promo">
        <div class="promo-five">
        </div>
    </div>
    <div class="tour-promo">
        <div class="promo-six">
        </div>
    </div>
</div>
</div>
<div class="paragraphs">
<div class="p-one">
    <h1>Day #1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="p-two">
  <h1>Day #2:</h1>  
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="p-three">
    <h1>Day #3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <button onclick="document.location.href='http://127.0.0.1:5502/index.html'" class="promo-button">LEARN MORE</button>
</div>
</div>
</div>`
var tourThree = `<div id="tour_three">
<div class="tour-three">
<header>
    <h1>Australia tour package:</h1>
    <h2>STARTING FROM $1800 (prices may vary)</h2>
</header>
<div class="tours">
    <div class="tour-promo" id="israel">
        <div class="promo-seven">
        </div>
    </div>
    <div class="tour-promo" id="israel">
        <div class="promo-eight">
        </div>
    </div>
    <div class="tour-promo" id="israel">
        <div class="promo-nine">
        </div>
    </div>
</div>
</div>
<div class="paragraphs">
<div class="p-one">
    <h1>Day #1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="p-two">
  <h1>Day #2:</h1>  
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="p-three">
    <h1>Day #3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <button class="promo-button">BOOK NOW</button>
</div>
</div>
</div>`
var tourFour = `
<div id="tour_four">
<div class="tour-four">
<header>
    <h1>New Zeland tour package:</h1>
    <h2>STARTING FROM $1200 (prices may vary)</h2>
</header>
<div class="tours">
    <div class="tour-promo" id="israel">
        <div class="promo-ten">
        </div>
    </div>
    <div class="tour-promo" id="israel">
        <div class="promo-eleven">
        </div>
    </div>
    <div class="tour-promo" id="israel">
        <div class="promo-twelve">
        </div>
    </div>
</div>
</div>
<div class="paragraphs">
<div class="p-one">
    <h1>Day #1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="p-two">
  <h1>Day #2:</h1>  
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="p-three">
    <h1>Day #3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <button class="promo-button">BOOK NOW</button>
</div>
</div>`
var tourFive = `
<div class="tour-five">
<header>
    <h1>France tour package:</h1>
    <h2>STARTING FROM $2500 (prices may vary)</h2>
</header>
<div class="tours">
    <div class="tour-promo" id="israel">
        <div class="promo-thirteen">
        </div>
    </div>
    <div class="tour-promo" id="israel">
        <div class="promo-fourteen">
        </div>
    </div>
    <div class="tour-promo" id="israel">
        <div class="promo-fifteen">
        </div>
    </div>
</div>
</div>
<div class="paragraphs">
<div class="p-one">
    <h1>Day #1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="p-two">
  <h1>Day #2:</h1>  
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="p-three">
    <h1>Day #3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <button class="promo-button">BOOK NOW</button>
</div>
</div>
</div>`
var tourSix = `<div class="tour-six">
<header>
    <h1>Egypt tour package:</h1>
    <h2>STARTING FROM $900 (prices may vary)</h2>
</header>
<div class="tours">
    <div class="tour-promo" id="israel">
        <div class="promo-sixteen">
        </div>
    </div>
    <div class="tour-promo" id="israel">
        <div class="promo-seventeen">
        </div>
    </div>
    <div class="tour-promo" id="israel">
        <div class="promo-eighteen">
        </div>
    </div>
</div>
</div>
<div class="paragraphs">
<div class="p-one">
    <h1>Day #1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="p-two">
  <h1>Day #2:</h1>  
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="p-three">
    <h1>Day #3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <button class="promo-button">BOOK NOW</button>
</div>
</div>`
var tourSeven = `<div class="tour-seven">
<header>
    <h1>Japan tour package:</h1>
    <h2>STARTING FROM $1300 (prices may vary)</h2>
</header>
<div class="tours">
    <div class="tour-promo" id="israel">
        <div class="promo-nineteen">
        </div>
    </div>
    <div class="tour-promo" id="israel">
        <div class="promo-twenty">
        </div>
    </div>
    <div class="tour-promo" id="israel">
        <div class="promo-twenty-one">
        </div>
    </div>
</div>
</div>
<div class="paragraphs">
<div class="p-one">
    <h1>Day #1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="p-two">
  <h1>Day #2:</h1>  
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="p-three">
    <h1>Day #3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <button class="promo-button">BOOK NOW</button>
</div>
</div>`
var tourEight = `<div class="tour-eight">
<header>
    <h1>Canada tour package:</h1>
    <h2>STARTING FROM $2000 (prices may vary)</h2>
</header>
<div class="tours">
    <div class="tour-promo" id="israel">
        <div class="promo-twenty-two">
        </div>
    </div>
    <div class="tour-promo" id="israel">
        <div class="promo-twenty-three">
        </div>
    </div>
    <div class="tour-promo" id="israel">
        <div class="promo-twenty-four">
        </div>
    </div>
</div>
</div>
<div class="paragraphs">
<div class="p-one">
    <h1>Day #1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="p-two">
  <h1>Day #2:</h1>  
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="p-three">
    <h1>Day #3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <button class="promo-button">BOOK NOW</button>
</div>
</div>`
var tourNine =`<div class="tour-nine">
<header>
    <h1>U.A.E tour package:</h1>
    <h2>STARTING FROM $3000 (prices may vary)</h2>
</header>
<div class="tours">
    <div class="tour-promo" id="israel">
        <div class="promo-twenty-five">
        </div>
    </div>
    <div class="tour-promo" id="israel">
        <div class="promo-twenty-six">
        </div>
    </div>
    <div class="tour-promo" id="israel">
        <div class="promo-twenty-seven">
        </div>
    </div>
</div>
</div>
<div class="paragraphs">
<div class="p-one">
    <h1>Day #1:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="p-two">
  <h1>Day #2:</h1>  
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="p-three">
    <h1>Day #3:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
    <button class="promo-button">BOOK NOW</button>
</div>
</div>`
function init(userName) {
    let currentHeroImage = "home";
    $("nav a").click(function(e) {
        let btnId = this.id;
        let contentId = btnId + "Content";
        if (btnId == "home") {
        $(".hero").css("display", "block")
        $(".hero")
        .removeClass(`${currentHeroImage}`)
        .addClass(`${btnId}`)
        currentHeroImage = btnId;
        } else {
            $(".hero")
            .removeClass(`${currentHeroImage}`)
            $(".hero").css("background-image", "none")
            $(".hero-content").css("display", "none")
            currentHeroImage = btnId;
        }
        $("#app").html(eval(contentId));
        MODEL.getPageContent(btnId);
});
}


$(document).ready(function() {
    init();
});
