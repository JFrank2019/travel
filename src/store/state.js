let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {
  Promise.reject(error)
}

export default {
  city: defaultCity
}
