import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import TabButton from './components/TabButton.jsx';

function App() {
  const[selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  console.log('APP COMPONENT EXECUTING');
  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>core concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptIteam) => (
         <CoreConcept key={conceptIteam.title} {...conceptIteam} />
          ))}
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
        <menu>
          <TabButton isSelected={selectedTopic=== 'components'} onSelect={() => handleSelect('components')}>
             components
             </TabButton>
          <TabButton isSelected={selectedTopic=== 'JSX'} onSelect={() => handleSelect('JSX')} >JSX</TabButton>
          <TabButton isSelected={selectedTopic=== 'props'} onSelect={() => handleSelect('props')}>props</TabButton>
          <TabButton isSelected={selectedTopic=== 'state'} onSelect={() => handleSelect('state')}>state</TabButton>
         </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;