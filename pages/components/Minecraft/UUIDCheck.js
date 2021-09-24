import Players from './Players'
import WrongUUID from './WrongUUID'

function App (props) {
  const uuid = props;
  const regex = "[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}";
  
  if (uuid.uuid.match(regex)) {
    return <Players uuid={uuid.uuid} />
  } else {
    return <WrongUUID />
  }
}

export default App;