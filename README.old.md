# Build a Trivia Game

For this project, you will use React to build a trivia game powered by [the Open Trivia Database](https://opentdb.com/).

This project does not include any wireframes: you will have to design the game yourself. One option is to present the user with a list of categories, and then quiz them within that category, keeping score, but that's not the only way you could do this. Use your creativity!

## Requirements

- Your React application should be broken up into 3 or more components.
- Your application should have two or more "screens." In a traditional web application, we'd think of these as different pages or views.
- Your application uses React's state to manage data.
- Your application uses Open Trivia Database's API.
- Your application is styled.

## About the API

You can learn about the Open Trivia Database API at [this API config page](https://opentdb.com/api_config.php).

Some things you are likely to want to do:

- Get list of categories: https://opentdb.com/api_category.php
- Get 10 questions: https://opentdb.com/api.php?amount=10
- If you add a session token you won't receive the same question twice
  - Get a token: https://opentdb.com/api_token.php?command=request
  - Add a token to a request: `&token=YOURTOKENHERE`
