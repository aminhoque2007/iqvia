Dear Iqvia,

Thanks for providing the exercise. I enjoyed building the app. I just wanted to note the following:

- I time-boxed this exercise to a few hours as I'm working over 10 hours a day at present to support a product launch.
- I've assumed the app will be used on a Desktop screen.
- I've created a parallel test folder and I would normally test as follows:
1. For components (connected & presentational) shallow render and pass in various props and assert the elements I expect to render, are appearing. Also test the various events toggle the AddViewContactForm.
2. Mount the App component with a Provider to ensure app is behaving as expected.
3. Test services, actions and reducers using mocked API, redux-mock store etc.
4. Ultimately testing behaviour and not implementation.

- Although I've used TypeScript with Angular.js and Angular 2-5, I have not used TypeScript within the last year and not  with React, so the types I use would be more rigorous on a commercial/personal project. I'm an advocate of strict-typing and happy to get up to speed with this.