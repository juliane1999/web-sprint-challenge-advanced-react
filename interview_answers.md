# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
Functional components are more simplified and straightforward in a html fashion, while stateful components are used in setting a state so that you can display the data, alter it, and be used in other places.
2. When does a componentWillMount function be called? What about a componentWillUpdate?
The componentWillMount will be mounted first, then the componentWillUpdate due to the lifecycle. The componentWillMount is usually called when you want to set state and the update happens after for any other steps.
3. Define stateful logic.
Stateful logic is used to store logical operations.
4. What are the three step of creating a successful test? What is done in each phase?
The three steps are arrange, act, assert. Arrange is used for setting up the test, act is what we'll be seeing on our browser/screen, and assert is making sure our act had been rendered.