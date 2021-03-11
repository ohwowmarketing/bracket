import { NextApiRequest, NextApiResponse } from 'next'
const mailchimp = require('@mailchimp/mailchimp_marketing')
const md5 = require('md5')
import { setHeaders } from '@lib/headers'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const end = setHeaders(req, res)
  if (end) {
    return
  }
  const { email, tag } = req.body
  const subscriberHash = md5(email.toLowerCase())
  try {
    const result = await mailchimp.lists.updateListMemberTags(
      process.env.MAILCHIMP_AUDIENCE_ID,
      subscriberHash,
      {
        tags: [
          {
            name: `${tag}`,
            status: 'active'
          }
        ]
      }
    )
    // no result on success
    if (result) {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ status: result }))
    }
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ status: 'success' }))
  } catch (e) {
    res.statusCode = e.status
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ status: e.message }))
  }
}
