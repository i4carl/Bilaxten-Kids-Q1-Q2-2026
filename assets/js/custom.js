$(function () {
	$(document).on("pagechange", function (event) {
		$('.tree span').removeClass('active');
		$('.sidebar').removeClass('active');
		var activepg = $.mobile.activePage;
		$('.tree span.' + activepg[0].dataset.url).addClass('active')
	});
    $('#sidepanel-btn').click(function () {
        //  alert(1);
        if ($('.sidebar').hasClass('active')) {
            $('.sidebar').removeClass('active')
        }
        else {
            $('.sidebar').addClass('active');
        }
    });
	$('.tree span').click(function () {
		$('.sidebar').removeClass('active')
	});
    $('#search-btn').click(function () {
        //  alert(1);
        if ($('.search-box').hasClass('active')) {
            $('.search-box').removeClass('active')
        }
        else {
            $('.search-box').addClass('active');
        }
    });
   //***** */ Search
    $('#text-search').bind('keyup change', function (ev) {
        // pull in the new value
        // alert(1)
        var searchTerm = $(this).val();

        // remove any old highlighted terms
        $('body').removeHighlight();

        // disable highlighting if empty
        if (searchTerm) {
            // highlight the new term
            $('body').highlight(searchTerm);
        }
    });
    $(document).ready(function () {
        $('.loop').each(function () {
            //  alert(1);
            // $(this)[0].src = '';
            setTimeout(() => {
                $(this)[0].src = `${$(this)[0].src}?v=${Math.random()}`;
            });
        });
        $(".fancybox").fancybox({
            smallBtn: true
        });
        // $(".tree").append(`<ul>

		// 			<li>
		// 				<span class="page1">
		// 					<img onclick="goToPage(1);" class="img-responsive" src="assets/thumb/index.png" />
		// 				</span>
		// 			</li>   
		// 			<li>
		// 				<span class="page2">
		// 					<img onclick="goToPage(2)" class="img-responsive" src="assets/thumb/page2.png" />
		// 				</span>
		// 			</li> 
		// 			<li>
		// 				<span class="page3">
		// 					<img onclick="goToPage(3)" class="img-responsive" src="assets/thumb/page3.png" />
		// 				</span>
		// 			</li> 
		// 			<li>
		// 				<span class="page4"> 
		// 					<img onclick="goToPage(4)" class="img-responsive" src="assets/thumb/page4.png" />
		// 				</span>
		// 			</li>
		// 			<li>
		// 				<span class="page5">
		// 					<img onclick="goToPage(5)" class="img-responsive" src="assets/thumb/page5.png" />
		// 				</span>
		// 			</li> 
		// 			<li>
		// 				<span class="page6">
		// 					<img onclick="goToPage(6)" class="img-responsive" src="assets/thumb/page6.png" />
		// 				</span>
		// 			</li>
		// 			<li>
		// 				<span class="page7"> 
		// 					<img onclick="goToPage(7)" class="img-responsive" src="assets/thumb/page7.png" />
		// 				</span>
		// 			</li>
		// 			<li>
		// 				<span class="page8">
		// 					<img onclick="goToPage(8)" class="img-responsive" src="assets/thumb/page8.png" />
		// 				</span>
		// 			</li> 
		// 			<li>
		// 				<span class="page9"> 
		// 					<img onclick="goToPage(9)" class="img-responsive" src="assets/thumb/page9.png" />
		// 				</span>
		// 			</li> 
		// 			<li>
		// 				<span class="page10">
		// 					<img onclick="goToPage(10)" class="img-responsive" src="assets/thumb/page10.png" />
		// 				</span>
		// 			</li> 
		// 			<li>
		// 				<span class="page11"> 
		// 					<img onclick="goToPage(11)" class="img-responsive" src="assets/thumb/page11.png" />
		// 				</span>
		// 			</li>
		// 			<li>
		// 				<span class="page12"> 
		// 					<img onclick="goToPage(12)" class="img-responsive" src="assets/thumb/page12.png" />
		// 				</span>
		// 			</li> 
		// 			<li>
		// 				<span class="page13">
		// 					<img onclick="goToPage(13)" class="img-responsive" src="assets/thumb/page13.png" />
		// 				</span>
		// 			</li>
		// 			<li>
		// 				<span class="page14">
		// 					<img onclick="goToPage(14)" class="img-responsive" src="assets/thumb/page14.png" />
		// 				</span>
		// 			</li> 
		// 			<li>
		// 				<span class="page15"> 
		// 					<img onclick="goToPage(15)" class="img-responsive" src="assets/thumb/page15.png" />
		// 				</span>
		// 			</li>
		// 			<li>
		// 				<span class="page16"> 
		// 					<img onclick="goToPage(16)" class="img-responsive" src="assets/thumb/page16.png" />
		// 				</span>
		// 			</li>
		// 			<li>
		// 				<span class="page17"> 
		// 					<img onclick="goToPage(17)" class="img-responsive" src="assets/thumb/page17.png" />
		// 				</span>
		// 			</li> 
		// 			<li>
		// 				<span class="page18"> 
		// 					<img onclick="goToPage(18)" class="img-responsive" src="assets/thumb/page18.png" />
		// 				</span>
		// 			</li>
		// 			<li>
		// 				<span class="page19"> 
		// 					<img onclick="goToPage(19)" class="img-responsive" src="assets/thumb/page19.png" />
		// 				</span>
		// 			</li> 
		// 			<li>
		// 				<span class="page20"> 
		// 					<img onclick="goToPage(20)" class="img-responsive" src="assets/thumb/page20.png" />
		// 				</span>
		// 			</li> 
		// 			<li>
		// 				<span class="page21"> 
		// 					<img onclick="goToPage(21)" class="img-responsive" src="assets/thumb/page21.png" />
		// 				</span>
		// 			</li>
		// 			<li>
		// 				<span class="page22"> 
		// 					<img onclick="goToPage(22)" class="img-responsive" src="assets/thumb/page22.png" />
		// 				</span>
		// 			</li>
		// 			<li>
		// 				<span class="page23"> 
		// 					<img onclick="goToPage(23)" class="img-responsive" src="assets/thumb/page23.png" />
		// 				</span>
		// 			</li>
		// 			<li>
		// 				<span class="page7">
		// 					<img onclick="goToPage(7)" class="img-responsive" src="assets/thumb/page24.png" />
		// 				</span>
		// 			</li>					 
		// 			<li>
		// 				<span class="page25">
		// 					<img onclick="goToPage(25)" class="img-responsive" src="assets/thumb/page25.png" />
		// 				</span>
		// 			</li>
		// 				<li>
		// 				<span class="ifu-page">
		// 					<img onclick="goToPage(26);" class="img-responsive" src="assets/thumb/ifu-page.png" />
		// 				</span>
		// 			</li>			
                     
        //         </ul>`);
    });

    // $(window).on('ready', function () {
    //     $('.loop').each(function() {
    //         $this = $(this);
            
    //         var url = $this[0].src;
    //         var urlParts = url.split('?');
    //         var params = new URLSearchParams(urlParts[1]);
    //         params.delete('v');

    //         var newUrl = urlParts[0];

    //         // $this.attr('src', '');
    //         setTimeout(() => {
    //             $this.attr('src', `${newUrl}?v=${Math.random()}`);
    //             console.log('NEW VERSION URL :: ', $this[0].src);
    //         }, 100);
    //     });
    // });
});
