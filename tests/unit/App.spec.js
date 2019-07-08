import 'jest-dom/extend-expect'

import App from '@/App.vue'
import Welcome from '@/views/Welcome'
import Signup from '@/views/Signup'
import Profile from '@/views/Profile'
import UserDetails from '@/components/UserDetails'
import UserDetailsForm from '@/components/UserDetailsForm'
import store from '@/store'

import {cleanup, render, fireEvent} from '@testing-library/vue'

const routes = [
    {
        path: '/',
        name: 'user-setup',
        component: Welcome,
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup,
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        children: [
            {
                name: 'profile-details',
                path: '/',
                component: UserDetails,
            },
            {
                name: 'edit-name',
                path: 'edit/name',
                component: UserDetailsForm,
            },
            {
                name: 'edit-email',
                path: 'edit/email',
                component: UserDetailsForm,
            },
            {
                name: 'edit-password',
                path: 'edit/password',
                component: UserDetailsForm,
            },
        ],
    },
]

afterEach(cleanup)

test('can navigate to signup page from welcome page', async () => {
    // Notice how we pass a `routes` object to our render function.
    const {queryByTestId, getByText, debug} = render(App, {routes, store})

    expect(queryByTestId('section-header')).toHaveTextContent('Welcome!')

    await fireEvent.click(getByText(/get started/i))

    expect(queryByTestId('section-header')).toHaveTextContent(
        "Let's get your details ✍️",
    )
})

test('correct password strength is shown for each password', async () => {
    const passwords = {
        worst: '123456',
        bad: '123456abcde',
        weak: '12@@33df',
        good: '12@@33dfrr',
        strong: '12@@33sdfr%',
    }

    const {queryByTestId, getByLabelText, debug} = render(App, {routes, store})
    const passwordInput = getByLabelText(/password/i)

    await fireEvent.update(passwordInput, passwords.worst)
    expect(queryByTestId('password-strength-text')).toHaveTextContent('Worst')

    await fireEvent.update(passwordInput, passwords.bad)
    expect(queryByTestId('password-strength-text')).toHaveTextContent('Bad')

    await fireEvent.update(passwordInput, passwords.weak)
    expect(queryByTestId('password-strength-text')).toHaveTextContent('Weak')

    await fireEvent.update(passwordInput, passwords.good)
    expect(queryByTestId('password-strength-text')).toHaveTextContent('Good')

    await fireEvent.update(passwordInput, passwords.strong)
    expect(queryByTestId('password-strength-text')).toHaveTextContent('Strong')
})

function renderAppComponent(customStore) {
    return render(App, {store: {...store, ...customStore}, routes})
}

test('can add details and submit', async () => {
    const mockUser = {
        firstName: 'Test',
        lastName: 'User',
        email: 'test@test.com',
        password: '123456',
    }

    const {getByLabelText, getByText, getByTitle} = renderAppComponent()

    const firstNameInput = getByLabelText(/first name/i)
    await fireEvent.update(firstNameInput, mockUser.firstName)

    const lastNameInput = getByLabelText(/last name/i)
    await fireEvent.update(lastNameInput, mockUser.lastName)

    const emailInput = getByLabelText(/email/i)
    await fireEvent.update(emailInput, mockUser.email)

    const passwordInput = getByLabelText(/password/i)
    await fireEvent.update(passwordInput, mockUser.password)

    const submitButton = getByText(/submit/i)
    await fireEvent.click(submitButton)

    expect(getByTitle('user-name')).toHaveTextContent('Test User')
    expect(getByTitle('email')).toHaveTextContent('test@test.com')
})

test('can edit details', async () => {
    const mockEditUser = {
        firstName: 'Edit',
        lastName: 'Test',
        email: 'editeduser@test.com',
        password: '123456',
    }

    const {getByLabelText, getByText, getByTitle, debug} = renderAppComponent()

    const editNameButton = getByLabelText(/edit name/i)
    await fireEvent.click(editNameButton)

    const firstNameInput = getByLabelText(/first name/i)
    await fireEvent.update(firstNameInput, mockEditUser.firstName)

    const lastNameInput = getByLabelText(/last name/i)
    await fireEvent.update(lastNameInput, mockEditUser.lastName)

    let submitButton = getByText(/submit/i)
    await fireEvent.click(submitButton)

    expect(getByTitle('user-name')).toHaveTextContent('Edit Test')

    const editEmailButton = getByLabelText(/edit email/i)
    await fireEvent.click(editEmailButton)

    const emailInput = getByLabelText(/email/i)
    await fireEvent.update(emailInput, mockEditUser.email)

    submitButton = getByText(/submit/i)
    await fireEvent.click(submitButton)

    expect(getByTitle('email')).toHaveTextContent('editeduser@test.com')
})
