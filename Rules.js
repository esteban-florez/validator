import acceptedSet from './Accepted.js'
import Validator from './Validator.js'

const Rules = {
  accepted: function (value) {
    return acceptedSet.has(value)
  },
  accepted_if: function (value, field, fieldValue) {
    const { element } = Validator.controls.get(field)
    
    if (element.value == fieldValue) {
      return this.accepted(value)
    }

    return true
  },
  after: function (value, date) {

  },
  after_or_equal: function (value, date) {

  },
  alpha: function (value) {

  },
  alpha_dash: function (value) {

  },
  alpha_num: function (value) {

  },
  before: function (value, date) {

  },
  before_or_equal: function (value, date) {

  },
  between: function (value, min, max) {

  },
  boolean: function (value) {

  },
  confirmed: function (value) {

  },
  date: function (value) {

  },
  date_equals: function (value, date) {

  },
  date_format: function (value, format) {

  },
  declined: function (value) {

  },
  declined_if: function (value, field, fieldValue) {

  },
  different: function (value, field) {

  },
  digits: function (value, length) {
    
  },
  digits_between: function (value, min, max) {
    
  },
  dimensions: function (value) {
    
  },
  email: function (value) {
    
  },
  ends_with: function (value, ...args) {
    
  },
  file: function (value) {
    
  },
  filled: function (value) {
    
  },
  gt: function (field) {
    
  },
  gte: function (field) {
    
  },
  image: function (value) {
    
  },
  in: function (value, ...args) {
    
  },
  integer: function (value) {
    
  },
  ip: function (value) {
    
  },
  ipv4: function (value) {
    
  },
  ipv6: function (value) {
    
  },
  mac_address: function (value) {
    
  },
  json: function (value) {
    
  },
  lt: function (value, field) {
    
  },
  lte: function (value, field) {
    
  },
  max: function (value, max) {
    return value.length <= +max
  },
  mimetypes: function (value, ...args) {
    
  },
  mimes: function (value, ...args) {
    // https://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types
    
  },
  min: function (value, min) {
    return value.length >= +min
  },
  multiple_of: function (value, divisor) {
    
  },
  not_in: function (value, ...args) {
    
  },
  not_regex: function (value, regex) {
    
  },
  nullable: function (value) {
    
  },
  numeric: function (value) {
    
  },
  regex: function (value, regex) {
    
  },
  required: function (value) {
    return value !== ''
  },
  required_if: function (value, field, fieldValue) {
    
  },
  required_unless: function (value, field, fieldValue) {
    
  },
  required_with: function (value, ...fields) {
    
  },
  required_with_all: function (value, ...fields) {
    
  },
  required_without: function (value, ...fields) {
    
  },
  required_without_all: function (value, ...fields) {
    
  },
  same: function (value, field) {
    
  },
  size: function (value, size) {
    
  },
  starts_with: function (value, ...args) {
    
  },
  string: function (value) {
    
  },
  timezone: function (value) {
    
  },
  url: function (value) {
    
  },
}

export default Rules