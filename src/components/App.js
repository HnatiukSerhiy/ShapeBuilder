import DrawForm from './DrawShapeForm';
import ShapeBoard from './ShapeBoard';
import '../css/App.css';

function App() {
  return (
    <div className='app'>
      <h1>ShapeBuilder</h1>
      <DrawForm />
      <ShapeBoard />
    </div>
  );
}

export default App;
