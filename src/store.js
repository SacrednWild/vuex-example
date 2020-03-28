const store = new Vuex.Store( {
  state: { numbers: [1,2,3] },    // Property to share within the application
  mutations: {                    // Functions that mutate the store's state directly
    ADD_NUMBER( state, payload ) {
      state.numbers.push( payload );
    }
  },
  actions: {                      // Functions that call mutations and perform all asynchronous calls 
    addNumber( context, number ) { // prior to committing to mutations.
      context.commit( "ADD_NUMBER", number );
    }
  },
  getters: {                      // Functions are like COMPUTED-PROPIERTIES for Vue components:
    getNumbers( state ) {          // perform calculation to store state before having that info 
      return state.numbers;        // to components
    }
  }
 });