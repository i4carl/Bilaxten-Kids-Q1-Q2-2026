var timeEvents = {};
var eventToEnd = null;

$( window ).on( "load", function() {
    trackPageChange(getCurrentPage());
    // var imageid = $.mobile.activePage[0].id;
    // var imgsrc = $('#'+imageid).children('img').map(function () {
    //     return $(this).attr('src')
    // }).get()
    // var imgsrc = $('#' + imageid+ ' img');
    // console.log('imgsrd', imgsrc)
    // img.src = "your_image_url.gif" + "?a=" + Math.random();
    $(document).on( "pagechange", function( event ) {
        trackPageChange(getCurrentPage());
    });
});

$(document).on('swipeleft', '.ui-page', function(event){    
    if(event.handled !== true) {    
        if ($.mobile.activePage[0].dataset.next) {
            var nextpage = $.mobile.activePage[0].dataset.next;
            // console.log("notavaliable");
            goToPage(nextpage);
        }
        else{
            var nextpage = $.mobile.activePage.next('[data-role="page"]');
            if (nextpage.length > 0  && nextpage[0].id !== 'page8'&& nextpage[0].id !== 'page12' && nextpage[0].id !== 'page14' && nextpage[0].id !== 'page16' && nextpage[0].id !== 'page18' && nextpage[0].id !== 'page19' && nextpage[0].id !== 'page22' && nextpage[0].id !== 'page25' && nextpage[0].id !== 'page26'/*  && nextpage[0].id !== 'page2' */) {
                // $.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true);
            }
            event.handled = true;
        }
    }
    return false;         
});

$(document).on('click', 'img[src="assets/img/global/ArrowRight.png"], img[src="assets/img/page13/ArrowRight.png"]', function(event){    
    if(event.handled !== true) {    
        if ($.mobile.activePage[0].dataset.next) {
            var nextpage = $.mobile.activePage[0].dataset.next;
            // console.log("notavaliable");
            goToPage(nextpage);
        }
        else{
            var nextpage = $.mobile.activePage.next('[data-role="page"]');
            if (nextpage.length > 0  && nextpage[0].id !== 'page8'&& nextpage[0].id !== 'page12' && nextpage[0].id !== 'page14' && nextpage[0].id !== 'page16' && nextpage[0].id !== 'page18' && nextpage[0].id !== 'page19' && nextpage[0].id !== 'page22' && nextpage[0].id !== 'page25' && nextpage[0].id !== 'page26'/*  && nextpage[0].id !== 'page2' */) {
                // $.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true);
            }
            event.handled = true;
        }
    }
    return false;         
});


$(document).on('swiperight', '.ui-page', function(event){     
    if(event.handled !== true) { 
        if ($.mobile.activePage[0].dataset.prev) {
            var prevpage = $.mobile.activePage[0].dataset.prev;
            goToPage(prevpage);
        }
        else{
            var prevpage = $(this).prev('[data-role="page"]');
            if (prevpage.length > 0   && prevpage[0].id !== "page11" && prevpage[0].id !== "page13" && prevpage[0].id !== "page15" && prevpage[0].id !== "page17" && prevpage[0].id !== "page18" && prevpage[0].id !== "page21" && prevpage[0].id !== "page25" && prevpage[0].id !== "page24" /* && prevpage[0].id !== "page4" */) {
                 $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
            }
             event.handled = true;
        }
    }
    return false;            
});

$(document).on('click', 'img[src="assets/img/global/ArrowLeft.png"], img[src="assets/img/page13/ArrowLeft.png"]', function(event){   
    if(event.handled !== true) { 
        if ($.mobile.activePage[0].dataset.prev) {
            var prevpage = $.mobile.activePage[0].dataset.prev;
            goToPage(prevpage);
        }
        else{
            var prevpage = $(this).prev('[data-role="page"]');
            if (prevpage.length > 0   && prevpage[0].id !== "page11" && prevpage[0].id !== "page13" && prevpage[0].id !== "page15" && prevpage[0].id !== "page17" && prevpage[0].id !== "page18" && prevpage[0].id !== "page21" && prevpage[0].id !== "page25" && prevpage[0].id !== "page24" /* && prevpage[0].id !== "page4" */) {
                 $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
            }
             event.handled = true;
        }
    }
    return false;            
});

// Change page description based on xlsx file.

var pagedescription = [
  "Cover Page",
  "RECOMMENDED",
  "Bilaxten KIDS",
  "Bilaxten 20mg",
  "References",
  "Abridged Product Information"
];

function trackPageChange(currentPage) {
    if (eventToEnd != null) {
        const currentAttributeEventId = getDataEventIdFromPage(eventToEnd);
        endVisitEvent(currentAttributeEventId);
    }
    const activeAttributeEventId = getDataEventIdFromPage(currentPage);
    callVisitEvent(activeAttributeEventId, pagedescription[currentPage - 1]);
    eventToEnd = activeAttributeEventId;
}

function trackEventClick(element, eventDescription) {
    const eventId = element.getAttribute('data-md-event-id');
    callVisitEvent(eventId, eventDescription);
}

function callVisitEvent(eventId, eventDescription) {
    visitEvent(eventId, eventDescription, null, true);
}

function visitEvent(event, eventDescription, attribute, cron) {
    try {
        Tracking.startEvent(event, eventDescription, attribute, cron).then(
        function (idEvent) {
            timeEvents[event] = idEvent;
            console.log('Visited ' + event);
        },
        function (err) {
            console.error(err);
        }
        );
    } catch(err) {
        console.error(err);
    }
}

function endVisitEvent(pageId) {
    if (pageId != null && timeEvents[pageId] != null) {
        try {
            var eventId = timeEvents[pageId];
            Tracking.endEvent(eventId).then(
                function () {
                    console.log('Ended time event for page '  + pageId);
                    delete timeEvents[pageId];
                },
                function (err) {
                    console.error(err);
                }
            );
        } catch(err) {
            console.error(err);
        }
    }
}

function setMandatoryEvents(events) {
    try {
        Tracking.setMandatoryEvents(events).then(
        function () {
            console.log('Setted ' + events);
        },
        function (err) {
            console.error(err);
        } 
        );
    } catch(err) {
        console.error(err);
    }
}

function getDataEventIdFromPage(page) {
    if(page != null) {
        if(typeof page === 'string') {
            return page;
        }
        return page[0].attributes["data-md-event-id"].value;
    }
}

function goToPage(page) {
    if (Number(getCurrentPage()) <= page) {
        $.mobile.changePage('#page' + page, {transition: "slide", reverse: false}, true, true);
    } else {
        $.mobile.changePage('#page' + page, {transition: "slide", reverse: true}, true, true);
    }
}

function getCurrentPage() {
    return $.mobile.activePage[0].id.split("page")[1];
}

function goToNextPage() {
  var currentPage = Number(getCurrentPage());
  var nextPageId = currentPage + 1;
  var nextPage = $("#page" + nextPageId);

  if (nextPage.length > 0) {
    $.mobile.changePage(
      "#page" + nextPageId,
      { transition: "slide", reverse: false },
      true,
      true
    );
  } else {
    console.log("No next page available");
  }
}
