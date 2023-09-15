
// **************** for dashboard cards *****************
var analytics_btn = document.getElementById('analytics-btn');
var analytics_card = document.getElementById('dashcard1');

var my_projects_btn = document.getElementById('my-projects-btn');
var my_projects_card = document.getElementById('dashcard2');

var contributions_btn = document.getElementById('contributions-btn');
var contributions_card = document.getElementById('dashcard3');

var settings_btn = document.getElementById('settings-btn');
var settings_card = document.getElementById('dashcard4');

var current_top = analytics_card;

analytics_btn.addEventListener('click', () => {

    if (current_top !== analytics_card) {
        analytics_card.style.height = '100%';
        current_top.style.height = '0';
        current_top = analytics_card;
    }
})

my_projects_btn.addEventListener('click', () => {

    if(current_top !== my_projects_card) {
        my_projects_card.style.height = '100%';
        current_top.style.height = '0';
        current_top = my_projects_card;
    }
})

contributions_btn.addEventListener('click', () => {

    if(current_top !== contributions_card) {
        contributions_card.style.height = '100%';
        current_top.style.height = '0';
        current_top = contributions_card;
    }
})

settings_btn.addEventListener('click', () => {

    if(current_top !== settings_card) {
        settings_card.style.height = '100%';
        current_top.style.height = '0';
        current_top = settings_card;
    }
})
