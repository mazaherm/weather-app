import axios from 'axios'
import CallWeatherAPI from './CallWeatherAPI'

jest.mock('axios')

describe('CallWeatherAPI', () => {
  it('calls axios and returns data', async () => {
    // mock request
    axios.get.mockResolvedValue({
      data: {
        city: {
          name: 'London',
          country: 'GB'
        }
      }
    })
    const data = await CallWeatherAPI()

    expect(data).toEqual({ city: { name: 'London', country: 'GB' } })
    expect(axios.get).toHaveBeenCalledTimes(1)
  })
})
