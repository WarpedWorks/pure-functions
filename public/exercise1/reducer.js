let initialState = {
	counterValue: 0
};

// This reducer isn't pure! It updates the "counterValue" key of the original
//     state object
const reducer = (state = initialState, action) => {
	if (action.type == "INCREMENT") {
		// state.counterValue++;
		// return state;
		return {
			counterValue: state.counterValue + 1 //one more than the prvious value
		}
	} else {
		return state;
	}
}
