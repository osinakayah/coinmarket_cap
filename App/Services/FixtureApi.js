
export default {
  // Functions return fixtures
  getCoinListService: ({start, limit}) => {
    return {
      ok: true,
      data: require('../Fixtures/coins')
    }
  }
}
