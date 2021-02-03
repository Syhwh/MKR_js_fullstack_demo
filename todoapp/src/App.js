import './App.css';
import { Button } from './components/Button/Button';
import { PostCardContainer } from './components/PostCard/PostCardContainer';



function App() {
  const general = () => console.log('general')

  return (
    <div className='container'>
      <div className='App' style={{ backgroundColor: 'red' }}>
        The best posts
        {/* <button onClick={() => console.log('CLICKED')}>Click ME</button> */}
      </div>
      {/* <Button name={'general'} buttonStyle={'success'} handleClick={general} /> */}
      <div className='row'>
        <div className='col-9 mt2'>
          <PostCardContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
// inline styled

/**
 const handleEdit=()=>{
   console.log('edit')
 }

 Un componente no debe manejar logica y vista

 *
 */