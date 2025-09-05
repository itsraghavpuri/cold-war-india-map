// Define Delhi bounding box (approximate lat/long corners)
var delhiBounds = [
    [28.319494048340797, 76.78388010675029], // Southwest corner
    [28.88, 77.35]  // Northeast corner
];

// Initialize map centered on Delhi, with bounds + zoom restrictions
var map = L.map('map', {
    maxBounds: delhiBounds,   // restricts panning
    maxBoundsViscosity: 1.0   // "stickiness" at edges
});

// Fit map to show the full bounding box (most zoomed out possible)
map.fitBounds(delhiBounds);

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
      desc: `Commemorates India’s soldiers – reflects Cold War era conflicts and India’s defense policy.
             <br>1. <a href="https://scroll.in/magazine/1021614/an-indian-army-medical-units-selfless-sacrifice-saved-countless-lives-in-the-korean-war" target="_blank">
             An Indian army medical unit’s ‘selfless sacrifice’ saved countless lives in the Korean War</a>
             <br>2. <a href="https://www.korea.net/NewsFocus/HonoraryReporters/view?articleId=199972" target="_blank">
             Remembering India's role in the Korean War</a>
             <br>3. <a href="https://media.un.org/avlibrary/sites/avlibrary/files/filefield_paths/015-109.pdf" target="_blank">
             (United Nations' Media Archive - Indian News Review, 1958): Indian Military officers for UN Observation team in Lebanon meet Krishna Menon (India) on the eve of their</a>
             <br>4. <a href="https://peacekeeping.un.org/sites/default/files/past/unogilfacts.html" target="_blank">
             United Nations Peace Keeping Facts and Figures - Lebanon UNOGIL</a>`
    },
    {
      name: "Vigyan Bhawan",
      coords: [28.61101876955748, 77.22056852462178],
      desc: `7th Non Aligned Movement Summit was hosted here where India was the chair.
             <br>1. <a href="https://nam.go.ug/previous-chairmanship-documents" target="_blank">
             All NAM Summits and Documents</a>
             <br>2. <a href="https://www.news18.com/viral/why-fidel-castros-bear-hug-to-indira-gandhi-in-1983-is-an-iconic-cold-war-moment-aa-9148105.html" target="_blank">
             Why Fidel Castro’s Bear Hug To Indira Gandhi In 1983 Is An Iconic Cold War Moment?</a>`
    },
    {
      name: "Indira Gandhi Memorial Museum",
      coords: [28.600052835540293, 77.20616791719732],
      desc: `Focuses on Indira Gandhi’s leadership and foreign policy during Cold War crises.`
    },
    {
      name: "India International Center",
      coords: [28.59375902482149, 77.22272877116389],
      desc: `Considered one of the country’s premier cultural institutions... 
             <br><a href="https://www.tandfonline.com/doi/abs/10.1080/13556207.2015.1083292" target="_blank">
             The India International Centre of Joseph Allen Stein: Story of Cold War Politics and the Preservation of a Modern Monument</a>`
    },
    {
      name: "National Archives of India",
      coords: [28.61596296352641, 77.21731716880254],
      desc: `Holds important documents that reflects India’s modern history including its global role.`
    },
    {
      name: "Lal Bahadur Shastri Memorial",
      coords: [28.60834162790969, 77.21915391534448],
      desc: `Artifacts & exhibits documenting the life & achievements of Lal Bahadur Shastri.
            He signed the Tashkent Declaration with Pakistan. US and USSR had intervened to stop the war.`
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
             Lenin statue in Delhi’s Nehru Park a selfie hub now</a>`
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
      desc: `It was setup in 1951 under the supervision of the U.S embassy to promote American culture and values via the literature they provide.`
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
      desc: `This is self explanatory. However, I want to draw attention to the fact how architecture was used as a means to project ideas like openness and democracy. 
             <br>1. <a href="https://www.bloomberg.com/news/features/2023-12-21/how-modernist-architects-fought-communism-in-the-cold-war" target="_blank">
             Saving the Architecture of Cold War-Era Diplomacy</a>
             <br>2. <a href="https://www.designboom.com/architecture/democracy-diplomacy-defense-deep-dive-us-embassies-david-b-peterson-interview-08-25-2023/" target="_blank">
             Democracy, diplomacy and defense: a deep dive into the architecture of US embassies</a>`
    },
    {
      name: "Carterpuri Village",
      coords: [28.506913745126575, 77.04321592574806],
      desc: `Carterpuri (formerly Daulatpur Nasirabad) is a village in Gurgaon district. It was visited by US President Jimmy Carter during his India tour of 1978. Carter's mother had previously 
             visited the village in the late 1960s as a member of the Peace Corps. Later the village's name was changed to Carterpuri after Jimmy Carter.
               <br>1. <a href="https://archive.ph/0UBCC" target="_blank">
               How Haryana’s Carterpuri village was named after former US President Jimmy Carter</a>`
    },
    {
      name: "Delhi University",
      coords: [28.687613165676773, 77.2103161399693],
      desc: `US President Eisenhower was awarded with a honorary degree of Doctor of Laws in 1959 during his India tour.
             <br>1. <a href="https://www.presidency.ucsb.edu/documents/remarks-upon-receiving-honorary-degree-doctor-laws-delhi-university" target="_blank">
             Remarks Upon Receiving an Honorary Degree of Doctor of Laws at Delhi University</a>
             <br>2. <a href="https://www.britishpathe.com/asset/244505/" target="_blank">
             Video: Eisenhower honoured at Delhi University</a>`
    },
    {
      name: "Rashtrapati Bhavan",
      coords: [28.614545562914117, 77.19945145345801],
      desc: `USSR Premier Nikolai Bulganin and Nikita Khrushchev, Communist Party chief stayed here in 1955 during their 3 week stay.
               <br>1. <a href="https://www.britishpathe.com/asset/60109/" target="_blank">
               Bulganin in India</a>
               <br>2. <a href="https://www.nytimes.com/1955/11/19/archives/russians-greeted-by-million-in-india-million-in-india-greet.html" target="_blank">
               Russians greeted by millions in India</a>
               <br>3. <a href="https://time.com/archive/6799118/india-call-us-mister/" target="_blank">
               India: Call us Mister</a>`
    },
    {
       name: "Ajronda Village",
       coords: [28.397104841690073, 77.31539967978865],
       desc: `Marshal Kliment Y. Voroshilov, Chairman of the Presidium of the Supreme Soviet; Frol R. Kozlov, a First Deputy Premier, and Vasily V. Kuznetsov, Deputy Foreign Minister visited this village during their 1960 visit to India.
                <br>1. <a href="https://www.nytimes.com/1955/11/19/archives/russians-greeted-by-million-in-india-million-in-india-greet.html" target="_blank">
                Russians Busy in India; Visiting Soviet Leaders Tour Village and See Taj Mahal</a> 
                <br>2. <a href="https://archives.bks.org.in/jspui/handle/123456789/15569?searchWord=&frontend=frontend&query=[query=&sort_by=dc.date.accessioned_dt&order=desc&rpp=20&etal=0&frontend=frontend&start=380]" target="_blank">
                Kliment Voroshilov President of the Soviet Union and other members of the delegation to the World Agriculture Fair January 1960.</a>`
    },
    {
        name: "Palam Airport (Now Indira Gandhi International Airport)",
        coords: [28.557662941327113, 77.10060896332371],
        desc: `<p>On 7th September 1969, Prime Minister Indira Gandhi met Soviet Premier Alexei Kosygin to discuss world issues and Indo-Soviet relations at an hour-long meeting. He changed his plans to have this 1 hour meeting.
                <br><a href="https://www.hindustantimes.com/india-news/htthisday-sept-7-1969-pm-kosygin-discuss-bilateral-issues-101630945425747.html" target="_blank">
                Hindustan Times Archive: Sept 7, 1969 — PM, Kosygin discuss bilateral issues</a></p>
                
                <p>On 31st July 1969, US President Richard Nixon came to India for 23 hours and gave an address here.
                <br><a href="https://www.presidency.ucsb.edu/documents/remarks-arrival-new-delhi-india" target="_blank">
                Remarks on Arrival in New Delhi, India</a></p>`
    },
    {
        name: "10 Janpath",
        coords: [28.60908452942609, 77.21898178489151],
        desc: `Prime Minister Lal Bahadur Shastri met US Ambassador W. Averell Harriman to discuss the American peace moves in Vietnam war. The Americans possibly wanted India to be the Chairman of International Control Commission for Vietnam.
                <br>1. <a href="https://www.nytimes.com/1966/01/01/archives/harriman-to-see-shastri-in-india-envoy-due-there-tomorrow-plans.html" target="_blank">
                Harriman to see Shastri in India; Envoy Due There Tomorrow  Plans Made Hurriedly</a>
                <br>2. <a href="https://www.nytimes.com/1966/01/03/archives/harriman-sees-shastri.html" target="_blank">
                Harriman Sees Shastri</a>
                <br>3. <a href="https://history.state.gov/historicaldocuments/frus1964-68v25/d275" target="_blank">
                Letter From Prime Minister Shastri to President Johnson</a>`
    },
    {
        name: "Old Parliament (Now Samvidhan Sadan)",
        coords: [28.617406594381677, 77.20819552248147],
        desc: `<p>Speeches of US Presidents Eisenhower (1959) and Jimmy Carter (1978).
                <br>1. <a href="https://www.presidency.ucsb.edu/documents/address-delivered-before-joint-session-the-parliament-india" target="_blank">
                Eisenhower: Address Delivered Before a Joint Session of the Parliament of India</a>
                <br>2. <a href="https://www.presidency.ucsb.edu/documents/new-delhi-india-remarks-before-the-indian-parliament" target="_blank">
                Jimmy Carter: Remarks Before the Indian Parliament</a><p>
                 
                <p>Speeches of USSR Premier Nikolai Bulganin and Nikita Khrushchev (1955) and General Secretary of the Communist Party Leonid Brezhnev (1973)
                <br>1. <a href="https://core.ac.uk/download/pdf/328102783.pdf" target="_blank">
                Visit to India: Speeches and Interviews of Nikolai Bulganin and Nikita Khrushchev</a>
                <br>2. <a href="https://www.britishpathe.com/asset/220705/" target="_blank">
                India: Soviet Communist Party Leader Brezhnev Addresses Parliament and Signs Joint Agreements at the of his 5 day visit</a>
                <br>3. <a href="https://www.britishpathe.com/asset/220710/" target="_blank">
                India: Soviet Party Leader Brezhnev has talks with Prime Minister Gandhi</a></p>`
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
  
  
