### 1.What is the difference between *getElementById, getElementsByClassName, and querySelector / querySelectorAll*?
Ans:
- *getElementById("id")*  
  → একটি নির্দিষ্ট id দিয়ে শুধু একটি এলিমেন্ট রিটার্ন করে।  

- *getElementsByClassName("class")*  
  → নির্দিষ্ট class নামের সব এলিমেন্টকে HTMLCollection আকারে রিটার্ন করে।  

- *querySelector("selector")*  
  → CSS Selector ব্যবহার করে প্রথম যে এলিমেন্ট মিলে যাবে সেটি রিটার্ন করে।  

- *querySelectorAll("selector")*  
  → CSS Selector ব্যবহার করে মিলে যাওয়া সব এলিমেন্ট NodeList আকারে রিটার্ন করে।  

---

### 2.How do you *create and insert a new element into the DOM*?
Ans:
JavaScript দিয়ে DOM-এ নতুন element তৈরি ও যুক্ত করার ধাপঃ  

```js
let div = document.createElement("div"); // নতুন div তৈরি
div.innerText = "Hello World"; // টেক্সট যোগ
document.body.appendChild(div); // body তে যুক্ত


---

3. What is *Event Bubbling* and how does it work?
Ans:
Event Bubbling হলো যখন কোন child element-এ ইভেন্ট ট্রিগার হয়, সেটা প্রথমে সেই element থেকে শুরু হয়ে তার parent → grandparent → root পর্যন্ত ছড়িয়ে যায়।
উদাহরণঃ একটা button এর ভেতরে click করলে div, তারপর body তেও সেই event propagate হয়।


---

4.What is *Event Delegation* in JavaScript? Why is it useful?
Ans:

Event Delegation হলো parent element-এর উপর event listener বসানো, যাতে তার ভেতরের সব child element-এর event একসাথে হ্যান্ডেল করা যায়।

 এটি ব্যবহার করলে প্রতিটি child element-এর জন্য আলাদা listener বসাতে হয় না। এতে কোড ছোট হয় এবং performance ভালো হয়।


---

5.What is the difference between *preventDefault() and stopPropagation()* methods?

Ans:
preventDefault()
→ কোন HTML element-এর default action বন্ধ করে। যেমন form submit বা link redirect বন্ধ করা।

stopPropagation()
→ Event Bubbling বা Event Capturing বন্ধ করে দেয়, মানে event আর উপরে propagate হয় না।





