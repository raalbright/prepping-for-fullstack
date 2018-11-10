import { Router } from "express";
import cs from "../../../chirpstore";

const router = Router();


router.get( '/:id?', ( req, res ) => {
  const { params: { id } } = req;

  if ( id !== undefined ) {
    res.json( cs.GetChirp( id ) );
  } else {
    const chirps = cs.GetChirps();
    const chirpsArray = Object.entries( chirps ).reduce( ( acc, [ id, chirp ] ) => {
      if ( id === 'nextid' ) {
        return acc;
      }
      acc.push( {
        ...chirp,
        id
      } )
      return acc;
    }, [] );
    res.json( chirpsArray );
  }
} );

router.post( '/', ( req, res ) => {
  const { body } = req;
  cs.CreateChirp( body );
  res.sendStatus( 200 );
} );

router.put( '/:id', ( req, res ) => {
  const { params: { id }, body } = req;
  cs.UpdateChirp( id, body );
  res.sendStatus( 200 );
} );

router.delete( '/:id', ( req, res ) => {
  const { params: { id } } = req;
  cs.DeleteChirp( id );
  res.sendStatus( 200 );
} );

export default router;
