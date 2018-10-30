const initState = {
  projects: [
    { id: '1', title: 'Mario', content: 'this is content' },
    { id: '2', title: 'Toad', content: 'this is content' },
    { id: '3', title: 'Bowser', content: 'this is content' }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
