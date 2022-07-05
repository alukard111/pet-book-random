export default {
  clearInputNewBook(context) {
    context.commit('CLEAR_FORMAT_BOOK')
    context.commit('CLEAR_INPUT_BOOK')
  },
  writeNewFormatBook({ commit }, format) {
    commit('CLEAR_FORMAT_BOOK')
    console.log('format=====================>', format)
    commit('WRITE_FORMAT_BOOK', { format: format })
  }
}