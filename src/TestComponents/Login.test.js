import { __esModule } from "@testing-library/jest-dom/dist/matchers"
import { fireEvent, render,screen } from "@testing-library/react"
import Login from "./Login"

jest.mock("axios",()=>{
    return {
    __esModule:true,
    default:{
        get:()=>{return {
            data:[{id:1,name:'John'}]
        }}
    }
    }
})

describe('test suite for Login Element', ()=>{
    let loginButton = '';
    beforeEach(()=>{
        render(<Login />);
        loginButton = screen.getByRole('button');
    })

    test('Login button must be disabled initially', ()=>{
        
        expect(loginButton).toBeDisabled();
    })

    test('Login button must be enabled after value entered in input elements', ()=>{
       
        const userInputEle = screen.getByPlaceholderText(/username/i);
        const passInputEle = screen.getByPlaceholderText(/password/i);
        let testValue = 'johndoe'
        fireEvent.change(userInputEle, {target:{value:testValue}});
        fireEvent.change(passInputEle,{target:{value:testValue}});
        expect(loginButton).toBeEnabled();
    })

    test('on button click, user name must be rendered',async ()=>{
        const userInputEle = screen.getByPlaceholderText(/username/i);
        const passInputEle = screen.getByPlaceholderText(/password/i);
        let testValue = 'johndoe'
        fireEvent.change(userInputEle, {target:{value:testValue}});
        fireEvent.change(passInputEle,{target:{value:testValue}});
        fireEvent.click(loginButton);
        const userSpanEle = await screen.findByText(/john/i);
        expect(userSpanEle).toBeInTheDocument();
    })
})