import '../App.css';

export default function InstructionsForm({ setInstructionsForm, instructionsForm, handleSubmit }) {
 

 

  return (
    <section className='order'>
      <form onSubmit={handleSubmit}><hr />
        <input value={instructionsForm} onChange={e => setInstructionsForm(e.target.value)} /><hr />
        <button className='button'>Order Now!</button>
      </form>
    </section>
  );
}