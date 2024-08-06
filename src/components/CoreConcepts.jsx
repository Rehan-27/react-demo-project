import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data-with-examples"
import Section from "./Secttion"
export default function CoreConcepts() {
    return (
        <Section title="Core Concepts" id="core-concepts">
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem} />)}
            </ul>
        </Section>
    )
}