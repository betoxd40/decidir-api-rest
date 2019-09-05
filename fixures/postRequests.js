const paymentTokenRequestBody = {
    card_number: "4507990000004905",
    card_expiration_month: "08",
    card_expiration_year: "20",
    security_code: "123",
    card_holder_name: "John Doe",
    card_holder_identification: {
      type: "dni",
      number: "25123456"
    }
};

const paymentExecutionRequestBody = {
    site_transaction_id: "prueba 1",
    token: "e17a07fb-50ff-4256-bdf7-b23d93c8ad99",
    payment_method_id: 1,
    bin: "450799",
    amount: 2000,
    currency: "ARS",
    installments: 1,
    description: "",
    payment_type: "single",
    sub_payments: []
  }

module.exports = { paymentTokenRequestBody, paymentExecutionRequestBody };