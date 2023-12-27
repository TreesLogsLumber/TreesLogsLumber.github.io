<script>
    $(document).ready(function () {
        // Smooth scrolling for scroll links
        $(".scroll-link").click(function (event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: $($.attr(this, "href")).offset().top
            }, 50); // Adjust the speed of the scrolling if needed
        });
    });
</script>
