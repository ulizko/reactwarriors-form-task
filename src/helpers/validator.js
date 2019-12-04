export default (fields, rules) => {
  return Object.entries(fields).reduce((errors, field) => {
    const [name, value] = field
    const { required, limit, equalTo, format } = rules[name]

    if (limit && value.length < limit) {
      errors[name] = `Must be ${limit} characters or more`
    }
    if (equalTo && value !== fields[equalTo]) {
      errors[name] = `Must be equal ${equalTo}`
    }
    if (format && !format.test(value)) {
      errors[name] = `Invalid format`
    }
    if (required && !value) {
      errors[name] = 'Required'
    }
    return errors
  }, {})
}
