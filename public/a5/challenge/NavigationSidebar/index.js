import NavigationComponent from "./NavigationComponent.js";
import Buttons from "./Buttons.js";

const NavigationSidebar = (active) => {
    return (`            <div class="list-group">
                <a class="list-group-item list-group-item-action">
                    <i class="fab fa-twitter pe-2"></i></a>
                ${Buttons
        .map((elem) => {
            return NavigationComponent(elem, active);
        })
        .join("")}
                <a class="list-group-item list-group-item-action
                d-flex align-items-center">
                    <i class="fa fa-bell pe-2"></i>
                    <span class="d-none d-xl-block">Notifications</span></a>
                <a class="list-group-item list-group-item-action
                d-flex align-items-center">
                    <i class="fa fa-envelope pe-2"></i>
                    <span class="d-none d-xl-block">Messages</span></a>
                <a class="list-group-item list-group-item-action
                d-flex align-items-center">
                    <i class="fa fa-bookmark pe-2"></i>
                    <span class="d-none d-xl-block">Bookmarks</span></a>
                <a class="list-group-item list-group-item-action
                d-flex align-items-center">
                    <i class="fa fa-list pe-2"></i>
                    <span class="d-none d-xl-block">Lists</span></a>
                <a class="list-group-item list-group-item-action
                d-flex align-items-center">
                    <i class="fa fa-user pe-2"></i>
                    <span class="d-none d-xl-block">Profile</span></a>
                <a class="list-group-item list-group-item-action
                d-flex align-items-center mb-2">
                    <i class="fa fa-ellipsis-h pe-2"></i>
                    <span class="d-none d-xl-block">More</span></a>
            </div>
            <button class="btn btn-primary wd-tweet-btn">Tweet</button>`);
}
export default NavigationSidebar;
