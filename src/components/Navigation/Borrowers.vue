<template>
<div>
    <span class="c-sidebar__title">Dashboards</span>
    <ul class="c-sidebar__list">
        <li>
            <router-link :to="{ name: 'borrowers.dashboard' }" class="c-sidebar__link" >
                <i class="c-sidebar__icon feather icon-hash"></i> Trending <span class="badge badge-danger u-ml-auto">NEW</span>
            </router-link>
        </li>
    </ul>
    <span class="c-sidebar__title">Investments</span>
    <ul class="c-sidebar__list">
        <li class="c-sidebar__item has-submenu">
            <a class="c-sidebar__link" data-toggle="collapse" href="#investment-submenu" aria-expanded="false" aria-controls="investment-submenu">
                <i class="c-sidebar__icon feather icon-briefcase"></i> Investments
            </a>
            <div>
                <ul class="c-sidebar__list collapse" id="investment-submenu">
                <li><router-link :to="{ name: 'borrowers.investors.request.featured' }" class="c-sidebar__link" >Featured Request</router-link></li>
                <li><router-link :to="{ name: 'borrowers.investors.transactions' }" class="c-sidebar__link" >Active Transaction</router-link></li>
                <li><router-link :to="{ name: 'borrowers.investors.activities' }" class="c-sidebar__link" >My Activities</router-link></li>
                <li><router-link :to="{ name: 'borrowers.investors' }" tags="a" class="c-sidebar__link">All Investors</router-link></li>
                </ul>
            </div>
        </li>
    </ul>
    <span class="c-sidebar__title">Borrowings</span>
    <ul class="c-sidebar__list">
        <li class="c-sidebar__item has-submenu">
            <a class="c-sidebar__link" data-toggle="collapse" href="#borrowings-submenu" aria-expanded="false" aria-controls="borrowings-submenu">
                <i class="c-sidebar__icon feather icon-package"></i> Borrowings
            </a>
            <div>
                <ul class="c-sidebar__list collapse" id="borrowings-submenu">
                <li><a class="c-sidebar__link" href="#">Create Borrowing Alert</a></li>
                <li><router-link :to="{ name: 'borrowers.borrowings.investors.requests' }" class="c-sidebar__link" >Investors Requests</router-link></li>
                <li><router-link :to="{ name: 'borrowers.borrowings.investors.activities' }" class="c-sidebar__link">My Activities</router-link></li>
                </ul>
            </div>
        </li>
    </ul>
    <span class="c-sidebar__title">Business Opporunity</span>
    <ul class="c-sidebar__list">
        <li class="c-sidebar__item has-submenu">
            <a class="c-sidebar__link" data-toggle="collapse" href="#business-submenu" aria-expanded="false" aria-controls="business-submenu">
                <i class="c-sidebar__icon feather icon-globe"></i> Opportunity
            </a>
            <div>
                <ul class="c-sidebar__list collapse" id="business-submenu">
                <li><a class="c-sidebar__link" href="#">Trending</a></li>
                <li><a class="c-sidebar__link" href="#">Saved Opportunity</a></li>
                <li><a class="c-sidebar__link" href="#">Sent Requests</a></li>
                <li><a class="c-sidebar__link" href="#">Received Requests</a></li>
                <li><a class="c-sidebar__link" href="#">Create Opportunity</a></li>
                <li><a class="c-sidebar__link" href="#">All Opportunity</a></li>
                </ul>
            </div>
        </li>
    </ul>
    <span class="c-sidebar__title">Legal Consultations</span>
    <ul class="c-sidebar__list">
        <li class="c-sidebar__item has-submenu">
            <a class="c-sidebar__link" data-toggle="collapse" href="#consultations-submenu" aria-expanded="false" aria-controls="consultations-submenu">
                <i class="c-sidebar__icon feather icon-shield"></i> Consultations
            </a>
            <div>
                <ul class="c-sidebar__list collapse" id="consultations-submenu">
                <li><a class="c-sidebar__link" href="#">New consultation</a></li>
                <li><a class="c-sidebar__link" href="#">My Consultations</a></li>
                </ul>
            </div>
        </li>
    </ul>
    <span class="c-sidebar__title">Action Links</span>
    <ul class="c-sidebar__list">
        <li>
            <a class="c-sidebar__link" href="#">
                <i class="c-sidebar__icon feather icon-message-square"></i> Messages <span class="badge badge-danger u-ml-auto">6</span>
            </a>
        </li>
        <li>
            <a class="c-sidebar__link" href="#">
                <i class="c-sidebar__icon feather icon-bell"></i> Notifications <span class="badge badge-danger u-ml-auto">20</span>
            </a>
        </li>
        <li>
            <router-link tag="a" :to="{ name: 'profile' }" class="c-sidebar__link" >
                <i class="c-sidebar__icon feather icon-user"></i> My Profile
            </router-link>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'investors-navigation'
}
</script>
