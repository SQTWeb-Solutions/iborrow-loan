<template>
  <div class="row mt-4">
    <div class="c-table-responsive@wide col-12">
        <caption class="c-table__title d-flex justify-content-between">
            Ongoing Transactions
            <a class="c-btn c-btn-small c-btn--success has-icon-left" href="#!">
                <i class="feather icon-check-square"></i> Past Transactions
            </a>
        </caption>
        <table class="c-table">
          <thead class="c-table__head">
            <tr class="c-table__row">
              <th class="c-table__cell c-table__cell--head"># ID</th>
              <th class="c-table__cell c-table__cell--head">Transaction Info</th>
              <th class="c-table__cell c-table__cell--head">Borrowers</th>
              <th class="c-table__cell c-table__cell--head">Deadline</th>
              <th class="c-table__cell c-table__cell--head">Budget</th>
              <th class="c-table__cell c-table__cell--head">Status</th>
              <th class="c-table__cell c-table__cell--head">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr class="c-table__row c-table__row--danger">
              <td class="c-table__cell">12453</td>
              <td class="c-table__cell">
                Lending #5milion ...
                  <small class="u-block u-text-mute">
                    Budget <i class="feather icon-hash"></i> 4,000,000

                  </small>
              </td>
              <td class="c-table__cell">
                <div class="o-media">
                  <div class="o-media__img u-mr-xsmall">
                    <div class="c-avatar c-avatar--xsmall">
                      <span class="c-avatar__name">QA</span>
                    </div>
                  </div>
                  <div class="o-media__body">
                    <a href="#"><h6>Adam Sandler <span class="c-stream-item__username">@Mollie</span></h6></a>
                    <small><i class="feather icon-life-buoy"></i> Investors | <i class="feather icon-map-pin"></i> Abuja</small>
                  </div>
                </div>
              </td>
              <td class="c-table__cell">17th Oct, 17
                  <small class="u-block u-text-danger">Overdue</small>
              </td>
              <td class="c-table__cell">$4,670
                  <small class="u-block u-text-mute">Paid</small>
              </td>
              <td class="c-table__cell">
                  <i class="feather icon-paused-circle u-color-info u-mr-xsmall"></i>Pending
              </td>
              <td class="c-table__cell">
                <a href="#" class="c-btn c-btn--info has-icon" >
                  View <i class="feather icon-chevron-right"></i>
                </a>
              </td>
            </tr>
            <tr class="c-table__row c-table__row--success">
              <td class="c-table__cell">12453</td>
              <td class="c-table__cell">
                Lending #5milion ...
                  <small class="u-block u-text-mute">
                    Budget <i class="feather icon-hash"></i> 4,000,000

                  </small>
              </td>
              <td class="c-table__cell">
                <div class="o-media">
                  <div class="o-media__img u-mr-xsmall">
                    <div class="c-avatar c-avatar--xsmall">
                      <span class="c-avatar__name">QA</span>
                    </div>
                  </div>
                  <div class="o-media__body">
                    <a href="#"><h6>Adam Sandler <span class="c-stream-item__username">@Mollie</span></h6></a>
                    <small><i class="feather icon-life-buoy"></i> Investors | <i class="feather icon-map-pin"></i> Abuja</small>
                  </div>
                </div>
              </td>
              <td class="c-table__cell">17th Oct, 17
                  <small class="u-block u-text-danger">Overdue</small>
              </td>
              <td class="c-table__cell">$4,670
                  <small class="u-block u-text-mute">Paid</small>
              </td>
              <td class="c-table__cell">
                  <i class="feather icon-paused-circle u-color-info u-mr-xsmall"></i>Pending
              </td>
              <td class="c-table__cell">
                <a href="#" class="c-btn c-btn--info has-icon" >
                  View <i class="feather icon-chevron-right"></i>
                </a>
              </td>
            </tr>
            <tr class="c-table__row c-table__row--danger">
              <td class="c-table__cell">12453</td>
              <td class="c-table__cell">
                Lending #5milion ...
                  <small class="u-block u-text-mute">
                    Budget <i class="feather icon-hash"></i> 4,000,000

                  </small>
              </td>
              <td class="c-table__cell">
                <div class="o-media">
                  <div class="o-media__img u-mr-xsmall">
                    <div class="c-avatar c-avatar--xsmall">
                      <span class="c-avatar__name">QA</span>
                    </div>
                  </div>
                  <div class="o-media__body">
                    <a href="#"><h6>Adam Sandler <span class="c-stream-item__username">@Mollie</span></h6></a>
                    <small><i class="feather icon-life-buoy"></i> Investors | <i class="feather icon-map-pin"></i> Abuja</small>
                  </div>
                </div>
              </td>
              <td class="c-table__cell">17th Oct, 17
                  <small class="u-block u-text-danger">Overdue</small>
              </td>
              <td class="c-table__cell">$4,670
                  <small class="u-block u-text-mute">Paid</small>
              </td>
              <td class="c-table__cell">
                  <i class="feather icon-paused-circle u-color-info u-mr-xsmall"></i>Pending
              </td>
              <td class="c-table__cell">
                <a href="#" class="c-btn c-btn--info has-icon" >
                  View <i class="feather icon-chevron-right"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>
// TODO: Seperate to components
export default {
  name: 'active-transactoin-list'
}
</script>
