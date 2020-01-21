import * as actions from "./actions";
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware]);
const nock = require("nock");

it("should create an action to search robots", () => {
  const text = "wooo";
  const expecctedAction = {
    type: CHANGE_SEARCHFIELD,
    payload: text
  };
  expect(actions.setSearchField(text)).toEqual(expecctedAction);
});

it("handles requesting robots API", () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  // console.log('action', action)
  const expecctedAction = {
    type: REQUEST_ROBOTS_PENDING
  };
  expect(action[0]).toEqual(expecctedAction);
});
// it('should handle api call',()=> {
// 	const couchdb = nock("https://jsonplaceholder.typicode.com")
// 	.get('/users/1')
// 	.reply(200,{
// 	})
// 	expect(couchdb).toEqual({ type: REQUEST_ROBOTS_SUCCESS, payload: data })
// })
