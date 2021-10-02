// React
import { format } from 'date-fns'

const {
    FITBIT_TOKEN: bearer
  } = process.env;

const today = format(new Date(), 'yyyy-MM-dd')

export const getName = async (props) => {
  const uuid = props;
  return fetch(
        'https://api.fitbit.com/1.2/user/-/sleep/date/' + today + '.json',
        {
            headers: {
                Authorization: `Bearer ${bearer}`,
              },
        }
    );
};

const FitbitSleep = async (req, res) => {
    const { uuid } = req.query
    const response = await getName(uuid);
    const data = await response.json();
    if (response.status === 204 || response.status > 400) {
      return res.status(200).send("404");
    }
    const duration = data.summary.totalMinutesAsleep
    return res.status(200).json({
      duration,
    });
};

export default FitbitSleep