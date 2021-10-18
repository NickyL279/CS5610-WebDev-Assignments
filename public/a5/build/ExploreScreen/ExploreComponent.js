import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
    <div class="row">
        <div class="mb-2 d-flex align-items-center">
            <i class="fa fa-search wd-icon-search"></i>
            <input class="w-100 wd-input-search-bar" placeholder="Search Twitter"/>
            <i class="fa fa-cog fa-2x text-primary"></i>
        </div>
    </div>
        <ul class="nav nav-tabs mb-2">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link
                d-none d-md-block d-lg-block d-xl-block d-xxl-block" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;