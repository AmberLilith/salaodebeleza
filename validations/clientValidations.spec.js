const validate = require("./clientValidations");

describe('Client Validation', ()=>{
    it('Should return true if all values are neither empty nor null', () =>{
        //given
        const data = {
            name: "Amber",
            mainPhone: "741852963",
            secondyPhone:"794561563"
        }

        //when then
        expect(validate(data)).toBe(true);
    })

    it('Should return false if some value is empty', () =>{
        //given
        const data = {
            name: "Amber",
            mainPhone: "",
            secondyPhone:"794561563"
        }

        //when then
        expect(validate(data)).toBe(false);
    })

    it('Should return false if some value is null', () =>{
        //given
        const data = {
            name: "Amber",
            mainPhone: null,
            secondyPhone:"794561563"
        }

        //when then
        expect(validate(data)).toBe(false);
    })
})

