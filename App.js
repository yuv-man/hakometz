import React, { useState } from 'react';
import Navigator from './routes/DrawerStack'
import { EventContext } from './utils/EventContext';
import { Text, View } from 'react-native'

function App() {

  const [ events, setEvents ] = useState([
    {title:'A', description:'wq', location:'tt', date:'Wed Feb 24 2021 06:30:16',type: 'party' , key:'1'},
    {title:'Z', description:'sa', location:'rr', date:'Wed Feb 24 2021 06:30:16',type: 'birthday', key:'2'},
    {title:'Q', description:'fd', location:'ee', date:'Wed Feb 24 2021 06:30:16',type: 'dinner', key:'3'},
    {title:'D', description:'tr', location:'bv', date:'Wed Feb 24 2021 06:30:16',type: 'beer', key:'4'}
])

  const [ user, setUser ] = useState(true) 

return(
  <EventContext.Provider value = {{ events, setEvents, user, setUser }}>
    <Navigator/>
  </EventContext.Provider>
)
}
export default App 
