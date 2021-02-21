import '../src/scss/App.scss';
import profileImage from '../src/img/image-victor.jpg';
import Card from './Card';

const user = {
  name: 'Victor Crest',
  age: 26,
  city: 'London',
  profileImage: profileImage,
  followersCount: '80K',
  likesCount: '803K',
  photosCount: '1.4K',
}


function App() {
  return (
    <div className="App">
      <Card user={user}></Card>
    </div>
  );
}

export default App;
