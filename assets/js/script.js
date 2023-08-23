
console.log('Hello')

const defaultSelect = () =>{
    const element = document.querySelector('.default')
    const choices = new Choices(element,{
        searchEnabled: false,
        placeholderValue: null,
        searchPlaceholderValue: null,
    })
};

defaultSelect()