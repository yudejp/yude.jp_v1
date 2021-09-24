import Online from './Online'
import Head from './Head'
import GetName from './GetName'

function App (props) {
  const uuid = props;
  
  return (
    <div className="w-full flex flex-wrap">
        <div>
            <Head uuid={uuid.uuid} />
        </div>
        <div className="w-5"></div>
        <div>
          <p className="text-2xl text-mono"><GetName uuid={uuid.uuid} /></p>
          <p><Online uuid={uuid.uuid} /></p>
        </div>
    </div>
  )
}

export default App;