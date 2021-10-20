import NavigationSidebar from "../NavigationSidebar/index.js";
import HomeComponent from "./HomeComponent.js";
import PostSummaryList from "../PostSummaryList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2 col-lg-1 col-xl-2">
                ${NavigationSidebar('home')}
            </div>
            <div class="col-10 col-lg-7 col-xl-6">
                ${HomeComponent()}
            </div>
            <div class="col-4 col-lg-4 col-xl-4 d-lg-block d-none">
                ${PostSummaryList()}
            </div>
        </div>
    `);
})($);
