// Define Delhi bounding box (approximate lat/long corners)
var delhiBounds = [
    [28.40, 76.80], // Southwest corner
    [28.88, 77.35]  // Northeast corner
  ];
  
  // Initialize map centered on Delhi, with bounds + zoom restrictions
  var map = L.map('map', {
    maxBounds: delhiBounds,   // restricts panning
    maxBoundsViscosity: 1.0   // "stickiness" at edges
  }).setView([28.6139, 77.2090], 12);
  
  // Restrict zoom levels
  map.setMinZoom(11);  // prevents zooming out too much
  map.setMaxZoom(17);  // optional: prevents excessive zoom in
  
  // Add OpenStreetMap tiles with custom attribution
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '<a href="https://www.ashoka.edu.in/profile/nayan-chanda/" target="_blank">Professor Nayan Chanda</a>, TF Raghav Puri | <b><a href="https://www.linkedin.com/in/itsraghavpuri/" target="_blank">Created by Raghav Puri</a></b> | © OpenStreetMap contributors'
  }).addTo(map);
  
  // List of Cold War related places in Delhi
  var places = [
    {
      name: "Nehru Memorial Museum & Library",
      coords: [28.602822250134384, 77.19878886112981],
      desc: `Teen Murti Bhavan – archives and material related to Nehru’s role during the Cold War.`
    },
    {
      name: "National War Memorial",
      coords: [28.612919939084257, 77.23305365476675],
      desc: `Commemorates India’s soldiers – reflects Cold War era conflicts and India’s defence policy.
             <br>1. <a href="https://scroll.in/magazine/1021614/an-indian-army-medical-units-selfless-sacrifice-saved-countless-lives-in-the-korean-war" target="_blank">
             An Indian army medical unit’s ‘selfless sacrifice’ saved countless lives in the Korean War</a>
             <br>2. <a href="https://www.korea.net/NewsFocus/HonoraryReporters/view?articleId=199972" target="_blank">
             Remembering India's role in the Korean War</a>
             <br>3. <a href="https://media.un.org/avlibrary/sites/avlibrary/files/filefield_paths/015-109.pdf" target="_blank">
             (United Nations' Media Archive - Indian News Review, 1958)Indian Military officers for the UN Observation team in Lebanon meet Krishna Menon (India) on the eve of their departure</a>
             <br>4. <a href="https://peacekeeping.un.org/sites/default/files/past/unogilfacts.html" target="_blank">
             United Nations Peace Keeping Facts and Figures - Lebanon UNOGIL</a>`
    },
    {
      name: "Vigyan Bhawan",
      coords: [28.61101876955748, 77.22056852462178],
      desc: `7th Non-Aligned Movement Summit was hosted here, where India was the chair.
             <br><a href="https://nam.go.ug/previous-chairmanship-documents" target="_blank">
             All NAM Summits and Documents</a>`
    },
    {
      name: "Indira Gandhi Memorial Museum",
      coords: [28.600052835540293, 77.20616791719732],
      desc: `Focuses on Indira Gandhi’s leadership and foreign policy during Cold War crises.`
    },
    {
      name: "India International Center",
      coords: [28.59375902482149, 77.22272877116389],
      desc: `Considered one of the country’s premier cultural institutions.
             <br><a href="https://www.tandfonline.com/doi/abs/10.1080/13556207.2015.1083292" target="_blank">
             The India International Centre of Joseph Allen Stein: Story of Cold War Politics and the Preservation of a Modern Monument</a>`
    },
    {
      name: "National Archives of India",
      coords: [28.61596296352641, 77.21731716880254],
      desc: `Holds important documents that reflect India’s modern history, including its global role.`
    },
    {
      name: "Lal Bahadur Shastri Memorial",
      coords: [28.60834162790969, 77.21915391534448],
      desc: `Artefacts & exhibits documenting the life & achievements of Lal Bahadur Shastri.`
    },
    {
      name: "National Gallery of Modern Art",
      coords: [28.61012622087575, 77.23436329973937],
      desc: `Documents India's rich artistic traditions.
             <br><a href="https://scroll.in/magazine/1017629/what-did-the-cold-war-have-to-do-with-a-computer-art-exhibition-sent-to-india-in-the-1970s" target="_blank">
             What did the Cold War have to do with a computer art exhibition sent to India in the 1970s?</a>`
    },
    {
      name: "Lenin's Statue @ Nehru Park",
      coords: [28.5899107303392, 77.19128421349163],
      desc: `The statue is said to have been unveiled by then USSR Premier, Nikolai Ryzhkov on November 1, 1987.
             <br><a href="https://www.hindustantimes.com/delhi-news/lenin-statue-in-capital-s-nehru-park-a-selfie-hub-now/story-bNkOeIQSDLkZtFLkUtWNkM.html" target="_blank">
             Lenin statue in Delhi’s Nehru Park is a selfie hub now</a>`
    },
    {
      name: "Pushkin's Statue @ Mandi House",
      coords: [28.625255214606113, 77.23164539814717],
      desc: `The statue is said to have been unveiled by then USSR Premier, Nikolai Ryzhkov on November 1, 1987.
             <br><a href="https://www.hindustantimes.com/delhi-news/delhiwale-happy-birthday-mandi-house-s-forgotten-russian/story-g6QEy1xHvocr1b3PBhrP1O.html" target="_blank">
             Delhiwale: Happy Birthday, Mandi House’s forgotten Russian</a>`
    },
    {
      name: "American Library/Center",
      coords: [28.62976228185498, 77.22349964661478],
      desc: `It was set up in 1951 under the supervision of the U.S embassy to promote American culture and values via the literature they provide.`
    },
    {
      name: "Leo Tolstoy's Statue",
      coords: [28.62625826938979, 77.21951055893403],
      desc: `It is extremely easy to miss. It sits diagonally opposite Janpath's Metro Exit Gate 2.
             <br><a href="https://books.google.co.in/books?id=-H9lAAAAIBAJ&dq=Tolstoy+Statue+India&pg=PA6&article_id=468,516563&redir_esc=y#v=snippet&q=soviet%20festival&f=false" target="_blank">
             (Indian Express Archive - 12 Nov 1988, Page 6): Soviet Fest to wind up with Grand Show</a>`
    },
    {
      name: "Embassy of the United States of America",
      coords: [28.59686781607777, 77.18696590927664],
      desc: `This is self-explanatory. However, I want to draw attention to the fact that architecture was used as a means to project ideas like openness and democracy. 
             <br>1. <a href="https://www.bloomberg.com/news/features/2023-12-21/how-modernist-architects-fought-communism-in-the-cold-war" target="_blank">
             Saving the Architecture of Cold War-Era Diplomacy</a>
             <br>2. <a href="https://www.designboom.com/architecture/democracy-diplomacy-defense-deep-dive-us-embassies-david-b-peterson-interview-08-25-2023/" target="_blank">
             Democracy, diplomacy and defence: a deep dive into the architecture of US embassies</a>`
    }
  ];
  
  // Add markers with popups
  places.forEach(p => {
    L.marker(p.coords).addTo(map)
      .bindPopup(`<b>${p.name}</b><br>${p.desc}`);
  });
  
  // ----------------------
// Modal functionality
// ----------------------
document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("welcomeModal");
    var closeBtn = document.querySelector(".modal .close");
    var titleBox = document.querySelector(".title-box"); // <-- class selector
  
    // Show modal on page load
    modal.style.display = "block";
  
    // Close modal when clicking the "x"
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  
    // Close modal if clicking outside modal content
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  
    // ✅ Reopen modal when clicking on (IR-1010) International History box
    if (titleBox) {
      titleBox.addEventListener("click", function () {
        modal.style.display = "block";
      });
    }
  });
  
  
