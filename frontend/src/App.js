import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { submitPipeline } from './submit';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <PipelineToolbar />
      <PipelineUI />

      <button
        onClick={submitPipeline}
        style={{
          marginTop: 20,
          padding: '10px 20px',
          background: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
        }}
      >
        Submit Pipeline
      </button>
    </div>
  );
}

export default App;