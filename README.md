# <b> Disclaimer : I'm not promoting anything. Whatever I've learned I'm sharing that only</b>
# JavaScript-30
 These are the small 30 JavaScript projects to brush up JavaScript Skills. This course I took from javaScript30.com by WebBos
## Drum Kit
Things I learned 
* The data-* attributes gives us the ability to embed custom data attributes on all HTML elements. To learn more https://www.w3schools.com/tags/att_global_data.asp
* Handling various Event Listeners like - keydown, click, keyup, transitionend etc.
* adding and removing the class when the transition gets over 
 * Adding the class
 ```javascript
 key.classList.add('playing');
 ```
 * Removing the class
```javascript
e.target.classList.remove("playing");
```
## Update_Variables Js
Things I learned
* Creating Variables using :root in CSS
```css
:root{
    --variable_name: value;
}
```
* setProperty method this basically takes 2 arguments (propertyName, value) and sets the property in the CSS
```javascript
document.documentElement.style.setProperty(`--${thi.name}`, thi.value+suffix);
```
* Used dataset property, provides access to custom data attributes and returns a map so that you can access it. For e.g.
```html
<div class="controls">
            <label for="spacing">Spacing</label>
            <input type="range" name="spacing" min="10" max="200" value="100" data-sizing="px" data-name="Rishabh" data-lastname="Pagaria"><br>

            <label for="blur">Blur</label>
            <input type="range" name="blur" min="0" max="25" value="10" data-sizing="px"><br>

            <label for="base">Base Color</label>
            <input type="color" name="base" value="#ff0077">
        </div>
```
```javascript
const inputs = document.querySelectorAll('.controls input');
console.log(inputs[0].dataset)
```
![Console](./Image/2.jpg)

## Array Cardio Day1
Things I learned
* map() -> Every element of the array is passed in this callback function and returns a new array with same length. 
Example
```javascript
// copy and paste the whole code in console
const ar = [1,2,3,4,5]
const add_2 = ar.map(num => {
    return num + 2;
})
console.log(add_2)
```
* filter() -> the method takes each element in an array and applies a conditional statement. If the condition returns true the ouput gets pushed in the array, if return false the output dosen't gets pushed in array.
Example
```javascript
// copy and paste the code in console
const strings = ["rishabh", "rish","rishu","bheem","rishikesh" ];
const rish = strings.filter(word => {
    if(word.includes("rish")){
        return true;
    }
    return false;
});
console.log(rish)
```
* reduce() -> This method mainly reduce the value down to just one value and return a sinle value.
reduce(callback[totalValue, currentValue, index, initialValue])
    <b>Note: The initialValue argument is optional. If provided, it will be used as the initial accumulator value in the first call to the callback function.</b>
Example
```javascript
const addSum = [1,2,33,4,5,6];
const total = addSum.reduce((accumulutar, initial)=>{
    return accumulator + initial;
}, 0);
// here the 0 is the initial value in order to initialize accumulator with 0 as initial value
console.log(total)// returns 51
```
## Flex Image Gallery
Things I learned 
* Flexbox : Css Flexible Box Layout, in short flex layout which allows responsive elements within the container varying through different screen size. It also helps in placing the elements within the container.
To learn more about this : https://www.youtube.com/watch?v=FTlczfR82mQ

* CSS Transitions. To learn more : https://scrimba.com/learn/cssanimations/adding-transitions-cMZrg2t2 and https://www.w3schools.com/css/css3_transitions.asp