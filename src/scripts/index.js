const menuButton = document.querySelector(`.menu-btn`);

const handleMenuClick = (clickEvent) => {
    clickEvent.preventDefault();

    const headerNavWrap = document.querySelector(`.header__nav-wrap`);
    const headerWrap = document.querySelector(`.header__wrap`);

    if (clickEvent.target.classList.contains(`menu-btn--closed`)) {
        clickEvent.target.classList.remove(`menu-btn--closed`);
        clickEvent.target.classList.add(`menu-btn--opened`);

        headerNavWrap.classList.add(`header__nav-wrap--opened`);
        headerWrap.classList.add(`header__wrap--opened`);
    } else {
        clickEvent.target.classList.remove(`menu-btn--opened`);
        clickEvent.target.classList.add(`menu-btn--closed`);

        headerNavWrap.classList.remove(`header__nav-wrap--opened`);
        headerWrap.classList.remove(`header__wrap--opened`);
    }
}

menuButton.addEventListener(`click`, handleMenuClick);
