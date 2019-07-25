
export default {
  // Functions return fixtures
  getCoinListService: ({start, limit}) => {
    if (start > 0) {
      return {
        ok: true,
        data: require('../Fixtures/coins.json')
      }
    }
    return {
      ok: false,
      data: require('../Fixtures/error.json')
    }

  }
}
