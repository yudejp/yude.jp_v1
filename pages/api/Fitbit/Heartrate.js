// React
import { format } from 'date-fns'

const {
    FITBIT_TOKEN: bearer
  } = process.env;

const today = format(new Date(), 'yyyy-MM-dd')

export const getName = async (props) => {
  const uuid = props;
  return fetch(
        'https://api.fitbit.com/1/user/-/activities/heart/date/today/1d/1sec.json',
        {
            headers: {
                Authorization: `Bearer ${bearer}`,
              },
        }
    );
};

const FitbitHeartrate = async (req, res) => {
    const { uuid } = req.query
    const response = await getName(uuid);
    const data = await response.json();
    if (response.status === 204 || response.status > 400) {
      return res.status(200).send("404");
    }
    const heartrate = data["activities-heart"].map((item, i) => {
            if (item.dateTime = today) {
                return item.value.restingHeartRate
            } else {
                return "Failed to retrieve data."
            }
        }
    )
    return res.status(200).json({
      heartrate,
    });
};

export default FitbitHeartrate