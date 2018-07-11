const responsiveSlider = () => {
  const slider = document.getElementById("slider"),
    slideList = document.querySelector("#slideWrap"),
    items = slideList.querySelectorAll("li").length, // 5
    prev = document.getElementById("prev"),
    next = document.getElementById("next"),
    controlBtns = document.querySelector(".control-btns");

  let sliderWidth = slider.offsetWidth,
    count = 1;

  const createBtnCtr = () => {
    const ctrBtn = document.createElement("div");
    ctrBtn.className = "ctr-btn";
    controlBtns.appendChild(ctrBtn);
  };

  for (let i = 0; i < items; i++) {
    createBtnCtr();
  }
  const ctrlBtnsUpdate = document.querySelector(".control-btns");

  window.addEventListener("resize", function() {
    sliderWidth = slider.offsetWidth;
  });
  const ctrBtn = document.querySelectorAll(".ctr-btn");
  ctrBtn[0].style.background = "rgba(44, 62, 80, 1)";

  const curSlide = () => {
    ctrBtn.forEach(item => {
      item.style.background = "rgba(124, 136, 126, 0.7)";
    });
    ctrBtn[count].style.background = "rgba(44, 62, 80, 1)";
  };

  function nextSlide() {
    if (count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      curSlide();
      count++;
    } else if ((count = items)) {
      slideList.style.left = "0px";
      count = 1;
      ctrBtn.forEach(item => {
        item.style.background = "rgba(124, 136, 126, 0.7)";
      });
      ctrBtn[0].style.background = "rgba(44, 62, 80, 1)";
    }
  }

  next.addEventListener("click", function() {
    nextSlide();
  });

  ctrBtn.forEach(check => {
    check.addEventListener("click", checkIndex);
  });

  function checkIndex(event) {
    count = Array.from(ctrBtn).indexOf(event.target);
    nextSlide();
  }
};

responsiveSlider();

$(".select").each(function() {
  let $this = $(this);
  let selectOption = $this.find("option");
  let selectOptionLength = selectOption.length;
  let selectedOption = selectOption.filter(":selected");
  let dur = 500;

  $this.hide();
  $this.wrap('<div class="select"></div>');
  $("<div>", {
    class: "select__gap",
    text: "Country"
  }).insertAfter($this);

  let selectGap = $this.next(".select__gap");
  $("<ul>", {
    class: "list"
  }).insertAfter(selectGap);

  let selectList = selectGap.next(".list");
  for (let i = 0; i < selectOptionLength; i++) {
    $("<li>", {
      class: "item",
      html: $("<span>", {
        text: selectOption.eq(i).text()
      })
    })
      .attr("data-value", selectOption.eq(i).val())
      .appendTo(selectList);
  }
  let selectItem = selectList.find("li");

  selectList.slideUp(0);
  selectGap.on("click", function() {
    if (!$(this).hasClass("on")) {
      $(this).addClass("on");
      selectList.slideDown(dur);

      selectItem.on("click", function() {
        let chooseItem = $(this).data("value");

        $("select")
          .val(chooseItem)
          .attr("selected", "selected");
        selectGap.text(
          $(this)
            .find("span")
            .text()
        );

        selectList.slideUp(dur);
        selectGap.removeClass("on");
      });
    } else {
      $(this).removeClass("on");
      selectList.slideUp(dur);
    }
  });
});
