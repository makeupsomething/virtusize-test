import {render} from '@testing-library/vue'
import Welcome from '@/views/Welcome.vue'
import 'jest-dom/extend-expect'

test('renders', () => {
    const {debug} = render(Welcome)

    debug()

    expect(true).toBe(true)
})
