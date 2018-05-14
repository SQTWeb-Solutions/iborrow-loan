<template>
   <li class="o-media c-request__item ">
    <div class="o-media__img u-mr-small">
        <div class="c-avatar c-avatar--medium ">
            <span class="c-avatar__name c-avatar--square" >QA</span>
        </div>
    </div>
    <div class="c-requests-item__content o-media__body">
        <div class="c-requests-item__header">
            <a class="c-requests-item__name" href="#">Mollie Richardson<span class="c-requests-item__username">@Mollie</span>
            </a>
            <span class="c-requests-item__time">3m</span>
        </div>
        <p class="c-requests__comment">What information would it be required for someone who want to take the loan</p>
        <h5 >Borrowing 10k for just quick action</h5>
        <p class="u-mb-small">Lending out 5milion to people for any number of days they want lorem lypsum lorem lorem lorem lorem lypsum lorem lypsu</p>

        <div class="u-flex u-justify-between">
            <div class="c-requests-item__actionlist">
                <a class="c-btn c-btn--info has-icon c-btn--small" href="#">
                    <i class="feather icon-heart"></i> View
                </a>
                <a class="c-btn c-btn--secondary has-icon c-btn--small" href="#">
                    <i class="feather icon-archive"></i> Archive
                </a>
                <a class="c-btn c-btn--danger has-icon c-btn--small" href="#">
                    <i class="feather icon-trash-2"></i> Delete Request
                </a>
            </div>
        </div>
    </div>
  </li>
</template>

<script>
// TODO: Add view option for user type, if investors it should show some options if borrower it should be different
export default {
  name: 'request-list'
}
</script>
