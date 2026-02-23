1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementByID means   select an element that has an Unique Id.
getElementByClassName: that select all the elements which has same class.
querySelector:use css selector for element select.
querySelectorAll:Return All matching element with node list.

2. How do you create and insert a new element into the DOM?
Ans:const div=document.createElement('div');
list.appendChild(div);

3. What is Event Bubbling? And how does it work?
Ans:Event bubling is an event there an event start  in the specific element that click it and the sequentialy bubbling by its parent element in the dom.
*event is start when we click in the element.
*then event go to the perent element.
*through looping the process in going on.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans:It’s basically a technique where instead of adding event listeners to every single child element, you just put one listener on their parent.
It is very usefull.Event delegation is a clever technique where you attach a single event listener to a parent element instead of adding many listeners to individual children. It works because of event bubbling, which lets the parent "catch" events as they move up the DOM tree. This is super helpful because it saves a lot of memory, especially when you have hundreds of items on a page. It also makes your life easier because it automatically works for new elements added to the page later. Basically, it keeps your code much cleaner and makes your website perform way better.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:preventDefault() stops the browser's default behavior for an action, like preventing a link from opening or a form from submitting. Meanwhile, stopPropagation() prevents the event from bubbling up the DOM tree, so parent elements won't ever know the event happened.