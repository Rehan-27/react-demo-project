import TabButton from "./TabButton"
import { EXAMPLES } from "../data-with-examples"
import { useState } from 'react';
import Section from "./Secttion";
import Tabs from "./Tabs";

export default function Examples() {

    const [currentSelectedButton, changeSelectedButton] = useState();

    function handleSelect(selectedButton) {
        changeSelectedButton(selectedButton);
    }

    return (
        <Section id="examples">
            <Tabs 
            buttons={
                <>
                    <TabButton
                        isSelected={currentSelectedButton == 'components'}
                        onSelect={() => handleSelect('components')}>
                        Components
                    </TabButton>
                    <TabButton
                        isSelected={currentSelectedButton == 'jsx'}
                        onSelect={() => handleSelect('jsx')}>
                        Jsx
                    </TabButton>
                    <TabButton
                        isSelected={currentSelectedButton == 'props'}
                        onSelect={() => handleSelect('props')}>
                        Props
                    </TabButton>
                    <TabButton
                        isSelected={currentSelectedButton == 'state'}
                        onSelect={() => handleSelect('state')}>
                        State
                    </TabButton>
                </>
            }>
            </Tabs>
            {!currentSelectedButton && <p>Please select a topic</p>}
            {currentSelectedButton && (<div id="tab-content">
                <h3>{EXAMPLES[currentSelectedButton].title}</h3>
                <p>{EXAMPLES[currentSelectedButton].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[currentSelectedButton].code}
                    </code>
                </pre>
            </div>)}
        </Section>
    )
}