const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');
const app = express();



const stripe = new Stripe("sk_test_51KTs7yAoNDNCJZ0Xm4JJPNCLw9QyaQnCQeUrXTrF9Y32WSaKRU0R1Z1ze7LDA7bnv9VUeC5Hg4OLj8o0hQWq4Don00pgbVBf2c")
app.use(cors({ origin: "http://localhost:8000" }));

app.use(express.json())

app.post('/api/checkout', async (req, res)=>{


  try { 
    const {id, amount} = req.body;
    const payment = await stripe.paymentIntents.create({
      amount,
      currency:'USD',
      description:'garming',
      payment_method: id,
      confirm: true    
    })
    console.log(payment);
    res.send('recibido por mi backend')
  } catch (error) {
    res.json({message: error.raw.message})
  }
 
})

app.listen(3001, ()=>{
  console.log('server in port', 3001);
})