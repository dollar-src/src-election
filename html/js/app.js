dollar= {}
const cu = "https://www.technopat.net/sosyal/eklenti/evet-png.1777588/";
let markerCount = 1;
let zone1ClickCount = 0;
let zone2ClickCount = 0;
// <audio> etiketini seçme
var audio = document.getElementById("myAudio");

function sendLua(zone) {

  $.post('https://src-election/src-election', JSON.stringify(zone));
  
}
// Oynatma işlemleri
function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
}


function addMarker(event) {
  const container = event.currentTarget;
  const containerRect = container.getBoundingClientRect();

  if (markerCount > 10) {
    console.log("Mühürü kırdın!");
    return;
  }

  const marker = document.createElement("img");
  marker.className = "marker marker-image";
  marker.src = cu;
  playAudio()
  // Resmin boyutlarını yüklemesini bekleyerek ayarlayalım
  marker.onload = function () {
    marker.style.left =
      event.clientX - containerRect.left - marker.width / 2 + "px";
    marker.style.top =
      event.clientY - containerRect.top - marker.height / 2 + "px";

    // Sınıfa benzersiz bir ID atayarak üst üste binmeyi önleyelim
    marker.id = `marker-${markerCount}`;

    container.appendChild(marker);

    markerCount++;
  };

  const zone = document.createElement("div");
  container.appendChild(zone);

  if (container.classList.contains("zone1")) {
    zone1ClickCount++;
  } else if (container.classList.contains("zone2")) {
    zone2ClickCount++;
  }
}

const zones = document.getElementsByClassName("zone");
for (let i = 0; i < zones.length; i++) {
  zones[i].addEventListener("click", addMarker);
}

function clearMarkers() {
  const markers = document.querySelectorAll(".marker");
  markerCount = 1;
  zone1ClickCount = 0;
  zone2ClickCount = 0;

  markers.forEach((marker) => {
    marker.remove();
  });

}

document.querySelector(".reset").onclick = function () {
  clearMarkers();
};

document.querySelector(".onayla").onclick = function () {



  if (zone1ClickCount > zone2ClickCount) {
    sendLua(1)
  } else if (zone2ClickCount > zone1ClickCount) {
    sendLua(2)

  } else if (zone2ClickCount == zone1ClickCount) {
  } else {
  }
    document.body.style.cursor = "auto"; // Eski imleç şekline dön

  

};


document.addEventListener('mousemove', function(event) {
  const cursor = document.querySelector('.custom-cursor');
  cursor.style.left = (event.pageX - cursor.offsetWidth / 2) + 'px';
  cursor.style.top = (event.pageY - cursor.offsetHeight / 2) + 'px';
});


const onaylaButton = document.querySelector(".onayla");

onaylaButton.addEventListener("mouseover", function() {
  customCursor.style.display = "none";
});


const zone1 = document.getElementById("zone1");
const zone2 = document.getElementById("zone2");
const customCursor = document.querySelector(".custom-cursor");

zone1.addEventListener("mouseover", function() {
  customCursor.style.display = "block";
});

zone1.addEventListener("mouseout", function() {
  customCursor.style.display = "none";
});

zone2.addEventListener("mouseover", function() {
  customCursor.style.display = "block";
});

zone2.addEventListener("mouseout", function() {
  customCursor.style.display = "none";
});



window.addEventListener('message', function(event) {
  eFunc = event.data
  if (eFunc.action == "showui") {
      $(".Container").fadeIn(500);




  }

  
})

$(document).on('keydown', function() {
  switch(event.keyCode) {
      case 27: // ESC
      dollar.CloseAyarMenu();
          break;
  }
});

dollar.CloseAyarMenu = function() {
  $(".Container").css({"display":"none"});





  $.post('https://src-election/CloseMenu:NuiCallback',JSON.stringify({data: true}));
};