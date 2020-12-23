const mailchimp = require('@mailchimp/mailchimp_marketing')
const md5 = require('md5')

// const listId = process.env.MAILCHIMP_LIST_ID
// const email = 'prudence.mcvankab@example.com'
// const subscriberHash = md5(email.toLowerCase())

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
})

export default async (req, res) => {
  const { email, state } = req.body
  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        STATEABBR: state
      }
    })
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ status: 'success' }))
  } catch (e) {
    if (e.status === 404) {
      res.statusCode = 404
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ status: e.message }))
    }
  }
}
