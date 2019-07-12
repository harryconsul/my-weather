import React from 'react';
import ConditionIcon from './ConditionIcon'
import  Adapter  from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { exportAllDeclaration } from '@babel/types';
configure({ adapter: new Adapter() });

describe("ConditionIcon - Test if display proper icons", () => {
   
  
    it("Should display sunny icon if the condition is unknown", () => {
        const container=shallow(<ConditionIcon condition="the apocalypse" />);
    
        expect(container.find("em").text()).toBe("A");
    });
})
