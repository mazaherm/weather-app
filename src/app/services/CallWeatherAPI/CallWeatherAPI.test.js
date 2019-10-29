import mockAxios from 'axios'
import CallWeatherAPI from './CallWeatherAPI'
import config from '../../config'

describe('CallWeatherAPI', () => {
  it('calls axios and returns data', async () => {
    // mock request
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        city: {
          name: 'London',
          country: 'GB'
        }
      }
    }))
    const data = await CallWeatherAPI()

    expect(data).toEqual({ city: { name: 'London', country: 'GB' } })
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith(`https://api.openweathermap.org/data/2.5/forecast?q=London,UK&units=metric&cnt=1&appid=${config.API_KEY}`)
  })
})
