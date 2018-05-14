<template>
  <div class="row mt-4">
    <div class="col-lg-4 order-lg-2">
        <member-search-form></member-search-form>
    </div>

    <div class="col-lg-8 order-lg-1">
        <div class="row" v-if="loading">
            <search-loader></search-loader>
            <search-loader></search-loader>
            <search-loader></search-loader>
            <search-loader></search-loader>
        </div>
        <div class="row" v-else>
            <member-short-profile
              v-for="investor in investors"
              :key="investor.id"
              :short-name="investor.shortName"
              :username="investor.username"
              userType="Borrowers"
              :region="investor.region"
              :firstName="investor.firstName"
              profileStatus="My short information here"
              :followStatus="false"></member-short-profile>
        </div>
        <loading-spinner v-if="loadMore"></loading-spinner>
        <alert-cloud v-if="loadEnd" text="Seems this is the end of it all, We have no more users at this end"></alert-cloud>

    </div>
  </div>
</template>

<script>
import MemberSearchForm from '@/components/Members/MemberSearchForm'
import MemberShortProfile from '@/components/Members/MemberShortProfile'
import SearchLoader from '@/components/Members/SearchLoader'
import LoadingSpinner from '@/components/Members/LoadingSpinner'
import AlertCloud from '@/components/AlertCloud'
import axios from 'axios'
import $ from 'jquery'
export default {
  name: 'borrowers-list',
  components: {
    MemberShortProfile,
    MemberSearchForm,
    SearchLoader,
    LoadingSpinner,
    AlertCloud
  },
  data () {
    return {
      loading: true,
      investors: [],
      page: 1,
      end: false,
      loadMore: false,
      loadEnd: false
    }
  },
  created () {
    this.fetchInvestors()
  },
  methods: {
    async fetchInvestors () {
      try {
        this.end = false
        let { data } = await axios.get(`/api/users/borrowers/${this.page}`)
        console.log(data)
        this.page = (data.current === data.pages) ? Number(data.current) : Number(data.current) + 1
        // eslint-disable-next-line
        this.end = (data.current === data.pages) ? true : false
        this.investors.push(...data.user)// Add the newly fetched user to the user collection that we have
        this.loading = false
      } catch (e) {
        console.log(e)
      }
    },
    async fetchOtherInvestors () {
      try {
        if (this.end === true) {
          this.loadMore = true
          this.loadEnd = true
          this.loadMore = false
        } else {
          this.loadMore = true
          let { data } = await axios.get(`/api/users/borrowers/${this.page}`)
          console.log(data)
          this.investors.push(...data.user)// Add the newly fetched user to the user collection that we have
          this.page = (data.current === data.pages) ? Number(data.current) : Number(data.current) + 1
          // eslint-disable-next-line
          this.end = (data.current === data.pages) ? true : false
          console.log(this.end)
          this.loading = false
        }
      } catch (e) {
        console.log(e)
      }
    },
    searchInvestors () {
      // Search the investors here and this is anaction that will be invoked inside the search form
    }
  },
  mounted () {
    let _this = this
    const $window = $(window)
    const $document = $(document)
    $window.on('scroll', () => {
      if ($window.scrollTop() + $window.height() > $document.height() - 100) {
        _this.fetchOtherInvestors()
      }
    })
  }
}
</script>
