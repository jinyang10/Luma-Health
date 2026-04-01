//this is a server component

//import Client Component
import HintButton from "./HintButton";

//the list of topics and their hints lives on the server
// array of objects
// objects = key:value pairs
// could be getting this data (array) from a database
const learningTopics = [
    {
        id: 1,
        text: "What is a Server Component?",
        hint: "It runs on the server!",
    }, 
    {
        id: 2,
        text: "what is a Client Component?",
        hint: "It runs in the browser!",

    },
    {
        id: 3,
        text: "How do they work together?",
        hint: "You import client components into server ones",
    },

];

export default function ThingsToLearnPage() {
    console.log("Rendering the static topic list on the SERVER...");

    return (
        <div className="p-5 font-sans">
            <h1>Things to Learn</h1>
            <p>
                This list was pre-rendered on the server. The buttons are interactive
                on the client. 
            </p>
            <ul className="pl-5">
                {learningTopics.map((topic) => (
                    <li key={topic.id} className="my-4">
                        <span>{topic.text}</span>
                        {/* calling the HintButton client component */}
                        {/* passing a prop topic.hint to it */}
                        <HintButton hintText={topic.hint} />
                    </li>
                ))}
            </ul>
        </div>
    );
}