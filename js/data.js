const colors = [
  "deep-orange",
  "brown",
  "yellow",
  "amber",
  "orange",
  "green",
  "light-green",
  "lime",
  "light-blue",
  "cyan",
  "teal",
  "deep-purple",
  "indigo",
  "blue",
  "red",
  "pink",
  "purple",
  "blue-grey",
];


const ids = ["ales", "filip", "martina", "rodice"];

for (const set in dataset) {
  console.log("loopping over " + set);
  dataset[set].forEach((s) => {
    createLink(s, ids[set]);
  });
}

function createLink(item, id) {
  const link =
    " <li><a id='location' onClick='openMap(\"" +
    item +
    "\")'>" +
    item +
    "</a></li>";

  document.getElementById(id).innerHTML += link + "<br />";
}

function openMap(e) {
  $("#map").html(
    '<iframe width="100%" height="800" id="gmap_canvas" src="https://maps.google.com/maps?q=' +
      encodeURIComponent(e) +
      '&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>'
  );
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#map").offset().top,
    },
    1500
  );
}
$(window).scroll(function () {
  if ($(this).scrollTop()) {
    $("#toTop").fadeIn();
  } else {
    $("#toTop").fadeOut();
  }
});

$("#toTop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1000);
});

const gmap = document.getElementById("ales").children[0];
gmap.innerHTML +=
  ' <div class="tooltip"><i class="material-icons">info</i> <span class="tooltiptext">Klikněte pro zobrazení na mapě</span> </div> ';
$(document).ready(function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  $("#toTop").removeClass("red");
  $("#toTop").addClass(randomColor);
});
