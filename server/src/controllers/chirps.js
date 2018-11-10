import connection from "../db";

const index = ( request, response ) => {
  const query = `
  select c.user_id, c.id as chirp_id, c.created_at, c.text, u.name
  from chirps c join users u on c.user_id = u.id
  order by c.created_at desc;
  `;
  connection.query( query, ( e, results, fields ) => {
    if ( e ) {
      console.err( e );
      response.sendStatus( 500 );
      return;
    }

    response.json( results );
    return;
  } );
};

const create = ( request, response ) => {
  const { body } = request;
  const query = `
  insert into chirps (user_id, text)
  values (?);
  `;
  const chirp = Object.values( body );

  // console.log( chirp );

  connection.query( query, [ chirp ], ( e, results, fields ) => {
    console.log( { results, fields } )
    if ( e ) {
      console.error( e );
      response.sendStatus( 500 );
      return;
    }
    response.sendStatus( 200 );
    return;
  } );
};

const read = ( request, response ) => {
  const { params: { id } } = request;
  const query = `
  select user_id, c.id as chirp_id, c.created_at, c.text, u.name
  from chirps c 
  join users u on c.user_id = u.id
  where c.id = ?;
  `;
  connection.query( query, [ id ], ( e, results, fields ) => {
    if ( e ) {
      console.err( e );
      response.sendStatus( 500 );
      return;
    }
    response.json( results[ 0 ] );
    return;
  } );
};

const update = ( request, response ) => {
  const { params: { id } } = request;
  const { body } = request;
  const query = `
  update chirps c
  set c.text = ?
  where c.user_id = ?;
  `;
  const chirp = Object.values( body );

  connection.query( query, [ chirp, id ], ( e, results, fields ) => {
    if ( e ) {
      console.error( e );
      response.sendStatus( 500 );
      return;
    }
    response.sendStatus( 200 );
    return;
  } );
};

const destroy = ( request, response ) => {
  const { params: { id } } = request;
  const query = `
  delete from chirps
  where id = ?;
  `;

  connection.query( query, [ id ], ( e, results, fields ) => {
    if ( e ) {
      console.error( e );
      response.sendStatus( 500 );
      return;
    }
    response.sendStatus( 200 );
    return;
  } );
};

export default {
  index,
  create,
  read,
  update,
  destroy
};
