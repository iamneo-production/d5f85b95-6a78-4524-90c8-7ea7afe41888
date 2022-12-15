const request = require('supertest')
const app = require('../server')
const crypto = require('crypto')

var random = crypto.randomBytes(2).toString('hex');

// Signup
it('node_test_case1', async () => {

  const res1 = await request("https://api.example.com")
    .post('/signup')
    .send({
      email: "test"+random+"@gmail.com",
      username: "test",
      role: "ADMIN",
      password: `${random}`,
      mobileNumber: "8596748596",
      role: "USER",
      active: true
    })

  expect(res1.statusCode).toEqual(200)
})

// Login
it('node_test_case2', async () => {
    // Login
  const res2 = await request("https://api.example.com")
    .post('/login')
    .send({
      email: "test"+random+"@gmail.com",
      password: random
    })
  expect(res2.statusCode).toEqual(200)
})

// Add Product
it('node_test_case3', async () => {
    const res = await request("https://api.example.com")
      .post('/admin/addProduct')
      .send({
        productName: "book",
        description: "test book",
        price: "120",
        imageUrl: "abcd",
        quantity: "10"
      })
    expect(res.statusCode).toEqual(200)
})

// Home
it('node_test_case4', async () => {
  const res = await request("https://api.example.com")
    .get('/home')
  expect(res.statusCode).toEqual(200)
})

// Orders
it('node_test_case5', async () => {
  const res = await request("https://api.example.com")
    .get('/admin/orders')
  expect(res.statusCode).toEqual(200)
})

it('node_test_case6', async () => {
  const res = await request("https://api.example.com")
    .get("/cart/Test"+random+"@gmail.com")
  expect(res.statusCode).toEqual(200)
})