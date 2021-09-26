// Components
import Online from './Online'
import Head from './Head'
import PlayerNameHolder from './PlayerNameHolder'
import Biography from './Biography'

function App (props) {
  const uuid = props;
  
  return (
    <div className="w-full flex flex-wrap">
        <div>
            <Head uuid={uuid.uuid} />
        </div>
        <div className="w-5"></div>
        <div>
          <p className="text-2xl text-mono"><PlayerNameHolder uuid={uuid.uuid} /></p>
          <p><Online uuid={uuid.uuid} /></p>
          <p><Biography uuid={uuid.uuid} /></p>
        </div>
    </div>
  )
}

export default App;