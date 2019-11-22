<template>
  <div id="main">
    <appHeader :progresLimit="limit" :progresCount="quoteText"></appHeader>
    <appNewQuote @quoteAdded="addQuote"></appNewQuote>
    <appQuoteGrid
      :gridQuote="quoteText"
      @quotedeleted="deleteQuote"
    ></appQuoteGrid>
  </div>
</template>

<script>
import Header from "./Heder";
import QuoteGrid from "./QuoteGrid";
import NewQuote from "./NewQuote";

export default {
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: Header
  },
  data: function() {
    return {
      quoteText: [],
      limit: 10
    };
  },
  methods: {
    addQuote(quote) {
      this.quoteText.push(quote);
    },
    deleteQuote(index) {
      this.quoteText.splice(index, 1);
    }
  }
};
</script>

<style scoped>
#main {
  margin: 100px 0 30px;
}
</style>
