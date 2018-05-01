
// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "500px";
    document.getElementById("myOverlay").style.display = "500px";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// typewriter effect

new TypeIt('#example4', {
    strings: ['Bonjour et bienvenue sur mon site!', 'Je m\'appelle Bezaliel Marvel Pribadi et je suis'],
    loop: false,
    breakLines: false,
    cursorChar: '_'
  });


new TypeIt('#example5', {
    strings: ['<strong>développeur informatique.</strong>', '<strong>designer graphique.</strong>','<strong>musicien.</strong>'],
    loop: true,
    breakLines: false,
    startDelay: 10500,
    cursorChar: '_',
    cursor: false
    })

// progressbar.js

window.onload = function onLoad() {
    var python = new ProgressBar.Line('#python', {
      strokeWidth:2,
      easing:"easeInOut",
      duration:2200,
      color:"#000",
      trailColor:"#bebebe",
      trailWidth: 1,
      svgStyle: {width: '100%', height: '100%'}
      });

    var java = new ProgressBar.Line('#java', {
        strokeWidth:2,
        easing:"easeInOut",
        duration:2200,
        color:"#000",
        trailColor:"#bebebe",
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
        });

        var html = new ProgressBar.Line('#html', {
            strokeWidth:2,
            easing:"easeInOut",
            duration:2200,
            color:"#000",
            trailColor:"#bebebe",
            trailWidth: 1,
            svgStyle: {width: '100%', height: '100%'}
            });

            var css = new ProgressBar.Line('#css', {
                strokeWidth:2,
                easing:"easeInOut",
                duration:2200,
                color:"#000",
                trailColor:"#bebebe",
                trailWidth: 1,
                svgStyle: {width: '100%', height: '100%'}
                });

                var javas = new ProgressBar.Line('#javas', {
                    strokeWidth:2,
                    easing:"easeInOut",
                    duration:2200,
                    color:"#000",
                    trailColor:"#bebebe",
                    trailWidth: 1,
                    svgStyle: {width: '100%', height: '100%'}
                    });

                    var ps = new ProgressBar.Line('#ps', {
                        strokeWidth:2,
                        easing:"easeInOut",
                        duration:2200,
                        color:"#000",
                        trailColor:"#bebebe",
                        trailWidth: 1,
                        svgStyle: {width: '100%', height: '100%'}
                        });

                        var as = new ProgressBar.Line('#as', {
                            strokeWidth:2,
                            easing:"easeInOut",
                            duration:2200,
                            color:"#000",
                            trailColor:"#bebebe",
                            trailWidth: 1,
                            svgStyle: {width: '100%', height: '100%'}
                            });

                            var git = new ProgressBar.Line('#git', {
                                strokeWidth:2,
                                easing:"easeInOut",
                                duration:2200,
                                color:"#000",
                                trailColor:"#bebebe",
                                trailWidth: 1,
                                svgStyle: {width: '100%', height: '100%'}
                                });

                                var wp = new ProgressBar.Line('#wp', {
                                    strokeWidth:2,
                                    easing:"easeInOut",
                                    duration:2200,
                                    color:"#000",
                                    trailColor:"#bebebe",
                                    trailWidth: 1,
                                    svgStyle: {width: '100%', height: '100%'}
                                    });

                                    var bash = new ProgressBar.Line('#bash', {
                                        strokeWidth:2,
                                        easing:"easeInOut",
                                        duration:2200,
                                        color:"#000",
                                        trailColor:"#bebebe",
                                        trailWidth: 1,
                                        svgStyle: {width: '100%', height: '100%'}
                                        });

                                        python.animate(0.3);
                                        java.animate(0.6);
                                        html.animate(0.7);
                                        css.animate(0.6);
                                        javas.animate(0.2);
                                        ps.animate(0.7);
                                        as.animate(0.5);
                                        git.animate(0.4);
                                        wp.animate(0.7);
                                        bash.animate(0.6);
};

// portfolio
$(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(){
		selectedClass = $(this).attr("data-rel");
     $("#portfoliox").fadeTo(100, 0.1);
		$("#portfoliox div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfoliox").fadeTo(300, 1);
    }, 300);

	});
});
