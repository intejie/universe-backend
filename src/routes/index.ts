import {Router} from 'express';

import discordRoutes from './discord.route'

const router: Router = Router();

router.use('/discord', discordRoutes);

export const routes: Router = router;