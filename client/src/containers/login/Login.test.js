import React from "react";
import Login  from "./Login";
import { Provider} from 'react-redux';
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import {findByTestAttr,storeFactory} from "../../../testSetup/testUltil"

  Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (initialState={}, props={}) =>{
    const store = storeFactory(initialState)
    const wrapper = shallow(
        <Provider store={store} >
            <Login {...props}/>
         </Provider>

).dive().dive()
  console.log(wrapper.debug())}

  setup()

  test('login component',  ()=>{
/*     const componentLogin= findByTestAttr(wrapper,"login-component")
    expect(componentLogin.length).toBe(1) */
  });

/* 
describe ('renders without an error ', () => {
    test('login component',  ()=>{
        const componentLogin= findByTestAttr(wrapper,"login-component")
        expect(componentLogin.length).toBe(1)
      });
      test('form', () => {
        const componentForm= findByTestAttr(wrapper,"form-component")
        expect(componentForm.length).toBe(1)
      })
      test(' input', ()=>{
        const InputForm= findByTestAttr(wrapper,"input-form")
        expect(InputForm.length).toBe(2)
        })
      test(' submit button ', ()=>{
        const submitButton= findByTestAttr(wrapper,"submit-button")
        expect(submitButton.length).toBe(1)
        }) 
  
})
 */

