import { type Request, type Response, type RequestHandler } from 'express'
import axios from 'axios'

// @desc     Send notifications about in-game server auto-events location.
// @route    /event-notification
// @method   POST

export const sendDiscordNotification: RequestHandler = async (req: Request, res: Response) => {
   const DISCORD_EVENT_HOOK_URL = process.env.DISCORD_EVENT_HOOK_URL || ''
   const { location } = req.body

   if (!location) {
      res.status(400).json({ error: 'No location provided' })
      return
   }

   try {
      await axios.post(DISCORD_EVENT_HOOK_URL, {
         content: '',
         tts: false,
         embeds: [
            {
               description: `📍 Местоположение: ${location}`,
               fields: [],
               title: 'Ивент начался!',
               timestamp: new Date().toISOString(),
            },
         ],
         components: [],
         actions: {},
      })

      res.status(200).json({ success: true, message: 'Notification sent to Discord' })
   } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Failed to send notification to Discord' })
   }
}