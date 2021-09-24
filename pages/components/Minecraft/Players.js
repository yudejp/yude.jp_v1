import LastPlayed from './LastPlayed'

function App (props) {
  const uuid = props;
  
  return (
    <div>
        <p>UUID: {uuid.uuid}</p>
        <p>Last played: <LastPlayed uuid={uuid.uuid} /></p>
    </div>
  )
}

export default App;