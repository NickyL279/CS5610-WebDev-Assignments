const NavigationComponent = (Buttons, active) => {
    if (active === Buttons.Title) {
    return `
        <a href= "${Buttons.Link}" class="list-group-item list-group-item-action active
        d-flex align-items-center" >
        <i class="fa fa-home pe-2"></i>
        <span class="d-none d-xl-block">${Buttons.Name}</span></a>
    `;
    }
    else {
        return `
        <a href= "${Buttons.Link}" class="list-group-item list-group-item-action
        d-flex align-items-center">
        <i class="fa fa-hashtag pe-2"></i>
        <span class="d-none d-xl-block">${Buttons.Name}</span></a>
    `;
    }
};

export default NavigationComponent;
