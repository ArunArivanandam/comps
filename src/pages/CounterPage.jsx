import { useReducer } from "react";
import { produce } from "immer";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const VALUE_TO_ADD = "value-to-add";
const FORM_SUBMIT = "form-submit";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    // return {
    //   ...state,
    //   count: state.count + 1,
    // };
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    // return {
    //   ...state,
    //   count: state.count - 1,
    // };
    case VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    // return {
    //   ...state,
    //   valueToAdd: action.payload,
    // };
    case FORM_SUBMIT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    // return {
    //   ...state,
    //   count: state.count + state.valueToAdd,
    //   valueToAdd: 0,
    // };
    default:
      return;
    // return state;
  }
  // if (action.type === INCREMENT_COUNT) {
  //   return {
  //     ...state,
  //     count: state.count + 1,
  //   };
  // }

  // if (action.type === DECREMENT_COUNT) {
  //   return {
  //     ...state,
  //     count: state.count - 1,
  //   };
  // }

  // if (action.type === VALUE_TO_ADD) {
  //   return {
  //     ...state,
  //     valueToAdd: action.payload,
  //   };
  // }

  // if (action.type === FORM_SUBMIT) {
  //   return {
  //     ...state,
  //     count: state.count + state.valueToAdd,
  //     valueToAdd: 0,
  //   };
  // }

  // return state;
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  console.log(state);

  const increment = () => {
    //setCount(count+1)
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    //setCount(count-1)
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: FORM_SUBMIT,
    });
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };

  const handleChange = (event) => {
    // setValueToAdd(parseInt(event.target.value) || 0);
    dispatch({
      type: VALUE_TO_ADD,
      payload: parseInt(event.target.value) || 0,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">count is {state.count}</h1>
      <div className="flex flex-row gap-2">
        <Button primary onClick={increment}>
          Increment
        </Button>
        <Button secondary onClick={decrement}>
          Decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          onChange={handleChange}
        />
        <Button>Add it</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
