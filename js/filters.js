$(function() {

    let filter = $("[data-filter]");

    filter.on("click", function() {

        let cat = $(this).data('filter');

        if(cat == 'all') {
            $("[data-cat]").removeClass("visually-hidden");
        } else {
            $("[data-cat]").each(function() {
                let workCat = $(this).data('cat');

                if(workCat != cat) {
                    $(this).addClass('visually-hidden');
                } else {
                    $(this).removeClass('visually-hidden');
                }
            });
        }
    });
});
