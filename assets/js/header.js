// navbar search icon js functionalities starts
let search = document.getElementById("nav-link-search");
let global_search_section = document.getElementById("global-search-section");
let body = document.getElementById("body");
let header = document.getElementById("cp-header");

search.addEventListener("click", () => {
  global_search_section.classList.toggle("active");
  body.classList.toggle("overflow");
  //   header.classList.toggle("cp-header-with-banner");
  if (window.innerWidth >= 768) {
    if (header.classList.contains("scrolled-header")) {
      global_search_section.classList.toggle("scrolled-header-search");
    } else {
      return false;
    }
  }

  if (window.innerWidth < 768) {
    if (header.classList.contains("scrolled-header")) {
      global_search_section.classList.toggle("scrolled-header-search");
      global_search_section.style.top = "50px";
    } else if (header.classList.contains("cp-header")) {
      global_search_section.style.top = "58px";
    } else {
      return false;
    }
  }

  // if(window.innerWidth >= 768 & window.innerWidth <= 1200){
  //   if (header.classList.contains("scrolled-header")) {
  //     global_search_section.classList.toggle("scrolled-header-search");
  //     global_search_section.style.top = "98px";
  //   } else if (header.classList.contains("cp-header")) {
  //     global_search_section.style.top = "125px";
  //   } else {
  //     return false;
  //   }
  // }
});

function search_items() {
  let input = document.getElementById("search-items").value;
  input = input.toLowerCase();
  let search_results = document.getElementById("search-results");
  let did_you_mean = document.getElementById("did-you-mean");
  let recent_search_list_item = document.getElementsByClassName(
    "recent-search-list-item"
  );

  for (i = 0; i < recent_search_list_item.length; i++) {
    if (!recent_search_list_item[i].innerHTML.toLowerCase().includes(input)) {
      recent_search_list_item[i].style.display = "none";
      search_results.style.display = "none";
      did_you_mean.style.display = "block";
    } else {
      recent_search_list_item[i].style.display = "list-item";
    }
  }
}

window.addEventListener("scroll", function () {
  header.classList.toggle("scrolled-header", window.scrollY > 40);
});

$(".menu-btn,.menu-btn-white").click(function () {
  $(".cp-menu,.menu-overlay").addClass("active");
  $("body").addClass("lock-scroll");
});

$(".menu-close, .menu-overlay").click(function () {
  $(".cp-menu,.menu-overlay").removeClass("active");
  $(".navbar-bottom .sub-dropdown").removeClass("active");
  $("body").removeClass("lock-scroll");
});

var item_sub_dropdown = $(".navbar-bottom .sub-dropdown").click(function () {
  $(this).toggleClass("active");
  item_sub_dropdown.not(this).removeClass("active");
});
