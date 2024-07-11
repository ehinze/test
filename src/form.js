import React from 'react'

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            employment:"",
            isFriendly: true,
            favColor:" "

        }
    )
    
   
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target  //here you are destructuring the code in line 22. And not only that, this is saying the type that should be targeted is the checkbox
        setFormData(prevFormData => {
            return {
               ...prevFormData,
                // [event.target.name]: event.target.value   This is the basic version and it is not the best practice, when you use this line 17 wont be needed , but using line 17 that means destured the code .
                [name]: type === "checkbox" ? checked : value //this is you updating the properties based on the name from the input
                // [name]: value   this is how it would look like if we dont have a checkbox.
                //here it is saying if the name type(the input type) is equals checkbox use the checked attribute in the input else use the value attribute
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
        {/* you make use of the onSubmit when you want to subit your form ,so you button is automatical a type="submit". */}
            {/* note: The name has to be the same as  the object given in the useState. */}
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
            
            {/* this is the input with type checkbox, instead of having a value it has the attribute checked{formData.isFriendly} */}
            <input 
                type="checkbox" 
                id="isFriendly" 
                checked={formData.isFriendly}
                name="isFriendly"
                onChange={handleChange}
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />
            <br />


            {/* RAIDO INPUT. */}
    
            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    // unlike  checkbox  that accepts a boolean , raido does not, that is why we are making it a boolean like the way it is the unemplyed is  becase of the value.
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>


            {/* Select option */}
            <br />
            
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"  // if you don not put name whatever you selcted wont be picked
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            <button>Submit</button>
        </form>


 )
}

