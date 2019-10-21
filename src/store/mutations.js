export default {
  changeCity(state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
