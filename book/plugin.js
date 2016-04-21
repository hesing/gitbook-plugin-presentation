require(["gitbook", "jquery"], function(gitbook, $) {
    gitbook.events.bind("start", function(e, config) {

    });

    gitbook.events.bind("page.change", function() {
        var $pageWrapper = $('.page-wrapper'),
        	$headers = $pageWrapper.find('h1:not(.search-results-title), h2'),
        	total = $headers.length;

        $headers.each(function(index) {
            var $this = $(this);
            $this.append('<i class="fa pull-right">'+(index+1)+ '/'+ total+'</i>');
            $this.add($this.nextUntil('h2')).wrapAll('<div class="section-container"></div>');
        });

        var $sectionContainer = $('.section-container');
        $sectionContainer.not(":first").fadeOut();

        function getNext() {
            var $curr = $('.section-container:visible'),
                $next = ($curr.next().length) ? $curr.next() : $('.section-container').first();
            transition($curr, $next);
        }

        function getPrev() {
            var $curr = $('.section-container:visible'),
                $next = ($curr.prev().length) ? $curr.prev() : $('.section-container').last();
            transition($curr, $next);
        }

        function transition($curr, $next) {
            $next.css('z-index', 2).fadeIn(function() {
                $curr.fadeOut().css('z-index', 0);
                $next.css('z-index', 1);
            });
        }

        $(window).off('keyup').on("keyup", function(event) {
            if (event.which === 188) {
                getPrev();
            } else if (event.which === 190) {
                getNext();
            }
        });    
    });
});
