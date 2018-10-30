const initState = {
  tournaments: [
    { id: '1', title: 'Mario', content: 'this is content' },
    { id: '2', title: 'Toad', content: 'this is content' },
    { id: '3', title: 'Bowser', content: 'this is content' }
  ]
};

const tournamentReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_TOURNAMENT':
      console.log('created tournament', action.tournament);
      return state;
    case 'CREATE_TOURNAMENT_ERROR':
      console.log('create tournament error', action.err);
      return state;
    default:
      return state;
  }
};

export default tournamentReducer;
