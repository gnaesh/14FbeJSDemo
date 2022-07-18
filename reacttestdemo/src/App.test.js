import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import sum from "./sum"

const appTree=renderer.create(<App/>);
// var a;
// //--------------- submtion test case ---------------
// describe("test suite for sunm.js file test cases",()=>
// {
//   //--------------------------
//   beforeAll(()=>{
//     console.log("this us executed once before the all the execution of all test cases");
//     a=0
//   })
//   //------------------------
//   beforeEach(()=>
//   {
//     console.log("this us executed once before the all the execution of all test cases");
//   })
  
//   //--------------1--------------\
//   it("test sum(10,5)=15",()=>{
// expect(sum(a,5).tobe(5));
//   })

//    //--------------2--------------\
//    it("test sum(0,0)=0",()=>{
//     expect(sum(a,0).tobe(0));
//       })

//        //-------------3---------------\
//   it("test sum(-2,-8)=-8",()=>{
//     expect(sum(a,5).tobe(5));
//       })
      
//       beforeEbach
//       (()=>
//   {
//     console.log("this us executed once before the all the execution of all test cases");
//   })
// })
  test("Test a sanpshot ",()=>{
    expect(appTree).toMatchSnapshot();
  })
  //-------------------
  test ("Test app render hello :,",()=>{
  render (<App/>);
  const linkElement =screen.getByText(/Hellow/i);
  expect(linkElement).toBeInTheDocument()
  }) 

  //-------------------
  it ("Test Buttom has initial background coloue  reds",()=>{
    render(<App/>);
    const colourButton=screen.getByRole("button",{name:"change to blue"})
    expect(colourButton).toHaveStyle({backgroundColor:"red"});

  })
  //----------------------------
  test("Test Buttom has initial background coloue  blue",()=>{
    render(<App/>);
    const colourButton=screen.getByRole("button",{name:"change to blue"})
    fireEvent.click(colourButton);
    expect(colourButton).toHaveStyle({backgroundColor:"red"});
    expect(colourButton.textContent).toBe("chnage to red");


  })
