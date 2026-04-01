//this file is a server side component by default
//runs on the server to generate the initial HTML for the browser

const learningTopics = [
    "What's a server Component?",
    "What's a Client Component?",
    "How do they work together?",
];

export default function ThingsToLearnPage() {
    // console.log runs in your TERMINAL, not the browser console
    // proves the component was executed on the server!
    // server component; can't use hooks (hooks depend on client interaction)
    console.log("Rendering the static toping list on the SERVER...");

    //here's the jsx (lets you write html-like code in javascript)
    return (
        <div className="p=5 font-sans">
            <h1 className="test-2xl font-bold mb-4">Things to Learn</h1>
            <p className="mb-4">
                This list was pre-rendered into HTML on the server.
            </p>

            {/* The simplified list styling is here */}
            <ul className="pl-5">

                {/* javascript expression */}
                {learningTopics.map((topic) => (
                    <li key={topic} className="my-2">
                        {topic}
                    </li>
                ))}
            </ul>
        </div>
    );
}