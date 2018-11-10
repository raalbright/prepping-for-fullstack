import { Router } from "express";
import { ChirpController } from "../../../controllers";

const router = Router();

router.get( '/', ChirpController.index );

router.post( '/create', ChirpController.create );

router.get( '/:id', ChirpController.read );

router.put( '/:id/edit', ChirpController.update );

router.delete( '/:id/delete', ChirpController.destroy );

export default router;
