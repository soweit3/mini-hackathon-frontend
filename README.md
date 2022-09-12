

# About

A Simple Customer Webapp has been developed for a client who is very concerned for their customers Privacy and safety online. Unfortunately the work which was developed has been magically corrupted somehow and there are some clear issues in the consistency, privacy and functionality of the application. You've been tasked to speedrun the fixes because we need to deploy this app to our client asap, time is money here. 

We want to make sure that there are no privacy issues, strange inconsistencies or errors before we deploy. You may use any resources you wish; code comments, documentation, stack overflow. This is an individual activity to test your personal skills.

Once you believe you're done, submit a valid sign up form which will communicate with the backend and verify that you've completed everything correctly. If everything checks out your time will be noted. 

## IMPORTANT DEV NOTES:
- Server Backend requires a Legacy "windows-1252" encoding for the TextEncoder
- Webapp must disallow any webscraping or bots
- All links, buttons and href must redirect to expected pages / resources 
### All Sign Up information must meet the following validations:
- Full Name (Letters and whitespace only [regex pattern])
- Username (between 6-20 characters)
- Email (valid email type)
- Password (between 6-40 characters) and [input type="password"]
- Confirm Password (must match password)
- Accept Terms (boolean , must be true to submit)

## Development

To install required packages use:
```
yarn install
```

To Run the Development Server use:
```
yarn start
```
