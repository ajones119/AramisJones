import { useReducer } from "react";

const blacklistedKeys = [
  "buildActionFunctionsFromActionList",
  "generateActions",
  "optionalActions",
  "optionalReducer",
  "reducer",
  "create",
  "actions",
];

export class BaseReactObject {
  constructor(optionalReducer, optionalActions) {
    this.optionalReducer = optionalReducer || {};
    this.optionalActions = optionalActions || {};
  }

  buildActionFunctionsFromActionList = (dispatch) => {
    const actions = { ...this.actions, ...this.optionalActions };
    return Object.assign(
      {},
      ...Object.values(actions).map((action) => ({
        [action]: (data) => dispatch({ type: action, data }),
      }))
    );
  };

  generateActions = () => {
    const properties = Object.keys(this).filter(
      (key) => !blacklistedKeys.includes(key)
    );
    this.actions = properties.reduce((accumulator, value) => {
      const newValueName = `set${
        value.charAt(0).toUpperCase() + value.slice(1)
      }`;
      return { ...accumulator, [newValueName]: newValueName };
    }, {});
  };

  reducer = (object, action) => {
    const { type, data } = action;
    let returnObject = object;

    if (Object.keys(this.optionalActions).includes(type)) {
      returnObject = this.optionalReducer(object, action);
    } else if (type && data) {
      const key = type.charAt(3).toLowerCase() + type.slice(4);
      returnObject = { ...object, [key]: data };
    }

    return returnObject;
  };

  create = () => {
    this.generateActions();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [object, dispatch] = useReducer(this.reducer, this);
    return [object, this.buildActionFunctionsFromActionList(dispatch)];
  };
}
