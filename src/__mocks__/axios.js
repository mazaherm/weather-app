/* global jest */
/* eslint no-undef: "error" */

export default {
  get: jest.fn(() => Promise.resolve({ data: {} }))
}
