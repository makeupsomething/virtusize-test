# Profile Display

View it live here https://boring-swirles-8cd182.netlify.com/

## Instructions

1. Navigate to [repo](https://github.com/makeupsomething/virtusize-test)
2. Clone locally using
   `git clone https://github.com/makeupsomething/virtusize-test.git`
3. Install dependencies using `npm install` or `yarn install`
4. Run tests using `npm test:unit` and `npm test:e2e` or `yarn test:unit` and `yarn test:e2e`
5. Start your server using `npm start` or `yarn start`
6. Navigate to app in [browser](http://localhost:8080)

## Discussion

I decided to use Vue for this challenge as it is the framework I am most familiar with and it is also the framework used at virtualize.
As time was a factor I decided to scaffold it using the Vue cli.

## Requirements

### Please implement an Editable Account panel using modern CSS and a Javascript framework

#### Account page contains

- Profile picture
- Full name
- Email
- Change Password

I added a welcome page and a signup page  for when the user visits the page for the first time. They will be guided to the signup page where they can enter their details. These details (apart from the password) will be stored in local storage so the next time they visit the page they can go directly to their profile. When the user is saving their details *I intentionally do nothing with the password as I did not want to store it as plain text. It is assumed in a real app this would be stored by the backend*.

#### Each information but the profile picture is editable using an edit icon button

The users name, email and password each have an edit button beside them that when clicked will being the user to the appropriate form. I only use one form component for signup and editing each piece of the user details. But it will only show the relevant information for the view based on the current URL.

#### Picture should be fetched from Gravatar using user the email, and should use a default image

I used the md5 library  to generate the hash and then load the image by generating the URL containing the hash.

#### Editing full name should display a first and last name field

I have separate fields for both first and last name.

#### Password form should have an option to unmask (no confirm password field) and should display a strength meter

I use the zxcvbn  library for determining the strength of the password. I added a `<meter>` element with a maximum of `4`(the maximum strength defined by zxcvbn) and then define in css the colors for the meter at each value. I also display some text to give a bit more feedback to the user. When the user clicks the toggle buttons it changes the input from type “password” which masks the input by default to a type “text” which allows the user to see what they have typed.

#### Each form should have validation

Each field on the form is required so the user cannon’t progress until they fill out the field but for the edit  details forms the user has the option to cancel and go back to the profile page.  Emails inputs are type “email” and therefore need to contain an “@“ and a “.” at the end.  Password inputs are type password unless the user clicks the toggle button and have a minimum length of 6.

### Extras

- I implemented e2e testing using cypress [GitHub - cypress-io/cypress: Fast, easy and reliable testing for anything that runs in a browser.](https://github.com/cypress-io/cypress) to test the “happy path for the user”.
- I implemented unit tests using vue-testing-library [GitHub - testing-library/vue-testing-library: Lightweight adapter allowing DOM Testing Library to be used to test Vue.js components. Built on top of @vue/test-utils](https://github.com/testing-library/vue-testing-library) to cover some more of the edge cases that are not covered in the e2e tests.
- I added translations using the i18n [GitHub - kazupon/vue-i18n: Internationalization plugin for Vue.js](https://github.com/kazupon/vue-i18n) library. The user can switch between English and Japanese language at any time using the dropdown on the top right of the page. Although the translations were done by me to they might not be completely correct 😥
- I deployed it using netlify here https://boring-swirles-8cd182.netlify.com/
