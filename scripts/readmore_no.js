function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function show() {
    document.getElementById('scritta').className = 'visiblediv';
    document.getElementById('p1').className = 'hiddendiv';
}

function hide() {
    document.getElementById('scritta').className = 'hiddendiv';
    document.getElementById('p1').className = 'visiblediv';
}

  function myFunction1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");

    if (dots1.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots1.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  
  function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");

    if (dots2.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots2.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  document.querySelector('.show-more-button').addEventListener('click', function() {
	// If text is shown less, then show complete
	if(this.getAttribute('data-more') == 0) {
		this.setAttribute('data-more', 1);
		this.style.display = 'block';
		this.innerHTML = 'Read Less';

		this.previousElementSibling.style.display = 'none';
		this.previousElementSibling.previousElementSibling.style.display = 'inline';
	}
	// If text is shown complete, then show less
	else if(this.getAttribute('data-more') == 1) {
		this.setAttribute('data-more', 0);
		this.style.display = 'inline';
		this.innerHTML = 'Read More';

		this.previousElementSibling.style.display = 'inline';
		this.previousElementSibling.previousElementSibling.style.display = 'none';
	}	
});
