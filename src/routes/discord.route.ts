import { Router } from 'express';
import { sendDiscordNotification } from '../controllers/discord.controller'

const router: Router = Router();

router.post('/event-notification', sendDiscordNotification);

export default router;